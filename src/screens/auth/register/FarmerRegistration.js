import { Button, ScrollView, StyleSheet, Text, TextInput, View, Image, TouchableHighlight } from 'react-native';

import PATHS from '../../../paths/paths';
import STRINGS from '../../../strings/strings';

export default function FarmerRegistration() {
  return (
    <View style={styles.mainContainer}>
      <View>
        <Text style={styles.headerText}>{STRINGS.farmerRegisterHeaderName}</Text>
      </View>
      <View style={styles.headerImage}>
        <Image style={styles.img} source={PATHS.farmerRegisterImagePath} />
      </View>
      <ScrollView style={styles.registrationForm}>
        <TextInput style={styles.input} placeholder={STRINGS.firstName}></TextInput>
        <TextInput style={styles.input} placeholder={STRINGS.lastName}></TextInput>
        <TextInput style={styles.input} placeholder={STRINGS.nic}></TextInput>
        <TextInput style={styles.input} placeholder={STRINGS.insertImage}></TextInput>
        <TextInput style={styles.input} placeholder={STRINGS.email}></TextInput>
        <TextInput style={styles.input} placeholder={STRINGS.password}></TextInput>
        <TextInput style={styles.input} placeholder={STRINGS.confirmPassword}></TextInput>
        <TextInput style={styles.input} placeholder={STRINGS.contact1}></TextInput>
        <TextInput style={styles.input} placeholder={STRINGS.contact2}></TextInput>
        <TextInput style={styles.input} placeholder={STRINGS.location}></TextInput>
      </ScrollView>
      <View style={styles.buttonContainer}>
        <TouchableHighlight style={styles.button}>
          <Button color="#778A35"  title='Back' />
        </TouchableHighlight>
        <TouchableHighlight style={styles.button}>
          <Button color="#778A35" title='Next' />
        </TouchableHighlight>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: '#EBEBE8',
    paddingVertical: 50,
    paddingHorizontal: 20,
  },
  headerText: {
    color: '#778A35',
    fontSize: 36,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingHorizontal: 20,
    marginBottom: 10,
  },
  headerImage: {
    height: '40%',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  img: {
    height: '100%',
    resizeMode: 'contain',
    alignItems: 'flex-start'
  },
  registrationForm: {
    height: '40%',
    paddingVertical: 10,
    paddingHorizontal: 20,
    paddingBottom: 30,
    marginTop: 20,
    borderRadius: 10,
    backgroundColor: '#D1E2C4',
    flexDirection: 'column',
  },
  input: {
    marginVertical: 8,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
    width: '100%',
  },
  buttonContainer: {
    padding: 10,
    height: '10%',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  button: {
    marginRight: 10,
    borderRadius: 10,
  }
});
