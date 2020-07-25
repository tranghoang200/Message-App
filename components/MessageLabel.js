import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";

export default class MessageLabel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      info: this.props.info,
    };
  }

  render() {
    return (
      <TouchableOpacity
        onPress={() =>
          this.props.navigateToConversation("Conversation", this.state.info)
        }
      >
        <View style={styles.container}>
          <View style={styles.imgContainer}>
            <Image
              style={styles.avatar}
              source={{ uri: this.state.info.avatar_url }}
              resizeMode="cover"
            />
          </View>
          <View style={styles.infoContainer}>
            <Text style={styles.name}>
              {this.state.info.first_name} {this.state.info.last_name}
            </Text>
            <Text style={styles.mess} numberOfLines={1} ellipsizeMode={"tail"}>
              {this.state.info.last_message_content}
            </Text>
            <Text style={styles.date} numberOfLines={1} ellipsizeMode={"tail"}>
              {this.state.info.last_message_date}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    marginTop: 20,
  },
  imgContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "flex-start",
  },
  infoContainer: {
    flex: 4,
    justifyContent: "center",
    alignItems: "flex-start",
  },
  avatar: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },
  name: {
    marginLeft: 10,
    fontSize: 20,
    fontWeight: "600",
  },
  mess: {
    marginLeft: 10,
    fontSize: 15,
  },
  date: {
    marginLeft: 10,
    fontSize: 12,
  },
});
