import React, { useEffect, useState } from 'react';
import CatalogCard from '../CatalogCard';
import { catalogData } from '../../mocks';
import { sortCards } from '../../helpers/common';

import './styles.css';
import Status from '../ui/Status';

export default function Catalog({ sortType, setSelectedItem }) {
  const renderedCards = sortCards({ cards: catalogData, sortType });
  const [statusActive, setStatusActive] = useState(false);

  useEffect(() => {
    setStatusActive(true);
    setTimeout(() => setStatusActive(false));
  }, [sortType]);
  return (
    <section aria-labelledby="main-title">
      <Status appereanceCondition={statusActive}>Каталог отсортирован</Status>
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
