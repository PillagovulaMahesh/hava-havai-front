import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './routes/HomePage';
import AirportDetailPage from './routes/AirportDetailPage';
import TerminalDetailPage from './routes/TerminalDetailPage';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/airport/:id" component={AirportDetailPage} />
        <Route path="/airport/:id/terminal/:terminalId" component={TerminalDetailPage} />
      </Switch>
    </Router>
  );
}

export default App;
