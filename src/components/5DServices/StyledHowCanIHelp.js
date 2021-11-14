import styled from 'styled-components';


export const OverlayDiv = styled.div`
    borderRadius: 25px;
    maxWidth: 85%;
    maxHeight: 110%;
    left: 7.5%;
    height: 31.25vh;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: rgba(4, 1, 130, 0.7);
    color: #fff;
    visibility: hidden;
    opacity: 0;
    transition: opacity .3s, 
    visibility .3s;
    height: 115% !important;

    
`

