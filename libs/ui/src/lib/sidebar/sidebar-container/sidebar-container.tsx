import React from 'react';
import { Box, Flex, Grid, GridItem } from '@chakra-ui/react';

export interface SidebarContainerProps {
  children: React.ReactNode;
  sidebar: React.ReactElement;
  secondarySidebar: React.ReactElement;
}

export function SidebarContainer({
  children,
  sidebar,
  secondarySidebar,
}: SidebarContainerProps) {
  return (
    <Grid
      templateAreas={`'sidebar main secondarySidebar'`}
      templateColumns="auto 1fr auto"
    >
      <GridItem area="sidebar" as="aside" w={{ base: 'full' }} p={{ base: 0 }}>
        <Box
          pos="sticky"
          top={0}
          w={{ base: 0, md: '72px' }}
          borderRight="1px solid"
          borderColor="gray.100"
          p={{ base: 0, md: 2 }}
          paddingTop={8}
          height="100vh"
          overflow="auto"
          css={{
            '&::-webkit-scrollbar': {
              height: 'var(--chakra-sizes-1)',
              width: 'var(--chakra-sizes-1)',
            },
            '&::-webkit-scrollbar-thumb': {
              backgroundColor: 'var(--chakra-colors-gray-400)',
            },
          }}
        >
          {sidebar}
        </Box>
      </GridItem>
      <GridItem as="main" area="main" p={{ base: 6, md: 8 }}>
        {children}
      </GridItem>
      <GridItem
        area="secondarySidebar"
        w={{ base: 0, md: '256px' }}
        p={{ base: 0, md: 8 }}
        bg="gray.100"
      >
        <Box pos="sticky" top={0} height="100vh" overflow="auto">
          {secondarySidebar}
        </Box>
      </GridItem>
    </Grid>
  );
}

export default SidebarContainer;
