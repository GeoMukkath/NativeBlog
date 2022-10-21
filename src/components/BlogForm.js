import { View, Text, TextInput, StyleSheet, Button } from "react-native";
import React, { useContext, useState } from "react";
import BlogContext from "../context/BlogContext";

const BlogForm = ({ onSubmit, initialValues }) => {
  const [title, setTitle] = useState(initialValues.title);
  const [content, setContent] = useState(initialValues.content);

  return (
    <View style={Styles.container}>
      <View style={Styles.paddingTopBottom}>
        <Text style={Styles.text}>Enter Title</Text>
        <TextInput
          style={Styles.inputTitle}
          value={title}
          onChangeText={(title) => setTitle(title)}
        />
      </View>
      <View style={Styles.paddingTopBottom}>
        <Text style={Styles.text}>Enter Content</Text>
        <TextInput
          multiline={true}
          numberOfLines={4}
          style={Styles.inputContent}
          value={content}
          onChangeText={(content) => setContent(content)}
        />
      </View>
      <Button
        title="Save Blog Post"
        style={{ backgroundColor: "#00008B" }}
        onPress={() =>
          onSubmit(title, content, () => console.log(title, content))
        }
      />
    </View>
  );
};

BlogForm.defaultProps = {
  initialValues: {
    title: "",
    content: "",
  },
};

const Styles = StyleSheet.create({
  text: {
    color: "blue",
    marginBottom: 5,
    fontWeight: "bold",
  },
  paddingTopBottom: {
    paddingTop: 5,
    paddingBottom: 5,
  },
  inputTitle: {
    borderWidth: 3,
    borderColor: "blue",
    padding: 5,
    color: "darkblue",
  },
  inputContent: {
    borderWidth: 3,
    borderColor: "blue",
    padding: 5,
    height: 120,
    textAlignVertical: "top",
    color: "darkblue",
    marginBottom: 5,
  },
  container: {
    padding: 5,
  },
});

export default BlogForm;
