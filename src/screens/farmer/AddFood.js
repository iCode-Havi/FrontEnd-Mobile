import React,{useState} from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { ScrollView, Text, TextInput, View, Button, SafeAreaView } from 'react-native';
import { SelectList } from 'react-native-dropdown-select-list'

//COMMON
import STRINGS from '../../common/strings/strings';
import COMMON_STYLES from '../../common/styles/styles';
import COLORS from '../../common/colors/colors';

export default function AssistantRegistration({ navigation }) {

    const [selected, setSelected] = useState("");
  
    const data = [
        {key:'1', value:'Mobiles', disabled:true},
        {key:'2', value:'Appliances'},
        {key:'3', value:'Cameras'},
        {key:'4', value:'Computers', disabled:true},
        {key:'5', value:'Vegetables'},
        {key:'6', value:'Diary Products'},
        {key:'7', value:'Drinks'},
    ]

  const icon_arrow_circle_left = <FontAwesome5 name={'arrow-circle-left'} color={COLORS.primary} size={30} onPress={() => navigation.navigate('TransporterRegistration')}/>;
  const icon_arrow_circle_right = <FontAwesome5 name={'arrow-circle-right'} color={COLORS.primary} size={30} onPress={() => navigation.navigate('FarmerRegistration')}/>;

  return (
    <SafeAreaView style={COMMON_STYLES.container}>
      <ScrollView style={COMMON_STYLES.mainContainer}>
        <View style={COMMON_STYLES.mainText}>
          <Text style={COMMON_STYLES.headerText}>Add Food</Text>
        </View>
        <View style={COMMON_STYLES.registrationForm}>
        <SelectList 
        setSelected={(val) => setSelected(val)} 
        data={data} 
        save="value"/>

         
          <TextInput style={COMMON_STYLES.input} placeholder={STRINGS.foodName}></TextInput>
          <TextInput style={COMMON_STYLES.input} placeholder={STRINGS.availableQuantity}></TextInput>
          <TextInput style={COMMON_STYLES.input} placeholder={STRINGS.unitPrice}></TextInput>
          <TextInput style={COMMON_STYLES.input} placeholder={STRINGS.duration}></TextInput>
          <TextInput style={COMMON_STYLES.input} placeholder={STRINGS.addImages}></TextInput>

          <View style={COMMON_STYLES.buttonContainer}>
            <Button style={COMMON_STYLES.button} title="Add"
              onPress={null}/>
            <Button style={COMMON_STYLES.button} title="Edit"
              onPress={null}/>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
