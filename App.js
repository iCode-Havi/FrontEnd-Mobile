import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import TabNavigator from './src/navigation/TabNavigator';
import FarmerPortal from './src/screens/farmer/FarmerPortal';
import AddFood from './src/screens/farmer/AddFood';


export default function App() {
  return (
    // <NavigationContainer>
    //   <TabNavigator />
    // </NavigationContainer>
    // <FarmerPortal/>
    <AddFood/>
  );
}

