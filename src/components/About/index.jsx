/* eslint-disable max-len */
import React, { useState } from 'react';
import './styles.css';

const OPTIONS = {
  CATS: 'CATS',
  GOODS: 'GOODS',
};

export default function About() {
  const [active, setActive] = useState(OPTIONS.CATS);
  const handleAboutCats = () => {
    setActive(OPTIONS.CATS);
  };

  const handleAboutGoods = () => {
    setActive(OPTIONS.GOODS);
  };

  const catsSelected = active === OPTIONS.CATS;
  const goodsSelected = active === OPTIONS.GOODS;

  const renderContent = () => {
    switch (active) {
      case OPTIONS.CATS: {
        return (
          <>
            Lorem mauris mi dapibus accumsan purus efficitur tristique vivamus
            per placerat iaculis, ridiculus dolor lacus curabitur magna finibus
            ullamcorper massa phasellus tellus etiam, eleifend taciti suscipit
            integer augue dui metus molestie nullam at. Ullamcorper suscipit
            arcu porta aenean non vestibulum, sagittis netus phasellus fermentum
            a urna fusce, velit ad nec semper interdum. Erat massa nisi congue
            aliquam a accumsan ante efficitur quisque tempus, condimentum
            faucibus tellus posuere purus justo sit mi ut sed scelerisque, ac
            proin nullam penatibus pretium neque suscipit vestibulum mattis.
            Lorem mauris mi dapibus accumsan purus efficitur tristique vivamus
            per placerat iaculis, ridiculus dolor lacus curabitur magna finibus
            ullamcorper massa phasellus tellus etiam, eleifend taciti suscipit
            integer augue dui metus molestie nullam at. Ullamcorper suscipit
            arcu porta aenean non vestibulum, sagittis netus phasellus fermentum
            a urna fusce, velit ad nec semper interdum. Erat massa nisi congue
            aliquam a accumsan ante efficitur quisque tempus, condimentum
            faucibus tellus posuere purus justo sit mi ut sed scelerisque, ac
            proin nullam penatibus pretium neque suscipit vestibulum mattis.
            Lorem mauris mi dapibus accumsan purus efficitur tristique vivamus
            per placerat iaculis, ridiculus dolor lacus curabitur magna finibus
            ullamcorper massa phasellus tellus etiam, eleifend taciti suscipit
            integer augue dui metus molestie nullam at. Ullamcorper suscipit
            arcu porta aenean non vestibulum, sagittis netus phasellus fermentum
            a urna fusce, velit ad nec semper interdum. Erat massa nisi congue
            aliquam a accumsan ante efficitur quisque tempus, condimentum
            faucibus tellus posuere purus justo sit mi ut sed scelerisque, ac
            proin nullam penatibus pretium neque suscipit vestibulum mattis.
          </>
        );
      }
      case OPTIONS.GOODS: {
        return (
          <>
            Lorem mauris mi dapibus accumsan purus efficitur tristique vivamus
            per placerat iaculis, ridiculus dolor lacus curabitur magna finibus
            ullamcorper massa phasellus tellus etiam, eleifend taciti suscipit
            integer augue dui metus molestie nullam at. Ullamcorper suscipit
            arcu porta aenean non vestibulum, sagittis netus phasellus fermentum
            a urna fusce, velit ad nec semper interdum. Erat massa nisi congue
            aliquam a accumsan ante efficitur quisque tempus, condimentum
            faucibus tellus posuere purus justo sit mi ut sed scelerisque, ac
            proin nullam penatibus pretium neque suscipit vestibulum mattis.
            Lorem mauris mi dapibus accumsan purus efficitur tristique vivamus
            per placerat iaculis, ridiculus dolor lacus curabitur magna finibus
            ullamcorper massa phasellus tellus etiam, eleifend taciti suscipit
            integer augue dui metus molestie nullam at. Ullamcorper suscipit
            arcu porta aenean non vestibulum, sagittis netus phasellus fermentum
            a urna fusc
          </>
        );
      }
      default: {
        break;
      }
    }
    return null;
  };

  return (
    <section className="about" id="about">
      <h2 className="about__title">Подробнее о товарах для котов</h2>
      <div className="about__tabs" role="tablist">
        <button
          className={`about__button ${
            catsSelected ? 'about__button_active' : ''
          }`}
          type="button"
          role="tab"
          aria-selected={catsSelected}
          onClick={handleAboutCats}
        >
          О котах
        </button>
        <button
          className={`about__button ${
            goodsSelected ? 'about__button_active' : ''
          }`}
          type="button"
          role="tab"
          aria-selected={goodsSelected}
          onClick={handleAboutGoods}
        >
          О товарах
        </button>
      </div>
      <p className="about__text">{renderContent()}</p>

    </section>
  );
}
