import { View, Text, StyleSheet, FlatList, Button } from "react-native";
import React, { useContext } from "react";
import BlogContext from "../context/BlogContext";
import { Feather } from "@expo/vector-icons";

const IndexScreen = () => {
  const { data, addBlogPost } = useContext(BlogContext);
  return (
    <View>
      <Button title="Add a Blog Post" onPress={addBlogPost} />
      <FlatList
        data={data}
        keyExtractor={(BlogPost) => BlogPost.title}
        renderItem={({ item }) => {
          return (
            <View style={styles.row}>
              <Text>{item.title}</Text>
              <Feather name="trash" size={24} color="black" />
            </View>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 10,
    paddingHorizontal: 5,
    borderBottomWidth: 1,
    borderColor: "lightgrey",
  },
});

export default IndexScreen;
