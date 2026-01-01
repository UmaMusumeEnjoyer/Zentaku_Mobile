const { getDefaultConfig } = require('expo/metro-config');
const path = require('path');

const config = getDefaultConfig(__dirname);

// Thêm shared-logic vào watchFolders
config.watchFolders = [
  path.resolve(__dirname, '../shared-logic')
];

// Resolve node_modules từ nhiều nơi
config.resolver.nodeModulesPaths = [
  path.resolve(__dirname, 'node_modules'),
  path.resolve(__dirname, '../shared-logic/node_modules'),
];

module.exports = config;