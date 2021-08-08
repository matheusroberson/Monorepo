import React, { Dispatch } from "react";
import {
  Container,
  Input,
  Button,
  Text,
} from "../../shared/components/Home/styles";
import Logo from "../../shared/components/Logo";
import { View, StyleSheet } from "react-native";
import { getInfosSymbol } from "../../shared/api";

const App = () => {
  const [text, onChangeText] = React.useState("");

  const handleLatestPrice = (props: string) => {
    getInfosSymbol(props);

    // redirect alternate.tsx
  };

  return (
    <Container>
      <Container style={{ marginBottom: 240 }}>
        <Logo />
        <View style={styles.container}>
          <Input
            onChangeText={(text: string) => onChangeText(text)}
            placeholder="Buscar Empresa"
            value={text}
            paddingHorizontal={15}
            borderColor={"#b1b1b1"}
            marginTop={0}
            bordeRadiusRight={0}
          />
          <Button onPress={() => handleLatestPrice(text.toLowerCase())}>
            <Text>º_º</Text>
          </Button>
        </View>
      </Container>
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginTop: "15px",
  },
});

export default App;
