import styled from "styled-components";

//Icons
import { SiInstagram } from "react-icons/si";
import { FaFacebook, FaTwitter, FaLinkedinIn } from "react-icons/fa";

//
export const Section2 = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 770px) {
    flex-direction: column;
  }
`;

export const Image = styled.img`
  width: 450px;
  height: 300px;
  border-radius: 8px;
  position: relative;
  z-index: -10;
  left: 20px;

  @media (max-width: 770px) {
    left: 0;
    width: 350px;
    height: 230px;
  }
`;

export const Para_SM_div = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  position: relative;
  right: 20px;

  @media (max-width: 770px) {
    top: -50px;
    right: 0;
  }
`;

export const Para = styled.div`
  background-color: rgb(255, 255, 255);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 350px;
  height: 210px;
  position: sticky;
  padding: 10px;
  right: 5px;
  border-radius: 13px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
    rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;

  @media (max-width: 770px) {
    height: 30vh;
    width: 300px;
  }
`;

export const Para_h4 = styled.h4`
  color: #004687;
  font-size: 18px;
  padding: 16px 15px 0;
  text-transform: uppercase;
  font-family: "Montserrat", sans-serif;
  @media (max-width: 770px) {
    padding: 16px 16px 0;
  }
`;

export const Para_h2 = styled.h2`
  padding: 15px 15px 0;
  font-size: 30px;

  @media (max-width: 770px) {
    font-size: 23px;
    font-size: 30px;
  }
`;

export const Para_p = styled.p`
  padding: 16px 15px 3px;
  font-family: "Roboto", sans-serif;
  color: #aaaaaa;
  font-size: 16px;

  @media (max-width: 770px) {
    font-size: 14px;
  }
`;

//Social Media

export const SM_div = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  top: 15px;
  font-size: 20px;
  color: #808080;

  @media (max-width: 770px) {
    right: 10px;
    top: 30px;
  }
`;

export const Insta = styled(SiInstagram)`
  padding: 0 15px;
`;

export const Facebook = styled(FaFacebook)`
  padding: 0 15ppx;
`;

export const Twitter = styled(FaTwitter)`
  padding: 0 15px;
`;

export const Linkedin = styled(FaLinkedinIn)`
  padding: 0 15ppx;
`;
