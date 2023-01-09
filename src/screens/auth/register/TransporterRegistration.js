import React from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { ScrollView, Text, TextInput, View, TouchableHighlight, SafeAreaView } from 'react-native';

//COMMON
import STRINGS from '../../../common/strings/strings';
import COMMON_STYLES from '../../../common/styles/styles';
import COLORS from '../../../common/colors/colors';

export default function TransporterRegistration({ navigation }) {

  const icon_arrow_circle_left = <FontAwesome5 name={'arrow-circle-left'} color={COLORS.primary} size={30} onPress={() => navigation.navigate('FarmerRegistration')} />;
  const icon_arrow_circle_right = <FontAwesome5 name={'arrow-circle-right'} color={COLORS.primary} size={30} onPress={() => navigation.navigate('AssistantRegistration')}/>;

  return (
    <SafeAreaView style={COMMON_STYLES.container}>
      <ScrollView style={COMMON_STYLES.mainContainer}>
        <View style={COMMON_STYLES.mainText}>
          <Text style={COMMON_STYLES.headerText}>{STRINGS.transporterRegisterHeaderName}</Text>
        </View>
        <View style={COMMON_STYLES.registrationForm}>
          <TextInput style={COMMON_STYLES.inputFirst} placeholder={STRINGS.firstName}></TextInput>
          <TextInput style={COMMON_STYLES.input} placeholder={STRINGS.lastName}></TextInput>
          <TextInput style={COMMON_STYLES.input} placeholder={STRINGS.nic}></TextInput>
          <TextInput style={COMMON_STYLES.input} placeholder={STRINGS.insertImage}></TextInput>
          <TextInput style={COMMON_STYLES.input} placeholder={STRINGS.email}></TextInput>
          <TextInput style={COMMON_STYLES.input} placeholder={STRINGS.password}></TextInput>
          <TextInput style={COMMON_STYLES.input} placeholder={STRINGS.confirmPassword}></TextInput>
          <TextInput style={COMMON_STYLES.input} placeholder={STRINGS.contact1}></TextInput>
          <TextInput style={COMMON_STYLES.input} placeholder={STRINGS.contact2}></TextInput>
          <TextInput style={COMMON_STYLES.inputLast} placeholder={STRINGS.location}></TextInput>
          <View style={COMMON_STYLES.buttonContainer}>
            <TouchableHighlight style={COMMON_STYLES.button}>
              {icon_arrow_circle_left}
            </TouchableHighlight>
            <TouchableHighlight style={COMMON_STYLES.button}>
              {icon_arrow_circle_right}
            </TouchableHighlight>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

