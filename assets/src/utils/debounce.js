export default (fn, time = 200) => {
  let timeout;

  return function(...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => fn.apply(this, args), time);
  }
}
