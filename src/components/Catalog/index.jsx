import React from 'react';
import CatalogCard from '../CatalogCard';
import { catalogData } from '../Header/mocks';

import './styles.css';

export default function Catalog() {
  return (
    <section aria-labelledby="main-title">
      <ul className="catalog" aria-label="Товары">
        {catalogData.map(({
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
