import React, { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
} from "react-native";
import Star from "../../../shared/components/Icons/Star";
import Trash from "../../../shared/components/Icons/Trash";
import Grow from "../../../shared/components/Icons/Grow";
import { symbolToLogo } from "../../../shared/lib/data";

import { useAppSelector, useAppDispatch } from "../../store/hooks";
import {
  selectInfos,
  removeFavorites,
  infosSymbol,
} from "../../store/infos/infosSlice";

const Favorites = () => {
  const dispatch = useAppDispatch();
  const { favorites } = useAppSelector(selectInfos);

  return (
    <View style={styles.section}>
      <View style={styles.containerTitle}>
        <Star width={23} height={23} fill={"#0047BB"} />
        <Text style={styles.title}>Empresas favoritas</Text>
      </View>
      <SafeAreaView>
        <ScrollView style={styles.containerCard}>
          {favorites.map((value, key) => {
            const perChange =
              ((value.latestPrice - (value.latestPrice - value.change)) /
                value.latestPrice) *
              100;
            const uri = symbolToLogo(value.symbol.toLowerCase());
            return (
              <View style={styles.containerBlockCard} key={key}>
                <TouchableOpacity
                  style={styles.card}
                  onPress={() => {
                    dispatch(infosSymbol(value.symbol.toLowerCase()));
                  }}
                >
                  <View style={styles.containerInfo}>
                    <Image
                      style={styles.image}
                      source={{ uri }}
                      resizeMode={"cover"}
                    />
                    <View style={styles.cardCompany}>
                      <Text style={styles.symbol}>{value.symbol}</Text>
                      <Text style={styles.companyName}>
                        {value.companyName}
                      </Text>
                    </View>
                  </View>
                  <View>
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
                  </View>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => dispatch(removeFavorites(value.symbol))}
                >
                  <Trash width={23} height={23} />
                </TouchableOpacity>
              </View>
            );
          })}
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  section: {
    alignItems: "flex-start",
    width: "100%",
    marginTop: 34,
  },
  containerTitle: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  title: {
    fontFamily: "Graphik",
    color: "#14171A",
    fontWeight: "600",
    fontSize: 18,
    lineHeight: 27,
    marginLeft: 12,
  },
  containerBlockCard: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 32,
  },
  containerCard: {
    flexDirection: "column",
    marginTop: 32,
    height: "80vh",
  },
  card: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 12,
    paddingHorizontal: 16,
    height: 69,
    backgroundColor: "#FFFFFF",
    boxShadow: "0px 8px 20px -2px rgba(43, 37, 63, 0.1)",
    borderRadius: 8,
    width: 332,
    marginRight: 14,
  },
  containerInfo: {
    flex: 1,
    flexDirection: "row",
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

export default Favorites;
