export default function indexOfElement(elements, element) {
	for (var i = 0, l = elements.length; i < l; i++) {
		if (elements[i] === element) return i;
	}

	return -1;
}
