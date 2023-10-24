import React from 'react';
import s from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({ webformatURL, largeImageURL }) => {
  return (
    <li className={s.galleryItem}>
      <img
        src={webformatURL}
        alt=""
        data-large={largeImageURL}
        className={s.galleryImg}
      />
    </li>
  );
};

export default ImageGalleryItem;
