import React, {useState} from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { ScrollView, Text, TextInput, View, TouchableHighlight, SafeAreaView } from 'react-native';

//COMMON
import STRINGS from '../../../common/strings/strings';
import COMMON_STYLES from '../../../common/styles/styles';

export default function AssistantRegistration({ navigation }) {

  const [firstName, setFirstName] = useState("");


  return (
    <SafeAreaView style={COMMON_STYLES.container}>
      <ScrollView>
      <ScrollView style={COMMON_STYLES.mainContainer}>
        <View style={COMMON_STYLES.mainText}>
          <Text style={COMMON_STYLES.headerText}>{STRINGS.assistantRegisterHeaderName}</Text>
        </View>
        <View>
           <TouchableHighlight style={COMMON_STYLES.button}
            onPress={() => navigation.navigate('UserLogin')} >
              <Text>Already Have an Account?</Text>
            </TouchableHighlight>
        </View>
        <View style={COMMON_STYLES.registrationForm}>
          <TextInput style={COMMON_STYLES.inputFirst} placeholder={STRINGS.firstName}></TextInput>
          <TextInput style={COMMON_STYLES.input} placeholder={STRINGS.lastName}></TextInput>
          <TextInput style={COMMON_STYLES.input} placeholder={STRINGS.nic}></TextInput>
          <TextInput style={COMMON_STYLES.input} placeholder={STRINGS.dob}></TextInput>
          <TextInput style={COMMON_STYLES.input} placeholder={STRINGS.profession}></TextInput>
          <TextInput style={COMMON_STYLES.input} placeholder={STRINGS.professionProof}></TextInput>
          <TextInput style={COMMON_STYLES.input} placeholder={STRINGS.email}></TextInput>
          <TextInput style={COMMON_STYLES.input} placeholder={STRINGS.contact1}></TextInput>
          <TextInput style={COMMON_STYLES.input} placeholder={STRINGS.contact2}></TextInput>
          <TextInput style={COMMON_STYLES.input} placeholder={STRINGS.region}></TextInput>
          <TextInput style={COMMON_STYLES.input} placeholder={STRINGS.password}></TextInput>
          <TextInput style={COMMON_STYLES.input} placeholder={STRINGS.confirmPassword}></TextInput>
       
        </View>
      </ScrollView>
        <View style={COMMON_STYLES.mainText}>
          <Text style={COMMON_STYLES.paymentText}>{STRINGS.paymentText}</Text>
        </View>
        <ScrollView>
        <View style={COMMON_STYLES.paymentForm}>
        
          <TextInput style={COMMON_STYLES.inputFirst} placeholder={STRINGS.holderName}></TextInput>
          <TextInput style={COMMON_STYLES.input} placeholder={STRINGS.bank}></TextInput>
          <TextInput style={COMMON_STYLES.inputLast} placeholder={STRINGS.branch}></TextInput>
          
          </View>

        </ScrollView>
        <View style={COMMON_STYLES.buttonContainer}>
            <TouchableHighlight
            style={COMMON_STYLES.regBtn}
            onPress={() => navigation.navigate('farmerPortal')}>
              <Text  style={COMMON_STYLES.regBtnText}>Create Account</Text>
            </TouchableHighlight>
          </View>

        </ScrollView>
        
    </SafeAreaView>
  );
}

