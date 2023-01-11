import React from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { FlatList, Text, TouchableHighlight, View, SafeAreaView} from 'react-native';


//COMMON

import COMMON_STYLES from '../../common/styles/styles';
import FARMER_STYLES from '../../common/styles/farmerStyles';


export default function FarmerPortal({navigation}) {

  return (
    <SafeAreaView style={COMMON_STYLES.container}>
    <View style={COMMON_STYLES.mainContainer}>
      <FlatList>

        <View></View>
        <Text style={COMMON_STYLES.headerText}>Farmer Portal</Text>
        <View style={FARMER_STYLES.Content}>
            <TouchableHighlight style={FARMER_STYLES.fPortalBtn} onPress={null}>
                <Text>Profile</Text>
            </TouchableHighlight>
            <TouchableHighlight style={FARMER_STYLES.fPortalBtn} onPress={null}>
                <Text>Orders</Text>
            </TouchableHighlight>
            <TouchableHighlight style={FARMER_STYLES.fPortalBtn} onPress={null}>
                <Text>Add New Food</Text>
            </TouchableHighlight>
        </View>

      </FlatList> 
    </View>
    </SafeAreaView>
  );
}

