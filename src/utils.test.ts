import { cloneUpdateAt } from './utils'

it('should update an array item in a functional way', () => {
  const base = ['a', 'a', 'a']
  const copy = cloneUpdateAt(base, 1, 'b')
  expect(copy).toEqual(['a', 'b', 'a'])
  expect(base).toEqual(['a', 'a', 'a'])
})
