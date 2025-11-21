import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { TabsParamList } from "./types";
import JobsAdminScreen from "../screens/jobsAdmin";
import CreateJobScreen from "../screens/crearJob";
import ProfileEmployerScreen from "../screens/perfilAdmin"; 
import { Ionicons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator<TabsParamList>();

export default function Tabs() {
  return (
    <Tab.Navigator screenOptions={{headerShown: false, tabBarShowLabel: false, 
        tabBarStyle: {height: 70, borderTopWidth: 1, borderColor: "#ddd",},}}>
    <Tab.Screen name="Jobs" component={JobsAdminScreen} options={{tabBarIcon: ({ focused }) => (
        <Ionicons name="home-outline" size={28} color={focused ? "#57D1DA" : "#333"}/>),
        }}/>

      <Tab.Screen name="CreateJob"component={CreateJobScreen} options={{tabBarIcon: () => (
        <Ionicons name="add-circle" size={58} color="#57D1DA" />),
        }}/>

      <Tab.Screen name="Profile" component={ProfileEmployerScreen}options={{tabBarIcon: ({ focused }) => (
        <Ionicons name="person-outline" size={28} color={focused ? "#57D1DA" : "#333"}/>),
        }}/>
    </Tab.Navigator>
  );
}
