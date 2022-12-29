const { expect } = require('chai');
const sinon = require('sinon');

const { Buyer } = require('../../../src/infra/models');
const Service = require('../../../src/services/buyer.service');
const { responseFindAllBuyerMock } = require('../../mocks/buyer.mocks');

describe('Rota "/buyer"', () => {
  before(() => {
    sinon.stub(Buyer, 'findAll').resolves(responseFindAllBuyerMock);
  });

  after(() => {
    Buyer.findAll.restore();
  });
  it('lista todos os compradores', async () => {
    const response = await Service.findAllBuyer();

    expect(response).length(1);
    expect(response).to.deep.equals(responseFindAllBuyerMock);
  });
});
