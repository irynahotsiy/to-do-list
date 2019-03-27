import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from 'styled-components';

export const TodoElement = styled.div `
    color: white;
    display: flex;
    align-items: center;
    padding: 5px;
    text-decoration: ${props => props.crossed ? "line-through" : "none"};
`;

export const PinnedIcon = styled(FontAwesomeIcon)`
    display: ${props => props.pinned ? "block" : "none"};
    transform: rotate(-25deg);
    color: #e65586;
    padding: 0 5px;
`;

export const Checkbox = styled.div `
    width: 100%;
    display: flex;
    position: relative;
    justify-content: flex-start;
    align-items: center;
    label{
        text-transform: capitalize;
    }
`;

export const Input = styled.input `
    width: 20px;
    height: 20px;
    margin: 0 10px;
    background: red;
    box-shadow: inset 0px 1px 1px white, 0px 1px 3px rgba(0,0,0,0.5);
`;


export const Icons = styled.div `
    display: flex;
    justify-content: flex-end;
`;

export const Icon = styled(FontAwesomeIcon)`
    padding: 5px 10px;
    color: white;
    font-size: 1.1rem;
    &:first-of-type:hover {
        color: #e0572d;
    }
    &:last-of-type:hover {
        color: #e65586;
    }
`;