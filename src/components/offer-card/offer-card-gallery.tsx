import React from 'react';

export type TOfferCardImage = {
  id: number;
  src: string;
  alt?: string;
};

function OfferCardGallery({ images }: { images: TOfferCardImage[] }): React.ReactElement {
  return (
    <div className='offer__gallery-container container'>
      <div className='offer__gallery'>
        {images.map(({ id, src, alt }) => (
          <div className='offer__image-wrapper' key={id}>
            <img className='offer__image' src={src} alt={alt || 'Photo studio'} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default OfferCardGallery;
