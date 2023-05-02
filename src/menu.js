import './style.css';
import Burrito from './burrito.png';
import Sushi from './sushi.png';
import Salad from './salad.png';

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

  const burrito = document.createElement('div');
  burrito.classList.add('burrito');

  const burritoImage = document.createElement('div');
  burritoImage.classList.add('burritoImage');
  const burritoPic = new Image();
  burritoPic.src = Burrito;
  burritoImage.appendChild = burritoPic;
  burrito.appendChild(burritoImage);

  const burritoTitle = document.createElement('div');
  burritoTitle.classList.add('burritoTitle');
  burritoTitle.textContent = "The Backwards Burrito";
  burrito.appendChild(burritoTitle);

  const burritoDescription = document.createElement('ul');
  burritoDescription.classList.add('burritoDescription');
  const burritoDescription1 = document.createElement('li');
  const burritoDescription2 = document.createElement('li');
  burritoDescription1.textContent = "A burrito with its filling on the outside and the tortilla wrapped around it.";
  burritoDescription2.textContent = "Ingredients: Flour tortilla, refried beans, sliced avocado, diced tomato, chopped cilantro, sliced jalapenos, lime wedges.";
  burritoDescription.appendChild(burritoDescription1);
  burritoDescription.appendChild(burritoDescription2);
  burrito.appendChild(burritoDescription);

  backgroundMenu.appendChild(salad);
  backgroundMenu.appendChild(sushi);
  backgroundMenu.appendChild(burrito);

  content.appendChild(backgroundMenu);
};

export { menu };
