import React, { Component } from 'react';
import { StyleSheet, Text, View, Dimensions, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import * as actions from '../redux/actions';

const { height, width } = Dimensions.get('window');

class NoteScreen extends Component {

    constructor(props) {
        super(props)
    }
    static navigationOptions = ({ navigation }) => {
        return {
            headerTitle: <View style={{ flexDirection: 'column' }}>
                <Text style={{ fontSize: 30, fontFamily: "serif", fontWeight: 'bold', color: "black" }}>{navigation.state.params.item.title}</Text>
                <Text style={{ fontSize: 10, color: "#d8d8d8", }}>Last updated: {navigation.state.params.item.created}</Text>
            </View>,
            headerStyle: { height: height / 8, },
            headerRight: <TouchableOpacity style={{ padding: 20 }} onPress={() => navigation.navigate('edit', { item: navigation.state.params.item, updateNote: navigation.state.params.updateNote })}>
                <Text style={{ fontSize: 15 }}>Edit</Text>
            </TouchableOpacity>
        }
    }
    render() {
        const item = this.props.navigation.state.params.item;
        return (
            <View style={styles.view}>
                <Text style={styles.text} >{item.note}</Text>
            </View>
        );
    }
}

const mapStateToProps = state => {
    return {
        list: state.list,
    };
};

const mapDispatchToProps = {
    fetchData: actions.fetchData,
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(NoteScreen);

const styles = StyleSheet.create({
    text: {
        textAlign: 'justify',
        fontSize: 20,
        includeFontPadding: true,
    },
    view: {
        padding: 20,
    }
});