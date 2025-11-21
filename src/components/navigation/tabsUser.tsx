import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import WorkerJobsScreen from "../screens/jobsUser";
import WorkerProfileScreen from "../screens/perfilUser";
import { Ionicons } from "@expo/vector-icons";
export type WorkerTabsParamList = {
  WorkerJobs: undefined;
  WorkerProfile: undefined;
};

const Tab = createBottomTabNavigator<WorkerTabsParamList>();

export default function Tabs() {
  return (
    <Tab.Navigator screenOptions={{headerShown: false, tabBarShowLabel: false,
        tabBarStyle: {height: 70, borderTopWidth: 1, borderColor: "#ddd",},}}>
      <Tab.Screen name="WorkerJobs" component={WorkerJobsScreen} options={{tabBarIcon: ({ focused }) => (
        <Ionicons name="home-outline"size={28} color={focused ? "#57D1DA" : "#333"}/>),
        }}/>
      <Tab.Screen name="WorkerProfile" component={WorkerProfileScreen}options={{tabBarIcon: ({ focused }) => (
        <Ionicons name="person-outline" size={28} color={focused ? "#57D1DA" : "#333"}/>),
        }}/>
    </Tab.Navigator>
  );
}
