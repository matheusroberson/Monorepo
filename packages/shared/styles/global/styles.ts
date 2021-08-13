import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #f8f8f8;
`;

export const Input = styled.TextInput`
  height: 40px;
  width: ${props => `${props.width}%`};;
  margin-top: ${props => `${props.marginTop}px`};
  border-width: 1px;
  border-color: ${props => `${props.borderColor}`};
  border-radius: 10px;
  border-top-right-radius: ${props => `${props.bordeRadiusRight}px`};
  border-bottom-right-radius: ${props => `${props.bordeRadiusRight}px`};
  padding: 10px ${props => `${props.paddingHorizontal}px`};
  background-color: ${props => `${props.backgroundColor}`};
`;

export const Text = styled.Text`
  color: #FFF;
`;

export const Button = styled.TouchableOpacity`
  padding: 7px 8px 0px 8px;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  border-top-left-radius: ${props => `${props.borderRadiusLeft}`};
  border-bottom-left-radius: ${props => `${props.borderRadiusLeft}`};
  background-color: #0047BB;
`;