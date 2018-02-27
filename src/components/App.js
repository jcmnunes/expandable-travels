import React from 'react';
import Navbar from './Navbar';
import List from './List';
import Travel from './Travel';
import { Route } from 'react-router-dom';

const App = () => {
  return (
    <div>
      <header>
        <Navbar />
      </header>

      <main>
        <Route exact path="/" component={List} />
        <Route exact path="/travel" component={Travel} />
      </main>
    </div>
  );
};

export default App;
