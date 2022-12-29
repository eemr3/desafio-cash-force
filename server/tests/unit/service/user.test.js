const { expect } = require('chai');
const sinon = require('sinon');

const { User } = require('../../../src/infra/models');
const Service = require('../../../src/services/user.service');
const { responseFindAllUserMock } = require('../../mocks/user.mocks');

describe('Rota "/user"', () => {
  before(() => {
    sinon.stub(User, 'findAll').resolves(responseFindAllUserMock);
  });

  after(() => {
    User.findAll.restore();
  });
  it('lista todos os usuários', async () => {
    const response = await Service.findAllUsers();

    expect(response).length(1);
    expect(response).to.deep.equals(responseFindAllUserMock);
  });
});
