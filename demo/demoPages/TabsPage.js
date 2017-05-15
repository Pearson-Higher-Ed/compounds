import React from 'react';
import { Tabs, Pane } from '../../index';

const pad = {padding: 12};
const eight = {paddingLeft : 8};
const sixteen = {paddingLeft : 16};

const TabsPage = () => (
  <div className="displaySection">
    <h1><a href="http://pearson-higher-ed.github.io/design/c/tab-navigation/beta/">Tabs</a></h1>

    <div className="elementContainer">
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

      <h3>Example usage</h3>
        <p className="code">
          {`<Tabs>`} <br/>
          <div style={eight}>{`<Pane label="Tabby">`} <br/> </div>
          <div style={sixteen}>{`<div>Tab 1</div>`} <br/> </div>
          <div style={eight}>{`</Pane>`} <br/> </div>
          <div style={eight}>{`<Pane label="Tabetha">`} <br/> </div>
          <div style={sixteen}>{`<div>Tab 2</div>`} <br/> </div>
          <div style={eight}>{`</Pane>`} <br/> </div>
          <div style={eight}>{`<Pane label="Tabberino">`} <br/> </div>
          <div style={sixteen}>{`<div>Tab 3</div>`} <br/> </div>
          <div style={eight}>{`</Pane>`} <br/> </div>
          {`</Tabs>`}
        </p>

      <div className="code">
        <h2>Tab Props</h2>
        <h4>Required:</h4>
        <ul>
          <li className="li-props">children:Array || Element</li>
        </ul>
        <h4>Optional:</h4>
        <ul>
          <li className="li-props">selected:Number === {`<Tabs selected={2}`}></li>
          <li className="li-props">The selected prop can be passed the index of
          the tab you would like active on page load. <br/>
          Defaults to 0 if nothing is passed.</li>
          <li className="li-props">light:Boolean</li>
          <li className="li-props">The light prop can be used to provide contrast
          on a darker background.</li>
        </ul>

        <h2>Pane Props</h2>
        <h4>Required:</h4>
        <ul>
          <li className="li-props">label:String === "Your Pane label"</li>
          <li className="li-props">children:Element</li>
        </ul>
      </div>
    </div>
  </div>
);

export default TabsPage;
