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

var sliderOne = document.querySelector(".slide-1");

var sliderTwo = document.querySelector(".slide-2");

var buttonLeft = document.querySelector(".slider-left-dir");

var buttonRight = document.querySelector(".slider-right-dir");

var radioLeft = document.querySelector(".first-slide-button");

var radioRight = document.querySelector(".second-slide-button");

if (buttonLeft) {
    buttonLeft.addEventListener("click", function (evt) {
    evt.preventDefault();
    sliderTwo.classList.remove("slide-show");
    sliderOne.classList.add("slide-show");
    radioLeft.classList.add("slide-active");
    radioRight.classList.remove("slide-active");
});
};

if (buttonRight) {
    buttonRight.addEventListener("click", function (evt) {
    evt.preventDefault();
    sliderOne.classList.remove("slide-show");
    sliderTwo.classList.add("slide-show");
    radioRight.classList.add("slide-active");
    radioLeft.classList.remove("slide-active");
});
};

if (radioLeft) {
    radioLeft.addEventListener("click", function (evt) {
    evt.preventDefault();
    sliderTwo.classList.remove("slide-show");
    sliderOne.classList.add("slide-show");
    radioRight.classList.remove("slide-active");
    radioLeft.classList.add("slide-active");
});
};

if (radioRight) {
    radioRight.addEventListener("click", function (evt) {
    evt.preventDefault();
    sliderOne.classList.remove("slide-show");
    sliderTwo.classList.add("slide-show");
    radioLeft.classList.remove("slide-active");
    radioRight.classList.add("slide-active");
});
};

if (link) {
    link.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.add("modal-show");
    if (storage) {
        login.value = storage;
        email.focus();
      } else {
    login.focus();
      }
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

var login= popup.querySelector("[name=fullname]");

var form = popup.querySelector("form");

var email = popup.querySelector("[name=email]");

var isStorageSupport = true;
  var storage = "";
  
  try {
    storage = localStorage.getItem("login");
  } catch (err) {
    isStorageSupport = false;
  }

if (form) {
form.addEventListener("submit", function (evt) {
    if (!login.value || !email.value){
    evt.preventDefault();
    console.log("Нужно ввести имя и e-mail");
    }
    else {
        if (isStorageSupport) {
        localStorage.setItem("login", login.value);
      }
    }
  });
};

window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      evt.preventDefault();
      if (popup.classList.contains("modal-show")) {
        popup.classList.remove("modal-show");
      }
    }
  });