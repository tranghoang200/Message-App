import React from "react";
import { GiftedChat } from "react-native-gifted-chat";
import { StyleSheet, View } from "react-native";

export default class ConversationPage extends React.Component {
  constructor(props) {
    super(props);
    const propsFromMessages = props.navigation.state.params;
    console.log(propsFromMessages);
  }

  state = {
    messages: [
      {
        _id: this.props.navigation.state.params.id,
        text: this.props.navigation.state.params.last_message_content,
        createdAt: new Date(),
        user: {
          _id: this.props.navigation.state.params.id,
          name: this.props.navigation.state.params.first_name,
          avatar: this.props.navigation.state.params.avatar_url,
        },
      },
    ],
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

ConversationPage.navigationOptions = {
  title: "Conversation",
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flex: 1,
  },
});
