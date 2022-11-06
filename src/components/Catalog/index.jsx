import React from 'react';
import CatalogCard from '../CatalogCard';
import { catalogData } from '../Header/mocks';
import { sortCards } from '../../helpers/common';

import './styles.css';

export default function Catalog({ sortType, setSelectedItem }) {
  const renderedCards = sortCards({ cards: catalogData, sortType });
  return (
    <section aria-labelledby="main-title">
      <ul className="catalog" aria-label="Товары">
        {renderedCards.map((card) => {
          const { id } = card;
          return (
            <CatalogCard
              key={id}
              card={card}
              setSelectedItem={setSelectedItem}
            />
          );
        })}
      </ul>
    </section>
  );
}
