import React, { FC, ReactElement } from 'react';
import { ThemeProvider } from 'styled-components';
import { RecoilRoot } from 'recoil';

import theme from '../../style/theme';

const AllTheProviders: FC = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <RecoilRoot>{children}</RecoilRoot>
    </ThemeProvider>
  );
};

export default AllTheProviders;
