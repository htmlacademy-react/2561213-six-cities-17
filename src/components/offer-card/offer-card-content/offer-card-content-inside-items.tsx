export type TOfferCardContentInsideItem = {
  id: number;
  text: string;
};

export type TOfferCardContentInsideItems = {
  insideItems: TOfferCardContentInsideItem[];
};

export function OfferCardContentInsideItems({ insideItems }: TOfferCardContentInsideItems) {
  return (
    <div className='offer__inside'>
      <h2 className='offer__inside-title'>What&apos;s inside</h2>
      <ul className='offer__inside-list'>
        {insideItems.map(({ id, text }) => (
          <li className='offer__inside-item' key={id}>
            {text}
          </li>
        ))}
      </ul>
    </div>
  );
}
