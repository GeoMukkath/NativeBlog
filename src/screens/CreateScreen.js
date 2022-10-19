import { View, Text, TextInput, StyleSheet, Button } from "react-native";
import React, { useContext, useState } from "react";
import BlogContext from "../context/BlogContext";
import BlogForm from "../components/BlogForm";

const CreateScreen = ({ navigation }) => {
  const { addBlogPost } = useContext(BlogContext);

  return (
    <BlogForm
      onSubmit={(title, content) => {
        addBlogPost(title, content, () => navigation.navigate("Blogs"));
      }}
    />
  );
};

export default CreateScreen;
