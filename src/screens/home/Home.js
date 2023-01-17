import React from 'react';
import { Text, View, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native';
import COLORS from '../../common/colors/colors';


//COMMON
import COMMON_STYLES from '../../common/styles/styles';

export default function Home({ navigation }) {

  return (
    <SafeAreaView>
      <View style={COMMON_STYLES.mainContainer}>
        <View style={styles.row}>
          <TouchableOpacity style={styles.button}
            onPress={() => navigation.navigate('FarmerRegistration')} >
            <Text style={styles.buttonLabel}>
              Farmer
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}
            onPress={() => navigation.navigate('AssistantRegistration')} >
            <Text style={styles.buttonLabel}>
              Assistant
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}
            onPress={() => navigation.navigate('TransporterRegistration')} >
            <Text style={styles.buttonLabel}>
              Transporter
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 8,
    backgroundColor: 'aliceblue',
  },
  box: {
    width: 50,
    height: 50,
  },
  row: {
    marginTop: 30,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  button: {
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderRadius: 4,
    backgroundColor: COLORS['secondary-background'],
    alignSelf: 'flex-start',
    marginHorizontal: '1%',
    marginBottom: 6,
    minWidth: '30%',
    textAlign: 'center',
  },
  buttonLabel: {
    textAlign: 'center',
    fontSize: 12,
    fontWeight: '500',
    color: COLORS.white,
  },
});

