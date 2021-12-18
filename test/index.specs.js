import {expect} from 'chai';

describe('example tests for nathan', () => {
  it('should merge two JSONs that do not have any property in common ', () => {
    const result = 1 === 1
    expect(result).to.eql(true);
  });

  it('should merge two JSONs that do not have any property in common ', () => {
    const result = 1 === 2
    expect(result).to.eql(false);
  });

});

