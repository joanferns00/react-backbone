import React, {Component} from 'react';
import {render} from 'react-dom';

import '../css/style.css';
import keenImage from '../assets/img1.png'

export default class Hello extends Component{
  render(){
    return (
      <div><p>Hello from React!</p>
<img src={keenImage} alt="Commander Keen"/>

      </div>

      )
  }
}

render(<Hello/>, document.getElementById('app'));