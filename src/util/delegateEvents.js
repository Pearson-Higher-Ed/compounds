import indexOfElement from './indexOfElement';

export default function (el, evtName, selector, handler) {
  el.addEventListener(evtName, function(evt) {
    const matchesSelector = indexOfElement(el.querySelectorAll(selector), evt.target) > -1;
    if (matchesSelector) {
      handler(evt);
    }
  });
}
