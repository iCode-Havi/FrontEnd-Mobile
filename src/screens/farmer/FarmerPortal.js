import React from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { Button, Text, View} from 'react-native';


//COMMON
import STRINGS from '../../common/strings/strings';
import COMMON_STYLES from '../../common/styles/styles';
import COLORS from '../../common/colors/colors';

export default function FarmerPortal({navigation}) {

  return (
    <View style={COMMON_STYLES.mainContainer}>
      
        <Text style={COMMON_STYLES.headerText}>Farmer Portal</Text>
        <View style={COMMON_STYLES.buttonContainer}>
       
              <Button style={COMMON_STYLES.button} title="Add Food"
              onPress={() => navigation.navigate('../auth/register/FarmerRegistration')}/>
              <Button style={COMMON_STYLES.button} title="Profile"
              onPress={() => navigation.navigate('../auth/register/FarmerRegistration')}/>
              <Button style={COMMON_STYLES.button} title="Chat"
              onPress={() => navigation.navigate('../auth/register/FarmerRegistration')}/>
             <Button style={COMMON_STYLES.button} title="Orders"
              onPress={() => navigation.navigate('../auth/register/FarmerRegistration')}/>
          </View>
      
    </View>
  );
}

