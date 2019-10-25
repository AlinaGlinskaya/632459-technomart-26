var link = document.querySelector(".button-write");

var popup = document.querySelector(".modal-message");

var close = document.querySelector(".close");

var closeBasket = document.querySelector(".close-basket");

var map = document.querySelector(".map");

var mapLarge = document.querySelector(".modal-map");

var closeMap = document.querySelector(".close-map");

var slideOne = document.querySelector(".delivery");

var slideTwo = document.querySelector(".garanty");

var slideThree = document.querySelector(".credit");

var buttonDelivery = document.querySelector(".service-button-delivery");

var buttonGaranty = document.querySelector(".service-button-garanty");

var buttonCredit = document.querySelector(".service-button-credit");


if (link) {
    link.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.add("modal-show");
});
};

if (close) {
close.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.remove("modal-show");
});
};

if (closeMap) {
closeMap.addEventListener("click", function (evt) {
    evt.preventDefault();
    mapLarge.classList.remove("modal-show");
});
};

if (map) {
map.addEventListener("click", function (evt) {
    evt.preventDefault();
    mapLarge.classList.add("modal-show");
});
};

if (buttonDelivery && buttonGaranty && buttonCredit) {
buttonDelivery.addEventListener("click", function (evt) {
    evt.preventDefault();
    slideOne.classList.add("modal-show");
    slideTwo.classList.remove("modal-show");
    slideThree.classList.remove("modal-show");
    buttonDelivery.classList.add("service-button-active");
    buttonGaranty.classList.remove("service-button-active");
    buttonCredit.classList.remove("service-button-active");
});


buttonGaranty.addEventListener("click", function (evt) {
    evt.preventDefault();
    slideTwo.classList.add("modal-show");
    slideOne.classList.remove("modal-show");
    slideThree.classList.remove("modal-show");
    buttonGaranty.classList.add("service-button-active");
    buttonDelivery.classList.remove("service-button-active");
    buttonCredit.classList.remove("service-button-active");
});

buttonCredit.addEventListener("click", function (evt) {
    evt.preventDefault();
    slideThree.classList.add("modal-show");
    slideTwo.classList.remove("modal-show");
    slideOne.classList.remove("modal-show");
    buttonCredit.classList.add("service-button-active");
    buttonDelivery.classList.remove("service-button-active");
    buttonGaranty.classList.remove("service-button-active");
});
};

var basket = document.querySelector(".modal-basket");

var closeBasket = document.querySelector(".close-basket");

var buy = document.querySelectorAll(".buy");

var bookmark = document.querySelectorAll(".bookmark");

var markButton = document.querySelector(".button-marks");

var cart = document.querySelector(".button-basket");

if (buy) {
buy.forEach(function (buyButton) {
    buyButton.addEventListener('click', function (evt) {
    evt.preventDefault();
    basket.classList.add("modal-show");
    cart.classList.add("product-add");
    });
    })
    };

    if (bookmark) {
        bookmark.forEach(function (addMark) {
            addMark.addEventListener('click', function (evt) {
            evt.preventDefault();
            markButton.classList.add("product-add");       
            });
            })
            };


if (closeBasket) {
closeBasket.addEventListener("click", function (evt) {
    evt.preventDefault();
    basket.classList.remove("modal-show");
});
};