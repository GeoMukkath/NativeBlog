import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Button,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React, { useContext } from "react";
import BlogContext from "../context/BlogContext";
import { Feather } from "@expo/vector-icons";

const IndexScreen = () => {
  const { data, addBlogPost, deleteBlogPost } = useContext(BlogContext);
  return (
    <View>
      <ScrollView>
        <Button title="Add a Blog Post" onPress={addBlogPost} />
        <FlatList
          data={data}
          keyExtractor={(BlogPost) => BlogPost.title}
          renderItem={({ item }) => {
            return (
              <View style={styles.row}>
                <Text>
                  {item.title} - {item.id}
                </Text>
                <TouchableOpacity onPress={() => deleteBlogPost(item.id)}>
                  <Feather name="trash" size={24} color="black" />
                </TouchableOpacity>
              </View>
            );
          }}
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 10,
    paddingHorizontal: 5,
    borderBottomWidth: 1,
    borderColor: "lightgrey",
  },
});

export default IndexScreen;
