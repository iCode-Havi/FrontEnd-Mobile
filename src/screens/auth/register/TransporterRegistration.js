import { Button, ScrollView, Text, TextInput, View, Image, TouchableHighlight } from 'react-native';

import PATHS from '../../../common/paths/paths';
import STRINGS from '../../../common/strings/strings';
import COLORS from '../../../common/colors/colors';
import styles from '../../../common/styles/styles';

export default function TransporterRegistration() {
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
          <Button color={COLORS['primary']}  title='Back' />
        </TouchableHighlight>
        <TouchableHighlight style={styles.button}>
          <Button color={COLORS['primary']} title='Next' />
        </TouchableHighlight>
      </View>
    </View>
  );
}

