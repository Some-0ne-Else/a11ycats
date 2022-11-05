import React from 'react';
import CatalogCard from '../CatalogCard';
import { catalogData } from '../Header/mocks';
import { sortCards } from '../../helpers/common';

import './styles.css';

export default function Catalog({ sortType }) {
  const renderedCards = sortCards({ cards: catalogData, sortType });
  return (
    <section aria-labelledby="main-title">
      <ul className="catalog" aria-label="Товары">
        {renderedCards.map(({
          id, img, title, price, oldPrice,
        }) => (
          <CatalogCard
            key={id}
            id={id}
            img={img}
            title={title}
            price={price}
            oldPrice={oldPrice}
          />
        ))}
      </ul>
    </section>
  );
}
