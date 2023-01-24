import React from 'react';
import {Text, TextInput, View} from 'react-native';
import COMMON_STYLES from '../../common/styles/styles';

const FormField = ({placeholder, onChangeText, onBlur, value, error, style,}) => {
    return (
        <View>
            <TextInput
                style={style}
                placeholder={placeholder}
                onChangeText={onChangeText}
                onBlur={onBlur}
                value={value}
                error={error}
            />
            {error && onBlur ? (
                <Text style={COMMON_STYLES.error}>{error}</Text>
            ) : null}
        </View>
    );
};

export default FormField;
