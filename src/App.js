import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
// Components
import NavBar from "./components/Navigation/NavBar";
import MenuList from "./containers/MenuList";
import About from "./containers/About";
import Contact from "./containers/Contact";
import Banner from "./components/Assets/Banner";
import "./scss/App.scss";
import Footer from "./components/Assets/Footer";
import Copyright from "./components/Assets/Copyright";
import CartContainer from "./components/Cart/CartContainer";

export const App = () => ({
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <NavBar />
          <Banner />
          <Switch>
            <Route exact path="/" component={MenuList} />
            <Route exact path="/about" component={About} />
            <Route exact path="/contact" component={Contact} />
          </Switch>
          <CartContainer />
          <Footer />
          <Copyright />
        </div>
      </BrowserRouter>
    );
  }
});

export default App;
