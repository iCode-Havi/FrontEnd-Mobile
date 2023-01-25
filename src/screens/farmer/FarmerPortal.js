import React, {useState} from 'react';
import {SafeAreaView, ScrollView, Text, TouchableHighlight, View} from 'react-native';
import {SearchBar} from 'react-native-screens';

import COMPONENT_STYLES from '../../common/styles/componentStyles';

//COMMON
import COMMON_STYLES from '../../common/styles/styles';

export default function FarmerPortal({navigation}) {


    const [Item] = useState(
        [
            // image url need to be added
            {itemName: 'Cucumber', price: '120.00', quantity: 10, description: 'quality cucumber'},
        ]
    );

    const [search, setSearch] = useState("");

    const updateSearch = (search) => {
        setSearch(search);
    };


    return (
        <SafeAreaView style={COMMON_STYLES.container}>
            <View style={COMMON_STYLES.mainContainer}>
                <ScrollView>
                    <View></View>
                    <Text style={COMMON_STYLES.headerText}>Farmer Portal</Text>
                    <SearchBar
                        placeholder="Type Here..."
                        onChangeText={updateSearch}
                        value={search}>

                    </SearchBar>

                    <View>
                        <TouchableHighlight onPress={() => navigation.navigate('FarmerProfile')}>
                            <Text>Profile</Text>
                        </TouchableHighlight>
                        <TouchableHighlight onPress={() => navigation.navigate('FarmerOrders')}>
                            <Text>Orders</Text>
                        </TouchableHighlight>
                        <TouchableHighlight onPress={() => navigation.navigate('AddFood')}>
                            <Text>Add New Food</Text>
                        </TouchableHighlight>

                    </View>
                    <View>
                        <View style={COMPONENT_STYLES.foodCard}>
                            {Item.map((itemDetail) => {
                                    return (
                                        <View>
                                            <Text>{itemDetail.itemName}</Text>
                                            <Text>{itemDetail.price}</Text>
                                            <Text>{itemDetail.quantity}</Text>
                                            <Text>{itemDetail.description}</Text>
                                        </View>)
                                }
                            )
                            }

                        </View>
                    </View>

                </ScrollView>
            </View>
        </SafeAreaView>
    );
}
