import React from "react";
import { StyleSheet, ScrollView, View, Text } from "react-native";
import Logo from "../../../shared/components/Icons/Logo";
import Main from "../../../shared/components/Icons/Main";
interface Props {
  styles: {};
}

const App = (props: Props) => {
  const onItemSelected = (item: string) => {};

  return (
    <View style={props.styles}>
      <View>
        <View style={styles.sidebarLogo}>
          <Logo width={46} height={46} />
        </View>
      </View>
      <ScrollView scrollsToTop={false} style={styles.menu}>
        <View style={styles.menuContainer}>
          <Text style={styles.item}></Text>
          <Text onPress={() => onItemSelected("About")}>
            <Main width={32} height={32} />
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  sidebarLogo: {
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  item: {
    backgroundColor: "#F06400",
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
    marginRight: 32,
    height: 48,
    width: 4,
  },
  menu: {
    marginTop: 46,
  },
  menuContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
});

export default App;
