import { StyleSheet } from 'react-native';

import COLORS from '../colors/colors';

const COMMON_STYLES= StyleSheet.create({
    mainContainer: {
      backgroundColor: COLORS['primary-background'],
      paddingVertical: 50,
      paddingHorizontal: 20,
    },
    headerText: {
      color: COLORS['primary'],
      fontSize: 36,
      fontWeight: 'bold',
      textAlign: 'center',
      paddingHorizontal: 20,
      marginBottom: 10,
    },
    registrationForm: {
      paddingVertical: 10,
      paddingHorizontal: 20,
      paddingBottom: 30,
      marginTop: 20,
      borderRadius: 10,
      backgroundColor: COLORS['secondary-background'],
      flexDirection: 'column',
    },
    input: {
      marginVertical: 8,
      backgroundColor: COLORS['white'],
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

  export default COMMON_STYLES;
  