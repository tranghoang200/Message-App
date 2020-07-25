import React from "react";
import { StyleSheet, View } from "react-native";
import { GiftedChat } from "react-native-gifted-chat";

export default class GroupConversationScreen extends React.Component {
  constructor(props) {
    super(props);
  }

  state = {
    messages: this.props.navigation.state.params.conversation,
  };

  onSend(messages = []) {
    this.setState((previousState) => ({
      messages: GiftedChat.append(previousState.messages, messages),
    }));
  }

  render() {
    return (
      <View style={styles.container}>
        <GiftedChat
          messages={this.state.messages}
          onSend={(messages) => this.onSend(messages)}
          user={{ _id: 0 }}
        />
      </View>
    );
  }
}

GroupConversationScreen.navigationOptions = {
  title: "Group Conversation",
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flex: 1,
  },
});
