import React from 'react';
import {Text, View} from 'react-native';

//COMMON
import STRINGS from '../../common/strings/strings';
import COMMON_STYLES from '../../common/styles/styles';
import GpsModule from '../../features/gps/GpsModule';

export default function Action() {
    return (
        <View>
            <View style={COMMON_STYLES.mainContainer}>
                <View>
                    <Text style={COMMON_STYLES.headerText}>{STRINGS.action}</Text>
                </View>
            </View>
            <GpsModule />
        </View>
    );
}
