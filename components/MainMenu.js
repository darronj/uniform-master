import { Text } from 'grommet';
import Link from 'next/link';
import React from 'react';

export default function MainMenu({ children }) {
  return (
    <>
      <Link href="/">
        <Text>Home</Text>
      </Link>
      <Link href="/tabs">
        <Text>Tabs</Text>
      </Link>
      {children && (
        <>
          <hr />
          {children}
        </>
      )}
    </>
  );
}
