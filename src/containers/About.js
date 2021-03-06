import React from "react";
import MenuTitle from "../components/Menu/MenuTitle";
import Footer from "../components/Assets/Footer";
import Copyright from "../components/Assets/Copyright";

const About = () => {
  return (
    <div className="About">
      <MenuTitle title="STORY" />
      <div className="Story" style={{ color: "white" }}>
        <div className="Segment">
          <div className="storyImage">
            <img src="./img/menu/breastfillet.jpg" alt="" />
            <small>Insert Caption Here</small>
          </div>
          <div className="storyText">
            <span className="Pacifico">THE RECIPE</span>
            <div className="vertLine" />
            <div className="quoteText">
              &quot;Dolor praesentium ipsam atque perferendis eum. Sapiente
              temporibus consequuntur dolorem debitis nemo.&quot;
            </div>
            <p>
              Elit reiciendis debitis placeat nisi dolorum Temporibus cumque
              numquam deleniti obcaecati consequatur commodi? Et tempora animi
              magni ea labore. Laborum sit nesciunt libero ad provident? Natus
              tempora ratione reprehenderit odio Lorem enim voluptate neque
              distinctio esse Ut repellendus tenetur consequatur est expedita
              odio quo Dolore est corrupti iusto animi maxime provident Sint
              quibusdam reiciendis vero odio explicabo quibusdam. Consequuntur
              voluptas Dolor exercitationem maiores iste ex corrupti. Commodi
              aperiam magni sequi optio iusto quasi Quam tenetur neque tempore
              nobis facilis Laborum accusamus eos amet veniam quibusdam. Saepe
              rem tempora obcaecati similique. Ipsum amet dolor quos blanditiis
              ea reiciendis quod harum? Maiores soluta quo possimus enim
              veritatis voluptatem, accusantium? Blanditiis ab esse eveniet
              ullam quaerat. Praesentium voluptate incidunt similique accusamus
              veniam incidunt?
            </p>
          </div>
        </div>
        <br />
        <div className="Segment">
          <div className="storyImage">
            <img src="./img/truck.jpg" alt="" />
            <small>Inser Caption Here</small>
          </div>
          <div className="storyText">
            <span className="Pacifico">THE TRUCK</span>
            <div className="vertLine" />
            <p>
              Elit reiciendis debitis placeat nisi dolorum Temporibus cumque
              numquam deleniti obcaecati consequatur commodi? Et tempora animi
              magni ea labore. Laborum sit nesciunt libero ad provident? Natus
              tempora ratione reprehenderit odio Lorem enim voluptate neque
              distinctio esse Ut repellendus tenetur consequatur est expedita
              odio quo Dolore est corrupti iusto animi maxime provident Sint
              quibusdam reiciendis vero odio explicabo quibusdam. Consequuntur
              voluptas Dolor exercitationem maiores iste ex corrupti. Commodi
              aperiam magni sequi optio iusto quasi Quam tenetur neque tempore
              nobis facilis Laborum accusamus eos amet veniam quibusdam. Saepe
              rem tempora obcaecati similique. Ipsum amet dolor quos blanditiis
              ea reiciendis quod harum? Maiores soluta quo possimus enim
              veritatis voluptatem, accusantium? Blanditiis ab esse eveniet
              ullam quaerat. Praesentium voluptate incidunt similique accusamus
              veniam incidunt?
            </p>
          </div>
        </div>
        <div className="Segment">
          <div className="storyImage">
            <img src="./img/store.jpg" alt="" />
            <small>Insert Caption Here</small>
          </div>
          <div className="storyText">
            <span className="Pacifico">THE STORE</span>
            <div className="vertLine" />
            <p>
              Elit reiciendis debitis placeat nisi dolorum Temporibus cumque
              numquam deleniti obcaecati consequatur commodi? Et tempora animi
              magni ea labore. Laborum sit nesciunt libero ad provident? Natus
              tempora ratione reprehenderit odio Lorem enim voluptate neque
              distinctio esse Ut repellendus tenetur consequatur est expedita
              odio quo Dolore est corrupti iusto animi maxime provident Sint
              quibusdam reiciendis vero odio explicabo quibusdam. Consequuntur
              voluptas Dolor exercitationem maiores iste ex corrupti. Commodi
              aperiam magni sequi optio iusto quasi Quam tenetur neque tempore
              nobis facilis Laborum accusamus eos amet veniam quibusdam. Saepe
              rem tempora obcaecati similique. Ipsum amet dolor quos blanditiis
              ea reiciendis quod harum? Maiores soluta quo possimus enim
              veritatis voluptatem, accusantium? Blanditiis ab esse eveniet
              ullam quaerat. Praesentium voluptate incidunt similique accusamus
              veniam incidunt?
            </p>
          </div>
        </div>
      </div>
      <Footer />
      <Copyright />
    </div>
  );
};

export default About;
