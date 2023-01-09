import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AssistantRegistration from '../screens/auth/register/AssistantRegistration';
import FarmerRegistration from '../screens/auth/register/FarmerRegistration';
import TransporterRegistration from '../screens/auth/register/TransporterRegistration';

const Tab = createBottomTabNavigator();

//Screen Names
const TabScreenNames = {
    Home : 'Home',
    Details : 'Details',
    Settings: 'Settings'
}

const TabNavigator = () => {
    return(
        <Tab.Navigator>
            <Tab.Screen name={TabScreenNames.Home} component={FarmerRegistration}/>
            <Tab.Screen name={TabScreenNames.Details} component={AssistantRegistration}/>
            <Tab.Screen name={TabScreenNames.Settings} component={TransporterRegistration}/>
        </Tab.Navigator>
    )
}