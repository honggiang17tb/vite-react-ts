import { defineStyleConfig } from '@chakra-ui/react';

export const Button = defineStyleConfig({
    baseStyle: {
        borderRadius: 'none',
    },
    sizes: {},
    variants: {
        outline: {
            backgroundColor: 'green',
        },
    },
    defaultProps: {
        variant: 'outline',
    },
});
