import React, { PureComponent } from 'react';
import { StyleSheet, View, FlatList, StatusBar, TouchableOpacity, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { NavigationActions } from 'react-navigation';
import { connect } from 'react-redux';
import * as actions from '../redux/actions';
import ListTile from './components/ListTile';
import list from '../assets/DataList';


const { height, width } = Dimensions.get('window');


class HomeScreen extends PureComponent {
    static navigationOptions = ({ navigation }) => {
        const params = navigation.state.params || {};
        return {
            headerTitle: "Notely",
            headerStyle: { height: height / 8, },
            headerTitleStyle: { fontSize: 30, fontFamily: "serif", fontWeight: 'bold', justifyContent: 'flex-start', alignSelf: 'flex-end', marginBottom: 18, },
            headerRight: params.headerRight

        }
    }
    constructor(props) {
        super(props);
        this.renderSeparator = this.renderSeparator.bind(this);
        this.updateState = this.updateState.bind(this);
        this.pushNote = this.pushNote.bind(this);
        this.updateNote = this.updateNote.bind(this);
        this.setScrollEnabled = this.setScrollEnabled.bind(this);

        this.state = {
            enable: true,
            data: list
        };
    }

    renderSeparator() {
        return (
            <View style={styles.separatorStyle} />

        );
    }

    updateNote(item) {
        let data = [...this.state.data];
        data.forEach(i => {
            if (i.title == item.title) {
                i.note = item.note;
            }
        });
        this.setState({
            data: data,
        });
        this.props.navigation.dispatch(NavigationActions.back());
        this.props.navigation.dispatch(NavigationActions.back());

    }

    pushNote(item) {
        let data = [...this.state.data];
        if (item.title != "" && item.note != "") {
            data.push(item);
            this.setState({
                data: data,
            });
        }
        this.props.navigation.dispatch(NavigationActions.back());
    }

    componentDidMount() {
        let headerRight = <View style={{ flexDirection: 'row' }}>
            <TouchableOpacity style={{ alignSelf: 'flex-end', padding: 20 }} onPress={() => this.props.navigation.navigate('add', { pushNote: this.pushNote })}><Icon name="plus" size={25} color="black" /></TouchableOpacity>
            <TouchableOpacity style={{ alignSelf: 'flex-end', padding: 20 }} onPress={() => this.props.navigation.toggleDrawer()}><Icon name="bars" size={25} color="black" /></TouchableOpacity>
        </View>;
        this.props.navigation.setParams({
            headerRight,
        });
    }

    updateState(title, type) {
        if (type == "delete") {
            const data = this.state.data.filter(item => item.title != title);
            this.setState({
                data: data,
            });
        } else {
            let data = [...this.state.data]
            data.forEach(item => {
                if (item.title == title) {
                    type == "fav" ? item.fav = !item.fav : item.heart = !item.heart;
                }
            });

            this.setState({
                data: data,
            });
        }

    }

    setScrollEnabled(enable) {
        this.setState({
            enable,
        });
    }

    renderItem(item) {
        return (
            <ListTile
                item={item}
                updateNote={this.updateNote}
                updateState={this.updateState}
                setScrollEnabled={enable => this.setScrollEnabled(enable)}
                navigation={this.props.navigation}
            />
        );
    }

    render() {
        return (<View>
            <StatusBar
                backgroundColor="#ffffff"
                barStyle="dark-content"
            />
            <FlatList
                showsVerticalScrollIndicator={false}
                style={this.props.style}
                data={this.state.data}
                ItemSeparatorComponent={this.renderSeparator}
                renderItem={({ item }) => this.renderItem(item)}
                scrollEnabled={this.state.enable}
                keyExtractor={(item, index) => item.title}
            />
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
)(HomeScreen);

const styles = StyleSheet.create({
    separatorStyle: {
        height: 1,
        backgroundColor: '#d4d4d4',
    },
});