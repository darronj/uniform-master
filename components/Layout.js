import {
  Box,
  Button,
  Collapsible,
  Grommet,
  Heading,
  Layer,
  ResponsiveContext
} from 'grommet';
import { FormClose, Menu } from 'grommet-icons';
import React, { useState } from 'react';
import AppBar from './AppBar';
import MainMenu from './MainMenu';
import THEME from './Theme';

export default function Layout({ children }) {
  const [showSidebar, setShowSidebar] = useState(false);
  return (
    <Grommet theme={THEME} full>
      <ResponsiveContext.Consumer>
        {(size) => (
          <Box fill>
            <AppBar>
              <Heading level="3" margin="none">
                Bearcat Uniform Master
              </Heading>
              <Button
                icon={<Menu />}
                onClick={() => setShowSidebar(!showSidebar)}
              />
            </AppBar>
            <Box
              direction="row"
              flex
              overflow={{ horizontal: 'hidden' }}
              pad="20px"
            >
              {!showSidebar || size !== 'small' ? (
                <Collapsible direction="horizontal" open={showSidebar}>
                  <Box
                    flex
                    width="medium"
                    background="light-2"
                    elevation="small"
                    align="center"
                    justify="center"
                  >
                    <MainMenu />
                  </Box>
                </Collapsible>
              ) : (
                <Layer>
                  <Box
                    background="light-2"
                    tag="header"
                    justify="end"
                    align="center"
                    direction="row"
                  >
                    <Button
                      icon={<FormClose />}
                      onClick={() => setShowSidebar(false)}
                    />
                  </Box>
                  <Box
                    fill
                    background="light-2"
                    align="center"
                    justify="center"
                  >
                    <MainMenu />
                  </Box>
                </Layer>
              )}
              <Box
                className="main-viewport"
                flex
                align="center"
                justify="start"
              >
                {children}
              </Box>
            </Box>
          </Box>
        )}
      </ResponsiveContext.Consumer>
    </Grommet>
  );
}
