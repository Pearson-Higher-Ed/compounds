import React from 'react';
import { Tabs } from '../../index';

const TabsPage = () => (
  <div>
    <Tabs>
      <Pane label="Tab 1">
        <div>Tab 1 contents</div>
      </Pane>
      <Pane label="Tab 2">
        <div>Tab 2 contents</div>
      </Pane>
      <Pane label="Tab 3">
        <div>Tab 3 contents</div>
      </Pane>
    </Tabs>
  </div>
);

export default TabsPage;
