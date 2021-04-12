import React, { useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { Button, Container, Menu } from 'semantic-ui-react';
import SignedInMenu from './SignedInMenu';
import SignedOutMenu from './SignedOutMenu';

export default function NavBar({ setFormOpen }) { 
    const history = useHistory()
  const [autenticaticated, setAutenticaticated] = useState(false);

  function handleSignedOut () {
    setAutenticaticated(false)
    history.push('/')
  }
  return (
    <Menu inverted fixed='top'>
      <Container>
        <Menu.Item as={NavLink} exact to='/' header>
          <img src='/assets/logo.png' alt='logo' />
          Re-vents
        </Menu.Item>
        <Menu.Item as={NavLink} to='/events' name='Events' />
        <Menu.Item as={NavLink} to='/sandbox' name='SandBox' />
        {autenticaticated && (
          <Menu.Item as={NavLink} to='/createEvent'>
            <Button positive inverted content='Create Event' />
          </Menu.Item>
        )}
        {autenticaticated ? (
          <SignedInMenu signOut={handleSignedOut} />
        ) : (
          <SignedOutMenu setAutenticaticated={setAutenticaticated} />
        )}
      </Container>
    </Menu>
  );
}
