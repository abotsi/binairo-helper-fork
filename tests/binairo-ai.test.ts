import { computeNextMove } from '../src/binairo-ai'

describe('apply rule 1', () => {
  describe('horizontally', () => {
    it('should set a "1" at the left of two adjacent "0"', () => {
      // prettier-ignore
      const oldGrid = [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2]
      // prettier-ignore
      const targted = [2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 0, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2]
      const newGrid = computeNextMove(oldGrid)
      expect(newGrid).toEqual(targted)
    })
    it('should set a "1" at the right of two adjacent "0"', () => {
      // prettier-ignore
      const oldGrid = [2, 2, 2, 2, 2, 2, 0, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2]
      // prettier-ignore
      const targted = [2, 2, 2, 2, 2, 2, 0, 0, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2]
      const newGrid = computeNextMove(oldGrid)
      expect(newGrid).toEqual(targted)
    })
    it('should set a "1" to both sides of two adjacent "0"', () => {
      // prettier-ignore
      const oldGrid = [2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2]
      // prettier-ignore
      const targted = [2, 2, 2, 2, 2, 2, 2, 1, 0, 0, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2]
      const newGrid = computeNextMove(oldGrid)
      expect(newGrid).toEqual(targted)
    })
  })

  describe('vertically', () => {
    it('should set a "1" above two adjacent "0"', () => {
      // prettier-ignore
      const oldGrid = [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 2, 2, 2, 2, 2, 0, 2]
      // prettier-ignore
      const targted = [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 0, 2, 2, 2, 2, 2, 0, 2]
      const newGrid = computeNextMove(oldGrid)
      expect(newGrid).toEqual(targted)
    })
    it('should set a "1" under two adjacent "0"', () => {
      // prettier-ignore
      const oldGrid = [0, 2, 2, 2, 2, 2, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2]
      // prettier-ignore
      const targted = [0, 2, 2, 2, 2, 2, 0, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2]
      const newGrid = computeNextMove(oldGrid)
      expect(newGrid).toEqual(targted)
    })
    it('should set a "0" next to two adjacent "1"', () => {
      // prettier-ignore
      const oldGrid = [2, 2, 2, 2, 2, 2, 0, 2, 2, 2, 2, 2, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2] // prettier-ignore
      // prettier-ignore
      const targted = [1, 2, 2, 2, 2, 2, 0, 2, 2, 2, 2, 2, 0, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2]
      const newGrid = computeNextMove(oldGrid)
      expect(newGrid).toEqual(targted)
    })
  })
})
