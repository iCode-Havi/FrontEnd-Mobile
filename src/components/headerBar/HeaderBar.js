import React from 'react';
import { Image, View } from 'react-native';

import PATHS from '../../common/paths/paths';
import COMMON_STYLES from '../../common/styles/styles';

export default function HeaderBar() {
    return (
        <View style={COMMON_STYLES.headerBar}>
            <Image
                style={{ width: 40, height: 40 }}
                source={PATHS.logoPath}
            />
        </View>
    );
}