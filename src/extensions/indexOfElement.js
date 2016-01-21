export default function indexOfElement(elements, element) {
  for (let i = 0, l = elements.length; i < l; i++) {
    if (elements[i] === element) {
      return i;
    }
  }

  return -1;
}
