import React, { Component } from 'react';

import './LinkArticle.css';

export default class LinkArticle extends Component {
  render(){
    return (
        <article onClick={()=>{window.location=this.props.href}} className={this.props.color}>
          <header>{this.props.title}</header>
          <div><p>{this.props.description}</p></div>
        </article>
    );
  }
}
