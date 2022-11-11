import React, { useState } from 'react';
import Button from '../ui/Button';
import LabeledInput from '../ui/LabeledInput';
import Status from '../ui/Status';
import './styles.css';

export default function OrderForm({ selectedItem, onClose, setIsSuccess }) {
  const { title } = selectedItem;
  const [isSubmitting, setIsSumbitting] = useState(false);
  const delay = 5000;

  const onSubmit = (e) => {
    e.preventDefault();
    setIsSumbitting(true);
    setTimeout(() => {
      onClose();
      setIsSumbitting(false);
      setIsSuccess(true);
    }, delay);
  };
  return (
    <form className="order-form" aria-labelledby="form-title" onSubmit={onSubmit}>
      <h3 className="order-form__title" id="form-title">{title}</h3>
      <p className="order-form__subtitle" id="form-name">Оформление заказа</p>
      <LabeledInput placeholder="Введите имя и фамилию" id="name" required type="text" autocomplete="on">
        Имя и фамилия
      </LabeledInput>
      <LabeledInput placeholder="Введите адрес электронной почты" id="name" required type="email" autocomplete="on">
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
      <Button disabled={isSubmitting} aria-busy={isSubmitting} classValue="order-form__button" type="submit">Отправить</Button>
      <Status appereanceCondition={isSubmitting}>Заказ отправляется</Status>
    </form>
  );
}
