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
