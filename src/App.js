import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
// Components
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import MenuList from "./components/MenuList";
import About from "./components/About";
import Banner from "./components/Banner";
import "./scss/App.scss";
import Footer from "./components/Footer";
import Copyright from "./components/Copyright";
import CartContainer from "./components/Cart/CartContainer";

export const App = () => ({
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Header />
          <NavBar />
          <Banner />
          <Switch>
            <Route exact path="/" component={MenuList} />
            <Route exact path="/about" component={About} />
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
