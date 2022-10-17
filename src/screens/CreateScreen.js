import { View, Text, TextInput, StyleSheet, Button } from "react-native";
import React, { useContext, useState } from "react";
import BlogContext from "../context/BlogContext";

const CreateScreen = ({ navigation }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const { addBlogPost } = useContext(BlogContext);

  return (
    <View style={Styles.container}>
      <View style={Styles.paddingTopBottom}>
        <Text>Enter Title</Text>
        <TextInput
          style={Styles.input}
          value={title}
          onChangeText={(title) => setTitle(title)}
        />
      </View>
      <View style={Styles.paddingTopBottom}>
        <Text>Enter Content</Text>
        <TextInput
          style={Styles.input}
          value={content}
          onChangeText={(content) => setContent(content)}
        />
      </View>
      <Button
        title="Add Blog Post"
        onPress={() =>
          addBlogPost(title, content, () => {
            navigation.navigate("Blogs");
          })
        }
      />
    </View>
  );
};

const Styles = StyleSheet.create({
  paddingTopBottom: {
    paddingTop: 5,
    paddingBottom: 5,
  },
  input: {
    borderWidth: 2,
    borderColor: "black",
    padding: 5,
  },
  container: {
    padding: 5,
  },
});

export default CreateScreen;
