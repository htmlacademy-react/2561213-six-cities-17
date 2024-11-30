export type TOfferCardImage = {
  imageAlt?: string;
  imageSrc: string;
};

function OfferCardImage({
  imageAlt = 'Place image',
  imageSrc,
}: TOfferCardImage) {
  return (
    <div className='cities__image-wrapper place-card__image-wrapper'>
      <a href='#'>
        <img
          alt={imageAlt}
          className='place-card__image'
          height={200}
          src={imageSrc}
          width={260}
        />
      </a>
    </div>
  );
}

export default OfferCardImage;
