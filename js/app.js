console.log('connected');
//Cat Modal
//W3schools
const catModal = document.getElementById('catModal');
const catBtn = document.getElementById('catButton');
const span = document.getElementsByClassName('close')[0];

catBtn.onclick = function() {
  catModal.style.display = 'block';
}

span.onclick = function() {
  catModal.style.display = 'none';
}

window.onclick = function(event) {
  if (event.target == catModal) {
    catModal.style.display = 'none';
  }
}


//home link
const home = document.getElementById('homeLink');
homeAlert = () => {
  alert('You are at the home... Enjoy the button at the bottom though!');
}
home.addEventListener('click', homeAlert);