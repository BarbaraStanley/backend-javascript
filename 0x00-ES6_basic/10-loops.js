export default function appendToEachArrayValue(array, appendString) {
  const narray = [];
  for (const idx of array) {
    narray.push(appendString + idx);
  }

  return narray;
}
