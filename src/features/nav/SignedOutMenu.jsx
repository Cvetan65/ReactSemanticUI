import React from 'react';
import { Button, Menu } from 'semantic-ui-react';

export default function SignedOutMenu({ setAutenticaticated }) {
  return (
    <Menu.Item position='right'>
      <Button
        onClick={() => setAutenticaticated(true)}
        basic
        inverted
        content='Login'
      />
      <Button
        basic
        inverted
        content='Register'
        style={{ marginLeft: '0.5em' }}
      />
    </Menu.Item>
  );
}
