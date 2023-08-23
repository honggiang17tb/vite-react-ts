import { mode, StyleFunctionProps } from '@chakra-ui/theme-tools';

export const styles = {
    global: (props: StyleFunctionProps) => ({
        html: {},
        body: {
            bg: mode('white', '#000723')(props),
        },
    }),
};
