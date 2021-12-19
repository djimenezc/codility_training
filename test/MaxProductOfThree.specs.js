import {expect} from 'chai';
import {solution} from "../src/MaxProductOfThree";

describe('MaxProductOfThree tests', () => {
  it('true', () => {
    const result = solution([-3, 1, 2, -2, 5, 6])
    expect(result).to.eql(60);
  });
  it('true', () => {
    const result = solution([-3, 1, 4])
    expect(result).to.eql(-12);
  });

});
