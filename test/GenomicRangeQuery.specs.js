import {expect} from 'chai';
import {solution} from "../src/GenomicRangeQuery";

describe('GenomicRangeQuery tests', () => {
  it('true', () => {
    const result = solution('CAGCCTA',[2,5,0], [4,5,6])
    expect(result).to.eql([2, 4, 1]);
  });

});
