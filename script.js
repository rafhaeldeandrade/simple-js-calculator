const input = document.querySelector('#number-input');

const btnListener = (e) => {
  if (e.target.classList.contains('erase')) input.value = input.value.substr(0, input.value.length - 1);
  if (e.target.classList.contains('clear')) input.value = '';
  if (e.target.classList.contains('point')) input.value += '.';
  if (e.target.classList.contains('number')) input.value += e.target.innerText;
  if (e.target.classList.contains('equal')
  && input.value.length > 0) input.value = eval(input.value);
}

const enterListener = (e) => {
  if (e.keyCode === 13 && input.value.length > 0) input.value = eval(input.value);
}

document.addEventListener('keyup', enterListener);
document.addEventListener('click', btnListener);
