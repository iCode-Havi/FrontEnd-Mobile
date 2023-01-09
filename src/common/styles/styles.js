import { StyleSheet, StatusBar } from 'react-native';

import COLORS from '../colors/colors';

const COMMON_STYLES = StyleSheet.create({
  container: {
    flex: 1,
  },
  mainContainer: {
    backgroundColor: COLORS['primary-background'],
    paddingHorizontal: 20,
  },
  mainText: {
    marginTop: 10
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
    paddingHorizontal: 20,
    marginTop: 20,
    borderRadius: 10,
    backgroundColor: COLORS['secondary-background'],
    flexDirection: 'column',
  },
  inputFirst: {
    backgroundColor: COLORS['white'],
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 20,
    marginBottom: 8
  },
  input: {
    backgroundColor: COLORS['white'],
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
    marginBottom: 8
  },
  inputLast: {
    backgroundColor: COLORS['white'],
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginBottom: 20
  },
  button: {
    borderRadius: 10,
    marginLeft: 10,
  },
  headerBar: {
    flex: 1, 
    flexDirection: 'row',
    alignItems: 'flex-end'
  }
});

export default COMMON_STYLES;
