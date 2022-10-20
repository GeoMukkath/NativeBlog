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
    case "add_blog_post":
      return [
        ...state,
        {
          id: Math.floor(Math.random() * 99999 + Math.random() * 0.9),
          title: action.payload.title,
          content: action.payload.content,
        },
      ];
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

  const addBlogPost = (title, content, callback) => {
    dispatch({ type: "add_blog_post", payload: { title, content } });
    if (callback) {
      callback();
    }
  };

  const deleteBlogPost = (id) => {
    dispatch({ type: "delete_blog_post", payload: id });
  };

  const editBlogPost = (id, title, content, callback) => {
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
