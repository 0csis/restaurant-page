import './style.css';
import Restaurant from './restaurant.jpg';

const home = () => {
  const content = document.querySelector('#content');

  const homepage = document.createElement('div');
  homepage.classList.add('homepage');

  const header = document.createElement('header');

  const headerButtons = document.createElement('div');
  headerButtons.classList.add('headerButtons');
  const menuButton = document.createElement('button');
  menuButton.textContent = 'Menu';
  const homeButton = document.createElement('button');
  homeButton.textContent = 'Home';
  const contactButton = document.createElement('button');
  contactButton.textContent = 'Contact';
  headerButtons.appendChild(menuButton);
  headerButtons.appendChild(homeButton);
  headerButtons.appendChild(contactButton);

  header.appendChild(headerButtons);

  const headerText = document.createElement('headerText');
  headerText.classList.add('headerText');
  headerText.textContent = 'Nane International';
  header.appendChild(headerText);
  homepage.appendChild(header);

  const restaurantImage = document.createElement('div');
  restaurantImage.classList.add('restaurantImage');
  const myRestaurant = new Image();
  myRestaurant.src = Restaurant;
  restaurantImage.appendChild = myRestaurant;
  homepage.appendChild(restaurantImage);

  const textHomepage = document.createElement('div');
  const textHomepage1 = document.createElement('div');
  const textHomepage2 = document.createElement('div');
  const textHomepage3 = document.createElement('div');
  const textHomepage4 = document.createElement('div');
  const textHomepage5 = document.createElement('div');
  const textHomepage6 = document.createElement('div');
  const textHomepage7 = document.createElement('div');
  textHomepage.classList.add('textHomepage');

  textHomepage1.textContent = 'Dear esteemed patrons,';
  textHomepage.appendChild(textHomepage1);
  textHomepage2.textContent = "Welcome to 'Nane International', where the impossible becomes possible and the nonsensical is our specialty. Our chefs are masters at concocting dishes that will leave your taste buds confused yet strangely satisfied.";
  textHomepage.appendChild(textHomepage2);

  textHomepage3.textContent = "Our menu features dishes like the 'Inverted Salad' where the lettuce is served on top and the toppings are hidden below, and the 'Backwards Lentils Burger' where the lentils burger is on the bottom and the bun is on top. And don't miss out on our signature dessert, the 'Inside-Out Cake' where the frosting is inside and the cake is outside.";
  textHomepage.appendChild(textHomepage3);

  textHomepage4.textContent = 'But our food is not the only thing that defies logic here. Our waitstaff will serve your drinks upside down, and the tables and chairs inside the building are suspended from the ceiling.';
  textHomepage.appendChild(textHomepage4);

  textHomepage5.textContent = "So come join us at 'Nane International' for an unforgettable dining experience that will leave you questioning everything you thought you knew about food and physics.";
  textHomepage.appendChild(textHomepage5);

  textHomepage6.textContent = 'Sincerely,';
  textHomepage.appendChild(textHomepage6);

  textHomepage7.textContent = 'The Management';
  textHomepage.appendChild(textHomepage7);

  homepage.appendChild(textHomepage);

  content.appendChild(homepage);
};

export { home };
