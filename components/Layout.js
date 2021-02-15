import { Box, Button, Grommet, Heading } from 'grommet';
import { Tools } from 'grommet-icons';
import React, { useState } from 'react';
import AppBar from './AppBar';
import THEME from './Theme';

export default function Layout({ children }) {
  const [showSidebar, setShowSidebar] = useState(false);
  return (
    <Grommet theme={THEME} full>
      <Box fill>
        <AppBar>
          <Heading level="3" margin="none">
            Bearcat Uniform Master
          </Heading>
          <Button
            icon={<Tools />}
            onClick={() => setShowSidebar(!showSidebar)}
          />
        </AppBar>
        <Box
          direction="row"
          flex
          overflow={{ horizontal: 'hidden' }}
          pad="20px"
        >
          {children}
        </Box>
      </Box>
    </Grommet>
  );
}
