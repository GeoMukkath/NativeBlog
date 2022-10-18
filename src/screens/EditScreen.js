import { View, Text, TextInput } from "react-native";
import React, { useState, useContext } from "react";
import BlogContext from "../context/BlogContext";

const EditScreen = ({ navigation, route }) => {
  const { data } = useContext(BlogContext);
  const blogPost = data.find((blogPost) => blogPost.id === route.params.id);

  const [title, setTitle] = useState(blogPost.title);
  const [content, setContent] = useState(blogPost.content);

  return (
    <View>
      <Text>Enter Title </Text>
      <TextInput
        value={title}
        onChangeText={(newTitle) => setTitle(newTitle)}
      />
      <Text>Enter Content</Text>
      <TextInput
        value={content}
        onChangeText={(newContent) => setContent(newContent)}
      />
    </View>
  );
};

export default EditScreen;
