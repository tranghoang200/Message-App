import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";

export default class Drawer extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate("Profile")}
        >
          <Image
            style={styles.avatar}
            source={require("../assets/avatar.jpg")}
          ></Image>
        </TouchableOpacity>
        <Text style={styles.name}>Profile</Text>
        <Text style={styles.name}>Trang Hoang</Text>
        <Text style={styles.label}>Settings</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    top: 20,
    paddingHorizontal: 20,
    paddingTop: 40,
    alignItems: "center",
    width: "100%",
  },
  avatar: {
    width: 140,
    height: 140,
    borderRadius: 70,
  },
  name: {
    fontSize: 23,
    fontWeight: "700",
    marginVertical: 20,
  },
  settings: {
    width: "100%",
    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection: "row",
    marginBottom: 10,
  },
  label: {
    fontSize: 18,
    fontWeight: "500",
    marginHorizontal: 10,
  },
  switch: {
    position: "absolute",
    right: 5,
  },
});
