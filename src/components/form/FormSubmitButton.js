import React from 'react';
import {Text, TouchableHighlight, View} from 'react-native';
import COMMON_STYLES from '../../common/styles/styles';

const FormSubmitButton = ({handleSubmit, isSubmitting}) => {
    return (
        <View style={COMMON_STYLES.buttonContainer}>
            <TouchableHighlight
                style={COMMON_STYLES.regBtn}
                onPress={handleSubmit}
                disabled={isSubmitting}
            >
                <Text style={COMMON_STYLES.regBtnText}>Create Account</Text>
            </TouchableHighlight>
        </View>
    );
};

export default FormSubmitButton;
