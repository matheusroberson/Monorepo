import React from "react";
import { Container, Input, Button } from "../../shared/styles/global/styles";
import Logo from "../../shared/components/Icons/Logo";
import Search from "../../shared/components/Icons/Search";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import { useRouter } from "next/router";
import Sidebar from "../components/Sidebar";
import Marquee from "../components/Marquee";

const App = () => {
  const [text, onChangeText] = React.useState("");
  const router = useRouter();
  const [symbols, setSymbols] = React.useState([
    "TSLA",
    "GOOG",
    "NFLX",
    "CRM",
    "SHOP",
    "MA",
    "V",
  ]);
  const [status, setStatus] = React.useState(true);

  return (
    <View style={styles.containerHome}>
      <Sidebar styles={styles.sidebar} />
      <View style={styles.containerMain}>
        <View style={styles.containerMarquee}>
          <TouchableOpacity
            onPress={() => {
              setStatus((prevState) => !prevState);
            }}
            style={styles.containerButton}
          >
            <Text style={styles.buttonPause}></Text>
          </TouchableOpacity>
          <Marquee status={status} symbols={symbols} />
        </View>
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
              onKeyPress={(e) =>
                e.nativeEvent.key === "Enter"
                  ? router.push({
                      pathname: "/dashboard",
                      query: { symbol: text.toLowerCase() },
                    })
                  : null
              }
            />
            <Button
              borderRadiusLeft={0}
              onPress={() =>
                router.push({
                  pathname: "/dashboard",
                  query: { symbol: text.toLowerCase() },
                })
              }
            >
              <Search width={23} height={23} />
            </Button>
          </View>
        </Container>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  containerHome: {
    flex: 1,
    flexDirection: "row",
  },
  containerMarquee: {
    flexDirection: "row",
    alignItems: "center",
  },
  containerButton: {
    borderWidth: 2,
    borderColor: "#202020",
    padding: 4,
  },
  buttonPause: {
    width: 5,
    height: 15,
    borderLeftWidth: 17,
    borderColor: "#202020",
    borderStyle: "double",
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
  containerMain: {
    width: "100%",
  },
});

export default App;
