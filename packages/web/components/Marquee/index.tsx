import * as React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from "react-native";
import Marquee from "react-fast-marquee";
import { useRouter } from "next/router";
import { getMultiInfosSymbos } from "../../../shared/api/index";
import { Arrow, Change, PerChange } from "../../../shared/styles/web/styles";

interface marqueeProps {
  symbols: string[];
  status: boolean;
}

const ViewMarquee = (props: marqueeProps) => {
  const [symbols, setSymbols] = React.useState([]);
  const router = useRouter();

  React.useEffect(() => {
    if (props.symbols) {
      getMultiInfosSymbos(props.symbols).then((response) => {
        setSymbols(response);
      });
    }
  }, []);

  const renderTextMarquee = (value, key) => {
    const perChange =
      ((value.latestPrice - (value.latestPrice - value.change)) /
        value.latestPrice) *
      100;
    return (
      <TouchableOpacity
        key={key}
        onPress={() =>
          router.push({
            pathname: "/dashboard",
            query: { symbol: value.symbol.toLowerCase() },
          })
        }
        style={styles.containerButton}
      >
        <Text style={styles.symbol}>{value.symbol}</Text>
        <Text style={styles.latestPrice}>{value.latestPrice}</Text>
        {perChange > 0 ? (
          <>
            <Arrow borderBottomWidth={12} borderBottomColor={"#1ecd93"}>
              {value.arrow}
            </Arrow>
            <Change backgroundColor={"#9cf4dc"}>+{value.change}</Change>
            <PerChange backgroundColor={"#9cf4dc"}>
              {perChange.toFixed(2)}%
            </PerChange>
          </>
        ) : (
          <>
            <Arrow borderTopWidth={12} borderTopColor={"#ff433d"}>
              {value.arrow}
            </Arrow>
            <Change backgroundColor={"#ffe1e1"}>{value.change}</Change>
            <PerChange backgroundColor={"#ffe1e1"}>
              {perChange.toFixed(2)}%
            </PerChange>
          </>
        )}
      </TouchableOpacity>
    );
  };

  return (
    <Marquee pauseOnHover play={props.status}>
      <FlatList
        contentContainerStyle={{ alignSelf: "flex-start", width: "100%" }}
        numColumns={symbols.length}
        key={symbols.length}
        keyExtractor={(item) => item.symbol}
        data={symbols}
        renderItem={({ item, index }) => {
          return renderTextMarquee(item, index);
        }}
      />
    </Marquee>
  );
};

const styles = StyleSheet.create({
  containerButton: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  symbol: {
    fontFamily: "Graphik",
    fontWeight: "600",
    fontSize: 16,
    lineHeight: 28,
    letterSpacing: -0.0075,
    color: "#14171A",
  },
  latestPrice: {
    fontFamily: "Graphik",
    fontWeight: "400",
    fontSize: 16,
    lineHeight: 20,
    letterSpacing: -0.0075,
    color: "#14171A",
    marginLeft: 5,
  },
});
export default ViewMarquee;
