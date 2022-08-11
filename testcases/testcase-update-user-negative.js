const chai = require('chai');
const expect = chai.expect;
const api = require('../api/fazztrackApi');
const createUserScenario= require('../scenarios/update-user');
const jsonSchemaPUT = require('../schemas/update-user-schema.json');

const requestBodyPut = require('../data/update-user-negative.json');
const requestBodyPost = require('../data/create-user.json');


//declare chai-depedency
chai.use(require('chai-like'));
chai.use(require('chai-things'));
chai.use(require('chai-json-schema'));

describe(`${createUserScenario.updateUserScenario.description}`, async () => {
  
  it(`${createUserScenario.updateUserScenario.negative.case1}`, async () => {
    let responseApi = await api.putUser(requestBodyPut);
    let err = "you must specify data for firstname, lastName, age, occupation, nationality, hobbies (at least 1), and gender"
    let errorCode = "ER-03";
    expect(responseApi._body.statusCode).to.equal(400);
    expect(responseApi.request._data.age).to.equal(0);
    expect(responseApi._body.message).to.equal(err);
    expect(responseApi._body.errorCode).to.equal(errorCode);
  })
  it(`${createUserScenario.updateUserScenario.negative.case2}`, async () => {
    let responseApi = await api.putUser(requestBodyPut);
    let err = 'you must specify data for firstname, lastName, age, occupation, nationality, hobbies (at least 1), and gender';
    let errorCode = "ER-03";
    expect(responseApi._body.statusCode).to.equal(400);
    expect(responseApi.request._data.hobbies.length).to.equal(0);
    expect(responseApi._body.message).to.be.equal(err);
    expect(responseApi._body.errorCode).to.equal(errorCode);
  })
  it(`${createUserScenario.updateUserScenario.negative.case3}`, async () => {
    let responseApi = await api.putUser(requestBodyPut);
    let err = "you must specify data for firstname, lastName, age, occupation, nationality, hobbies (at least 1), and gender";
    let errorCode = "ER-03";
    expect(responseApi._body.statusCode).to.equal(400);
    expect(responseApi.request._data.id).to.equal(null);
    expect(responseApi._body.message).to.be.equal(err);
    expect(responseApi._body.errorCode).to.equal(errorCode);
  })
})