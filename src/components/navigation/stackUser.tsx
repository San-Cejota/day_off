import { createNativeStackNavigator } from "@react-navigation/native-stack";
import WorkerTabs from "./tabsUser";
import JobDetailScreen from "../screens/detalles";
import { Job } from "./types";


export type WorkerStackParamList = {
  WorkerTabs: undefined;
  JobDetail: { job: Job };
};
const Stack = createNativeStackNavigator<WorkerStackParamList>();

export default function WorkerStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="WorkerTabs" component={WorkerTabs} />
      <Stack.Screen name="JobDetail" component={JobDetailScreen} />
    </Stack.Navigator>
  );
}
