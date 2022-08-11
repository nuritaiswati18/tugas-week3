const chai = require('chai');
const expect = chai.expect;
const api = require('../api/fazztrackApi');
const createUserScenario= require('../scenarios/update-user');
const jsonSchemaPUT = require('../schemas/update-user-schema.json');

const requestBodyPut = require('../data/update-user-positive.json');
const requestBodyPost = require('../data/create-user.json');


//declare chai-depedency
chai.use(require('chai-like'));
chai.use(require('chai-things'));
chai.use(require('chai-json-schema'));

describe(`${createUserScenario.updateUserScenario.description}`, async () => {
  
  it(`${createUserScenario.updateUserScenario.positive.case1}`, async () => {
    let responseApi = await api.putUser(requestBodyPut);
    expect(responseApi.statusCode).to.equal(200);
    expect(responseApi.request._data.occupation).to.equal(requestBodyPut.occupation);
    expect(responseApi.request._data.nationality).to.equal(requestBodyPut.nationality);
    expect(responseApi.body).has.jsonSchema(jsonSchemaPUT);
  })
})