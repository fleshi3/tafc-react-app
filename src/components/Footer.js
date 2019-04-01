import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faClock,
  faPhone,
  faTruck
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faInstagram,
  faTwitter
} from "@fortawesome/free-brands-svg-icons";
import MyMapComponent from "./GoogleMaps";

function Footer() {
  return (
    <footer id="Footer">
      <div className="branding">
        <div>
          <span>The Art of Fried Chicken</span>
        </div>
        <br />
        <small className="textSecondary">STAY CONNECTED</small>
        <div className="links">
          <a href="https://www.facebook.com/theartoffriedchicken/">
            <div className="linksBubble">
              <FontAwesomeIcon icon={faFacebookF} size="lg" />
            </div>
          </a>
          <a href="https://www.instagram.com/theartoffriedchicken/">
            <div className="linksBubble">
              <FontAwesomeIcon icon={faInstagram} size="lg" />
            </div>
          </a>
          <a href="https://www.twitter.com/TAFC_FoodTruck">
            <div className="linksBubble">
              <FontAwesomeIcon icon={faTwitter} size="lg" />
            </div>
          </a>
        </div>
        <small>tafc@gmail.com</small>
      </div>
      <div className="footerNav">
        <ul>
          <li>
            <h4>
              <FontAwesomeIcon icon={faHome} />
              Our Store
            </h4>
            <span> 320 Racecourse Rd, Flemington VIC 3031</span>
          </li>
          <li>
            <h4>
              <FontAwesomeIcon icon={faClock} />
              Open Hours
            </h4>
            <span style={{ color: "orange" }}>
              {" "}
              Mon &mdash; Thu: 5pm to 12am
            </span>
            <br />
            <span> Friday: 5pm to 1am</span>
            <br />
            <span>Weekends: 11am to 10pm</span>
          </li>
          <li>
            <h4>
              <FontAwesomeIcon icon={faPhone} />
              Call Us
            </h4>
            <span>(+61) 0402 922 721</span>
          </li>
          <li>
            <h4>
              <FontAwesomeIcon icon={faTruck} />
              Catering
            </h4>
            <span>
              <a href="/">Go to Road Map </a>
            </span>
          </li>
        </ul>
      </div>
      <div className="footerNews">
        <MyMapComponent
          isMarkerShown
          googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyDYLAAjyI73CThocNF6AoyR_uB6p4sRKlQ&callback=initMap"
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={
            <div
              className="MyMapComponent"
              style={{ height: `100%`, width: `100%` }}
            />
          }
          mapElement={
            <div className="MyMapElement" style={{ height: `100%` }} />
          }
        />
      </div>
    </footer>
  );
}

export default Footer;
