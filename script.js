const button = document.getElementById('generate');
const shuffler = document.getElementById('shuffler');
const betting = document.getElementById('betting');
button.addEventListener("click", () => {
  let game = draw(shuffler.value);
  game.init();
  game.pickNumbers();
  betting.innerText = game.pickeds.join(' - ');
});