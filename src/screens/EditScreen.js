import React, { useState, useContext } from "react";
import BlogContext from "../context/BlogContext";
import BlogForm from "../components/BlogForm";

const EditScreen = ({ navigation, route }) => {
  const ID = route.params.id;
  const { data, editBlogPost } = useContext(BlogContext);
  const blogPost = data.find((blogPost) => blogPost.id === ID);

  return (
    <BlogForm
      initialValues={{ title: blogPost.title, content: blogPost.content }}
      onSubmit={(title, content) => {
        editBlogPost(ID, title, content, () => navigation.pop());
      }}
    />
  );
};

export default EditScreen;
