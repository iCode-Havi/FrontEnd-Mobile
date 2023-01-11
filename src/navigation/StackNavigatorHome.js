import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from '../screens/home/Home';
//Farmer Screen Routes
import AddFood from '../screens/farmer/AddFood';
import FarmerPortal from '../screens/farmer/FarmerPortal';
import FarmerOrders from '../screens/farmer/FarmerOrders';
import Profile from '../screens/common/Profile';
//Auth routes
import FarmerRegistration from '../screens/auth/register/FarmerRegistration';
import AssistantRegistration from '../screens/auth/register/AssistantRegistration';
import TransporterRegistration from '../screens/auth/register/TransporterRegistration';
import UserLogin from '../screens/auth/login/UserLogin';

import Chat from '../screens/common/Chat';
import Portal from '../screens/common/Portal';

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
            <Stack.Screen name="Profile" component={Profile} />
            <Stack.Screen name="farmerPortal" component={FarmerPortal} />
            <Stack.Screen name="FarmerOrders" component={FarmerOrders} />

            <Stack.Screen name="FarmerRegistration" component={FarmerRegistration} />
            <Stack.Screen name="AssistantRegistration" component={AssistantRegistration} />
            <Stack.Screen name="TransporterRegistration" component={TransporterRegistration} />
            <Stack.Screen name="UserLogin" component={UserLogin} />

            <Stack.Screen name="Chat" component={Chat} />
            <Stack.Screen name="Portal" component={Portal} />
            
        </Stack.Navigator>
    )
}