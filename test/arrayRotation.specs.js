import {expect} from 'chai';
import {solution} from "../src/arrayRotation";

describe('array rotation tests', () => {
  it('rotate once', () => {
    const result = solution([3, 8, 9, 7, 6], 1)
    expect(result).to.eql([6, 3, 8, 9, 7]);
  });

  it('rotate array three times', () => {
    const result = solution([3, 8, 9, 7, 6], 3)
    expect(result).to.eql([9, 7, 6, 3, 8]);
  });

  it('rotate array of zeros', () => {
    const result = solution([0, 0, 0], 1)
    expect(result).to.eql([0, 0, 0]);
  });

  it('rotate array four times', () => {
    const result = solution([1, 2, 3, 4], 4)
    expect(result).to.eql([1, 2, 3, 4]);
  });

  it('rotate array four times', () => {
    const result = solution([-1, -2, 3, 4], 4)
    expect(result).to.eql([-1, -2, 3, 4]);
  });

  it('rotate empty array', () => {
    const result = solution([], 4)
    expect(result).to.eql([]);
  });

});