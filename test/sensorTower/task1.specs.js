import {expect} from 'chai';
import {solution} from "../../src/sensorTower/task1";

describe('task1 tests', () => {
  it('[4, 6, 2, 2, 6, 6, 1]', () => {
    const result = solution([4, 6, 2, 2, 6, 6, 1])
    expect(result).to.eql(4);
  });

  it('true [4, 6]', () => {
    const result = solution([4, 6])
    expect(result).to.eql(0);
  });

  it('true [4, 6, 5]', () => {
    const result = solution([4, 2, 2, 2, 4, 5,5,5,5,5, 4,4])
    expect(result).to.eql(0);
  });

  it('true 1 1', () => {
    const result = solution([1, 1])
    expect(result).to.eql(1);
  });

  it('true 1', () => {
    const result = solution([1])
    expect(result).to.eql(0);
  });

  it('true [1, 1, 1]', () => {
    const result = solution([1, 1, 1])
    expect(result).to.eql(2);
  });

  it('true [1, 1, 1, 1]', () => {
    const result = solution([1, 1, 1, 1])
    expect(result).to.eql(3);
  });

  // it('true', () => {
  //
  //   let largeArray = [];
  //
  //   for (let i = 0; i <= 50000; i++) {
  //     largeArray.push(2);
  //   }
  //
  //   const result = solution(largeArray)
  //   expect(result).to.eql(50000);
  // });

  // it('true', () => {
  //
  //   let largeArray = [];
  //
  //   for (let i = 0; i <= 50000; i++) {
  //     largeArray.push(2);
  //   }
  //
  //   const result = solution(largeArray)
  //   expect(result).to.eql(50000);
  // });

});
