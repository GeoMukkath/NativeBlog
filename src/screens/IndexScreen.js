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

const IndexScreen = ({ navigation }) => {
  const { data, addBlogPost, deleteBlogPost } = useContext(BlogContext);
  return (
    <View>
      <Button title="Add a Blog Post" onPress={addBlogPost} />
      <FlatList
        scrollEnabled={true}
        data={data}
        keyExtractor={(BlogPost) => BlogPost.title}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() => navigation.navigate("Show", { id: item.id })}
            >
              <View style={styles.row}>
                <Text>
                  {item.title} - {item.id}
                </Text>
                <TouchableOpacity onPress={() => deleteBlogPost(item.id)}>
                  <Feather name="trash" size={24} color="black" />
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

IndexScreen.navigationOptions = () => {
  return {
    headerRight: () => (
      <TouchableOpacity>
        <Feather name="plus" size={30} color="black" />
      </TouchableOpacity>
    ),
  };
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
