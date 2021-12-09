import styled from "styled-components";

export const Section1 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 30px;
`;
export const Text_div1 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  font-family: "Merriweather", serif;
`;

export const Txt1_1 = styled.h2`
  font-size: 58px;

  //Breakpoints

  @media (max-width: 770px) {
    font-size: 28px;
  }
`;

export const Txt1_2 = styled.h2`
  font-size: 60px;

  @media (max-width: 770px) {
    font-size: 30px;
  }
`;

export const Txt1_span = styled.b`
  color: #004687;
  font-family: "Bigshot One", cursive;
`;

export const Text_div2 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 25px 0 30px;
`;

export const Txt2 = styled.p`
  font-size: 25px;
  font-family: "Nunito", sans-serif;
  color: #8b8b8b;

  @media (max-width: 770px) {
    font-size: 16px;
  }
`;

export const Start_Button = styled.button`
  border: none;
  background-color: #004687;
  font-family: "Nunito", sans-serif;
  border-radius: 5px;
  font-size: 16px;
  padding: 8px 25px;
  color: #ffffff;
`;
