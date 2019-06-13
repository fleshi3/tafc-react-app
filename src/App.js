import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import MediaQuery from "react-responsive";
// Components
import Home from "./containers/Home";
import HomeMobile from "./containers/HomeMobile";
import MenuList from "./containers/MenuList";
import About from "./containers/About";
import Contact from "./containers/Contact";
import CartContainer from "./components/Cart/CartContainer";
import Popup from "./components/Features/Popup";
import "./scss/App.scss";

class App extends Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
    this.state = { showPopup: false, menuVisible: false };
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
    this.setState({
      showPopup: true
    });
  };

  handlePopup = () => {
    this.setState({
      showPopup: false
    });
  };

  showMenu = () => {
    const { menuVisible } = this.state;
    this.setState({
      menuVisible: !menuVisible
    });
  };

  render() {
    const { handleClick, handlePopup, showMenu } = this;
    const { showPopup, menuVisible } = this.state;
    const isMobile = window.innerWidth > 375;
    return (
      <BrowserRouter basename="/tafc-react-app">
        <div className="App">
          {showPopup ? <Popup handlePopup={handlePopup} /> : null}
          {isMobile ? (
            <Home handleClick={handleClick} />
          ) : (
            <HomeMobile
              handleClick={handleClick}
              showMenu={showMenu}
              menuVisible={menuVisible}
            />
          )}
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
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
