#!/usr/bin/env node
import {CliCore} from "@tsed/cli-core";
import {HelloCmd} from "./HelloCmd";

CliCore.bootstrap({
  commands: [
    HelloCmd
  ]
}).catch(console.error);