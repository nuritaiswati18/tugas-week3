const chai = require('chai');
const expect = chai.expect;
const api = require('../api/fazztrackApi');
const createUserScenario = require('../scenarios/search-user');
const jsonSchemaGetId = require('../schemas/search-user-by-id-schema.json');

const requestBodyPut = require('../data/update-user-positive.json');
const requestBodyPost = require('../data/create-user.json');

//declare chai-depedency
chai.use(require('chai-like'));
chai.use(require('chai-things'));
chai.use(require('chai-json-schema'));

describe(`${createUserScenario.searchByIdUserScenario.description}`, async () => {
  it(`${createUserScenario.searchByIdUserScenario.positive.case1}`, async () => {
    const id = "3d9f72e4-94dc-47ee-ade7-4b8315939139";
    let responApi = await api.getUserById(id);
    expect(responApi.statusCode).to.equal(200);
    expect(responApi.body.id).to.equal(id);
    expect(responApi.body).has.jsonSchema(jsonSchemaGetId);
  })

  it(`${createUserScenario.searchByIdUserScenario.negative.case1}`, async () => {
    const Id = "null";
    let responApi = await api.getUserById(Id);
    expect(responApi.body.errorCode).to.equal("ER-01");
    expect(responApi.body.statusCode).to.equal(404);
    expect(responApi.body.message).to.equal('user not found');
  })
})