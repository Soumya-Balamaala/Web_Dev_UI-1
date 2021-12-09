import React from "react";

//Imports
import {
  Main_div,
  Part3_Title,
  Pics_div,
  Pics_Names_div,
  Section3,
  Writers,
  Writers1,
  Writers2,
  Pic,
  Name,
} from "../Styles/Part3-Items";

//Images

import Pic1 from "../Images/img2.jpeg";
import Pic2 from "../Images/img3.jpeg";
import Pic3 from "../Images/img4.jpeg";
import Pic4 from "../Images/img5.jpeg";
import Pic5 from "../Images/img6.jpg";
import Pic6 from "../Images/img7.jpeg";
import Pic7 from "../Images/img8.jpeg";
import Pic8 from "../Images/img9.jpg";

function Part3() {
  return (
    <Section3>
      <Main_div>
        <Part3_Title>Featured Writers</Part3_Title>

        <Writers>
          <Writers1>
            <Pics_div>
              <Pics_Names_div>
                <Pic src={Pic1} alt="React Image" />
                <Name>E P Braithwaite</Name>
              </Pics_Names_div>

              <Pics_Names_div>
                <Pic src={Pic2} alt="React Image" />
                <Name>Andrea Levy</Name>
              </Pics_Names_div>
            </Pics_div>
            <Pics_div>
              <Pics_Names_div>
                <Pic src={Pic3} alt="React Image" />
                <Name>Stephen King</Name>
              </Pics_Names_div>

              <Pics_Names_div>
                <Pic src={Pic4} alt="React Image" />
                <Name>Jorge Amado</Name>
              </Pics_Names_div>
            </Pics_div>
          </Writers1>
          <Writers2>
            <Pics_div>
              <Pics_Names_div>
                <Pic src={Pic5} alt="React Image" />
                <Name>Gayle Forman</Name>
              </Pics_Names_div>

              <Pics_Names_div>
                <Pic src={Pic6} alt="React Image" />
                <Name>Shashi Tharoor</Name>
              </Pics_Names_div>
            </Pics_div>
            <Pics_div>
              <Pics_Names_div>
                <Pic src={Pic7} alt="React Image" />
                <Name>J. K. Rowling</Name>
              </Pics_Names_div>

              <Pics_Names_div>
                <Pic src={Pic8} alt="React Image" />
                <Name>John Green</Name>
              </Pics_Names_div>
            </Pics_div>
          </Writers2>
        </Writers>
      </Main_div>
    </Section3>
  );
}

export default Part3;
