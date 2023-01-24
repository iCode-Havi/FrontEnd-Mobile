import {StyleSheet} from 'react-native';

import COLORS from '../colors/colors';
import COMMON_VALUES from '../values/commonValues';

const COMPONENT_STYLES = StyleSheet.create({
    foodCard: {
        height: 160,
        width: 150,
        borderRadius: COMMON_VALUES.borderRadius10,
        backgroundColor: COLORS['primary'],
        opacity: 0.7,
    },
});

export default COMPONENT_STYLES;
