import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";
// Components
import Home from "./containers/Home";
import MenuList from "./containers/MenuList";
import About from "./containers/About";
import Contact from "./containers/Contact";
import CartContainer from "./components/Cart/CartContainer";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import "./scss/App.scss";

class App extends Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
  }

  componentDidMount() {
    const header = document.getElementById("myHeader");

    function myFunction() {
      if (window.pageYOffset > 990) {
        header.classList.add("sticky");
      } else {
        header.classList.remove("sticky");
      }
    }

    window.onscroll = function() {
      myFunction();
    };
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
          <Route
            render={({ location }) => (
              <TransitionGroup>
                <CSSTransition
                  key={location.key}
                  timeout={300}
                  classNames="fade"
                >
                  <Switch>
                    <Route exact path="/" component={MenuList} />
                    <Route exact path="/menu" component={MenuList} />
                    <Route exact path="/about" component={About} />
                    <Route exact path="/contact" component={Contact} />
                  </Switch>
                </CSSTransition>
              </TransitionGroup>
            )}
          />
          <CartContainer />
          <ScrollToTop />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
