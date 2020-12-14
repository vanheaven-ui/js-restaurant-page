const helperModule = (() => {
  const createTag = (element, value = '') => {
    const elem = document.createElement(element);
    elem.innerHTML = value;
    return elem;
  };

  const wrapperDiv = () => document.getElementById('content');
  const appendTag = (parent, child) => {
    parent.appendChild(child);
  };
  return { createTag, wrapperDiv, appendTag };
})();

export default helperModule;