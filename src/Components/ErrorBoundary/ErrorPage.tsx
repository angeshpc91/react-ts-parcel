import React from 'react';
import { useNavigate } from 'react-router';

import { icons } from '@assets';

import { ROUTES } from '@Constants/routes';

import styles from './ErrorPage.module.scss';

const ErrorPage = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.error_Container}>
      <img src={icons.SomethingWentWrong} alt="Something Went Wrong" />
      <div className={styles.error_Heading}>
        Something Went Wrong!
      </div>
      <div
        className={styles.error_Description}
      >
        We are facing technical difficulties at the moment. Please try again later.
      </div>
      <button onClick={() => navigate(ROUTES.HOME)}>
        Go to Login Page
      </button>
    </div>
  );
};

export default ErrorPage;
