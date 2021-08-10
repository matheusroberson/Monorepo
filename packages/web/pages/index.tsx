import React from "react";
import { Container, Input, Button, Text } from "../../shared/styles/styles";
import Logo from "../../shared/components/Icons/Logo";
import Search from "../../shared/components/Icons/Search";
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
            placeholder="Buscar empresa"
            value={text}
            paddingHorizontal={15}
            borderColor={"#b1b1b1"}
            marginTop={0}
            bordeRadiusRight={0}
            width={100}
          />
          <Button
            borderRadiusLeft={0}
            onPress={() => handleLatestPrice(text.toLowerCase())}
          >
            <Search width={23} height={23} />
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
