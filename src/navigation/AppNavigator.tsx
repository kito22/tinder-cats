import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";

import MainScreen from "../screens/MainScreen/MainScreen";
import ProfileScreen from "../screens/ProfileScreen/ProfileScreen";
import ChatScreen from "src/screens/ChatScreen/ChatScreen";

import PawIcon from "assets/svg/paw.svg";
import MessageIcon from "assets/svg/message.svg";
import ProfileIcon from "assets/svg/profile.svg";
import { colors } from "src/theme/theme";
import styles from "./styles";

const Tab = createBottomTabNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarShowLabel: false,
          tabBarStyle: styles.tabBarStyle,
          tabBarIcon: ({ size, focused }) => {
            if (route.name === "Home")
              return (
                <PawIcon
                  width={size}
                  height={size}
                  fill={focused ? colors.focusedIcon : colors.unfocusedIcon}
                />
              );
            if (route.name === "Messages")
              return (
                <MessageIcon
                  width={size}
                  height={size}
                  stroke={focused ? colors.focusedIcon : colors.unfocusedIcon}
                />
              );
            if (route.name === "Profile")
              return (
                <ProfileIcon
                  width={size}
                  height={size}
                  stroke={focused ? colors.focusedIcon : colors.unfocusedIcon}
                />
              );
          },
        })}
      >
        <Tab.Screen name="Home" component={MainScreen} />
        <Tab.Screen name="Messages" component={ChatScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
