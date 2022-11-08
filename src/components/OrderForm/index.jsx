import React from 'react';
import Button from '../ui/Button';
import LabeledInput from '../ui/LabeledInput';
import './styles.css';

export default function OrderForm({ selectedItem, onClose }) {
  const { title } = selectedItem;
  const onSubmit = (e) => {
    e.preventDefault();
    console.log(selectedItem);
    onClose();
  };
  return (
    <form className="order-form" onSubmit={onSubmit}>
      <h3 className="order-form__title">{title}</h3>
      <p className="order-form__subtitle">Оформление заказа</p>
      <LabeledInput placeholder="Введите имя и фамилию" id="name" required type="text">
        Имя и фамилия
      </LabeledInput>
      <LabeledInput placeholder="Введите адрес электронной почты" id="name" required type="email">
        E-mail
      </LabeledInput>
      <LabeledInput placeholder="Введите полный почтовый адрес с индексом" id="name" required type="textarea">
        Адрес доставки
      </LabeledInput>

      <fieldset className="order-form__fieldset">
        <legend className="order-form__legend">Способ оплаты</legend>
        <div className="order-form__radio-wrapper">
          <div>
            <input className="order-form__radio-input" required type="radio" id="card" name="pay" />
            <label className="order-form__radio-label" htmlFor="card">Картой</label>
          </div>
          <div>
            <input className="order-form__radio-input" required id="cash" type="radio" name="pay" />
            <label className="order-form__radio-label" htmlFor="cash">Наличными</label>
          </div>
        </div>
      </fieldset>
      <Button classValue="order-form__button" type="submit">Отправить</Button>
    </form>
  );
}
