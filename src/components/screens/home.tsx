import { createNativeStackNavigator } from "@react-navigation/native-stack";
import WelcomeScreen from "../bienvenida";
import { RootStackParamList } from "../navigation/types";
import Tabs from "../navigation/tabsUser";
import LoginScreen from "../screens/login";
import RegisterScreen from "../screens/registro";
import JobDetailScreen from "./detalles";

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function HomeStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Welcome" component={WelcomeScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
      <Stack.Screen name="JobDetail" component={JobDetailScreen} />
      <Stack.Screen name="Home" component={Tabs} />
    </Stack.Navigator>
  );
}
