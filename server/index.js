const path = require('path');
const React = require('react');

require('ignore-styles');
require('@babel/register')({
    configFile: path.resolve(__dirname, '../babel.config.js')
})

require('./express');