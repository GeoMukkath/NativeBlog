import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Button,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React, { useContext, useEffect } from "react";
import BlogContext from "../context/BlogContext";
import { Feather } from "@expo/vector-icons";
import styled from "styled-components";

const IndexScreen = ({ navigation }) => {
  const { data, deleteBlogPost, getBlogPosts } = useContext(BlogContext);

  useEffect(() => {
    getBlogPosts();

    const listener = navigation.addListener("didFocus", () => {
      getBlogPosts();
    });
  }, []);

  return (
    <View>
      <FlatList
        scrollEnabled={true}
        data={data}
        keyExtractor={(BlogPost) => BlogPost.title}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() => navigation.navigate("Show", { id: item.id })}
            >
              <View style={styles.row}>
                <Text style={styles.text}>{item.title}</Text>
                <TouchableOpacity onPress={() => deleteBlogPost(item.id)}>
                  <Feather name="trash" size={24} color="blue" />
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

IndexScreen.navigationOptions = () => {
  return {
    headerRight: () => (
      <TouchableOpacity>
        <Feather name="plus" size={30} color="black" />
      </TouchableOpacity>
    ),
  };
};

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderWidth: 1,
    borderColor: "blue",
    marginTop: 10,
    marginLeft: 7,
    marginRight: 7,
  },
  text: {
    color: "blue",
    marginBottom: 5,
  },
});

export default IndexScreen;
