// In App.js in a new project

import * as React from "react";
import { View, Text, Button, TouchableOpacity } from "react-native";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import IndexScreen from "./src/screens/IndexScreen";
import { BlogProvider } from "./src/context/BlogContext";
import ShowScreen from "./src/screens/ShowScreen";
import CreateScreen from "./src/screens/CreateScreen";
import { Feather, EvilIcons } from "@expo/vector-icons";
import EditScreen from "./src/screens/EditScreen";
import BlogForm from "./src/components/BlogForm";

const Stack = createNativeStackNavigator();

const navTheme = DefaultTheme;
navTheme.colors.background = "#fff";

const App = () => {
  return (
    <NavigationContainer theme={navTheme}>
      <Stack.Navigator>
        <Stack.Screen
          name="Blogs"
          component={IndexScreen}
          options={({ navigation }) => ({
            headerRight: () => (
              <TouchableOpacity>
                <Feather
                  name="plus"
                  size={47}
                  color="blue"
                  onPress={() => navigation.navigate("Create")}
                />
              </TouchableOpacity>
            ),
          })}
        />
        <Stack.Screen name="Show" component={ShowScreen} />
        <Stack.Screen name="Create" component={CreateScreen} />
        <Stack.Screen name="Edit" component={EditScreen} />
        <Stack.Screen name="Form" component={BlogForm} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default () => {
  return (
    <BlogProvider>
      <App />
    </BlogProvider>
  );
};
