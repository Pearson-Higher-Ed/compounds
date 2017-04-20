import React from 'react';
import { Tabs, Pane } from '../../index';

const TabsPage = () => (
  <div>
    <Tabs>
      <Pane label="Tabby">
        <div>Tab 1</div>
      </Pane>
      <Pane label="Tabetha">
        <div>Tab 2</div>
      </Pane>
      <Pane label="Tabberino">
        <div>Tab 3</div>
      </Pane>
    </Tabs>
  </div>
);

export default TabsPage;
