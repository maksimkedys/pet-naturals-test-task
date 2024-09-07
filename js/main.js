// FIXED HEADER
const header = document.querySelector(".header");
window.addEventListener("scroll", () => {
  if (window.innerWidth < 500) {
    window.scrollY > 0
      ? header.classList.add("header--active")
      : header.classList.remove("header--active");
  }
});

// BURGER MENU
const burger = document.querySelector(".burger");
const menu = document.querySelector(".menu__list");

burger.addEventListener("click", function () {
  burger.classList.toggle("burger--active");
  menu.classList.toggle("menu__list--active");
});

// SMOOTH SCROLL
const scrollToSection = (e) => {
  e.preventDefault();
  const href = e.currentTarget.getAttribute("href");

  if (!href && !href.startsWith("#")) return;

  const section = href.slice(1);
  const top = document.getElementById(section)?.offsetTop - 100 || 0;
  window.scrollTo({ top, behavior: "smooth" });
};

const menuLinks = document.querySelectorAll(".menu__link");
const logo = document.querySelector(".logo");
menuLinks.forEach((link) => link.addEventListener("click", scrollToSection));
logo.addEventListener("click", scrollToSection);

// TIMER
const formatValue = (value) => (value < 10 ? `0${value}` : value);

const getTimerValues = (diff) => ({
  seconds: (diff / 1000) % 60,
  minutes: (diff / (1000 * 60)) % 60,
  hours: (diff / (1000 * 3600)) % 24,
});

const setTimerValues = (values) => {
  Object.entries(values).forEach(([key, value]) => {
    const timerValue = document.getElementById(key);
    timerValue.innerText = formatValue(Math.floor(value));
  });
};

const startTimer = () => {
  let diff = 2 * 60 * 60 * 1000;
  const id = setInterval(() => {
    diff -= 1000;

    if (diff < 0) {
      clearInterval(id);
      return;
    }

    setTimerValues(getTimerValues(diff));
  }, 1000);
};
startTimer();

// JQUERY PHONE MASK
$(document).ready(function () {
  $("#phone").mask("+38(000)000-00-00");
});

// SUBMIT FORM
const form = document.querySelector(".order__form-box");
form.addEventListener("submit", function (e) {
  e.preventDefault();

  const formData = new FormData(form);

  const data = Object.fromEntries(formData.entries());
  console.log(data);
});

// SET ORDER DATE
function geOrderDate() {
  const today = new Date();
  const day = String(today.getDate()).padStart(2, "0");
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const year = today.getFullYear();

  return `Order date: ${day}.${month}.${year}`;
}

const orderDate = document.getElementById("orderDate");
orderDate.innerHTML = geOrderDate();
