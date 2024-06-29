document.addEventListener("DOMContentLoaded", function () {
    const themeToggle = document.getElementById("theme-toggle");
    const themeIcon = document.getElementById("theme-icon");

    // Set the default theme to light
    document.body.classList.add("light-theme");
    themeIcon.src = "assets/img/svg/moon.svg";
    themeIcon.alt = "Moon icon";

    themeToggle.addEventListener("click", function () {
        document.body.classList.toggle("light-theme");

        if (document.body.classList.contains("light-theme")) {
            themeIcon.src = "assets/img/svg/moon.svg";
            themeIcon.alt = "Moon icon";
        } else {
            themeIcon.src = "assets/img/svg/sun.svg";
            themeIcon.alt = "Sun icon";
        }
    });
});
