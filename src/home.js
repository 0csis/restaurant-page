import './style.css';
import Restaurant from './restaurant.jpg';

const home = () => {
  const content = document.querySelector('#content');

  const homepage = document.createElement('div');
  homepage.classList.add('homepage');

  const header = document.createElement('header');
  header.textContent = 'Nane International';
  homepage.appendChild(header);

  const restaurantImage = document.createElement('div');
  restaurantImage.classList.add('restaurantImage');
  const myRestaurant = new Image();
  myRestaurant.src = Restaurant;
  restaurantImage.appendChild = myRestaurant;
  homepage.appendChild(restaurantImage);

  content.appendChild(homepage);
};

export { home };
