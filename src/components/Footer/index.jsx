import React from 'react';
import './styles.css';

import emailImage from './assets/email.svg';
import telegramImage from './assets/telegram.svg';
import facebookImage from './assets/facebook.svg';

export default function Footer() {
  const onSubmit = (e) => {
    e.preventDefault();
    console.log('submit');
  };
  return (
    <footer className="footer">
      <div className="footer__social">
        <h3 className="footer__social-title">Социальные сети</h3>
        <nav aria-label="Подписка на социальные сети">
          <ul className="footer__social-wrapper">
            <li className="footer__social-item"><a href="https://email.com" target="__blank" rel="noopener" aria-label="Электронная почта"><img src={emailImage} alt="" /></a></li>
            <li className="footer__social-item"><a href="https://telegram.org" target="__blank" rel="noopener" aria-label="Телеграм"><img src={telegramImage} alt="" /></a></li>
            <li className="footer__social-item"><a href="https://facebook.com" target="__blank" rel="noopener" aria-label="Фейсбук"><img src={facebookImage} alt="" /></a></li>
          </ul>
        </nav>
      </div>
      <form className="footer__subscription" onSubmit={onSubmit}>
        <h3 className="footer__subscription-title">Подписка на новости</h3>
        <div className="footer__subscription-wrapper">
          <div className="footer__subscription-inner-wrapper">
            <label className="footer__subscription-label visually-hidden" htmlFor="email">
              Адрес электронной почты
            </label>
            <input className="footer__subscription-input" required id="email" type="email" />
          </div>
          <button className="footer__subscription-button" type="submit">Подписаться</button>
        </div>
      </form>
    </footer>
  );
}
