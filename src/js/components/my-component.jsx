import AFRAME from 'aframe';
import { connect } from 'react-redux';
import React from 'react';
import { Entity } from 'aframe-react';
import { VisorCam } from './visor-cam.jsx';
import { DefaultScene } from './default-scene.jsx';

const mapStateToProps = state => ({
  myData: state.myData
});

const component = ({ myData }) =>
  <DefaultScene>
    <VisorCam/>
    <Entity primitive="a-box" position="0 0 -5" material="color: red; shader: flat;"/>
  </DefaultScene>;

export const MyComponent = connect(mapStateToProps)(component);
