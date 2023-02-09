import { nanoid } from 'nanoid';
import './styles.css';

const generatePassword = document.getElementById('new-password-button');
const newPassword = document.getElementById('new-password-generated');

generatePassword.addEventListener('click', () => {
  const randomPassword = nanoid();
  newPassword.innerHTML = randomPassword;
});