import { info, setOutput } from '@actions/core';
import * as github from '@actions/github';

if (github.context.eventName === 'repository_dispatch') {
  info('Recognized repository_dispatch event, outputing client_payload');

  setOutput('payload', github.context.payload.client_payload);

  // Check if client_payload is an object
  if (typeof github.context.payload.client_payload === 'object') {
    // Set outputs
    for (const [key, value] of Object.entries(
      github.context.payload.client_payload,
    )) {
      setOutput(key, value);
    }
  }
} else if (github.context.eventName === 'workflow_dispatch') {
  info('Recognized workflow_dispatch event, outputing inputs');

  setOutput('payload', github.context.payload.inputs);

  // Check if inputs is an object
  if (typeof github.context.payload.inputs === 'object') {
    // Set outputs
    for (const [key, value] of Object.entries(github.context.payload.inputs)) {
      setOutput(key, value);
    }
  }
} else {
  info('Event not supported');
}
