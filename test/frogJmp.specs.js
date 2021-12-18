

import {expect} from 'chai';
import {solution, solutionOptimal} from "../src/frogJmp";

describe('jumps tests', () => {
  it('first case', () => {
    const result = solution(10, 85, 30)
    expect(result).to.eql(3);
  });

  it('with zeros', () => {
    const result = solution(0, 0, 0)
    expect(result).to.eql(0);
  });

});

describe('jumps optimal tests', () => {
  it('first case', () => {
    const result = solutionOptimal(10, 85, 30)
    expect(result).to.eql(3);
  });

  it('with zeros', () => {
    const result = solutionOptimal(0, 0, 0)
    expect(result).to.eql(0);
  });

});