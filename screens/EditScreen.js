import React, { Component } from 'react';
import { View, Text, Dimensions, TouchableOpacity, TextInput } from 'react-native';
const { height, width } = Dimensions.get('window');

export default class EditScreen extends Component {
    constructor(props) {
        super(props)
        this.state = {
            gist: this.props.navigation.state.params.item.note,
        };
    }
    static navigationOptions = ({ navigation }) => {

        const params = navigation.state.params || {};
        return {
            headerTitle: "Edit Note",
            headerStyle: { height: height / 8, },
            headerTitleStyle: { fontSize: 30, fontFamily: "serif", fontWeight: 'bold', justifyContent: 'flex-start', alignSelf: 'flex-end', marginBottom: 18 },
            headerRight: params.headerRight
        }
    }
    componentDidMount() {
        let headerRight = <TouchableOpacity style={{ padding: 20 }} onPress={() => this.props.navigation.state.params.updateNote({
            title: this.props.navigation.state.params.item.title,
            note: this.state.gist,
            created: this.props.navigation.state.params.item.created,
            fav: this.props.navigation.state.params.item.fav,
            heart: this.props.navigation.state.params.item.heart
        })}>
            <Text style={{ fontSize: 15 }}>Save</Text>
        </TouchableOpacity>;
        this.props.navigation.setParams({
            headerRight,
        });
    }
    render() {
        return (
            <View>
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