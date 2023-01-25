import STRINGS from '../strings/strings';
import COMMON_STYLES from '../styles/styles';

const paymentFields = [
    {
        name: 'holderName',
        placeholder: STRINGS.holderName,
        style: COMMON_STYLES.inputFirst
    },
    {
        name: 'bank',
        placeholder: STRINGS.bank,
        style: COMMON_STYLES.input
    },
    {
        name: 'branch',
        placeholder: STRINGS.branch,
        style: COMMON_STYLES.inputLast
    },
]

export default paymentFields;
