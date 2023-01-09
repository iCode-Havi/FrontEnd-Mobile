import React from 'react';
import { Button, ScrollView, Text, TextInput, View, Image, TouchableHighlight } from 'react-native';

//COMMON
import PATHS from '../../../common/paths/paths';
import STRINGS from '../../../common/strings/strings';
import COMMON_STYLES from '../../../common/styles/styles';

export default function AssistantRegistration() {
  return (
    <View style={COMMON_STYLES.mainContainer}>
      <View>
        <Text style={COMMON_STYLES.headerText}>{STRINGS.assistantRegisterHeaderName}</Text>
      </View>
      <ScrollView style={COMMON_STYLES.registrationForm}>
        <TextInput style={COMMON_STYLES.input} placeholder={STRINGS.firstName}></TextInput>
        <TextInput style={COMMON_STYLES.input} placeholder={STRINGS.lastName}></TextInput>
        <TextInput style={COMMON_STYLES.input} placeholder={STRINGS.nic}></TextInput>
        <TextInput style={COMMON_STYLES.input} placeholder={STRINGS.insertImage}></TextInput>
        <TextInput style={COMMON_STYLES.input} placeholder={STRINGS.email}></TextInput>
        <TextInput style={COMMON_STYLES.input} placeholder={STRINGS.password}></TextInput>
        <TextInput style={COMMON_STYLES.input} placeholder={STRINGS.confirmPassword}></TextInput>
        <TextInput style={COMMON_STYLES.input} placeholder={STRINGS.contact1}></TextInput>
        <TextInput style={COMMON_STYLES.input} placeholder={STRINGS.contact2}></TextInput>
        <TextInput style={COMMON_STYLES.input} placeholder={STRINGS.location}></TextInput>
      </ScrollView>
      <View style={COMMON_STYLES.buttonContainer}>
        <TouchableHighlight style={COMMON_STYLES.button}>
          <Button   title='Back' />
        </TouchableHighlight>
        <TouchableHighlight style={COMMON_STYLES.button}>
          <Button  title='Next' />
        </TouchableHighlight>
      </View>
      {/* <View style={COMMON_STYLES.buttonContainer}>
        <TouchableHighlight style={COMMON_STYLES.button}>
          <Button   title='Back' />
        </TouchableHighlight>
        <TouchableHighlight style={COMMON_STYLES.button}>
          <Button  title='Next' />
        </TouchableHighlight>
      </View> */}
    </View>
  );
}

