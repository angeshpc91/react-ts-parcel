import React from 'react';
// import PropTypes from 'prop-types'
import { Backdrop, CircularProgress } from '@mui/material';

const Loader: React.FC = () => {
  return (
    <Backdrop open>
      <CircularProgress />
    </Backdrop>
  );
};

export default Loader;
