import React, {useState} from 'react';
import { FlatList, Text, TouchableHighlight, View, SafeAreaView, ScrollView} from 'react-native';


//COMMON

import COMMON_STYLES from '../../common/styles/styles';
import FARMER_STYLES from '../../common/styles/farmerStyles';
import { SearchBar } from 'react-native-screens';
import FoodCard from './farmerComponents/FoodCard';


export default function FarmerPortal({navigation}) {

  const [search, setSearch] = useState("");

const updateSearch = (search) => {
  setSearch(search);
};


  return (
    <SafeAreaView style={COMMON_STYLES.container}>
    <View style={COMMON_STYLES.mainContainer}>
      <ScrollView>
      <View></View>
        <Text style={COMMON_STYLES.headerText}>Farmer Portal</Text>
        <SearchBar
             placeholder="Type Here..."
             onChangeText={updateSearch}
             value={search}>

             </SearchBar>
     
        <View >
            <TouchableHighlight  onPress={() => navigation.navigate('FarmerProfile')} >
                <Text>Profile</Text>
            </TouchableHighlight>
            <TouchableHighlight   onPress={() => navigation.navigate('FarmerOrders')} >
                <Text>Orders</Text>
            </TouchableHighlight>
            <TouchableHighlight  onPress={() => navigation.navigate('AddFood')} >
                <Text>Add New Food</Text>
            </TouchableHighlight>
            
        </View>
      <View>
        <FoodCard/>
      </View>
      </ScrollView> 
    </View>
    </SafeAreaView>
  );
}

