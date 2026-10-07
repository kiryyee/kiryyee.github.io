const themeButton = document.querySelector("#theme-toggle");

const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {
    document.body.classList.add("dark-theme");
    themeButton.textContent = "Light Theme";
}

themeButton.addEventListener("click", function () {
    const darkModeEnabled = document.body.classList.toggle("dark-theme");

    if (darkModeEnabled) {
        localStorage.setItem("theme", "dark");
        themeButton.textContent = "Light Theme";
    } else {
        localStorage.setItem("theme", "light");
        themeButton.textContent = "Dark Theme";
    }
});

const year = document.querySelector("#year");
year.textContent = new Date().getFullYear();

const enterButton = document.getElementById("enter-button");
const welcomeScreen = document.getElementById("welcome-screen");
const backgroundVideo = document.getElementById("background-video");

welcomeScreen.addEventListener("click", () => {
  backgroundVideo.currentTime = 0;
  backgroundVideo.muted = false;
  backgroundVideo.volume = 0.25;
  backgroundVideo.play();

  document.body.classList.add("entered");
  welcomeScreen.classList.add("is-hidden");
});

const soundButton = document.getElementById("sound-button");
const volumeSlider = document.getElementById("volume-slider");

soundButton.addEventListener("click", () => {
  backgroundVideo.muted = !backgroundVideo.muted;

  if (!backgroundVideo.muted && backgroundVideo.volume === 0) {
    backgroundVideo.volume = 0.25;
    volumeSlider.value = "0.25";
  }

  soundButton.classList.toggle(
  "is-muted",
  backgroundVideo.muted || backgroundVideo.volume === 0
);
});

volumeSlider.addEventListener("input", () => {
  backgroundVideo.volume = Number(volumeSlider.value);
  backgroundVideo.muted = backgroundVideo.volume === 0;
  soundButton.classList.toggle(
  "is-muted",
  backgroundVideo.muted || backgroundVideo.volume === 0
);
});