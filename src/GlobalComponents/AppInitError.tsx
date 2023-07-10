import React from 'react';
// import PropTypes from 'prop-types'

const AppInitError: React.FC = () => {
  // static propTypes = {
  //   initialize: PropTypes.func.isRequired
  // }

  return (
    <section>
      <h3>Something Went Wrong! Please Try Again</h3>
      {/* <Button onClick={this.props.initialize}>Retry</Button> */}
    </section>
  );
};

export default AppInitError;
