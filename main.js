window.addEventListener('load', () => {
  const timeNodes = [...document.querySelectorAll('[data-time]')];
  const seconds = timeNodes
    .map((node) => {
      return node.dataset.time;
    })
    .map((timeCode) => {
      const [min, secs] = timeCode.split(':').map((parse) => parseFloat(parse));
      return min * 60 + secs;
    })
    .reduce((total, secods) => {
      return (total += secods);
    });
  let secondsLeft = seconds;
  const hours = Math.floor(secondsLeft / 3600);
  secondsLeft = secondsLeft % 3600;

  const minutes = Math.floor(secondsLeft / 60);
  secondsLeft = secondsLeft % 60;

  console.log(hours, minutes, secondsLeft);
});
