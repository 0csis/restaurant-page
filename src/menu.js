import './style.css';
import Burrito from './burrito.png';
import Sushi from './sushi.jpg';
import Salad from './salad.jpg';

const menu = () => {
  const content = document.querySelector('#content');

  const backgroundMenu = document.createElement('div');
  backgroundMenu.classList.add('backgroundMenu');

  const salad = document.createElement('div');
  salad.classList.add('salad');

  const saladImage = document.createElement('div');
  saladImage.classList.add('saladImage');
  const saladPic = new Image();
  saladPic.src = Salad;
  saladImage.appendChild = saladPic;
  salad.appendChild(saladImage);

  const saladTitle = document.createElement('div');
  saladTitle.classList.add('saladTitle');
  saladTitle.textContent = 'The Inverted Salad';
  salad.appendChild(saladTitle);

  const saladDescription = document.createElement('ul');
  saladDescription.classList.add('saladDescription');
  const saladDescription1 = document.createElement('li');
  const saladDescription2 = document.createElement('li');
  saladDescription1.textContent = 'A playful take on the traditional salad where the greens are served on the bottom and the toppings are hidden beneath.';
  saladDescription2.textContent = 'Ingredients: Mixed greens, sliced cucumber, shredded carrot, cherry tomatoes, sliced radishes, sunflower seeds, croutons, balsamic vinaigrette.';
  saladDescription.appendChild(saladDescription1);
  saladDescription.appendChild(saladDescription2);
  salad.appendChild(saladDescription);

  const sushi = document.createElement('div');
  sushi.classList.add('sushi');

  const sushiImage = document.createElement('div');
  sushiImage.classList.add('sushiImage');
  const sushiPic = new Image();
  sushiPic.src = Sushi;
  sushiImage.appendChild = sushiPic;
  sushi.appendChild(sushiImage);

  const sushiTitle = document.createElement('div');
  sushiTitle.classList.add('sushiTitle');
  sushiTitle.textContent = 'The Inside-Out Sushi Roll';
  sushi.appendChild(sushiTitle);

  const sushiDescription = document.createElement('ul');
  sushiDescription.classList.add('sushiDescription');
  const sushiDescription1 = document.createElement('li');
  const sushiDescription2 = document.createElement('li');
  sushiDescription1.textContent = 'A sushi roll with a playful twist, where the rice and the nori seaweed are reversed in order.';
  sushiDescription2.textContent = 'Ingredients: Sushi rice, avocado, cucumber, carrot, bell pepper, alfalfa sprouts, wasabi, soy sauce.';
  sushiDescription.appendChild(sushiDescription1);
  sushiDescription.appendChild(sushiDescription2);
  sushi.appendChild(sushiDescription);

  backgroundMenu.appendChild(salad);
  backgroundMenu.appendChild(sushi);

  content.appendChild(backgroundMenu);
};

export { menu };
