import React from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { ScrollView, Text, TextInput, View, TouchableHighlight, SafeAreaView } from 'react-native';

//COMMON
import STRINGS from '../../../common/strings/strings';
import COMMON_STYLES from '../../../common/styles/styles';
import COLORS from '../../../common/colors/colors';

export default function UserLogin({ navigation }) {

  const icon_arrow_circle_left = <FontAwesome5 name={'arrow-circle-left'} color={COLORS.primary} size={30} onPress={() => navigation.navigate('AssistantRegistration')} />;
  const icon_arrow_circle_right = <FontAwesome5 name={'arrow-circle-right'} color={COLORS.primary} size={30} onPress={() => navigation.navigate('TransporterRegistration')} />;

  return (
    <SafeAreaView style={COMMON_STYLES.container}>
      <ScrollView style={COMMON_STYLES.mainContainer}>
        <View style={COMMON_STYLES.mainText}>
          <Text style={COMMON_STYLES.headerText}>{STRINGS.loginText}</Text>
        </View>
      
        <View style={COMMON_STYLES.registrationForm}>
          <TextInput style={COMMON_STYLES.inputFirst} placeholder={STRINGS.userName}></TextInput>
          <TextInput style={COMMON_STYLES.input} placeholder={STRINGS.password}></TextInput>

        </View>
      </ScrollView>

      <View>
            <TouchableHighlight
            onPress={() => navigation.navigate('farmerPortal')} >
                <Text>Login</Text>
            </TouchableHighlight>
          </View>

    </SafeAreaView>
  );
}

