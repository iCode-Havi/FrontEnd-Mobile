import React from 'react';
import {FlatList, Text, View} from 'react-native';


//COMMON

import COMMON_STYLES from '../../common/styles/styles';


export default function Profile({navigation}) {

  return (
    <View style={COMMON_STYLES.mainContainer}>
      <FlatList>

        <View></View>
        <Text style={COMMON_STYLES.headerText}> Profile</Text>
        <View style={COMMON_STYLES.Content}>
          
        </View>

      </FlatList> 
    </View>
  );
}

