export function getRandomElementsFromArray(sourceArray, numElements) {
  const shuffledArray = sourceArray.sort(() => Math.random() - 0.5); // shuffle the source array randomly
  const resultArray = shuffledArray.slice(0, numElements); // select the first numElements from the shuffled array

  return resultArray;
}
