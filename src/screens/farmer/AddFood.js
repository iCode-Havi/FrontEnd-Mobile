import React, { useState } from 'react';
import { ScrollView, Text, TextInput, View, Button, SafeAreaView } from 'react-native';
import { SelectList } from 'react-native-dropdown-select-list';

//COMMON
import STRINGS from '../../common/strings/strings';
import COMMON_STYLES from '../../common/styles/styles';

export default function AddFood({ navigation }) {

  // const [selected, setSelected] = useState("");
  
  const data = [
    { key: '5', value: 'Vegetables' },
    { key: '6', value: 'Diary Products' },
    { key: '7', value: 'Drinks' },
  ]
  
  return (
    <SafeAreaView style={COMMON_STYLES.container}>
      <ScrollView style={COMMON_STYLES.addFoodMainContainer}>
        <View style={COMMON_STYLES.mainText}>
          <Text style={COMMON_STYLES.headerText}>Add Food</Text>
        </View>
        <View style={COMMON_STYLES.registrationForm}>
          <SelectList style={COMMON_STYLES.selectInput}
            
            defaultOption="Food Type"
            data={data}
            save="value" />
          <TextInput style={COMMON_STYLES.input} placeholder={STRINGS.foodName}></TextInput>
          <TextInput style={COMMON_STYLES.input} placeholder={STRINGS.availableQuantity}></TextInput>
          <TextInput style={COMMON_STYLES.input} placeholder={STRINGS.unitPrice}></TextInput>
          <SelectList style={COMMON_STYLES.input}
             
            defaultOption="Duration"
            data={data}
            save="value" />
          <TextInput style={COMMON_STYLES.input} placeholder={STRINGS.addImages}></TextInput>
        </View>
        <View style={COMMON_STYLES.buttonContainer}>
            <TouchableHighlight
            style={COMMON_STYLES.regBtn}
            onPress={() => navigation.navigate('farmerPortal')}>
              <Text  style={COMMON_STYLES.regBtnText}>Save Changes</Text>
            </TouchableHighlight>
          </View>
      </ScrollView>
    </SafeAreaView>
  );
}
