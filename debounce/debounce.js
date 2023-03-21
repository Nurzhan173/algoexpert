const debounce = (fn, ms) => {
  let timeout;
  return function () {
    console.log(this, arguments);
    const fnCall = () => { fn.apply(this, arguments) }
    clearTimeout(timeout);
    timeout = setTimeout(fnCall, ms);
  };
}

function onChange(e) {
  console.log(e.target.value);
}

onChange = debounce(onChange, 500);

const search = document.getElementById('search');
search.addEventListener('keyup', onChange);
