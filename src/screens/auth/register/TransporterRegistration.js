import React,{useState} from 'react';
import { ScrollView, Text, TextInput, View, TouchableHighlight, SafeAreaView } from 'react-native';

//COMMON
import STRINGS from '../../../common/strings/strings';
import COMMON_STYLES from '../../../common/styles/styles';

export default function TransporterRegistration({ navigation }) {

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [nic, setNic] = useState("");
  const [contact1, setContact1] = useState("");
  const [contact2, setContact2] = useState("");
  const [location, setLocation] = useState("");
  const [transportMode, setTransportMode] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [imgUrl, setImgUrl] = useState("");


  return (
    <SafeAreaView style={COMMON_STYLES.container}>
      <ScrollView  style={COMMON_STYLES.mainContainer}>
      <ScrollView>
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
          <TextInput style={COMMON_STYLES.inputFirst} placeholder={STRINGS.firstName}  onChange={(val)=> setFirstName(val)}></TextInput>
          <TextInput style={COMMON_STYLES.input} placeholder={STRINGS.lastName} onChange={(val)=> setLastName(val)}></TextInput>
          <TextInput style={COMMON_STYLES.input} placeholder={STRINGS.nic} onChange={(val)=> setNic(val)}></TextInput>
          <TextInput style={COMMON_STYLES.input} placeholder={STRINGS.contact1} onChange={(val)=> setContact1(val)}></TextInput>
          <TextInput style={COMMON_STYLES.input} placeholder={STRINGS.contact2} onChange={(val)=> setContact2(val)}></TextInput>
          <TextInput style={COMMON_STYLES.input} placeholder={STRINGS.location} onChange={(val)=> setLocation(val)}></TextInput>
          <TextInput style={COMMON_STYLES.input} placeholder="Transport Mode" onChange={(val)=> setTransportMode(val)}></TextInput>
          <TextInput style={COMMON_STYLES.input} placeholder={STRINGS.addImages} onChange={(val)=> setImgUrl(val)}></TextInput>
          <TextInput style={COMMON_STYLES.input} placeholder={STRINGS.password} onChange={(val)=> setPassword(val)}></TextInput>
          <TextInput style={COMMON_STYLES.input} placeholder={STRINGS.confirmPassword} onChange={(val)=> setConfirmPassword(val)}></TextInput>
       
        </View>
      </ScrollView>

      <View style={COMMON_STYLES.mainText}>
          <Text style={COMMON_STYLES.paymentText}>Add Your Card Detail</Text>
        </View>
        <ScrollView>
        <View style={COMMON_STYLES.paymentForm}>
         <TextInput style={COMMON_STYLES.inputFirst} placeholder={STRINGS.cardNo}></TextInput>
         <TextInput style={COMMON_STYLES.input} placeholder={STRINGS.bank}></TextInput>
          <TextInput style={COMMON_STYLES.input} placeholder={STRINGS.holderName}></TextInput>
          <TextInput style={COMMON_STYLES.input} placeholder={STRINGS.expYr}></TextInput>
          <TextInput style={COMMON_STYLES.input} placeholder={STRINGS.expMonth}></TextInput>
          <TextInput style={COMMON_STYLES.input} placeholder={STRINGS.cvv}></TextInput>
          <Text>{STRINGS.otpText}</Text>
          <TextInput style={COMMON_STYLES.inputLast} placeholder={STRINGS.otp}></TextInput>
         
          
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
