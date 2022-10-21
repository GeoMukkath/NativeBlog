import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
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
            color="blue"
            onPress={() => navigation.navigate("Edit", { id: blogPost.id })}
          />
        </TouchableOpacity>
      ),
    });
  }, []);

  return (
    <View style={Styles.container}>
      <Text style={[Styles.text, Styles.topic]}>{blogPost.title}</Text>
      <Text style={{ color: "blue" }}>
        *************************************************************
      </Text>
      <Text style={[Styles.text, Styles.content]}>{blogPost.content}</Text>
    </View>
  );
};

const Styles = StyleSheet.create({
  text: {
    color: "blue",
    marginBottom: 5,
  },
  container: {
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
  },
  topic: {
    fontSize: 30,
    fontWeight: "bold",
    letterSpacing: 2,
  },
  content: {
    fontSize: 20,
  },
});

export default ShowScreen;
