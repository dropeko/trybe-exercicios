const { expect } = require('chai');
const sinon = require('sinon');
const connection = require('../../../src/models/connection');
const { travelModel } = require('../../../src/models');

const {
  travelIdFromDB,
  travelIdFromModel,
travelFromDB,
travelFromModel,
travelWithWaypointsFromDB,
travelWithWaypointsFromModel,
travelByStatusFromModel,
travelByStatusFromDB,
} = require('../mocks/travel.mock');

describe('Realizando testes - TRAVEL MODEL:', function () {
  it('Recuperando travel por id sem waypoints com sucesso', async function () {
    sinon.stub(connection, 'execute').resolves([[travelFromDB]]);

    const inputData = 42;
    const travel = await travelModel.findById(inputData);

    expect(travel).to.be.an('object');
    expect(travel).to.be.deep.equal(travelFromModel);
  });

  it('Recuperando travel por id com waypoints com sucesso', async function () {
    sinon.stub(connection, 'execute').resolves([travelWithWaypointsFromDB]);

    const inputData = 1;
    const travel = await travelModel.findById(inputData);

    expect(travel).to.be.an('object');
    expect(travel).to.be.deep.equal(travelWithWaypointsFromModel);
  });

  it('Recuperando travel por status id com sucesso', async function () {
    sinon.stub(connection, 'execute').resolves([travelByStatusFromDB]);

    const WAITING_DRIVER = 1;
    const travels = await travelModel.findByStatus(WAITING_DRIVER);

    expect(travels).to.be.an('array');
    expect(travels).to.be.deep.equal(travelByStatusFromModel);
  });
});