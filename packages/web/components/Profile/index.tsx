import React from "react";
import { TouchableOpacity, View, Image, Text, StyleSheet } from "react-native";

const Profile = () => {
  return (
    <View style={styles.section}>
      <TouchableOpacity style={styles.profile}>
        <Image
          style={styles.image}
          source={{ uri: "https://i.imgur.com/9w1I68p.png" }}
          resizeMode={"cover"}
        />
        <Text style={styles.name}>João da Silva Almeida Magalhães</Text>
        <Text style={styles.arrow}></Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  section: {
    alignItems: "flex-start",
    width: "100%",
  },
  profile: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 4,
    border: "1px solid rgba(0, 71, 187, 0.2)",
    boxSizing: "border-box",
    borderRadius: 120,
    height: 40,
    width: 346,
  },
  name: {
    color: "#0047BB",
    fontFamily: "Graphik",
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: 16,
    lineHeight: 20,
    textAlign: "center",
    letterSpacing: -0.005,
  },
  image: {
    width: 32,
    height: 32,
    backgroundColor: "#0047BB",
    borderRadius: 100,
  },
  arrow: {
    backgroundColor: "#FFF",
    borderRadius: 1,
    width: 12,
    height: 6,
    marginRight: 10,
    borderTopColor: "#F06400",
    borderLeftColor: "transparent",
    borderRightColor: "transparent",
    borderTopWidth: 6,
    borderLeftWidth: 6,
    borderRightWidth: 6,
    borderStyle: "solid",
  },
});

export default Profile;
