// Change this to Change Routes in Home Tab

import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AddFood from '../screens/farmer/AddFood';
import Home from '../screens/home/Home';
import FarmerPortal from '../screens/farmer/FarmerPortal';
import FarmerRegistration from '../screens/auth/register/FarmerRegistration';
import AssistantRegistration from '../screens/auth/register/AssistantRegistration';
import TransporterRegistration from '../screens/auth/register/TransporterRegistration';
import UserLogin from '../screens/auth/login/UserLogin';
import FarmerOrders from '../screens/farmer/FarmerOrders';

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
            <Stack.Screen name="farmerPortal" component={FarmerPortal} />
            <Stack.Screen name="FarmerRegistration" component={FarmerRegistration} />
            <Stack.Screen name="AssistantRegistration" component={AssistantRegistration} />
            <Stack.Screen name="TransporterRegistration" component={TransporterRegistration} />
            <Stack.Screen name="UserLogin" component={UserLogin} />
            {/* <Stack.Screen name="FarmerChat" component={FarmerChat} /> */}
            <Stack.Screen name="FarmerOrders" component={FarmerOrders} />
            
        </Stack.Navigator>
    )
}