import { expect } from 'chai';
import { max } from '../src/tools/min-max';

describe('basic function', function (): void {
  it('should return maximum by selector', function (): void {
    // arrange
    const input = [{ level: 1 }, { level: 2 }, { level: 0 }];

    // act
    const result = max(input, i => i.level);

    // assert
    expect(result).to.be.equal(2);
  });

  it('should return maximum', function (): void {
    // arrange
    const input = [1, 3, 2];

    // act
    const result = max(input);

    // assert
    expect(result).to.be.equal(3);
  });
});
