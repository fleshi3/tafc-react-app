import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faClock,
  faPhone,
  faTruck
} from "@fortawesome/free-solid-svg-icons";
import MyMapComponent from "../components/Features/GoogleMaps";
import MenuTitle from "../components/Menu/MenuTitle";

const Contact = () => {
  return (
    <div className="Contact">
      <MenuTitle title="CONTACT" />
      <div className="ContactInfo" style={{ color: "white" }}>
        <div className="contactLeft">
          <span className="PacificoPlain">Contact Us</span>
          <p>
            Elit rerum consectetur odio aperiam explicabo itaque, fugit.
            Laudantium impedit sint et id ullam Voluptas ad consequuntur in
            quaerat accusantium aut quod dolorum. Quis soluta maxime eligendi
            voluptatum ducimus Rem
          </p>
          <div className="contactList">
            <ul>
              <li>
                <FontAwesomeIcon icon={faHome} />
                <span>&emsp;320 Racecourse Rd, Flemington VIC 3031</span>
              </li>
              <li>
                <h4>
                  <FontAwesomeIcon icon={faClock} />
                  &emsp;Open Hours
                </h4>
                <span>&emsp;&emsp;Mon &mdash; Thu: 5pm to 12am</span>
                <br />
                <span> &emsp;&emsp;Friday: 5pm to 1am</span>
                <br />
                <span>&emsp;&emsp;Weekends: 11am to 10pm</span>
              </li>
              <li>
                <FontAwesomeIcon icon={faPhone} />
                &emsp;<span>(+61) 0402 922 721</span>
              </li>
              <li>
                <FontAwesomeIcon icon={faTruck} />
                <span>
                  &emsp;<span>See form below</span>
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div className="contactRight">
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
      </div>
      <div className="ContactForm">
        <div className="formTitle">
          <span className="PacificoPlain">Get In Touch</span>
        </div>
        <form>
          <div className="names">
            <input type="text" name="firstname" placeholder="First Name" />
            <input type="text" name="lastname" placeholder="Last Name" />
          </div>
          <div className="information">
            <input type="text" name="email" placeholder="Email Address" />
            <input type="text" name="phone" placeholder="Phone Number" />
          </div>
          <div>
            <textarea
              className="message"
              rows="5"
              cols="70"
              placeholder="Message"
            />
          </div>
          <div>
            <button type="submit">Send</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
