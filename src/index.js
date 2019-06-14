import React, {Component} from 'react';
import { YellowBox } from 'react-native';

YellowBox.ignoreWarnings([
    'Unrecognize WebSocket'
])

import Routes from './routes';

export default function App(){
    return <Routes />
}