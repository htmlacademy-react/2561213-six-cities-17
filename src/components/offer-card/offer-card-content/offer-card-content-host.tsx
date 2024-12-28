export type TOfferCardContentHost = {
  title: string;
  imageSrc: string;
  name: string;
  status: string;
  text: string;
};

export function OfferCardContentHost(host: TOfferCardContentHost) {
  const { title, imageSrc, name, status, text } = host;

  return (
    <div className='offer__host'>
      <h2 className='offer__host-title'>{title}</h2>
      <div className='offer__host-user user'>
        <div className='offer__avatar-wrapper offer__avatar-wrapper--pro user__avatar-wrapper'>
          <img className='offer__avatar user__avatar' src={imageSrc} width='74' height='74' alt='Host avatar' />
        </div>
        <span className='offer__user-name'>{name}</span>
        <span className='offer__user-status'>{status}</span>
      </div>
      <div className='offer__description'>
        <p className='offer__text'>{text}</p>
      </div>
    </div>
  );
}
