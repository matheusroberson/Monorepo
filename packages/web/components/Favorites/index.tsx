import React, { useState, useEffect } from "react";
import { View, StyleSheet, Text, Image } from "react-native";

const Favorites = () => {
  return (
    <View style={styles.section}>
      <View>
        {/* Star */}
        <Text style={styles.title}>Empresas favoritas</Text>
      </View>
      <View style={styles.containerCard}>
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
            <View key={key}>
              <View style={styles.card}>
                <View style={styles.containerInfo}>
                  <Image
                    style={styles.image}
                    source={{ uri: "https://i.imgur.com/9w1I68p.png" }}
                    resizeMode={"cover"}
                  />
                  <View style={styles.cardCompany}>
                    <Text style={styles.symbol}>{value.symbol}</Text>
                    <Text style={styles.companyName}>{value.companyName}</Text>
                  </View>
                </View>
                <View style={styles.containerChange}>
                  {perChange > 0 ? (
                    <Text style={[styles.changePositive, styles.change]}>
                      {perChange.toFixed(2)}%{/* Increase */}
                    </Text>
                  ) : (
                    <Text style={[styles.changeNegative, styles.change]}>
                      {perChange.toFixed(2)}%{/* Decrease */}
                    </Text>
                  )}
                </View>
              </View>
              {/* Trash */}
            </View>
          );
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  section: {
    alignItems: "flex-start",
    width: "100%",
    marginTop: 34,
  },
  title: {
    fontFamily: "Graphik",
    color: "#14171A",
    fontWeight: "600",
    fontSize: 18,
    lineHeight: 27,
  },
  containerCard: {
    marginTop: 32,
  },
  card: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 12,
    paddingHorizontal: 16,
    height: 69,
    background: "#FFFFFF",
    boxShadow: "0px 8px 20px -2px rgba(43, 37, 63, 0.1)",
    borderRadius: 8,
    width: 332,
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
  containerChange: {},
  change: {
    fontFamily: "Montserrat",
    fontStyle: "normal",
    fontWeight: "800",
    fontSize: 13,
    lineHeight: 16,
  },
  changePositive: {
    color: "#79C300",
  },
  changeNegative: {
    color: "#D64B45",
  },
});

export default Favorites;
