import {expect} from 'chai';
import {solution} from "../src/permutations";

describe('permutation tests', () => {
  it('true', () => {
    const result = solution([4,1,3,2])
    expect(result).to.eql(1);
  });

  it('false', () => {
    const result = solution([4,1,3])
    expect(result).to.eql(0);
  });

});
