import React from "react";

//Imports
import {
  Section2,
  Image,
  Para,
  Para_SM_div,
  SM_div,
  Twitter,
  Facebook,
  Insta,
  Linkedin,
  Para_h4,
  Para_h2,
  Para_p,
} from "../Styles/Part2-Items";
import Book from "../Images/img1.jpeg";

function Part2() {
  return (
    <Section2>
      <Image src={Book} alt="UI Image" />

      <Para_SM_div>
        <Para>
          <Para_h4>Lorem Ipsum</Para_h4>
          <Para_h2>
            Lorem Ipsum <br />
            dolor sit amet
          </Para_h2>

          <Para_p>
            Lorem ipsum dolor sit amet, consectetur <br />
            adipiscing elit, sed do eiusmod tempor
            <br />
            incididunt ut labore et dolore magna aliqua.
          </Para_p>
        </Para>
        <SM_div>
          <Twitter />
          <Facebook />
          <Insta />
          <Linkedin />
        </SM_div>
      </Para_SM_div>
    </Section2>
  );
}

export default Part2;
