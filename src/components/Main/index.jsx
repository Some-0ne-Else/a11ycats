import React, { useEffect, useState } from 'react';

import Catalog from '../Catalog';
import Select from '../Select';
import Iframe from '../Iframe';
import About from '../About';
import Modal from '../Modal';
import OrderForm from '../OrderForm';
import Footer from '../Footer';

import './styles.css';
import Status from '../ui/Status';

export default function Main() {
  const [sortType, setSortType] = useState(0);
  const [selectedItem, setSelectedItem] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  useEffect(() => {
    if (isSuccess) {
      setTimeout(() => { setIsSuccess(false); }, 500);
    }
  }, [isSuccess]);

  const closeModal = () => {
    setSelectedItem(false);
  };

  return (
    <main className="main" tabIndex="-1" id="main">
      <h1 className="main__heading" id="main-title">Товары для котов</h1>
      <div className="main__select-wrapper">
        <Select setSortType={setSortType} />
      </div>
      <Catalog sortType={sortType} setSelectedItem={setSelectedItem} />
      <Iframe />
      <About />
      <Footer />
      {selectedItem
      && (
      <Modal onClose={closeModal}>
        <OrderForm selectedItem={selectedItem} onClose={closeModal} setIsSuccess={setIsSuccess} />
      </Modal>
      )}
      <Status appereanceCondition={isSuccess}>
        Заказ успешно оформлен.
        Модальное окно закрыто.
      </Status>
    </main>
  );
}
