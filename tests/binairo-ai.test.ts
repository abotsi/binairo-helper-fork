import { computeNextMove } from '../src/binairo-ai'

describe('apply rule 1', () => {
  it('should set a "1" at the left of two adjacent "0"', () => {
    // prettier-ignore
    const oldGrid = [2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2]
    // prettier-ignore
    const targted = [2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2]
    const newGrid = computeNextMove(oldGrid)
    expect(newGrid).toEqual(targted)
  })
  it('should set a "1" at the right of two adjacent "0"', () => {
    expect(true).toBe(false)
  })
  it('should set a "1" above two adjacent "0"', () => {
    expect(true).toBe(false)
  })
  it('should set a "1" under two adjacent "0"', () => {
    expect(true).toBe(false)
  })
  it('should set a "0" next to two adjacent "1"', () => {
    expect(true).toBe(false)
  })
})
