const weddingDate = new Date("December 05, 2026 17:00:00").getTime();

setInterval(function() {
  const now = new Date().getTime();
  const distance = weddingDate - now;

  document.getElementById("days").innerHTML =
    Math.floor(distance / (1000 * 60 * 60 * 24));

  document.getElementById("hours").innerHTML =
    Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

  document.getElementById("minutes").innerHTML =
    Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

}, 1000);

function toggleMusic() {
  const music = document.getElementById("music");
  music.paused ? music.play() : music.pause();
}

function openEnvelope() {
  document.querySelector(".envelope").classList.toggle("open");
}

