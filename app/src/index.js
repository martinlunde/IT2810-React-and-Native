import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { TabNavigator } from 'react-navigation';
import {Calendar} from "./containers/Calendar";
import {Notes} from './containers/Notes';
import {Todo} from './containers/Todo';

export class Index extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Content/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        flex: 1,
    }
});

//Styles and configuration of react-navigation navbar.
//Repetitive code is necessary to configure each page.
export const Content = TabNavigator({
    Calendar: {screen: Calendar,
            navigationOptions: {
                tabBarIcon: ({focused}) => (
                    <Image
                        source={focused ? require('./assets/calendar_focused.png') : require('./assets/calendar.png')}
                        style={{width: 60, height: 60}}
                    />
                ),
            }
        },
    Notes: {screen: Notes,
            navigationOptions: {
                tabBarIcon: ({focused}) => (
                    <Image
                        source={focused ? require('./assets/list-symbol_focused.png') : require('./assets/list-symbol.png')}
                        style={{width: 60, height: 60}}
                    />
                ),
            }
        },
    Todo: {screen: Todo,
            navigationOptions: {
                tabBarIcon: ({focused}) => (
                    <Image
                        source={focused ? require('./assets/pencil_focused.png') : require('./assets/pencil.png')}
                        style={{width: 60, height: 60}}
                    />
                ),
            }
        }
}, {
    initialRouteName: 'Calendar',
    swipeEnabled: false,
    tabBarOptions: {
        showIcon: true,
        showLabel: false,
        inactiveBackgroundColor: '#464a4b',
        activeBackgroundColor: '#35393a',
        style: {
            flexBasis: 90,
        },
        iconStyle: {
            height: 45,
            width: 45,
        },
    }
});
