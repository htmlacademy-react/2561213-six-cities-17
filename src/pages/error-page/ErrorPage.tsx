import React from 'react';
import { Link } from 'react-router-dom';

import { Route } from '../../router';

type TErrorPageProps = {
  message?: string;
};

function ErrorPage({
  message = 'При загрузке страницы произошла ошибка. Повторите попытку позднее.'
}: TErrorPageProps): React.ReactElement {
  return (
    <>
      <h1>Упс!</h1>
      <p>{message}</p>
      <Link to={Route.Main}>Перейти на главную</Link>
    </>
  );
}

export default ErrorPage;
