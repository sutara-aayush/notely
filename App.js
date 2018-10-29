import React, { Component } from 'react';
import { Dimensions } from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import { StackNavigator, DrawerNavigator } from 'react-navigation';
import HomeScreen from './screens/HomeScreen';
import NoteScreen from './screens/NoteScreen';
import AddScreen from './screens/AddScreen';
import EditScreen from './screens/EditScreen';
import Filter from './screens/components/Filter';


const { height, width } = Dimensions.get('window');

export default class App extends Component {
  constructor(props) {
    super(props);

  }

  componentDidMount() {
    SplashScreen.hide();
  }
  render() {
    return (
      <SideDrawer />
    );
  }
}


const ScreenNavigator = new StackNavigator({
  home: {
    screen: HomeScreen
  },
  detail: {
    screen: NoteScreen,
  },
  edit: {
    screen: EditScreen,
  },
  add: {
    screen: AddScreen,
  }
});

const SideDrawer = new DrawerNavigator({
  screen1: {
    screen: ScreenNavigator
  },
}, {
    drawerPosition: 'right',
    drawerWidth: width / 2,
    drawerBackgroundColor: "#4f4f4f",
    contentComponent: Filter,
    contentOptions: {
      activeTintColor: "green",
      inactiveTintColor: "white"
    }
  });
