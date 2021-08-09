import React from "react";
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Image,
} from "react-native";
import Star from "../../../shared/components/Icons/Star";
import Grow from "../../../shared/components/Icons/Grow";
import History from "../../../shared/components/Icons/History";

const Footer = () => {
  const ref = React.useRef(null);

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
              ref.current.scrollTo({ x: -500, animated: true });
            }}
          ></TouchableOpacity>
          <TouchableOpacity
            style={[styles.controls, styles.controlsRight]}
            onPress={() => {
              ref.current.scrollTo({ x: 500, animated: true });
            }}
          ></TouchableOpacity>
        </View>
      </View>
      <View>
        <SafeAreaView>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            ref={ref}
            style={styles.slide}
          >
            {[
              {
                latestPrice: 3333.98,
                change: -10.96,
                companyName: "Amazon",
                symbol: "AMZN",
              },
            ].map((value, key) => {
              const perChange =
                ((value.latestPrice - (value.latestPrice - value.change)) /
                  value.latestPrice) *
                100;
              return (
                <View style={styles.containerBlockCard} key={key}>
                  <View style={styles.card}>
                    <TouchableOpacity>
                      <Star
                        width={23}
                        height={23}
                        stroke={"#0047BB"}
                        strokeWidth={1.5}
                      />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.containerInfo}>
                      <Image
                        style={styles.image}
                        source={{ uri: "https://i.imgur.com/9w1I68p.png" }}
                        resizeMode={"cover"}
                      />
                      <View style={styles.cardCompany}>
                        <Text style={styles.symbol}>{value.symbol}</Text>
                        <Text style={styles.companyName}>
                          {value.companyName}
                        </Text>
                      </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
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
                            transform={
                              "rotate(180) scale(-1, 1) translate(0 -4)"
                            }
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
            })}
          </ScrollView>
        </SafeAreaView>
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
