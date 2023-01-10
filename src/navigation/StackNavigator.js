import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import AssistantRegistration from '../screens/auth/register/AssistantRegistration';
import TransporterRegistration from '../screens/auth/register/TransporterRegistration';
import FarmerRegistration from '../screens/auth/register/FarmerRegistration';

const Stack = createNativeStackNavigator();

export default function StackNavigator() {
    return (
        <Stack.Navigator screenOptions={() => ({
            headerBackButtonMenuEnabled: true,
            headerShown: false,
        })}>
            <Stack.Screen name="AssistantRegistration" component={AssistantRegistration} />
            <Stack.Screen name="TransporterRegistration" component={TransporterRegistration} />
            <Stack.Screen name="FarmerRegistration" component={FarmerRegistration} />
        </Stack.Navigator>
    )
}