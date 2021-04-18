import React from 'react';
import { useDispatch } from 'react-redux';
import { Button, Menu } from 'semantic-ui-react';
import { openModdal } from '../../app/common/modals/modalReducer';

export default function SignedOutMenu({ setAutenticaticated }) {
  const dispatch = useDispatch()
  return (
    <Menu.Item position='right'>
      <Button
        onClick={() => dispatch(openModdal({modalType: 'LoginForm'}))}
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
