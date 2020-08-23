import React, { Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { GlobalStyle } from 'styles';

import { Home, Footer } from 'components';

const App = () => {
  return (
    <Fragment>
      <GlobalStyle />
      <Router history={createBrowserHistory}>
        <Switch>
          <Route exact path='/' render={() => <Home />} />
        </Switch>
        <Footer />
      </Router>
    </Fragment>
  );
};

export default App;
