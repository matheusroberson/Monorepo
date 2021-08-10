import React from "react";
import { StyleSheet, ScrollView, View, Text } from "react-native";
import Logo from "../../../shared/components/Icons/Logo";
import Main from "../../../shared/components/Icons/Main";
import Link from "next/link";
import { useRouter } from "next/router";
interface Props {
  styles: {};
}

const App = (props: Props) => {
  const router = useRouter();
  return (
    <View style={props.styles}>
      <View>
        <View style={styles.sidebarLogo}>
          <Link href="/">
            <Logo width={46} height={46} />
          </Link>
        </View>
      </View>
      <ScrollView scrollsToTop={false} style={styles.menu}>
        {router.route !== "/" ? (
          <View style={styles.menuContainer}>
            <Text style={styles.item}></Text>
            <Text>
              <Main
                width={32}
                height={32}
                fill={"#0047BB"}
                stroke={"#0047BB"}
              />
            </Text>
          </View>
        ) : (
          <View style={styles.menuContainer}>
            <Text style={styles.itemDesactive}></Text>
            <Text>
              <Main
                width={32}
                height={32}
                fill={"#0047BB"}
                stroke={"#0047BB"}
              />
            </Text>
          </View>
        )}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  sidebarLogo: {
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center",
    cursor: "pointer",
  },
  item: {
    backgroundColor: "#F06400",
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
    marginRight: 32,
    height: 48,
    width: 4,
  },
  itemDesactive: {
    backgroundColor: "#A9ADB1",
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
