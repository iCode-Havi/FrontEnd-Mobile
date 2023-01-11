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
        <Text style={COMMON_STYLES.headerText}>Farmer Portal</Text>
        <View style={COMMON_STYLES.Content}>
            <TouchableHighlight style={COMMON_STYLES.fPortalBtn} onPress={null}>
                <Text>Profile</Text>
            </TouchableHighlight>
            <TouchableHighlight style={COMMON_STYLES.fPortalBtn} onPress={null}>
                <Text>Orders</Text>
            </TouchableHighlight>
            <TouchableHighlight style={COMMON_STYLES.fPortalBtn} onPress={null}>
                <Text>Add New Food</Text>
            </TouchableHighlight>
        </View>

      </FlatList> 
    </View>
  );
}

