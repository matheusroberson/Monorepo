import styled from 'styled-components/native';

export const Arrow = styled.Text`
    background-color: #FFF;
    border-radius: 1;
    width: 12px;
    height: 6px;
    margin-right: 7px;
    margin-left: 5px;
    border-top-color: ${props => `${props.borderTopColor}`};
    border-bottom-color: ${props => `${props.borderBottomColor}`};
    border-left-color: #FFF;
    border-right-color: #FFF;
    border-top-width: ${props => `${props.borderTopWidth}px`};
    border-bottom-width: ${props => `${props.borderBottomWidth}px`};
    border-left-width: 6px;
    border-right-width: 6px;
    border-style: "solid";
`;

export const Change = styled.Text`
    background-color: ${props => `${props.backgroundColor}`};
    padding-top: 2;
    padding-bottom: 2;
`;

export const PerChange = styled.Text`
    background-color: ${props => `${props.backgroundColor}`};
    padding-top: 2;
    padding-bottom: 2;
    margin-left: 4;
`;
