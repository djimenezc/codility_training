import {expect} from 'chai';
import {solution} from "../../src/sensorTower/task1";

describe('task1 tests', () => {
  it('true', () => {
    const result = solution([-3, 1, 2, -2, 5, 6])
    expect(result).to.eql(60);
  });

});
