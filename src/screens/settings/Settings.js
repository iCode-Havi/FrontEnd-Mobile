import React from 'react';
import { Text, View } from 'react-native';

//COMMON
import STRINGS from '../../common/strings/strings';
import COMMON_STYLES from '../../common/styles/styles';

export default function Settings() {
  return (
    <View style={COMMON_STYLES.mainContainer}>
      <View>
        <Text style={COMMON_STYLES.headerText}>{STRINGS.settings}</Text>
      </View>
    </View>
  );
}

