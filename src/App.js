import React, { Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { GlobalStyle } from 'styles';
import { Home, Footer, Reservation } from 'components';

function App() {
  return (
    <Fragment>
      <GlobalStyle />
      <Router >
        <Switch>
          <Route exact path='/' render={() => <Home />} />
          <Route exact path='/reservation' render={() => <Reservation />} />
        </Switch>
        <Footer />
      </Router>
    </Fragment>
  );
}

export default App;
