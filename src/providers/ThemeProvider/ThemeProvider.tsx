import React, { FC, PropsWithChildren } from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { theme } from '@/theme';

export const ThemeProvider: FC<PropsWithChildren> = ({ children }) => {
    return <ChakraProvider theme={theme}>{children}</ChakraProvider>;
};
