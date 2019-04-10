import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
// Components
import Home from "./containers/Home";
import MenuList from "./containers/MenuList";
import About from "./containers/About";
import Contact from "./containers/Contact";
import "./scss/App.scss";
import CartContainer from "./components/Cart/CartContainer";

class App extends Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
  }

  handleClick = () => {
    window.scrollTo(0, 990);
  };

  render() {
    const { handleClick } = this;
    return (
      <BrowserRouter>
        <div className="App">
          <Home handleClick={handleClick} />
          <Switch ref={this.myRef}>
            <Route exact path="/" component={MenuList} />
            <Route exact path="/about" component={About} />
            <Route exact path="/contact" component={Contact} />
          </Switch>
          <CartContainer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
