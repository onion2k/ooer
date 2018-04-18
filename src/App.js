import React, { Component } from 'react';

import './App.css';

class App extends Component {
  render() {
    return (
      <main>
        <div></div><div></div><div></div><div></div><div></div>
        <div></div>
        <article href="https://blog.ooer.com" className="color1 blog">
          <header>Blog</header>
          <div>
            <p>I don't really write a blog but occasionally I dump something in to a file somewhere and it makes it's way on to the web.</p>
          </div>
        </article>
        <article href="https://github.com/onion2k" className="color2">
          <header>Github</header>
          <div>
            <p>I write code every day, and most of it is open source and freely available on Github. Clone all the things!</p>
          </div>
        </article>
        <article href="https://twitter.com/onion2k" className="color3">
          <header>Twitter</header>
          <div>
            <p>I've been on Twitter for ages, but I don't tweet as much as I used to. I retweet a lot of tech, code, diversity and silly jokes.</p>
          </div>
        </article>
        <div></div><div></div>
        <article href="https://www.linkedin.com/in/cdneale" className="color4">
          <header>LinkedIn</header>
          <div>
            <p>Why not join my professional network? Besides the fact LinkedIn is awful of course.</p>
          </div>
        </article>
        <article href="https://yt1210.ooer.com" className="color1"><header>YT1210</header></article>
        <article href="https://light.ooer.com" className="color4"><header>Light</header></article>
        <div></div><div></div>
        <article href="https://synth.ooer.com" className="color2"><header>Synth</header></article>
        <article href="http://coe.ooer.com" className="color3"><header>Crispy</header></article>
        <article href="http://time.ooer.com" className="color4"><header>Time</header></article>
        <div></div><div></div>
        <article href="https://advent.ooer.com" className="color5"><header>Advent</header></article>
        <article href="https://pixelheart.ooer.com" className="color1"><header>Pixelheart</header></article>
        <article href="https://art.ooer.com" className="color2"><header>Art</header></article>
        <div></div><div></div>
        <article href="https://disco.ooer.com" className="color3"><header>Disco</header></article>
        <article href="https://mccree.ooer.com" className="color5"><header>McCree</header></article>
        <article href="http://test.ooer.com" className="color5"><header>Test The Web</header></article>
        <div></div><div></div>
        <article href="https://autograph.ooer.com" className="color1"><header>Autograph</header></article>
        <article href="https://imgsvg.ooer.com" className="color2"><header>IMGSVG</header></article>
        <div></div><div></div>
        <div></div><div></div><div></div><div></div><div></div>
      </main>
    );
  }
}

export default App;


