import React from 'react';
import {
  Box,
  Text,
  Link,
  VStack,
  Grid,
} from '@chakra-ui/react';

import { ColorModeSwitcher } from './ColorModeSwitcher';
import { Logo } from './Logo';
import { ExternalLinkIcon } from '@chakra-ui/icons'

function App1() {
  return (

    <Box textAlign="center" fontSize="xl">
      <Grid minH="50vh" p={3}>
        <ColorModeSwitcher justifySelf="flex-end" />
        <VStack spacing={8}>
          <Logo h="20vmin" pointerEvents="none" />
          <Text>
            Weiter immer weiter...
          </Text>
          <Link
            color="teal.500"
            href="https://chakra-ui.com"
            fontSize="2xl"
            target="_blank"
            rel="noopener noreferrer"
            _hover={{ textDecoration: "none" }}
          >
            Learn Chakra {' '}
            <ExternalLinkIcon />

          </Link>
        </VStack>
      </Grid>
    </Box>

  );
}

export default App1;
