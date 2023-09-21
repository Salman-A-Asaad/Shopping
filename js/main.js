// Set the variable
let nav = document.querySelector("nav");
let bar = document.getElementById("bar");
let list = document.querySelector("nav .container .list");
let imgFeatured = document.querySelector(".watch .img img");
let links = document.querySelectorAll("nav .container .list li a");
let home = document.getElementById("home");
let arrival = document.getElementById("arrival");
let featured = document.getElementById("featured");
let gallery = document.getElementById("gallery");
let deal = document.getElementById("deal");
let checked = Array.from(document.querySelectorAll(".gallery .search p"));
let itemOfGallery = Array.from(
    document.querySelectorAll(".gallery .container .item ")
);
let watches = Array.from(
    document.querySelectorAll(".watches span")
);
// Set the function
// Add event click to the bar to run the function that show the list of links
bar.onclick = () => {
        list.classList.toggle("show")
    }
    // Function to change the image depending on the image clicked 
watches.forEach((e, index) => {
        e.onclick = () => {
            watches.forEach((element) => {
                element.classList.remove("active");
            });
            watches[index].classList.add("active");
            imgFeatured.src = `img/${index + 1}.png`;
        };
    })
    // Add click event with (chiked) function to every element in list checked of var
checked.forEach((element, index) => {
    element.onclick = function() {
        clicked(index);
    };
});
// Function to filter the gallery
function clicked(index) {
    checked.forEach((ele) => {
        ele.classList.remove("selected");

    })
    checked[index].classList.add("selected");
    if (index == 1) {
        itemOfGallery.forEach((element) => {
            if (element.dataset.prodect !== "pc")
                element.style.display = "none";
            else element.style.display = "flex";
        });
    } else if (index == 2) {
        itemOfGallery.forEach((element) => {
            if (element.dataset.prodect !== "phone")
                element.style.display = "none";
            else element.style.display = "flex";
        });
    } else if (index == 3) {
        itemOfGallery.forEach((element) => {
            if (element.dataset.prodect !== "head")
                element.style.display = "none";
            else element.style.display = "flex";
        });
    } else {
        itemOfGallery.forEach((element) => {
            element.style.display = "flex";
        });
    }
}
// Function to set slider
$(".row2").owlCarousel({
    items: 1,
    nav: true,
    dots: false,
    autoplay: true,
    autoplayTimeout: 8000
});
// Function to add class to nav to set it on top=0
function changeTopNav() {
    if (window.scrollY >= 60) {
        nav.classList.add("change");
    } else {
        nav.classList.remove("change");
    }

}
// Function to active the link for the same section
function changeLinkOfList() {
    if (window.scrollY >= home.offsetTop) {
        links.forEach((ele) => {
            ele.classList.remove("active-link");
        });
        links[0].classList.add("active-link");
    }
    if (window.scrollY >= arrival.offsetTop - 100) {
        links.forEach((ele) => {
            ele.classList.remove("active-link");
        });
        links[1].classList.add("active-link");
    }
    if (window.scrollY >= featured.offsetTop - 100) {
        links.forEach((ele) => {
            ele.classList.remove("active-link");
        });
        links[2].classList.add("active-link");
    }
    if (window.scrollY >= gallery.offsetTop - 100) {
        links.forEach((ele) => {
            ele.classList.remove("active-link");
        });
        links[3].classList.add("active-link");
    }
    if (window.scrollY >= deal.offsetTop - 150) {
        links.forEach((ele) => {
            ele.classList.remove("active-link");
        });
        links[4].classList.add("active-link");
    }
}
// Set events
window.addEventListener("scroll", () => {
    changeTopNav();
    changeLinkOfList();
});