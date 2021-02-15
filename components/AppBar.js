import { Box } from 'grommet';
import React from 'react';

export default function AppBar(props) {
  return (
    <Box
      tag="header"
      direction="row"
      align="center"
      justify="between"
      background="brand"
      pad={{ left: 'medium', right: 'small', vertical: 'small' }}
      elevation="medium"
      style={{ zIndex: '1' }}
      {...props}
    />
  );
}

// export default function AppBar() {
//   return (
//     <>
//       <Heading level="3" margin="none">
//         Bearcat Uniform Master
//       </Heading>
//       <Button icon={<Tools />} onClick={() => setShowSidebar(!showSidebar)} />
//     </>
//   );
// }
