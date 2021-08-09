import React from 'react';
import {Container, Input} from '../../shared/components/Home/styles';
import Logo from '../../shared/components/Logo';
import {Button, View} from 'react-native';
import {getInfosSymbol} from '../../shared/api';

const App = () => {
  const [text, onChangeText] = React.useState('');

  const handleLatestPrice = (props: string) => {
    getInfosSymbol(props);

    // redirect alternate.tsx
  };

  return (
    <>
      <Container>
        <View style={{marginBottom: 250}}>
          <Logo width={146} height={146} />
          <Input
            onChangeText={(text: string) => onChangeText(text)}
            placeholder="Buscar Empresa"
            value={text}
            paddingHorizontal={20}
            borderColor={'#E5E5E5'}
            marginTop={15}
            bordeRadiusRight={10}
          />
        </View>
      </Container>
      <Button
        onPress={() => handleLatestPrice(text.toLowerCase())}
        title="Buscar"
        color="#0047BB"
      />
    </>
  );
};

export default App;
