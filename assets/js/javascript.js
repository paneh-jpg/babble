document.addEventListener("DOMContentLoaded", () => {
  const myAudio = document.getElementById("myAudio");
  const playPauseBtn = document.getElementById("playPauseBtn");
  const waveform = document.getElementById("waveform");
  const totalBars = 15;

  let intervalId = null;
  let currentBarIndex = 0;

  const barData = [
    { height: 6, color: "#2C2937" },
    { height: 16, color: "#A4A0AB" },
    { height: 26, color: "#A4A0AB" },
    { height: 16, color: "#A4A0AB" },
    { height: 6, color: "#A4A0AB" },
    { height: 6, color: "#A4A0AB" },
    { height: 16, color: "#A4A0AB" },
    { height: 26, color: "#A4A0AB" },
    { height: 16, color: "#A4A0AB" },
    { height: 6, color: "#A4A0AB" },
    { height: 6, color: "#A4A0AB" },
    { height: 16, color: "#A4A0AB" },
    { height: 26, color: "#A4A0AB" },
    { height: 16, color: "#A4A0AB" },
    { height: 6, color: "#A4A0AB" },
  ];

  for (let i = 0; i < totalBars; i++) {
    const bar = document.createElement("div");
    bar.classList.add("wave-bar");
    bar.style.height = `${barData[i].height}px`;
    bar.style.backgroundColor = barData[i].color;
    waveform.appendChild(bar);
  }

  const waveBars = document.querySelectorAll(".wave-bar");

  const startColorWave = () => {
    if (intervalId) {
      clearInterval(intervalId);
    }

    intervalId = setInterval(() => {
      if (currentBarIndex >= totalBars) {
        currentBarIndex = 0;
        waveBars.forEach((bar) => {
          bar.style.backgroundColor = "#A4A0AB";
        });
      }

      waveBars[currentBarIndex].style.backgroundColor = "#201830";
      currentBarIndex++;
    }, 600);
  };

  const pauseColorWave = () => {
    if (intervalId) {
      clearInterval(intervalId);
      intervalId = null;
    }
  };

  playPauseBtn.addEventListener("click", () => {
    if (myAudio.paused) {
      myAudio.play();
      playPauseBtn.classList.remove("play");
      playPauseBtn.classList.add("stop");
      startColorWave();
    } else {
      myAudio.pause();
      playPauseBtn.classList.remove("stop");
      playPauseBtn.classList.add("play");
      pauseColorWave();
    }
  });

  myAudio.addEventListener("ended", () => {
    playPauseBtn.classList.remove("stop");
    playPauseBtn.classList.add("play");
    pauseColorWave();
  });
});
