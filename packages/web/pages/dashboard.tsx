import React from "react";
import { StyleSheet, View } from "react-native";
import { Container, Input, Button } from "../../shared/components/Home/styles";
import Sidebar from "../components/Sidebar";
import Profile from "../components/Profile";
import Favorites from "../components/Favorites";
import Main from "../components/Main";

const App = () => {
  return (
    <View style={styles.container}>
      <Sidebar styles={styles.sidebar} />
      <View style={styles.mainSection}>
        <View style={styles.dashSection}>
          <Main />
        </View>
        <View style={styles.profileSection}>
          <Profile />
          <Favorites />
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
    backgroundColor: "#f5f8fa",
  },
  sidebar: {
    width: 120,
    height: "100%",
    backgroundColor: "#FFFFFF",
  },
  dashSection: {
    backgroundColor: "#f5f8fa",
    borderTopLeftRadius: 24,
    width: "66%",
    paddingHorizontal: 22.5,
    paddingVertical: 32,
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
