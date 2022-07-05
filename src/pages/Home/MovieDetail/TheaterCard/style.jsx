import styled from "styled-components";
import variableStyles from "styles/variable-styles";
import {Image} from 'antd-mobile';

const InfoCard = styled.div`
    background: ${variableStyles.backgroundDark};
    box-shadow: 3px 5px 21px 0px rgb(5 12 17);
    margin: 16px 0;
`;

const Inside = styled.div`
    padding: 19px 17px;
    display: flex;
`;

const Title = styled.h4`
    font-size: ${variableStyles.fontSize_14};
    color: ${variableStyles.textWhite};
`;

const IconArrow = styled.img`
    width: ${props => props.isOpen ? "20px" : "25px"};
    height: 25px;
    margin-left: 10px;
    cursor: pointer;
`;

const InfoContent = styled.div`
    color: ${variableStyles.textWhite};
    padding: 0 17px;
`;

export {InfoCard, Inside, Title, IconArrow, InfoContent};