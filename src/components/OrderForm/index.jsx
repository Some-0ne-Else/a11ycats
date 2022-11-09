import React, { useState } from 'react';

import { validate } from '../../helpers/validation';
import Button from '../ui/Button';
import LabeledInput from '../ui/LabeledInput';
import Status from '../ui/Status';
import './styles.css';

export default function OrderForm({ selectedItem, onClose, setIsSuccess }) {
  const { title } = selectedItem;
  const [isSubmitting, setIsSubmitting] = useState(false);
  const delay = 5000;

  const initialState = {
    name: '',
    email: '',
    address: '',
    paymentType: '',
  };

  const [formState, setFormState] = useState(initialState);
  console.log(formState);

  const onRadioChange = (event) => {
    const { target: { value } } = event;
    console.log(value);
    setFormState({ ...formState, paymentType: value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    const validationErrors = validate(formState);
    console.log(validationErrors);
    setTimeout(() => {
      onClose();
      setIsSubmitting(false);
      setIsSuccess(true);
    }, delay);
  };

  return (
    <form className="order-form" aria-labelledby="form-title" onSubmit={onSubmit} noValidate>
      <h3 className="order-form__title" id="form-title">{title}</h3>
      <p className="order-form__subtitle">Оформление заказа</p>
      <LabeledInput placeholder="Введите имя и фамилию" id="name" name="name" state={formState} setState={setFormState} required type="text" autocomplete="on">
        Имя и фамилия
      </LabeledInput>
      <LabeledInput placeholder="Введите адрес электронной почты" id="email" name="email" state={formState} setState={setFormState} required type="email" autocomplete="on">
        E-mail
      </LabeledInput>
      <LabeledInput placeholder="Введите полный почтовый адрес с индексом" id="address" name="address" state={formState} setState={setFormState} required type="textarea">
        Адрес доставки
      </LabeledInput>

      <fieldset className="order-form__fieldset">
        <legend className="order-form__legend">Способ оплаты</legend>
        <div className="order-form__radio-wrapper">
          <div>
            <input className="order-form__radio-input" onChange={onRadioChange} value="1" required type="radio" id="card" name="paymentType" />
            <label className="order-form__radio-label" htmlFor="card">Картой</label>
          </div>
          <div>
            <input className="order-form__radio-input" onChange={onRadioChange} value="2" required id="cash" type="radio" name="paymentType" />
            <label className="order-form__radio-label" htmlFor="cash">Наличными</label>
          </div>
        </div>
      </fieldset>
      <Button disabled={isSubmitting} aria-busy={isSubmitting} classValue="order-form__button" type="submit">Отправить</Button>
      <Status appereanceCondition={isSubmitting}>Заказ отправляется</Status>
    </form>
  );
}
