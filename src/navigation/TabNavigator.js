// Don't Change Tab Navigator this is already completed

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/FontAwesome5';

import Settings from '../screens/settings/Settings';
import COLORS from '../common/colors/colors';
import TAB_BAR_STYLES from '../common/styles/tabBarStyles';
import StackNavigator from './StackNavigator';
import HeaderBar from '../components/headerBar/HeaderBar';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import StackNavigatorHome from './StackNavigatorHome';

const Tab = createBottomTabNavigator();

//Screen Names
const TabScreenNames = {
    TabIconName01: 'Home',
    TabIconName02: 'Details',
    TabIconName03: 'Account'
}

const TabNavigator = () => {
    const sandwich_icon = <FontAwesome5Icon name='bars' size={24} style={{ marginRight: 24, marginTop: 10 }} />

    return (
        <Tab.Navigator screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
                let iconName;

                if (route.name === TabScreenNames.TabIconName01) {
                    iconName = focused
                        ? 'home'
                        : 'home';
                } else if (route.name === TabScreenNames.TabIconName02) {
                    iconName = focused
                        ? 'atom'
                        : 'atom';
                }
                else if (route.name === TabScreenNames.TabIconName03) {
                    iconName = focused ? 'sliders-h' : 'sliders-h';
                }
                return <Ionicons name={iconName} size={size} color={color} light />;
            },
            tabBarActiveTintColor: COLORS['primary'],
            tabBarInactiveTintColor: COLORS['inactive-gray'],
            tabBarStyle: TAB_BAR_STYLES,
            headerRight: () => sandwich_icon,
            headerTitle: () => <HeaderBar />,
        })}>
            <Tab.Screen name={TabScreenNames.TabIconName01} component={StackNavigatorHome} />
            <Tab.Screen name={TabScreenNames.TabIconName02} component={StackNavigator} />
            <Tab.Screen name={TabScreenNames.TabIconName03} component={Settings} />
        </Tab.Navigator>
    )
}

export default TabNavigator;