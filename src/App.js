
import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Main from './components/Main';

class App extends React.Component {
  render() {
    return (
      <>
        <Header />
        <BrowserRouter>
          <Switch>
            <Route exact path='/'>
              <Main />
            </Route>
            <Route exact path='/favorite'>
              {/* <FavoriteDigimons /> */}
            </Route>
          </Switch>
        </BrowserRouter>
      </>
    )
  }
}

export default App;
