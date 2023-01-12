import React, { useState } from 'react';
import { ScrollView, Text, TextInput, View, TouchableHighlight, SafeAreaView } from 'react-native';

//COMMON
import STRINGS from '../../../common/strings/strings';
import COMMON_STYLES from '../../../common/styles/styles';

export default function AssistantRegistration({ navigation }) {

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [nic, setNic] = useState("");
  const [dob, setDOB] = useState("");
  const [profession, setProfession] = useState("");
  const [email, setEmail] = useState("");
  const [contact1, setContact1] = useState("");
  const [contact2, setContact2] = useState("");
  const [region, setRegion] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [holdername, setHoldername] = useState("");
  const [bank, setBank] = useState("");
  const [branch, setBranch] = useState("");


  return (
    <SafeAreaView style={COMMON_STYLES.container}>
      <ScrollView style={COMMON_STYLES.mainContainer}>
        <View style={COMMON_STYLES.mainText}>
          <Text style={COMMON_STYLES.headerText}>{STRINGS.assistantRegisterHeaderName}</Text>
        </View>
        <View>
          <TouchableHighlight style={COMMON_STYLES.button}
            onPress={() => navigation.navigate('UserLogin')} >
            <Text>{STRINGS.alreadyHaveAccountText}</Text>
          </TouchableHighlight>
        </View>
        <View style={COMMON_STYLES.registrationForm}>
          <TextInput style={COMMON_STYLES.inputFirst} placeholder={STRINGS.firstName} onChange={(val) => setFirstName(val)}></TextInput>
          <TextInput style={COMMON_STYLES.input} placeholder={STRINGS.lastName} onChange={(val) => setLastName(val)}></TextInput>
          <TextInput style={COMMON_STYLES.input} placeholder={STRINGS.nic} onChange={(val) => setNic(val)}></TextInput>
          <TextInput style={COMMON_STYLES.input} placeholder={STRINGS.dob} onChange={(val) => setDOB(val)}></TextInput>
          <TextInput style={COMMON_STYLES.input} placeholder={STRINGS.profession} onChange={(val) => setProfession(val)}></TextInput>
          <TextInput style={COMMON_STYLES.input} placeholder={STRINGS.email} onChange={(val) => setEmail(val)}></TextInput>
          <TextInput style={COMMON_STYLES.input} placeholder={STRINGS.contact1} onChange={(val) => setContact1(val)}></TextInput>
          <TextInput style={COMMON_STYLES.input} placeholder={STRINGS.contact2} onChange={(val) => setContact2(val)}></TextInput>
          <TextInput style={COMMON_STYLES.input} placeholder={STRINGS.region} onChange={(val) => setRegion(val)}></TextInput>
          <TextInput style={COMMON_STYLES.input} placeholder={STRINGS.password} onChange={(val) => setPassword(val)}></TextInput>
          <TextInput style={COMMON_STYLES.input} placeholder={STRINGS.confirmPassword} onChange={(val) => setConfirmPassword(val)}></TextInput>
        </View>

        {/* Payment Form */}
        <View style={COMMON_STYLES.mainText}>
          <Text style={COMMON_STYLES.paymentText}>{STRINGS.paymentText}</Text>
        </View>
        <View style={COMMON_STYLES.paymentForm}>
          <TextInput style={COMMON_STYLES.inputFirst} placeholder={STRINGS.holderName} onChange={(val) => setHoldername(val)}></TextInput>
          <TextInput style={COMMON_STYLES.input} placeholder={STRINGS.bank} onChange={(val) => setBank(val)}></TextInput>
          <TextInput style={COMMON_STYLES.inputLast} placeholder={STRINGS.branch} onChange={(val) => setBranch(val)}></TextInput>
        </View>

        {/* Button */}
        <View style={COMMON_STYLES.buttonContainer}>
          <TouchableHighlight
            style={COMMON_STYLES.regBtn}
            onPress={() => navigation.navigate('farmerPortal')}>
            <Text style={COMMON_STYLES.regBtnText}>Create Account</Text>
          </TouchableHighlight>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

