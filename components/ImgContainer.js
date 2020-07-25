import * as React from "react";
import { View, StyleSheet, FlatList, Image } from "react-native";
import { imgData } from "../data/img";

class ImgContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      imgs: imgData,
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          contentContainerStyle={{ margin: 4 }}
          numColumns={2}
          width="95%"
          data={this.state.imgs}
          renderItem={({ item }) => (
            <View style={styles.imgWrapper}>
              <Image source={item.image} style={styles.img} />
            </View>
          )}
          keyExtractor={(item) => item.id}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 5,
    width: "100%",
  },
  img: {
    flex: 1,
    borderRadius: 7,
    width: "100%",
    height: 180,
    resizeMode: "cover",
  },
  imgWrapper: {
    flex: 1,
    margin: 3,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default ImgContainer;
