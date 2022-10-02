import { View, Text, StyleSheet, FlatList, Button } from "react-native";
import React, { useContext } from "react";
import BlogContext from "../context/BlogContext";
import { Feather } from "@expo/vector-icons";

const IndexScreen = () => {
  const { data, addBlogPost } = useContext(BlogContext);
  return (
    <View>
      <Text>Blog Post</Text>
      <Button title="Add a Blog Post" onPress={addBlogPost} />
      <FlatList
        data={data}
        keyExtractor={(BlogPost) => BlogPost.title}
        renderItem={({ item }) => {
          return (
            <View>
              <Text>{item.title}</Text>
              <Feather name="trash" size={24} color="black" />
            </View>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default IndexScreen;
