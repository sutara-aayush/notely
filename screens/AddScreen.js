import React, { Component } from 'react';
import { View, Text, Dimensions, TouchableOpacity, TextInput } from 'react-native';

const { height, width } = Dimensions.get('window');

export default class AddScreen extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title: "",
            gist: "",
        };
    }
    static navigationOptions = ({ navigation }) => {
        const params = navigation.state.params || {};
        return {
            headerTitle: "Add New Note",
            headerStyle: { height: height / 8, },
            headerTitleStyle: { fontSize: 30, fontFamily: "serif", fontWeight: 'bold', justifyContent: 'flex-start', alignSelf: 'flex-end', marginBottom: 18 },
            headerRight: params.headerRight
        }
    }


    componentDidMount() {
        let headerRight = <TouchableOpacity
            style={{ padding: 20 }}
            onPress={() => this.props.navigation.state.params.pushNote({
                title: this.state.title,
                note: this.state.gist,
                created: "Sep 04 at 6:30 PM",
                fav: false,
                heart: false
            })}
        >
            <Text style={{ fontSize: 15 }}>Save</Text>
        </TouchableOpacity>;
        this.props.navigation.setParams({
            headerRight,
        });
    }



    render() {
        return (
            <View style={{ flexDirection: 'column' }}>

                <TextInput
                    onChangeText={(title) => this.setState({ title })}
                    value={this.state.title}
                    multiline={true}
                    placeholder=">Title of Note"
                    placeholderTextColor="#8d8a7d"
                    underlineColorAndroid="black" />



                <TextInput
                    onChangeText={(gist) => this.setState({ gist })}
                    value={this.state.gist}
                    multiline={true}
                    placeholder=">Gist of Note"
                    placeholderTextColor="#8d8a7d"
                    underlineColorAndroid="black" />



            </View>
        );
    }
}