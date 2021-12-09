import React, { useState } from "react";
import { Navlist } from "../List/Navlist";

//Imports
import {
  Logo_items,
  Menu_bars,
  Menu_close,
  Navbar,
  Menu,
  Logo_h2,
  H2_span,
  Search_inp_div,
  Search_div,
  Search_inp,
  Search_icon1,
  Search_icon2,
  Nav_li,
  Nav_a,
} from "../Styles/Nav-Items";

function Nav() {
  const [Click, setClick] = useState(false);

  const handleClick = () => setClick(!Click);
  const closeClick = () => setClick(false);

  return (
    <Navbar>
      <Menu onClick={handleClick}>
        {Click ? <Menu_close /> : <Menu_bars />}
      </Menu>
      <Logo_items>
        <Logo_h2>
          BookPod<H2_span>.</H2_span>
        </Logo_h2>
      </Logo_items>

      <ul className={Click ? "Nav_ul open " : "Nav_ul"}>
        {Navlist.map((item, index) => {
          return (
            <Nav_li key={index}>
              <Nav_a href="/" onClick={closeClick}>
                {item.title}
              </Nav_a>
            </Nav_li>
          );
        })}
      </ul>

      <Search_icon1 size="1.5rem" />
      <Search_div>
        <Search_inp_div>
          <Search_icon2 color="#ababab" />
          <Search_inp placeholder=" Search..." />
        </Search_inp_div>
      </Search_div>
    </Navbar>
  );
}

export default Nav;
