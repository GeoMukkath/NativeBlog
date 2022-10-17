import { View, Text } from "react-native";
import React from "react";

const EditScreen = ({ navigation, route }) => {
  return (
    <View>
      <Text>EditScreen - {route.params.id}</Text>
    </View>
  );
};

export default EditScreen;
