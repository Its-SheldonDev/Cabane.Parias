document.addEventListener("DOMContentLoaded", function () {
    const themeToggle = document.getElementById("theme-toggle");
    const themeIcon = document.getElementById("theme-icon");
    const burgerMenuToggle = document.getElementById("burger-menu-toggle");
    const mobileMenu = document.getElementById("mobile-menu");
    const themeToggleMobile = document.getElementById("theme-toggle-mobile");
    const themeIconMobile = document.getElementById("theme-icon-mobile");

    // Set the default theme to light
    document.body.classList.add("light-theme");
    themeIcon.src = "assets/img/svg/moon.svg";
    themeIcon.alt = "Moon icon";
    themeIconMobile.src = "assets/img/svg/moon.svg";
    themeIconMobile.alt = "Moon icon";

    themeToggle.addEventListener("click", function () {
        document.body.classList.toggle("light-theme");

        if (document.body.classList.contains("light-theme")) {
            themeIcon.src = "assets/img/svg/moon.svg";
            themeIcon.alt = "Moon icon";
            themeIconMobile.src = "assets/img/svg/moon.svg";
            themeIconMobile.alt = "Moon icon";
        } else {
            themeIcon.src = "assets/img/svg/sun.svg";
            themeIcon.alt = "Sun icon";
            themeIconMobile.src = "assets/img/svg/sun.svg";
            themeIconMobile.alt = "Sun icon";
        }
    });

    themeToggleMobile.addEventListener("click", function () {
        document.body.classList.toggle("light-theme");

        if (document.body.classList.contains("light-theme")) {
            themeIcon.src = "assets/img/svg/moon.svg";
            themeIcon.alt = "Moon icon";
            themeIconMobile.src = "assets/img/svg/moon.svg";
            themeIconMobile.alt = "Moon icon";
        } else {
            themeIcon.src = "assets/img/svg/sun.svg";
            themeIcon.alt = "Sun icon";
            themeIconMobile.src = "assets/img/svg/sun.svg";
            themeIconMobile.alt = "Sun icon";
        }
    });

    burgerMenuToggle.addEventListener("click", function () {
        mobileMenu.classList.toggle("active");
    });

    // Initialize Glide.js
    new Glide('.glide', {
        type: 'carousel',
        startAt: 0,
        perView: 3,
        gap: 10,
        autoplay: 3000,
        hoverpause: true,
        breakpoints: {
            1024: {
                perView: 2
            },
            600: {
                perView: 1
            }
        }
    }).mount();
});
