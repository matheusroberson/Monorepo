import * as React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useRouter } from "next/router";
import { Input, Button } from "../../../shared/styles/styles";
import Search from "../../../shared/components/Icons/Search";
import MainDash from "../../../shared/components/Icons/Main";
import Link from "../../../shared/components/Link";
import Chart from "../Chart";
import Footer from "../Footer";

import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { infosSymbol, selectInfos } from "../../store/infos/infosSlice";

interface mainProps {
  symbol: string;
}

const Main = (props: mainProps) => {
  const dispatch = useAppDispatch();
  const infos = useAppSelector(selectInfos);
  const router = useRouter();
  const [text, onChangeText] = React.useState("");

  React.useEffect(() => {
    dispatch(infosSymbol(props.symbol));
  }, []);

  return (
    <View style={styles.containerMain}>
      <View style={styles.containerHeader}>
        <View style={styles.containerHeaderTitle}>
          <MainDash
            width={20}
            height={20}
            stroke={"#0047BB"}
            strokeWidth={1.5}
          />
          <Text style={styles.headerTitle}>Dashborad</Text>
        </View>
        <View>
          <Link />
        </View>
      </View>
      <View style={styles.containerInputs}>
        <Input
          onChangeText={(text: string) => onChangeText(text)}
          placeholder="Buscar empresa"
          value={text}
          paddingHorizontal={15}
          borderColor={"#E1E0E7"}
          marginTop={0}
          backgroundColor={"#FFFFFF"}
          bordeRadiusRight={0}
          width={30}
        />
        <Button
          borderRadiusLeft={0}
          onPress={() => dispatch(infosSymbol(text.toLowerCase()))}
        >
          <Search width={23} height={23} />
        </Button>
      </View>
      <Chart infos={infos} />
      <Footer history={infos.history} />
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
  containerHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  containerHeaderTitle: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
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
