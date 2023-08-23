import React from 'react';
import { Box, Button, useColorMode } from '@chakra-ui/react';

function App() {
    const { colorMode, toggleColorMode } = useColorMode();
    return (
        <Box>
            <Button onClick={toggleColorMode} color="text">
                {colorMode === 'light' ? 'Dark' : 'Light'}
            </Button>
        </Box>
    );
}

export default App;
