import React from 'react';
import Button from '../ui/Button';
import './styles.css';

export default function CatalogCard({ card, setSelectedItem }) {
  const {
    id, img, title, price, oldPrice,
  } = card;
  const priceColor = oldPrice ? '#FF0000' : '#000';

  const handleClick = () => {
    setSelectedItem(card);
  };

  return (
    <li className="catalog-card">
      <img src={img} alt="" role="presentation" />
      <div className="catalog-card__content">
        <p className="catalog-card__title" id={`${id}-title`}>
          {title}
        </p>
        <div className="catalog-card__price-wrapper">
          <span className="visually-hidden">Цена:</span>
          <span
            className="catalog-card__price"
            style={{ color: priceColor }}
          >
            {`${price}$`}

          </span>
          {oldPrice && (
            <>
              <span className="visually-hidden">Прежняя цена:</span>
              <s className="catalog-card__old-price">{`${oldPrice}$`}</s>
            </>
          )}
        </div>
        <Button classValue="catalog-card__button" type="button" id={`${id}-button`} aria-labelledby={`${id}-title ${id}-button`} onClick={handleClick}>Купить</Button>
      </div>
    </li>
  );
}
