import React from "react";
import { StyleSheet, View, Dimensions } from "react-native";
import {
  Container,
  Input,
  Button,
  Text,
} from "../../shared/components/Home/styles";
import Sidebar from "../components/Sidebar";

const App = () => {
  return (
    <View style={styles.container}>
      <Sidebar styles={styles.anotherblock} />
      <View style={styles.block}>
        <Text>Teste</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    width: "100%",
    // backgroundColor: "blue",
  },
  block: {
    // backgroundColor: "purple",
    height: "100%",
  },
  anotherblock: {
    width: 120,
    height: "100%",
    backgroundColor: "#FFFFFF",
  },
});

export default App;
