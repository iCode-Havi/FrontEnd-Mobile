import React from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { Button, FlatList, Text, TouchableHighlight, View} from 'react-native';


//COMMON

import COMMON_STYLES from '../../common/styles/styles';


export default function FarmerPortal({navigation}) {

  return (
    <View style={COMMON_STYLES.mainContainer}>
      <FlatList>

        <View></View>
        <Text style={COMMON_STYLES.headerText}>Farmer Profile</Text>
        <View style={COMMON_STYLES.Content}>
          
        </View>

      </FlatList> 
    </View>
  );
}

