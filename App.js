import {NavigationContainer} from '@react-navigation/native';
import TabNavigator from './src/navigation/TabNavigator';
import PushNotification from "./src/notifications/pushNotification/PushNotification";

const App = () => {
    return (
        <>
            <PushNotification/>
            <NavigationContainer>
                <TabNavigator/>
            </NavigationContainer>
        </>
    );
}

export default App;
