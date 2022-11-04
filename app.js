console.log('Connected')

const modal = document.getElementById('catModal');

const button = document.getElementsByClassName('catButton');

const catSpan = document.getElementsByClassName('close')[0];

button.onclick = function() {
    modal.style.display = 'block';
}

catSpan.onclick = function() {
    modal.style.display = 'none';
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none"
    }
}