'use strict';
import React, { Component } from 'react';

import ReactNative, {
  AppRegistry,
  StyleSheet,
  NavigatorIOS
} from 'react-native';

var Dashboard = require('./App/Views/Dashboard/index.ios.js');

var HackerNews = React.createClass({
  render: function() {
    return (
      <NavigatorIOS
        style={styles.container}
        tintColor='#FF6600'
        initialRoute={{
          title: 'Hacker News',
          component: Dashboard,
        }}/>
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6F6EF',
  },
});

AppRegistry.registerComponent('HackerNews', () => HackerNews);

module.exports = HackerNews;
