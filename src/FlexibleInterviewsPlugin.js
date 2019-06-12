import { FlexPlugin } from 'flex-plugin';
import React from 'react';
import CustomTaskListComponent from './components/CustomTaskListComponent';

const PLUGIN_NAME = 'SamplePlugin';

export default class SamplePlugin extends FlexPlugin {
  constructor() {
    super(PLUGIN_NAME);
  }

  init(flex, manager) {
    flex.CRMContainer.defaultProps.uriCallback = (task) => {
        return task ? "https://flexible-interview-demo.herokuapp.com/clients/" + task.attributes.name : "https://flexible-interview-demo.herokuapp.com/";
    }
  }
}