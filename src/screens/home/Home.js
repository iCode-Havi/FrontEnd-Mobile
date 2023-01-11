import React from 'react';
import { Button, Text, View } from 'react-native';


//COMMON
import STRINGS from '../../common/strings/strings';
import COMMON_STYLES from '../../common/styles/styles';

export default function Home({ navigation }) {

  return (
    <View style={COMMON_STYLES.mainContainer}>

      <Text style={COMMON_STYLES.headerText}>{STRINGS.homePage}</Text>
      <View style={COMMON_STYLES.buttonContainer}>

        <Button style={COMMON_STYLES.button} title="Farmer"
          onPress={() => navigation.navigate('FarmerRegistration')} />
        <Button style={COMMON_STYLES.button} title="Assistant"
          onPress={() => navigation.navigate('AssistantRegistration')} />
        <Button style={COMMON_STYLES.button} title="Transporter"
          onPress={() => navigation.navigate('TransporterRegistration')} />
        <Button style={COMMON_STYLES.button} title="Farmer Portal"
          onPress={() => navigation.navigate('farmerPortal')} />
      </View>
    </View>
  );
}

