const counters = document.querySelectorAll('.counter');
let innerNumber = 0;

counters.forEach((counter) => {
  console.log(counter.dataset.target);
  const maxNumber = Number(counter.dataset.target);

  function updateNumber() {
    console.log(counter.dataset.target);
    let countRatio = Math.ceil(maxNumber / 100);
    let innerNumber = Number(counter.innerText);

    if (innerNumber < maxNumber) {
      counter.innerText = `${innerNumber + countRatio}`;
      setTimeout(updateNumber, 10);
    }
  }
  updateNumber();
});
