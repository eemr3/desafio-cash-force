const { expect } = require('chai');
const sinon = require('sinon');

const { Provider } = require('../../../src/infra/models');
const Service = require('../../../src/services/provider.service');
const { responseFindByIdProviderMock } = require('../../mocks/provider.mocks');

describe('Rota "/provider"', () => {
  before(() => {
    sinon.stub(Provider, 'findOne').resolves(responseFindByIdProviderMock);
  });

  after(() => {
    Provider.findOne.restore();
  });
  it('lista todos os provedores', async () => {
    const response = await Service.findProviderById(1);

    expect(response).to.deep.equals(responseFindByIdProviderMock);
  });
});
