export const getRandomInt = (min: number, max: number) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export const getRandomUniqueElements = <T>(
  array: T[],
  numberOfElements: number
): T[] => {
  const shuffledArray = array.sort(() => Math.random() - 0.5);
  const uniqueElements = new Set<T>();

  for (const element of shuffledArray) {
    uniqueElements.add(element);
    if (uniqueElements.size === numberOfElements) {
      break;
    }
  }
  return Array.from(uniqueElements);
};
