var link = document.querySelector(".button-write");

var popup = document.querySelector(".modal-message");

var close = document.querySelector(".close");

var map = document.querySelector(".map");

var maplarge = document.querySelector(".modal-map");

var closemap = document.querySelector(".close-map");

var slideone = document.querySelector(".delivery");

var slidetwo = document.querySelector(".garanty");

var slidethree = document.querySelector(".credit");

var buttondelivery = document.querySelector(".service-button-delivery");

var buttongaranty = document.querySelector(".service-button-garanty");

var buttoncredit = document.querySelector(".service-button-credit");


link.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.add("modal-show");
});

close.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.remove("modal-show");
});

closemap.addEventListener("click", function (evt) {
    evt.preventDefault();
    maplarge.classList.remove("modal-show");
});

map.addEventListener("click", function (evt) {
    evt.preventDefault();
    maplarge.classList.add("modal-show");
});

buttondelivery.addEventListener("click", function (evt) {
    evt.preventDefault();
    slideone.classList.add("modal-show");
    slidetwo.classList.remove("modal-show");
    slidethree.classList.remove("modal-show");
    buttondelivery.classList.add("service-button-active");
    buttongaranty.classList.remove("service-button-active");
    buttoncredit.classList.remove("service-button-active");
});

buttongaranty.addEventListener("click", function (evt) {
    evt.preventDefault();
    slidetwo.classList.add("modal-show");
    slideone.classList.remove("modal-show");
    slidethree.classList.remove("modal-show");
    buttongaranty.classList.add("service-button-active");
    buttondelivery.classList.remove("service-button-active");
    buttoncredit.classList.remove("service-button-active");
});

buttoncredit.addEventListener("click", function (evt) {
    evt.preventDefault();
    slidethree.classList.add("modal-show");
    slidetwo.classList.remove("modal-show");
    slideone.classList.remove("modal-show");
    buttoncredit.classList.add("service-button-active");
    buttondelivery.classList.remove("service-button-active");
    buttongaranty.classList.remove("service-button-active");
});

var basket = document.querySelector(".modal-basket");

var closebasket = document.querySelector(".close-basket");

var buy = document.querySelectorAll(".buy");

var bookmark = document.querySelectorAll(".bookmark");

var markButton = document.querySelector(".button-marks");

var cart = document.querySelector(".button-basket");

if (buy) {
    [].forEach.call(buy, function (entry) {
        entry.onclick = function (evt) {
            evt.preventDefault();
            basket.classList.add("modal-show");
            cart.classList.add("product-add");
        };
    });
}

if (bookmark) {
    [].forEach.call(bookmark, function (entry) {
        entry.onclick = function (evt) {
            evt.preventDefault();
            markButton.classList.add("product-add");
           
        };
    });
}

closebasket.addEventListener("click", function (evt) {
    evt.preventDefault();
    basket.classList.remove("modal-show");
});