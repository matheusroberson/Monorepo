import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Container, Input, Button } from "../../shared/components/Home/styles";
import Sidebar from "../components/Sidebar";
import Profile from "../components/Profile";

const App = () => {
  return (
    <View style={styles.container}>
      <Sidebar styles={styles.sidebar} />
      <View style={styles.mainSection}>
        <View style={styles.dashSection}>
          <Text>Block A</Text>
        </View>
        <View style={styles.profileSection}>
          <Profile />
        </View>
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
    backgroundColor: "#FFFFFF",
  },
  mainSection: {
    flex: 1,
    flexDirection: "row",
    height: "100%",
    width: "100%",
    borderTopLeftRadius: 24,
    backgroundColor: "#C4C4C4",
  },
  sidebar: {
    width: 120,
    height: "100%",
    backgroundColor: "#FFFFFF",
  },
  dashSection: {
    backgroundColor: "#C4C4C4",
    borderTopLeftRadius: 24,
    width: "66%",
  },
  profileSection: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-start",
    paddingVertical: 32,
    paddingHorizontal: 20,
    backgroundColor: "#FFFFFF",
    width: "34%",
  },
});

export default App;
