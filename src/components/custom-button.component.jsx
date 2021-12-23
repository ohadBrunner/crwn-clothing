import React from 'react';

// import '../sass/app.scss';

import { CustomButtonContainer } from '../styled-components/custom-button.styles';

const CustomButton = ({ children, props }) => (
  <CustomButtonContainer {...props}>{children}</CustomButtonContainer>
);

export default CustomButton;
