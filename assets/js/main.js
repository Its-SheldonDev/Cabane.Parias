document.addEventListener("DOMContentLoaded", function () {
    const themeToggle = document.getElementById("theme-toggle");
    const themeIcon = document.getElementById("theme-icon");
    const burgerMenuToggle = document.getElementById("burger-menu-toggle");
    const mobileMenu = document.getElementById("mobile-menu");
    const themeToggleMobile = document.getElementById("theme-toggle-mobile");
    const themeIconMobile = document.getElementById("theme-icon-mobile");

    // Vérifiez le thème stocké dans localStorage
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) {
        document.body.classList.add(storedTheme);
        if (storedTheme === "light-theme") {
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
    } else {
        // Définir le thème par défaut sur light
        document.body.classList.add("light-theme");
        themeIcon.src = "assets/img/svg/moon.svg";
        themeIcon.alt = "Moon icon";
        themeIconMobile.src = "assets/img/svg/moon.svg";
        themeIconMobile.alt = "Moon icon";
    }

    function updateElfsightColors() {
        const reviewContainers = document.querySelectorAll('.ReviewBackground__Container-sc-1djobrq-0.btmxSM.es-review-background-container');
        const headerContainers = document.querySelectorAll('.HeaderContainer__Inner-sc-1532ffp-0.gtiuwG.es-header-container.HeaderComponent__StyledHeader-sc-9lcg5s-0.eBSYMA');

        reviewContainers.forEach(container => {
            const reviewTexts = container.querySelectorAll(
                '.es-review-content-text, ' +
                '.ReviewTextControl__Control-sc-19bzetq-0.ffObMc.es-review-content-control.es-review-content-control-open.ReviewText__StyledTextControl-sc-t7690a-2.fOLOsK, ' +
                '.DateTime__Time-sc-13gi7wj-0.dXelQe.ReviewInfo__StyledDateTime-sc-1vrf9nk-4.gVYKGX.es-review-info-date, ' +
                '.ReviewAuthorName__AuthorName-sc-1le9t1d-1.bAAKYH.es-review-author-name, ' +
                '.Header__SourceInfo-sc-criq3t-1.cIVVcs.es-header-source-info, ' +
                '.HeaderContainer__Inner-sc-1532ffp-0.gtiuwG.es-header-container.HeaderComponent__StyledHeader-sc-9lcg5s-0.eBSYMA, ' +
                '.HeaderTitle__Text-sc-1nf903g-2.hiuJfK.es-header-title-text, ' +
                '.HeaderTotalReviews__Value-sc-14hjk3j-1.hkwplR.es-header-total-reviews-value, ' +
                '.HeaderTotalReviews__Text-sc-14hjk3j-2.cusKyc.es-header-total-reviews-text, ' +
                '.RatingValue__Container-sc-fl6036-0.grMzUy.es-rating-value'
            );
            reviewTexts.forEach(text => {
                if (document.body.classList.contains("light-theme")) {
                    text.style.color = "#000";
                } else {
                    text.style.color = "#fff";
                }
            });
            // Change background color based on theme
            if (document.body.classList.contains("dark-theme")) {
                container.style.backgroundColor = "#333"; // Gris pour le dark thème
            } else {
                container.style.backgroundColor = ""; // Réinitialiser la couleur en light thème
            }
        });

        headerContainers.forEach(header => {
            if (document.body.classList.contains("dark-theme")) {
                header.style.backgroundColor = "#292a2c"; // Gris pour le dark thème
            } else {
                header.style.backgroundColor = ""; // Réinitialiser la couleur en light thème
            }
        });

        // Masquer le lien ajouté par l'extension JS
        const elfsightLink = document.querySelector('a[href*="elfsight.com/google-reviews-widget"]');
        if (elfsightLink) {
            elfsightLink.style.display = "none";
        }
    }

    themeToggle.addEventListener("click", function () {
        document.body.classList.toggle("light-theme");
        document.body.classList.toggle("dark-theme");

        if (document.body.classList.contains("light-theme")) {
            themeIcon.src = "assets/img/svg/moon.svg";
            themeIcon.alt = "Moon icon";
            themeIconMobile.src = "assets/img/svg/moon.svg";
            themeIconMobile.alt = "Moon icon";
            localStorage.setItem("theme", "light-theme");
        } else {
            themeIcon.src = "assets/img/svg/sun.svg";
            themeIcon.alt = "Sun icon";
            themeIconMobile.src = "assets/img/svg/sun.svg";
            themeIconMobile.alt = "Sun icon";
            localStorage.setItem("theme", "dark-theme");
        }

        // Force update elfsight widget colors
        updateElfsightColors();
    });

    themeToggleMobile.addEventListener("click", function () {
        document.body.classList.toggle("light-theme");
        document.body.classList.toggle("dark-theme");

        if (document.body.classList.contains("light-theme")) {
            themeIcon.src = "assets/img/svg/moon.svg";
            themeIcon.alt = "Moon icon";
            themeIconMobile.src = "assets/img/svg/moon.svg";
            themeIconMobile.alt = "Moon icon";
            localStorage.setItem("theme", "light-theme");
        } else {
            themeIcon.src = "assets/img/svg/sun.svg";
            themeIcon.alt = "Sun icon";
            themeIconMobile.src = "assets/img/svg/sun.svg";
            themeIconMobile.alt = "Sun icon";
            localStorage.setItem("theme", "dark-theme");
        }

        // Force update elfsight widget colors
        updateElfsightColors();
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

    // Initial update of elfsight colors and hide link
    updateElfsightColors();
});
