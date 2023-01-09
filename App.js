import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

//Screens
import FarmerRegistration from './src/screens/auth/register/FarmerRegistration';
import AssistantRegistration from './src/screens/auth/register/AssistantRegistration';
import TransporterRegistration from './src/screens/auth/register/TransporterRegistration';

import COLORS from './src/common/colors/colors';

//
//Screen names
const homeName = "Home";
const detailsName = "Details";
const settingsName = "Settings";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    //<FarmerRegistration/>
    //<TransporterRegistration/>
    //<AssistantRegistration/>
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName={homeName}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            let rn = route.name;

            if (rn === homeName) {
              iconName = focused ? 'home' : 'home-outline';

            } else if (rn === detailsName) {
              iconName = focused ? 'list' : 'list-outline';

            } else if (rn === settingsName) {
              iconName = focused ? 'settings' : 'settings-outline';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: COLORS.primary,
          inactiveTintColor: 'grey',
          labelStyle: { paddingBottom: 10, fontSize: 10 },
          style: { padding: 50, height: 100 }
        }}>

        <Tab.Screen name={homeName} component={FarmerRegistration} options={{ headerShown: false }} />
        <Tab.Screen name={detailsName} component={AssistantRegistration} options={{ headerShown: false }} />
        <Tab.Screen name={settingsName} component={TransporterRegistration} options={{ headerShown: false }} />

      </Tab.Navigator>
    </NavigationContainer>

  );
}

