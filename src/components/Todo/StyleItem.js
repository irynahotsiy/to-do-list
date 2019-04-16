import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from 'styled-components';

export const TodoElement = styled.div `
    color: white;
    display: flex;
    align-items: center;
    padding: 5px 0;
`;

export const PinnedIcon = styled(FontAwesomeIcon)`
    cursor: pointer;
    display: ${props => props.pinned ? "block" : "none"};
    transform: rotate(-25deg);
    color: #e65586;
    padding: 5px 0;
`;

export const Checkbox = styled.div `
    width: 100%;
    display: flex;
    position: relative;
    justify-content: flex-start;
    align-items: center;
    label{
        text-transform: capitalize;
        width: 100%;
        text-decoration: ${props => props.crossed ? "line-through" : "none"};
        opacity:  ${props => props.crossed ? "0.4" : "1"};
    }
    input:last-child{
        text-transform: capitalize;
        width: 100%;
        background: transparent;
        border: none;
        color: white;
        font-size: 1rem;
        font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    }
`;

export const Input = styled.input `
    -webkit-appearance: none;
    appearance: none;
    cursor: pointer;
    width: 22px;
    height: 20px;
    margin: 0 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #3c424a;
    color: white;
    font-size: 1.1rem;
    box-shadow: 0px 0px 1.5px 0.5px #000000; 

    &:hover::after{
        content: "✔";
        
    }
    @media (max-width: 512px) {
        &:hover::after{
        content: "";
  }
}
  
    &:checked::after{
        content:  "✔";
    }

    `;


export const Icons = styled.div `
    display: flex;
    justify-content: flex-end;
`;

export const Icon = styled(FontAwesomeIcon)`
    cursor: pointer;
    padding: 5px 7px;
    margin: 0 2px;
    color: white;
    font-size: 1.1rem;
    &:hover {
        color: grey;
    }
`;