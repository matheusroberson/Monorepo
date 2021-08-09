import * as React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Input, Button } from "../../../shared/components/Home/styles";
import Search from "../../../shared/components/Icons/Search";
import MainDash from "../../../shared/components/Icons/Main";
import Chart from "../Chart";
import Footer from "../Footer";

const Main = () => {
  const [text, onChangeText] = React.useState("");

  return (
    <View style={styles.containerMain}>
      <View style={styles.containerHeaderTitle}>
        <MainDash width={20} height={20} stroke={"#0047BB"} strokeWidth={1.5} />
        <Text style={styles.headerTitle}>Dashborad</Text>
      </View>
      <View style={styles.containerInputs}>
        <Input
          onChangeText={(text: string) => onChangeText(text)}
          placeholder="Buscar empresa"
          value={text}
          paddingHorizontal={15}
          borderColor={"#b1b1b1"}
          marginTop={0}
          bordeRadiusRight={0}
        />
        <Button onPress={() => console.log(text.toLowerCase())}>
          <Search width={14} height={14} />
        </Button>
      </View>
      <Chart />
      <Footer />
    </View>
  );
};

const styles = StyleSheet.create({
  containerMain: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  containerHeaderTitle: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    width: "100%",
  },
  headerTitle: {
    fontFamily: "Graphik",
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: 24,
    lineHeight: 28,
    marginLeft: 11,
  },
  containerInputs: {
    flexDirection: "row",
    marginTop: 32,
    width: "100%",
  },
});

export default Main;
