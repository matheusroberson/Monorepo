import React from "react";
import { Container, Input, Button } from "../../shared/styles/styles";
import Logo from "../../shared/components/Icons/Logo";
import Search from "../../shared/components/Icons/Search";
import { View, StyleSheet } from "react-native";
import { useRouter } from "next/router";
import Sidebar from "../components/Sidebar";

const App = () => {
  const [text, onChangeText] = React.useState("");
  const router = useRouter();

  return (
    <View style={styles.containerHome}>
      <Sidebar styles={styles.sidebar} />
      <Container>
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
            onPress={() =>
              router.push(`/dashboard?symbol=${text.toLowerCase()}`)
            }
          >
            <Search width={23} height={23} />
          </Button>
        </View>
      </Container>
    </View>
  );
};

const styles = StyleSheet.create({
  containerHome: {
    flex: 1,
    flexDirection: "row",
  },
  container: {
    flexDirection: "row",
    marginTop: "15px",
  },
  sidebar: {
    width: 120,
    height: "100%",
    backgroundColor: "#FFFFFF",
  },
});

export default App;
