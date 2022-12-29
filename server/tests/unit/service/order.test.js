const { expect } = require('chai');
const sinon = require('sinon');

const { Order } = require('../../../src/infra/models');
const Service = require('../../../src/services/order.service');
const { responseFindAllOrderMock } = require('../../mocks/order.mocks.js');

describe('Rota "/order"', () => {
  before(() => {
    sinon.stub(Order, 'findAll').resolves(responseFindAllOrderMock);
  });

  after(() => {
    Order.findAll.restore();
  });
  it('lista todos as ordens', async () => {
    const response = await Service.findAllOrders();

    expect(response).length(3);
    // expect(response).to.deep.equals(responseFindAllOrderMock);
  });
});
