import React from "react";
import {
  Section1,
  Start_Button,
  Text_div1,
  Text_div2,
  Txt1,
  Txt1_1,
  Txt1_2,
  Txt1_span,
  Txt2,
} from "../Styles/Part1-Items";

//Imports

function Part1() {
  return (
    <Section1>
      <Text_div1>
        <Txt1_1>
          Home of <Txt1_span>100,000+</Txt1_span>
        </Txt1_1>
        <Txt1_2>books and podcasts</Txt1_2>
      </Text_div1>

      <Text_div2>
        <Txt2>
          Get the latest books and listen to the <br />
          latest podcast all at one place
        </Txt2>
      </Text_div2>

      <Start_Button>Get Started</Start_Button>
    </Section1>
  );
}

export default Part1;
