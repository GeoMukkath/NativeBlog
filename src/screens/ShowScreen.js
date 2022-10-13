import { View, Text } from "react-native";
import React, { useContext } from "react";
import BlogContext from "../context/BlogContext";

const ShowScreen = ({ navigation, route }) => {
  const { data } = useContext(BlogContext);
  const blogPost = data.find((blogPost) => blogPost.id === route.params.id);
  return (
    <View>
      <Text>{blogPost.title}</Text>
    </View>
  );
};

export default ShowScreen;
