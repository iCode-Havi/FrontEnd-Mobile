import { NavigationContainer } from "@react-navigation/native";
import PushNotification from "./src/features/notifications/pushNotification/PushNotification";
import TabNavigator from "./src/navigation/TabNavigator";

const App = () => {
  return (
    <>
      <PushNotification />
      <NavigationContainer>
        <TabNavigator />
      </NavigationContainer>
    </>
  );
};

export default App;
