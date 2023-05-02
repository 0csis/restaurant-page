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

  backgroundMenu.appendChild(salad);
  content.appendChild(backgroundMenu);
};

export { menu };
