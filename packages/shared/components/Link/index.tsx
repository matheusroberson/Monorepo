import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Alert,
  Linking,
  StyleSheet,
} from "react-native";

const Link = () => {
  const [url, setUrl] = React.useState("https://iexcloud.io");

  const handlePress = React.useCallback(async () => {
    const supported = await Linking.canOpenURL(url);

    if (supported) {
      await Linking.openURL(url);
    } else {
      Alert.alert(`Don't know how to open this URL: ${url}`);
    }
  }, [url]);

  return (
    <View style={styles.containerUrl}>
      <TouchableOpacity onPress={handlePress}>
        <Text
          style={{
            borderStyle: "dashed",
            borderColor: "#657786",
            borderBottomWidth: 1,
            color: "#14171A",
          }}
        >
          Data provided by IEX Cloud
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  containerUrl: {
    marginTop: 24,
    marginBottom: 5,
    flexDirection: "row-reverse",
  },
});

export default Link;
