import { View, Text, TouchableOpacity } from "react-native";
import React, { useContext, useEffect } from "react";
import BlogContext from "../context/BlogContext";
import { Feather, EvilIcons } from "@expo/vector-icons";

const ShowScreen = ({ navigation, route }) => {
  const { data } = useContext(BlogContext);
  const blogPost = data.find((blogPost) => blogPost.id === route.params.id);

  React.useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity>
          <EvilIcons
            name="pencil"
            size={47}
            onPress={() => navigation.navigate("Edit", { id: blogPost.id })}
          />
        </TouchableOpacity>
      ),
    });
  }, []);

  return (
    <View>
      <Text>{blogPost.title}</Text>
      <Text>{blogPost.content}</Text>
    </View>
  );
};

export default ShowScreen;
