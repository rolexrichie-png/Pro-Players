// ==========================================
// PRO PLAYERS - MAIN JAVASCRIPT
// ==========================================


// ==========================================
// MOBILE MENU
// ==========================================

function toggleMenu() {

    const nav = document.querySelector(".navbar nav");

    if (nav) {
        nav.classList.toggle("active");
    }

}


const navLinks = document.querySelectorAll(".navbar nav a");

navLinks.forEach(link => {

    link.addEventListener("click", () => {

        const nav = document.querySelector(".navbar nav");

        if (nav) {
            nav.classList.remove("active");
        }

    });

});


// ==========================================
// GAME SEARCH
// ==========================================

function searchGames() {

    const searchInput =
        document.getElementById("gameSearch");

    if (!searchInput) {
        return;
    }

    const searchText =
        searchInput.value.toLowerCase().trim();

    const gameCards =
        document.querySelectorAll(".game-card");

    gameCards.forEach(card => {

        const title =
            card.querySelector("h3");

        const description =
            card.querySelector("p");

        const category =
            card.querySelector("span");

        const gameName =
            title ? title.textContent.toLowerCase() : "";

        const gameDescription =
            description ?
            description.textContent.toLowerCase() : "";

        const gameCategory =
            category ?
            category.textContent.toLowerCase() : "";

        if (
            gameName.includes(searchText) ||
            gameDescription.includes(searchText) ||
            gameCategory.includes(searchText)
        ) {

            card.style.display = "block";

        } else {

            card.style.display = "none";

        }

    });

}


// ==========================================
// GAME BUTTON
// ==========================================

function showMessage(game) {

    alert(
        game +
        " page is coming soon! 🎮\n\n" +
        "Pro Players will soon have detailed guides, " +
        "news, updates and tips for " +
        game +
        "."
    );

}


// ==========================================
// NEWS ARTICLES
// ==========================================

function showArticle(event) {

    event.preventDefault();

    alert(
        "Gaming article coming soon! 📰\n\n" +
        "Pro Players will soon have real gaming news, " +
        "updates and articles."
    );

}


// ==========================================
// NEWSLETTER
// ==========================================

function subscribe(event) {

    event.preventDefault();

    const emailInput =
        document.getElementById("email");

    const message =
        document.getElementById("subscribeMessage");

    if (!emailInput) {
        return;
    }

    const email =
        emailInput.value.trim();

    if (email === "") {

        if (message) {
            message.textContent =
                "Please enter your email.";
        }

        return;
    }

    if (message) {

        message.textContent =
            "Thanks for subscribing! 🎮";

        message.style.color = "#32ff72";
    }

    emailInput.value = "";

}


// ==========================================
// STAGE 3 - PLAYER ACCOUNT
// ==========================================


// Get saved player information

const savedUsername =
    localStorage.getItem("proPlayersUsername");

const savedEmail =
    localStorage.getItem("proPlayersEmail");


// ==========================================
// SHOW USERNAME ON DASHBOARD
// ==========================================

const dashboardUsername =
    document.getElementById("username");

if (dashboardUsername && savedUsername) {

    dashboardUsername.textContent =
        savedUsername;

}


// ==========================================
// SHOW USERNAME ON PROFILE
// ==========================================

const profileUsername =
    document.getElementById("profileUsername");

if (profileUsername && savedUsername) {

    profileUsername.textContent =
        savedUsername;

}


// ==========================================
// SHOW EMAIL ON PROFILE
// ==========================================

const profileEmail =
    document.getElementById("profileEmail");

if (profileEmail && savedEmail) {

    profileEmail.textContent =
        savedEmail;

}


// ==========================================
// PROFILE HEADER USERNAME
// ==========================================

const profileHeaderUsername =
    document.getElementById("username");

if (
    profileHeaderUsername &&
    savedUsername
) {

    profileHeaderUsername.textContent =
        savedUsername;

}


// ==========================================
// LOGOUT
// ==========================================

function logout() {

    localStorage.removeItem(
        "proPlayersUsername"
    );

    localStorage.removeItem(
        "proPlayersEmail"
    );

    window.location.href =
        "login.html";

}


// ==========================================
// LOGIN PROTECTION
// ==========================================

function requireLogin() {

    const username =
        localStorage.getItem(
            "proPlayersUsername"
        );

    const email =
        localStorage.getItem(
            "proPlayersEmail"
        );

    if (!username || !email) {

        window.location.href =
            "login.html";

    }

}


// ==========================================
// DASHBOARD LOGIN CHECK
// ==========================================

if (
    window.location.pathname.includes(
        "dashboard.html"
    )
) {

    requireLogin();

}


// ==========================================
// PROFILE LOGIN CHECK
// ==========================================

if (
    window.location.pathname.includes(
        "profile.html"
    )
) {

    requireLogin();

}


// ==========================================
// END OF SCRIPT
// ==========================================            return;
        }

        message.textContent =
            "Account created successfully! Check your email if verification is required.";

        signupForm.reset();

    });

}
);
// ================================
// PRO PLAYERS - STAGE 1 JAVASCRIPT
// ================================


// ================================
// MOBILE MENU
// ================================

function toggleMenu() {
    const nav = document.querySelector(".navbar nav");

    if (nav) {
        nav.classList.toggle("active");
    }
}


// Close mobile menu when a link is clicked

const navLinks = document.querySelectorAll(".navbar nav a");

navLinks.forEach(link => {

    link.addEventListener("click", () => {

        const nav = document.querySelector(".navbar nav");

        if (nav) {
            nav.classList.remove("active");
        }

    });

});


// ================================
// GAME SEARCH
// ================================

function searchGames() {

    const searchInput = document.getElementById("gameSearch");

    if (!searchInput) {
        return;
    }

    const searchText = searchInput.value
        .toLowerCase()
        .trim();

    const gameCards = document.querySelectorAll(".game-card");

    gameCards.forEach(card => {

        const gameName = card
            .querySelector("h3")
            .textContent
            .toLowerCase();

        const gameDescription = card
            .querySelector("p")
            .textContent
            .toLowerCase();

        const gameCategory = card
            .querySelector("span")
            .textContent
            .toLowerCase();

        if (
            gameName.includes(searchText) ||
            gameDescription.includes(searchText) ||
            gameCategory.includes(searchText)
        ) {

            card.style.display = "block";

        } else {

            card.style.display = "none";

        }

    });

}


// ================================
// GAME BUTTON
// ================================

function showMessage(game) {

    alert(
        game +
        " page is coming soon! 🎮\n\n" +
        "Pro Players will soon have detailed guides, news, updates and tips for " +
        game +
        "."
    );

}


// ================================
// NEWS ARTICLES
// ================================

function showArticle(event) {

    event.preventDefault();

    alert(
        "Gaming article coming soon! 📰\n\n" +
        "Pro Players will soon have real gaming news, updates and articles."
    );

}


// ================================
// NEWSLETTER
// ================================

function subscribe(event) {

    event.preventDefault();

    const emailInput = document.getElementById("email");

    if (!emailInput) {
        return;
    }

    const email =
