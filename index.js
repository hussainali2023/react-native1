/**
 * @format
 */

import {AppRegistry} from 'react-native';
// import App from './App';
// import Map from './components/Map';
// import Array from './components/Array';
// import Grid from './components/Grid';
import FlatListExample from './components/FlatListExample';

import {name as appName} from './app.json';

// AppRegistry.registerComponent(appName, () => App);
AppRegistry.registerComponent(appName, () => FlatListExample);
