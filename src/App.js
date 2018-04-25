import React, { Component } from 'react';
import LinkArticle from './LinkArticle';

import './App.css';

const data = require('./links.json');

class App extends Component {
  render() {

    let links = data.links.map((d)=>{
      return <LinkArticle href={d.href} color={d.color} title={d.title} description={d.description} />
    });

    return (
      <div className="outer">
        <div></div><div></div><div></div><div></div><div></div>
        <div className="entrance"></div><div></div><div></div><div></div><div></div>
        <div className="inner">
          <div className="title"><h1>Ooer</h1></div>
          {links}
          <div className="footer"><h2>Thanks for visiting</h2></div>
        </div>
        <div></div><div></div><div></div><div></div><div></div>
        <div></div><div></div><div></div><div></div><div></div>
        <div></div><div></div><div></div><div></div><div></div>
        <div></div>
      </div>
    );
  }
}

export default App;
