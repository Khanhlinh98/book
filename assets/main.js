var formSearch = document.querySelector(".form-search");
document.querySelector("#search-btn").onclick = () => {
  formSearch.classList.toggle("active");
};
let formLogin = document.querySelector(".form-login");
document.querySelector("#user-btn").onclick = () => {
  formLogin.classList.toggle("active");
};
document.querySelector("#close-btn-login").onclick = () => {
  formLogin.classList.remove("active");
};

window.onscroll = () => {
  formSearch.classList.remove("active");
  if (window.scrollY > 80) {
    document.querySelector(".header-2").classList.add("active");
  } else {
    document.querySelector(".header-2").classList.remove("active");
  }
};
window.onload = () => {
  if (window.scrollY > 80) {
    document.querySelector(".header-2").classList.add("active");
  } else {
    document.querySelector(".header-2").classList.remove("active");
  }
  fadeOut();
};

function loader() {
  document.querySelector(".loader").classList.add("active");
}
function fadeOut() {
  setTimeout(loader, 4000);
}
var swiper = new Swiper(".slider", {
  loop: true,
  centeredSlides: true,
  autoplay: {
    delay: 1500,
    disableOninteraction: false,
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 2,
    },
    1440: {
      slidesPerView: 3,
    },
  },
});

var swiper = new Swiper(".featured-slider", {
  loop: true,
  spaceBetween: 10,
  centeredSlides: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  autoplay: {
    delay: 9500,
    disableOninteraction: false,
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
    1440: {
      slidesPerView: 4,
    },
  },
});

var swiper = new Swiper(".arrival-slider", {
  loop: true,
  spaceBetween: 10,
  centeredSlides: true,

  autoplay: {
    delay: 9500,
    disableOninteraction: false,
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
    1440: {
      slidesPerView: 3,
    },
  },
});

var swiper = new Swiper(".review-slider", {
  loop: true,
  grabCursor: true,
  spaceBetween: 20,
  centeredSlides: true,

  autoplay: {
    delay: 1500,
    disableOninteraction: false,
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
    1440: {
      slidesPerView: 3,
    },
  },
});

var swiper = new Swiper(".blog-slider", {
  loop: true,
  grabCursor: true,
  spaceBetween: 10,
  centeredSlides: true,

  autoplay: {
    delay: 4500,
    disableOninteraction: false,
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
    1440: {
      slidesPerView: 3,
    },
  },
});
