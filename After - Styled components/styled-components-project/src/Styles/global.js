import styled from 'styled-components';

export const media1 = `
    @media screen and (max-width: 766px)
`

export const Boton = styled.button`
    padding: 2em;
    background-color: beige;
    box-shadow: ${props => props.boxshadow || ""};
    color: ${props => props.textcolor || "black"}
`