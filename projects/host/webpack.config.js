const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({

  remotes: {
    "remoteapp1": "http://localhost:5001/remoteEntry.js",
    "remoteapp2": "http://localhost:5002/remoteEntry.js",
    "remoteapp3": "http://localhost:4201/remoteEntry.js",    
  },

  shared: {
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
  },

});
