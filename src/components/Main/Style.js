import styled from 'styled-components';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Container = styled.section `
  border-radius: 0.4rem;
  background: #3c424a;
  margin: 30px auto;
  width: 500px;
  max-width: 100%;
  min-height: 600px;
  padding-bottom: 30px;
  @media (max-width: 512px) {
    margin: 0px auto;
  }
`;

export const Header = styled.header `
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
  padding: 5px 0;
  font-weight: 100;
  color: #f06292;
  border-bottom: 2px solid #383d42;
  text-transform: capitalize;
  span:last-of-type {
    padding: 0 10px;
    color: #908d90;
  }
  span:first-of-type{
     content: "✔";
     font-weight: bold;
  }
`;

export const Table = styled.section `
  padding: 0 30px;
`;

export const DayData = styled.div`
  padding: 70px 0 30px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0;
  color: white;
  font-weight: 100;
  p {
    line-height: 2rem;
    margin: 0;
  }
  p:first-of-type {
    font-size: 2rem;
  }
  p:last-of-type {
    color:#908d90;
  }
`;

export const InputBox = styled.div `
position: relative;
color: #646b75;
input {
  cursor: pointer;
  background: #343a40;
  color: grey;
  width: 100%;
  box-sizing: border-box;
  padding: 10px 10px 10px 40px;
  border: none;
  margin: 40px auto;
  font-weight: 500;
  font-size: medium;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 0.3rem;
}
`;
export const Icon = styled(FontAwesomeIcon) `
  position: absolute;
  margin-left: 15px;
  margin-top: 52px;
`;
export const Line = styled.hr `
border: none;
border-bottom: 2px solid #383d42;
`;



