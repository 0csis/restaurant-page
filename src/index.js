import { headerButtons } from './headerButtons';
import { home } from './home';
import { contact } from './contact';

headerButtons();
home();

const content = document.querySelector('#content');
const buttons = document.querySelectorAll('button');

buttons.forEach((btn) => {
  btn.addEventListener('click', () => {
    if (btn.className == 'contactButton') {
      if (content.children[1]) {
        const secondChild = content.children[1];
        content.removeChild(secondChild);
      }
      console.log('contact');
      contact();
    } else if (btn.className == 'homeButton') {
      if (content.children[1]) {
        const secondChild = content.children[1];
        content.removeChild(secondChild);
      }
      console.log('home');
      home();
    } else if (btn.className == 'menuButton') {
      if (content.children[1]) {
        const secondChild = content.children[1];
        content.removeChild(secondChild);
      }
      console.log('menu');
    }
  });
});
