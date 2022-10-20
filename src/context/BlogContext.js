import React, { useReducer } from "react";
const BlogContext = React.createContext();
import jsonServer from "../api/jsonServer";

const BlogReducer = (state, action) => {
  switch (action.type) {
    case "get_blog_posts":
      return action.payload;
    case "edit_blog_post":
      return state.map((blogPost) => {
        return blogPost.id === action.payload.id ? action.payload : blogPost;
      });
    case "delete_blog_post":
      return state.filter((blogPost) => blogPost.id !== action.payload);
    default:
      return state;
  }
};

export const BlogProvider = ({ children }) => {
  const [BlogPosts, dispatch] = useReducer(BlogReducer, []);

  const getBlogPosts = async () => {
    const response = await jsonServer.get("/blogposts");
    console.log(response.data);
    dispatch({ type: "get_blog_posts", payload: response.data });
  };

  const addBlogPost = async (title, content, callback) => {
    await jsonServer.post("/blogposts", { title, content });
    dispatch({ type: "add_blog_post", payload: { title, content } });
    if (callback) {
      callback();
    }
  };

  const deleteBlogPost = async (id) => {
    await jsonServer.delete(`/blogposts/${id}`);
    dispatch({ type: "delete_blog_post", payload: id });
  };

  const editBlogPost = async (id, title, content, callback) => {
    await jsonServer.put(`/blogposts/${id}`, { title, content });
    dispatch({ type: "edit_blog_post", payload: { id, title, content } });
    if (callback) {
      callback();
    }
  };

  return (
    <BlogContext.Provider
      value={{
        data: BlogPosts,
        addBlogPost,
        deleteBlogPost,
        editBlogPost,
        getBlogPosts,
      }}
    >
      {children}
    </BlogContext.Provider>
  );
};

export default BlogContext;
