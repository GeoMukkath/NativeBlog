import React, { useState, useContext } from "react";
import BlogContext from "../context/BlogContext";
import BlogForm from "../components/BlogForm";

const EditScreen = ({ navigation, route }) => {
  const { data } = useContext(BlogContext);
  const blogPost = data.find((blogPost) => blogPost.id === route.params.id);

  return <BlogForm />;
};

export default EditScreen;
