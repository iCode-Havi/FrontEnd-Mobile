// Change this to Change Routes in Home Tab

import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AddFood from '../screens/farmer/AddFood';
import Home from '../screens/home/Home';

const Stack = createNativeStackNavigator();

export default function StackNavigator() {
    return (
        <Stack.Navigator screenOptions={() => ({
            headerBackButtonMenuEnabled: true,
            headerShown: false,
        })}>

            {/* TODO: Put your routes inside this and call the Component. - Akila */}

            <Stack.Screen name="home" component={Home} />
            <Stack.Screen name="AddFood" component={AddFood} />
        </Stack.Navigator>
    )
}