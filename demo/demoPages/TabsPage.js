import React from 'react';
import { Tabs, Pane } from '../../index';

const pad = {padding: 12};

const TabsPage = () => (
  <Tabs>
    <Pane label="Tabby">
      <div style={pad}>Tab 1</div>
    </Pane>
    <Pane label="Tabetha">
      <div style={pad}>Tab 2</div>
    </Pane>
    <Pane label="Tabberino">
      <div style={pad}>Tab 3</div>
    </Pane>
  </Tabs>
);

export default TabsPage;
