import { extendTheme } from '@chakra-ui/react';

import { components } from './components';
import { config } from './config';
import { breakpoints, colors, semanticTokens } from './foundations';
import { styles } from './styles';

export const theme = extendTheme({
    styles,
    colors,
    breakpoints,
    components,
    semanticTokens,
    config,
});
