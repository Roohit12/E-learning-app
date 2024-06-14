import React from 'react';

import { useLocation, useNavigate } from 'react-router-dom';
import ErrorToast from '../../../components/error-toast/ErrorToast';
function Page404() {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <div>
      <ErrorToast/>
      <h1>404</h1>
      <h2>Page Not Found</h2>
      <p>
        The page <code>{location.pathname}</code> does not exist.
      </p>
      <button
        onClick={() => {
          navigate('/');
        }}
      >
        Go to Home
      </button>
    </div>
  );
}

export default Page404;
