import { info } from '@actions/core';
import * as github from '@actions/github';
// import { config } from './config';

if (github.context.eventName === 'repository_dispatch') {
  info(JSON.stringify(github.context.payload, null, 2));
}

if (github.context.eventName === 'workflow_dispatch') {
  info(JSON.stringify(github.context.payload.inputs, null, 2));
}
