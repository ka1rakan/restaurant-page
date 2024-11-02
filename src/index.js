import * as css from './style.css';

const content = document.querySelector('#content');

// MAIN SECTION
const main = document.createElement('section');
main.classList.add('main');
content.appendChild(main);
(function() {
  const mainButtons = document.createElement('div');
  mainButtons.classList.add('main-buttons');
  main.appendChild(mainButtons);
  const btn1 = document.createElement('button')
  btn1.textContent = 'Book a Table';
  mainButtons.appendChild(btn1);
  const btn2 = document.createElement('button')
  btn2.textContent = 'Explore Menu'
  mainButtons.appendChild(btn2);
})();

// BROWSE SECTION
const browse = document.createElement('section');
main.classList.add('browse');
content.appendChild(browse);
(function() {
  const h1 = document.createElement('h1');
  h1.textContent = 'Browse Our Menu';
  browse.appendChild(h1);
  const container = document.createElement('div');
  container.classList.add('container');
  browse.append(container);
  const card1 = document.createElement('div');
  container.append(card1);
  const card1Title = document.createElement('h1');
  card1Title.classList.add('section-title');
  card1Title.textContent = 'Breakfast';
  card1.append(card1Title);
})();
