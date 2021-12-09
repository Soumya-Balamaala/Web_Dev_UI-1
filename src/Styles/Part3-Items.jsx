import styled from "styled-components";

export const Section3 = styled.div`
  display: flex;
  justify-content: center;
  padding: 40px 10px 30px;

  @media (max-width: 770px) {
    padding: 40px 10px 30px;
  }
`;

export const Main_div = styled.div`
  width: 750px;
  height: 500px;
  color: #ffffff;
  background-color: #004687;
  border-radius: 8px;

  @media (max-width: 770px) {
    width: 380px;
    height: 880px;
  }
`;

export const Part3_Title = styled.div`
  color: white;
  text-align: center;
  font-size: 28px;
  padding: 18px 5px 0;
  font-weight: bold;
`;

export const Writers = styled.div`
  padding: 10px;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const Writers1 = styled.div`
  padding: 5px;
  display: flex;
  align-items: center;

  @media (max-width: 770px) {
    flex-direction: column;
  }
`;

export const Writers2 = styled.div`
  padding: 5px;
  display: flex;
  align-items: center;

  @media (max-width: 770px) {
    flex-direction: column;
  }
`;

export const Pics_div = styled.div`
  display: flex;
  align-items: center;
`;

export const Pics_Names_div = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 10px;

  @media (max-width: 770px) {
    padding: 0;
  }
`;

export const Pic = styled.img`
  border-radius: 50%;
  width: 120px;
  height: 120px;
  padding: 8px;

  @media (max-width: 770px) {
    padding: 13px;
  }
`;

export const Name = styled.p`
  padding: 10px;
  font-size: 18px;
  font-family: "Montserrat", sans-serif;
`;
