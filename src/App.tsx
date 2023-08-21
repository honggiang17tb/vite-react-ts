import React from 'react';
import { Box, Button, useColorMode } from '@chakra-ui/react';

function App() {
    const { toggleColorMode } = useColorMode();
    return (
        <Box>
            <Button onClick={toggleColorMode} color="text">
                Click me
            </Button>
        </Box>
    );
}

export default App;
