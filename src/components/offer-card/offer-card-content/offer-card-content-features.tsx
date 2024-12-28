export type TOfferCardContentFeature = {
  id: number;
  text: string;
  className: string;
};

export type TOfferCardContentFeatures = {
  features: TOfferCardContentFeature[];
};

export function OfferCardContentFeatures({ features }: TOfferCardContentFeatures) {
  return (
    <ul className='offer__features'>
      {features.map(({ id, className, text }) => (
        <li className={`offer__feature ${className}`} key={id}>
          {text}
        </li>
      ))}
    </ul>
  );
}
