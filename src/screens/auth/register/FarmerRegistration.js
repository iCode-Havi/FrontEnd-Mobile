import {Formik} from 'formik';
import React, {useState} from 'react';
import {SafeAreaView, ScrollView, Text, TouchableHighlight, View} from 'react-native';

//COMMON
import STRINGS from '../../../common/strings/strings';
import COMMON_STYLES from '../../../common/styles/styles';
import validationSchemaForRegistrationForm from '../../../common/validation/registrationFormValidation';
import paymentFields from '../../../common/values/paymentFields';
import registrationFields from '../../../common/values/registrationFileds';
import FormFields from '../../../components/form/FormFields';
import FormSubmitButton from '../../../components/form/FormSubmitButton';


const initialValues = {
    firstName: '',
    lastName: '',
    nic: '',
    email: '',
    password: '',
    confirmPassword: '',
    contact1: '',
    contact2: '',
    location: '',
    holderName: '',
    bank: '',
    branch: '',
}

export default function FarmerRegistration({navigation}) {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const handleSubmit = async (values, actions) => {
        setIsSubmitting(true);
        try {
            navigation.navigate('farmerPortal');
        } catch (error) {
            console.log(error);
        } finally {
            actions.setSubmitting(false);
            setIsSubmitting(false);
        }
    };

    return (
        <SafeAreaView style={COMMON_STYLES.container}>
            <ScrollView style={COMMON_STYLES.mainContainer}>
                <View style={COMMON_STYLES.mainText}>
                    <Text style={COMMON_STYLES.headerText}>{STRINGS.farmerRegisterHeaderName}</Text>
                </View>
                <View>
                    <TouchableHighlight style={COMMON_STYLES.button} onPress={() => navigation.navigate('UserLogin')}>
                        <Text>{STRINGS.alreadyHaveAccountText}</Text>
                    </TouchableHighlight>
                </View>

                <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchemaForRegistrationForm}
                    onSubmit={handleSubmit}>
                    {({handleChange, handleBlur, handleSubmit, values, errors, touched}) => (
                        <View>
                            {/* Registration Form */}
                            <View style={COMMON_STYLES.registrationForm}>
                                <FormFields
                                    handleChange={handleChange}
                                    handleBlur={handleBlur}
                                    values={values}
                                    errors={errors}
                                    touched={touched}
                                    fields={registrationFields}
                                />
                            </View>

                            {/* Payment Form */}
                            <View style={COMMON_STYLES.mainText}>
                                <Text style={COMMON_STYLES.paymentText}>
                                    {STRINGS.paymentText}
                                </Text>
                            </View>
                            <View style={COMMON_STYLES.paymentForm}>
                                <FormFields
                                    handleChange={handleChange}
                                    handleBlur={handleBlur}
                                    values={values}
                                    errors={errors}
                                    touched={touched}
                                    fields={paymentFields}
                                />
                            </View>

                            {/* Button */}
                            <FormSubmitButton handleSubmit={handleSubmit} isSubmitting={isSubmitting} />
                        </View>
                    )}
                </Formik>
            </ScrollView>
        </SafeAreaView>
    );
}
