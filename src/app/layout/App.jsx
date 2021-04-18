/** @format */

import React from 'react';
import { Route, useLocation } from 'react-router-dom';
import { Container } from 'semantic-ui-react';
import HomePage from '../../features/home/HomePage';
import EventDashboard from '../../features/events/eventDeshboard/EventDashboard';
import EventDetailedPage from '../../features/events/eventDetailed/EventDetailedPage';
import NavBar from '../../features/nav/NavBar';
import EventForm from '../../features/events/eventsForm/EventForm';
import SandBox from '../../features/sendbox/SandBox';
import ModalManager from '../common/modals/ModalManager';

export default function App() {
  const {key} = useLocation();
    return (
    <>
    <ModalManager />
      <Route exact path='/' component={HomePage} />
      <Route
        path={'/(.+)'}
        render={() => (
          <>
            <NavBar />
            <Container className='main'>
              <Route exact path='/events' component={EventDashboard} />
              <Route exact path='/sandbox' component={SandBox} />
              <Route path='/events/:id' component={EventDetailedPage} />
              <Route path={['/createEvent', '/manage/:id']} component={EventForm} key={key} />
            </Container>
          </>
        )}
      />
    </>
  );
}

