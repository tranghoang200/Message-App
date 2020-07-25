import React from "react";
import { View, StyleSheet, ScrollView, TextInput } from "react-native";
import { groups } from "../data/groups.js";
import GroupLabel from "../components/GroupLabel.js";

export default class GroupPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      groups: groups,
    };
    this.search = this.search.bind(this);
  }
  search(name) {
    this.setState({
      groups: groups.filter(
        (gr) => gr.name.toLowerCase().indexOf(name.toLowerCase()) > -1
      ),
    });
  }
  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.search}
          onChangeText={(name) => this.search(name)}
          placeholder="Search group name"
        />
        <ScrollView style={styles.listMess}>
          {this.state.groups.map((info) => (
            <GroupLabel
              key={info.id}
              info={info}
              navigateToConversation={this.props.navigation.navigate}
            />
          ))}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  search: {
    height: 40,
    borderRadius: 10,
    backgroundColor: "#eee",
    width: "100%",
    paddingHorizontal: 20,
    fontSize: 22,
    marginBottom: 10,
  },
  listMess: {
    width: "100%",
  },
  iconDrawer: {
    width: 40,
    height: 40,
    marginLeft: 15,
  },
});

GroupPage.navigationOptions = {
  title: "Groups",
};
