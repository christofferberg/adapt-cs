/**
 * Returns random item from array
 * @param array
 * @returns {any}
 */
export const getRandomArrayItem = (array: any): any =>
  array[Math.floor(Math.random() * array.length)]
