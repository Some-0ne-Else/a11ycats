import React from 'react';

import './styles.css';

export default function Iframe() {
  return (
    <section className="iframe" aria-labelledby="video-title">
      <h2 className="iframe__title" id="video-title">Видео о товарах для котов</h2>
      <div className="iframe__wrapper">
        <a href="#about" aria-label="Пропустить контент">
          <iframe
            title="50 вещей для кошек с aliexpress от которых ты офигеешь"
            width="1184"
            height="663"
            src="https://www.youtube.com/embed/c6x-jIuEX6k"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          />
        </a>
      </div>
    </section>
  );
}
