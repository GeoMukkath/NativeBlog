import React, { useReducer } from "react";
const BlogContext = React.createContext();

const BlogReducer = (state, action) => {
  switch (action.type) {
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

  const addBlogPost = (title, content, callback) => {
    dispatch({ type: "add_blog_post", payload: { title, content } });
    callback();
  };

  const deleteBlogPost = (id) => {
    dispatch({ type: "delete_blog_post", payload: id });
  };

  return (
    <BlogContext.Provider
      value={{ data: BlogPosts, addBlogPost, deleteBlogPost }}
    >
      {children}
    </BlogContext.Provider>
  );
};

export default BlogContext;
