import * as React from "react";
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  FlatList,
  ScrollView,
  Image,
  Dimensions,
} from "react-native";
import Star from "../../../shared/components/Icons/Star";
import Grow from "../../../shared/components/Icons/Grow";
import History from "../../../shared/components/Icons/History";
import { symbolToLogo } from "../../../shared/lib/data";

import { useAppDispatch, useAppSelector } from "../../store/hooks";
import {
  addFavorites,
  removeFavorites,
  selectInfos,
  infosSymbol,
} from "../../store/infos/infosSlice";
interface footerProps {
  history: {
    symbol: string;
    companyName: string;
    change: number;
    latestPrice: number;
  }[];
}

const Footer = (props: footerProps) => {
  const ref = React.useRef(null);
  const dispatch = useAppDispatch();
  const { favorites } = useAppSelector(selectInfos);
  const [count, setCount] = React.useState(0);

  const CustomStar = (fill, stroke, action, symbol) => {
    return (
      <TouchableOpacity onPress={() => dispatch(action(symbol))}>
        <Star
          width={23}
          height={23}
          fill={fill}
          stroke={stroke}
          strokeWidth={1.5}
        />
      </TouchableOpacity>
    );
  };

  const renderHistory = (value, key) => {
    const perChange =
      ((value.latestPrice - (value.latestPrice - value.change)) /
        value.latestPrice) *
      100;
    const uri = symbolToLogo(value.symbol.toLowerCase());

    return (
      <View style={styles.containerBlockCard} key={key}>
        <View style={styles.card}>
          {favorites.length !== 0
            ? favorites.filter((valueFav) =>
                valueFav.symbol.includes(value.symbol)
              ).length !== 0
              ? CustomStar("#0047BB", "#0047BB", removeFavorites, value.symbol)
              : CustomStar("#FFF", "#0047BB", addFavorites, value.symbol)
            : CustomStar("#FFF", "#0047BB", addFavorites, value.symbol)}
          <TouchableOpacity
            onPress={() => {
              dispatch(infosSymbol(value.symbol.toLowerCase()));
            }}
            style={styles.containerInfo}
          >
            <Image style={styles.image} source={{ uri }} resizeMode={"cover"} />
            <View style={styles.cardCompany}>
              <Text style={styles.symbol}>{value.symbol}</Text>
              <Text style={styles.companyName}>
                {value.companyName.split(" ")[0]}
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              dispatch(infosSymbol(value.symbol.toLowerCase()));
            }}
          >
            {perChange > 0 ? (
              <Text style={[styles.changePositive, styles.change]}>
                {perChange.toFixed(2)}%
                <Grow
                  width={18}
                  height={18}
                  stroke={"#79C300"}
                  transform={"translate(0 4)"}
                />
              </Text>
            ) : (
              <Text style={[styles.changeNegative, styles.change]}>
                {perChange.toFixed(2)}%
                <Grow
                  transform={"rotate(180) scale(-1, 1) translate(0 -4)"}
                  width={18}
                  height={18}
                  stroke={"#D64B45"}
                />
              </Text>
            )}
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  const calcPoints = (commd: string) => {
    let points = [];
    const xTimes = parseFloat(
      (ref.current.scrollWidth / ref.current.clientWidth).toFixed(1).toString()
    );
    for (let i = 0; i < xTimes; i++) {
      points.push(ref.current.clientWidth * i);
    }

    if (commd === "next") {
      if (count < points.length - 1) {
        setCount(count + 1);
      }
    } else if (commd === "prev") {
      setCount(0);
    }

    ref.current.scrollTo({ animated: true, x: points[count] });
  };
  return (
    <View style={styles.containerFooter}>
      <View style={styles.containerFooterHeader}>
        <View style={styles.containerFooterTitle}>
          <History width={23} height={23} strokeWidth={2} />
          <Text style={styles.footerTitle}>Empresas recentes</Text>
        </View>
        <View style={styles.containerControls}>
          <TouchableOpacity
            style={[styles.controls, styles.controlsLeft]}
            onPress={() => {
              calcPoints("prev");
            }}
          ></TouchableOpacity>
          <TouchableOpacity
            style={[styles.controls, styles.controlsRight]}
            onPress={() => {
              calcPoints("next");
            }}
          ></TouchableOpacity>
        </View>
      </View>
      <View>
        <>
          <ScrollView
            showsHorizontalScrollIndicator={false}
            horizontal
            ref={ref}
            style={styles.slide}
          >
            <FlatList
              contentContainerStyle={{ alignSelf: "flex-start" }}
              numColumns={props.history.length}
              key={props.history.length}
              keyExtractor={(item) => item.symbol}
              data={props.history}
              renderItem={({ item, index }) => {
                return renderHistory(item, index);
              }}
            />
          </ScrollView>
        </>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  containerFooter: {
    flex: 1,
    marginTop: 42,
    width: "100%",
  },
  containerFooterHeader: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between",
    width: "100%",
  },
  footerTitle: {
    fontFamily: "Graphik",
    fontWeight: "600",
    fontSize: 18,
    lineHeight: 27,
    marginLeft: 11,
  },
  containerFooterTitle: {
    flexDirection: "row",
    justifyContent: "flex-start",
    marginBottom: 17,
  },
  slide: {},
  containerControls: {
    flexDirection: "row",
  },
  controls: {
    marginLeft: 24,
    borderTopWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 2,
    borderBottomWidth: 2,
    borderRightColor: "#0047BB",
    borderBottomColor: "#0047BB",
    padding: 4,
  },
  controlsLeft: {
    transform: [
      {
        rotate: "135deg",
      },
    ],
  },
  controlsRight: {
    transform: [
      {
        rotate: "-45deg",
      },
    ],
  },
  containerBlockCard: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    marginRight: 11,
  },
  card: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 12,
    paddingHorizontal: 16,
    height: 69,
    backgroundColor: "#FFF",
    boxShadow: "0px 8px 20px -2px rgba(43, 37, 63, 0.1)",
    borderRadius: 8,
    width: 332,
    marginRight: 14,
  },
  containerInfo: {
    flex: 1,
    flexDirection: "row",
    marginLeft: 14,
  },
  cardCompany: {
    width: 128.58,
  },
  image: {
    width: 45,
    height: 45,
    marginRight: 12,
  },
  companyName: {
    fontFamily: "Graphik",
    fontWeight: "300",
    fontSize: 14,
    lineHeight: 19.6,
    color: "#14171A",
  },
  symbol: {
    fontFamily: "Graphik",
    fontWeight: "600",
    fontSize: 16,
    lineHeight: 28,
    letterSpacing: -0.0075,
    color: "#14171A",
  },
  change: {
    fontFamily: "Montserrat",
    fontStyle: "normal",
    fontWeight: "800",
    fontSize: 13,
    lineHeight: 16,
    marginBottom: 9,
  },
  changePositive: {
    color: "#79C300",
  },
  changeNegative: {
    color: "#D64B45",
  },
});
export default Footer;
