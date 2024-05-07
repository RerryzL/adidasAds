
let aNavbar = document.querySelectorAll(".aNav");

aNavbar.forEach((element) => {
    element.addEventListener("click", () => {
        aNavbar.forEach((navItem) => {
            navItem.classList.remove("black");
        });
        element.classList.add("black");
        
        console.log("Clicked");
    });
});


// Function to check the current viewport height
function checkViewportHeight() {
    return window.innerHeight;
}

// Function to handle scrolling and apply styles to the navbar elements
function indicatorScroll() {
    let scrollPosition = window.scrollY;
    let navbarElements = document.querySelectorAll(".aNav");
    let aboutContainerHeight = document.querySelector(".about-container").scrollHeight;
    let priceContainerHeight = document.querySelector(".price-container").scrollHeight;
    let advantageContainerHeight = document.querySelector(".advantage-container").scrollHeight;
    let historyContainerHeight = document.querySelector(".history-container").scrollHeight;
    let interviewContainerHeight = document.querySelector(".interview-container").scrollHeight;

    if (scrollPosition >= 0 && scrollPosition < checkViewportHeight()) {
        navbarElements.forEach(navItem => {
            navItem.classList.remove("black");
        });
        document.querySelector(".a1").classList.add("black");
    } else if (scrollPosition >= aboutContainerHeight && scrollPosition < (aboutContainerHeight + checkViewportHeight())) {
        navbarElements.forEach(navItem => {
            navItem.classList.remove("black");
        });
        document.querySelector(".a2").classList.add("black");
    } else if (scrollPosition >= (aboutContainerHeight + priceContainerHeight) && scrollPosition < (aboutContainerHeight + priceContainerHeight + checkViewportHeight())) {
        navbarElements.forEach(navItem => {
            navItem.classList.remove("black");
        });
        document.querySelector(".a3").classList.add("black");
    } else if (scrollPosition >= (aboutContainerHeight + priceContainerHeight + advantageContainerHeight) && scrollPosition < (aboutContainerHeight + priceContainerHeight + advantageContainerHeight + checkViewportHeight())) {
        navbarElements.forEach(navItem => {
            navItem.classList.remove("black");
        });
        document.querySelector(".a4").classList.add("black");
    } else if (scrollPosition >= (aboutContainerHeight + priceContainerHeight + advantageContainerHeight + historyContainerHeight) && scrollPosition < (aboutContainerHeight + priceContainerHeight + advantageContainerHeight + historyContainerHeight + checkViewportHeight())) {
        navbarElements.forEach(navItem => {
            navItem.classList.remove("black");
        });
        document.querySelector(".a5").classList.add("black");
    } else if (scrollPosition >= (aboutContainerHeight + priceContainerHeight + advantageContainerHeight + historyContainerHeight + interviewContainerHeight) && scrollPosition < (aboutContainerHeight + priceContainerHeight + advantageContainerHeight + historyContainerHeight + interviewContainerHeight + checkViewportHeight())) {
        navbarElements.forEach(navItem => {
            navItem.classList.remove("black");
        });
        document.querySelector(".a6").classList.add("black"); // Added for .a6
    }
}

// Event listener for scrolling
window.addEventListener('scroll', indicatorScroll);

// Call the function once to initialize the styles based on the initial scroll position
indicatorScroll();









if(performance.navigation.type === 1){
    window.location.href ="/"
}
