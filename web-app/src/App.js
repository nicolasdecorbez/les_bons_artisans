import './App.css';
import DevrInformations from './components/DevrInformations';
import Home from './components/Home';
import ListProducts from'./components/ListProducts';
import CreateProduct from'./components/CreateProduct';
import ModifyProduct from'./components/ModifyProduct';
import DeleteProduct from'./components/DeleteProduct';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <DevrInformations />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/list">
            <ListProducts />
          </Route>
          <Route path="/create">
            <CreateProduct />
          </Route>
          <Route path="/modify">
            <ModifyProduct />
          </Route>
          <Route path="/delete">
            <DeleteProduct />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App;
