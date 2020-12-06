import React, { FC } from 'react';

import { 
  ThemeProvider as ChakraThemeProvider, 
  CSSReset
} from '@chakra-ui/react';


import theme from '../../styles/theme';

const ThemeContainer: FC = ({ children }) => {
  return (
    <ChakraThemeProvider theme={theme}>
      <CSSReset />
      {children}
    </ChakraThemeProvider>
  );
}

export default ThemeContainer;