import React, {useState} from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { ScrollView, Text, TextInput, View, TouchableHighlight, SafeAreaView } from 'react-native';

//COMMON
import STRINGS from '../../../common/strings/strings';
import COMMON_STYLES from '../../../common/styles/styles';
import COLORS from '../../../common/colors/colors';

export default function FarmerRegistration({ navigation }) {

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [nic, setNic] = useState("");
  const [email, setEmail] = useState("");
  const [contact1, setContact1] = useState("");
  const [contact2, setContact2] = useState("");
  const [location, setLocation] = useState("");
  const [imgUrl, setImgUrl] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [cardNo, setCardNo] = useState("");
  const [bank, setBank] = useState("");
  const [holdersName, setHoldersName] = useState("");
  const [expDate, setExpDate] = useState("");
  const [expMonth, setExpMonth] = useState("");
  const [cvv, setCVV] = useState("");


  const icon_arrow_circle_left = <FontAwesome5 name={'arrow-circle-left'} color={COLORS.primary} size={30} onPress={() => navigation.navigate('AssistantRegistration')} />;
  const icon_arrow_circle_right = <FontAwesome5 name={'arrow-circle-right'} color={COLORS.primary} size={30} onPress={() => navigation.navigate('TransporterRegistration')} />;

  return (
    <SafeAreaView style={COMMON_STYLES.container}>
      <ScrollView style={COMMON_STYLES.mainContainer}>
        <View style={COMMON_STYLES.mainText}>
          <Text style={COMMON_STYLES.headerText}>{STRINGS.farmerRegisterHeaderName}</Text>
        </View>
        <View>
           <TouchableHighlight style={COMMON_STYLES.button}
            onPress={() => navigation.navigate('UserLogin')} >
              <Text>Already Have an Account?</Text>
            </TouchableHighlight>
        </View>
        <View style={COMMON_STYLES.registrationForm}>
          <TextInput style={COMMON_STYLES.inputFirst} placeholder={STRINGS.firstName} onChange={(val)=> setFirstName(val)}></TextInput>
          <TextInput style={COMMON_STYLES.input} placeholder={STRINGS.lastName} onChange={(val)=> setLastName(val)}></TextInput>
          <TextInput style={COMMON_STYLES.input} placeholder={STRINGS.nic} onChange={(val)=> setNic(val)}></TextInput>
          <TextInput style={COMMON_STYLES.input} placeholder={STRINGS.insertImage} onChange={(val)=> setImgUrl(val)}></TextInput>
          <TextInput style={COMMON_STYLES.input} placeholder={STRINGS.email} onChange={(val)=> setEmail(val)}></TextInput>
          <TextInput style={COMMON_STYLES.input} placeholder={STRINGS.password} onChange={(val)=> setPassword(val)}></TextInput>
          <TextInput style={COMMON_STYLES.input} placeholder={STRINGS.confirmPassword} onChange={(val)=> setConfirmPassword(val)}></TextInput>
          <TextInput style={COMMON_STYLES.input} placeholder={STRINGS.contact1} onChange={(val)=> setContact1(val)}></TextInput>
          <TextInput style={COMMON_STYLES.input} placeholder={STRINGS.contact2} onChange={(val)=> setContact2(val)}></TextInput>
          <TextInput style={COMMON_STYLES.inputLast} placeholder={STRINGS.location} onChange={(val)=> setLocation(val)}></TextInput>

          <TextInput style={COMMON_STYLES.input} placeholder={STRINGS.password} onChange={(val)=> setPassword(val)}></TextInput>
          <TextInput style={COMMON_STYLES.inputLast} placeholder={STRINGS.confirmPassword} onChange={(val)=> setConfirmPassword(val)}></TextInput>

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

