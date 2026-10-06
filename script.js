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