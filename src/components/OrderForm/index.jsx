import React from 'react';
import LabeledInput from '../ui/LabeledInput';
import './styles.css';

export default function OrderForm({ selectedItem, onClose }) {
  const { title } = selectedItem;
  const onSubmit = (e) => {
    e.preventDefault();
    console.log('submit');
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
      <LabeledInput placeholder="gmail@gmail.com" id="name" required type="email">
        E-mail
      </LabeledInput>
      <LabeledInput placeholder="Введите полный почтовый адрес с индексом" id="name" required type="textarea">
        Адрес доставки
      </LabeledInput>
    </form>
  );
}
