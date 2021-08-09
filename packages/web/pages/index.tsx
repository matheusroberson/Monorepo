import React from "react";
import {
  Container,
  Input,
  Button,
  Text,
} from "../../shared/components/Home/styles";
import Logo from "../../shared/components/Icons/Logo";
import { View, StyleSheet } from "react-native";
import { getInfosSymbol } from "../../shared/api";
import { useRouter } from "next/router";

const App = () => {
  const [text, onChangeText] = React.useState("");
  const router = useRouter();

  const handleLatestPrice = (props: string) => {
    getInfosSymbol(props);

    router.push("/dashboard");
  };

  return (
    <Container>
      <Container style={{ marginBottom: 240 }}>
        <Logo width={146} height={146} />
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
