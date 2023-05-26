import ModuleFederationPlugin from "../../node_modules/ModuleFederationPlugin";
import {
  share as _share,
  SharedMappings,
} from "@angular-architects/module-federation/webpack";
import { join, resolve as _resolve } from "path";
const share = _share;

const sharedMappings = new SharedMappings();
sharedMappings.register(join(__dirname, "../../tsconfig.json"), [
  /* mapped paths to share */
]);

export const output = {
  uniqueName: "remoteapp2",
  publicPath: "auto",
  scriptType: "text/javascript",
};
export const optimization = {
  runtimeChunk: false,
};
export const resolve = {
  alias: {
    ...sharedMappings.getAliases(),
  },
};
export const experiments = {
  outputModule: true,
};
export const plugins = [
  new ModuleFederationPlugin({
    library: { type: "module" },

    // For remotes (please adjust)
    name: "remoteapp2",
    filename: "remoteEntry.js",
    exposes: {
      "./homeModule": _resolve(__dirname, "./src/app/home/home.module.ts"),
    },

    // For hosts (please adjust)
    // remotes: {
    //     "host": "http://localhost:4200/remoteEntry.js",
    //     "remoteapp1": "http://localhost:5001/remoteEntry.js",
    // },
    shared: share({
      "@angular/core": {
        singleton: true,
        strictVersion: true,
        requiredVersion: "auto",
      },
      "@angular/common": {
        singleton: true,
        strictVersion: true,
        requiredVersion: "auto",
      },
      "@angular/common/http": {
        singleton: true,
        strictVersion: true,
        requiredVersion: "auto",
      },
      "@angular/router": {
        singleton: true,
        strictVersion: true,
        requiredVersion: "auto",
      },

      ...sharedMappings.getDescriptors(),
    }),
  }),
  sharedMappings.getPlugin(),
];
