// Navbar

const navLinks = document.querySelectorAll('.nav__links-item');

navLinks.forEach((link) =>
  link.addEventListener('click', (e) => {
    navLinks.forEach((link) => {
      e.target === link
        ? link.classList.add('nav__links-item--active')
        : link.classList.remove('nav__links-item--active');
    });
  })
);

// Accordion

const tabLabels = document.querySelectorAll('.tab__label');

tabLabels.forEach((label) =>
  label.addEventListener('click', (e) => {
    tabLabels.forEach((l) => {
      if (l === label) {
        if (l.parentNode.classList.contains('tab--active')) {
          l.parentNode.classList.remove('tab--active');
          l.nextElementSibling.style.height = '0px';
          l.nextElementSibling.style.marginTop = '0px';
        } else {
          l.parentNode.classList.add('tab--active');
          l.nextElementSibling.style.marginTop = '12px';
          l.nextElementSibling.style.height =
            l.nextElementSibling.children[0].clientHeight + 'px';
        }
      }
    });
  })
);

// Animate On Scroll

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    } else {
      entry.target.classList.remove('show');
    }
  });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));

// Hamburger

const hamburger = document.querySelector('.hamburger');

hamburger.addEventListener('click', (e) => {
  e.currentTarget.classList.toggle('active');
});

// Hide Mobile Menu on Desktop

window.addEventListener('resize', (e) => {
  if (e.target.innerWidth > 768) {
    if (hamburger.classList.contains('active'))
      hamburger.classList.remove('active');
  }
});

// Form Select

const select = document.querySelector('#select');
const city = document.querySelector('#city');
const dropdown = document.querySelector('#dropdown');
const clear = document.querySelector('.form__clear');

const dropdownItems = document.querySelectorAll('.dropdown__list-item');

dropdownItems.forEach((item) =>
  item.addEventListener('click', (e) => {
    city.value = e.target.textContent;
    select.classList.remove('form__control--invalid');
  })
);

select.addEventListener('click', (e) => {
  dropdown.classList.toggle('hide');
  select.classList.add('focus');
});

clear.addEventListener('click', () => {
  city.value = '';
});

window.addEventListener('click', (e) => {
  if (!select.contains(e.target)) {
    dropdown.classList.add('hide');
    select.classList.remove('focus');
  }
});

// Form Validation

const send = document.querySelector('#send');
const name = document.querySelector('#name');

const nameInput = document.querySelector('#nameInput');

name.addEventListener('input', (e) => {
  if (
    e.target.value &&
    nameInput.classList.contains('form__control--invalid')
  ) {
    nameInput.classList.remove('form__control--invalid');
  }
});

send.addEventListener('click', () => {
  if (!city.value) {
    select.classList.add('form__control--invalid');
  }
  if (!name.value) {
    nameInput.classList.add('form__control--invalid');
  }
});
