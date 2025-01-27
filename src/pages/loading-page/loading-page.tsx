import React from 'react';
import { ClipLoader } from 'react-spinners';
import './loading-page.css';

function LoadingPage(): React.ReactElement {
  return (
    <div className='loading-spinner'>
      <ClipLoader color='#3498db' size={50} /> {/* Синий цвет */}
      <p>Loading...</p>
    </div>
  );
}

export default LoadingPage;
