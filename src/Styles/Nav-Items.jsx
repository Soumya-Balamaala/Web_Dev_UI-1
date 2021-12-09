import styled from "styled-components";

//Icons

import { CgMenu, CgClose, CgSearch } from "react-icons/cg";

/*........................... NAV MENU........................................*/

export const Navbar = styled.nav`
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  overflow: hidden;
  z-index: 99;
  background: white;

  //Breakpoints

  @media (max-width: 770px) {
    padding: 0;
  }
`;

export const Nav_li = styled.li`
  padding: 0 5px;
  list-style: none;

  @media (max-width: 770px) {
    padding: 15px;
  }
`;

export const Nav_a = styled.a`
  text-decoration: none;
  font-size: 18px;
  padding: 15px;
  font-family: "Roboto", sans-serif;
  font-weight: 600;
  color: #2c2b2b;

  @media (max-width: 770px) {
    padding: 15px 5px;
  }
`;
/*...................................................LEFT SIDE.......................................*/

export const Logo_items = styled.div`
  padding: 0 25px;
`;

export const Logo_h2 = styled.h2`
  font-size: 30px;
  font-weight: bold;
`;

export const H2_span = styled.b`
  color: #004687;
  font-size: 40px;
`;

/*...................................................RIGHT SIDE.......................................*/
export const Search_div = styled.div`
  padding: 0 15px;

  @media (max-width: 770px) {
    display: none;
  }
`;

export const Search_inp_div = styled.div`
  background-color: #ededed;
  height: 32px;
  display: flex;

  position: relative;
  align-items: center;
  border-radius: 23px;
  padding: 0 8px;
`;

export const Search_inp = styled.input`
  border-radius: 23px;
  height: 30px;
  background-color: transparent;
  border: none;

  &::placeholder {
    position: relative;
    left: 5px;
    top: 1px;
    font-size: 14.5px;
    color: gray;
  }

  :focus {
    outline: none;
  }

  @media (max-width: 770px) {
    display: none;
  }
`;

export const Search_icon1 = styled(CgSearch)`
  display: none;
  position: relative;
  right: 15px;

  @media (max-width: 770px) {
    display: block;
  }

  @media (min-width: 771px) and (max-width: 1024px) {
    display: none;
  }

  @media (min-width: 1025px) and (max-width: 1300px) {
    display: none;
  }
`;

export const Search_icon2 = styled(CgSearch)`
  position: relative;
  left: 2px;
  top: 0%.5px;
`;

/*.........................RESPONSIVE MENU.............................................................*/

export const Menu = styled.span`
  display: none;
  padding: 0 10px;
  font-size: 25px;
  cursor: pointer;

  @media (max-width: 770px) {
    display: Block;
  }
`;

export const Menu_bars = styled(CgMenu)`
  display: none;
  @media (max-width: 770px) {
    display: Block;
  }
`;

export const Menu_close = styled(CgClose)`
  display: none;

  @media (max-width: 770px) {
    display: Block;
  }
`;
