import React, { Component } from 'react';

import './App.css';

class App extends Component {
  render() {
    return (
      <main>
        <div></div><div></div><div></div><div></div><div></div>
        <div></div>
          <div className="title"><h1>Ooer</h1></div>
        <div></div>
        <div></div>
        <article href="https://github.com/onion2k" className="color1">
          <header>Github</header>
          <div>
            <p>I write code every day, and most of it is open source and freely available on Github. Clone all the things!</p>
          </div>
        </article>
        <article href="https://blog.ooer.com" className="color2 blog">
          <header>Blog</header>
          <div>
            <p>I don't really write a blog but occasionally I dump something in to a file somewhere and it makes it's way on to the web.</p>
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
        <article href="https://yt1210.ooer.com" className="color5">
          <header>YT1210</header>
          <div>
            <p>Decks (well, a deck) in React. Build a playlist of 6 tracks from YouTube and control them by dragging the record arm.</p>
          </div>
        </article>
        <article href="https://light.ooer.com" className="color6">
          <header>Light</header>
          <div>
            <p>A GLSL shader coupled to code that maps where divs are on the page, to give a nice "back light" effect.</p>
          </div>
        </article>
        <div></div><div></div>
        <article href="https://synth.ooer.com" className="color7">
          <header>Synth</header>
          <div>
            <p>A React sequencer that plays samples from a timeline. Vaporwave!</p>
          </div>
        </article>
        <article href="http://coe.ooer.com" className="color8">
          <header>Crispy</header>
          <div>
            <p>A React gallery that displays a part of an image, and then replaces all of the thumbnails with the whole image when you hover over.</p>
          </div>
        </article>
        <article href="http://time.ooer.com" className="color9">
          <header>Time</header>
          <div>
            <p>A timeline of the Internet built using the same base HTML and updated by replacing the CSS.</p>
          </div>
        </article>
        <div></div><div></div>
        <article href="https://advent.ooer.com" className="color10">
          <header>Advent</header>
          <div>
            <p>An advent calendar in React.</p>
          </div>
        </article>
        <article href="https://pixelheart.ooer.com" className="color11">
          <header>Pixelheart</header>
          <div>
            <p>3D pixel hearts in three.js</p>
          </div>
        </article>
        <article href="https://art.ooer.com" className="color12">
          <header>Art</header>
          <div>
            <p>Arty experiments</p>
          </div>
        </article>
        <div></div><div></div>
        <article href="https://disco.ooer.com" className="color13">
          <header>Disco</header>
          <div>
            <p>three.js disco ducks</p>
          </div>
        </article>
        <article href="https://mccree.ooer.com" className="color14">
          <header>McCree</header>
          <div>
            <p>Shoot a page to make holes that light shines through.</p>
          </div>
        </article>
        <article href="http://test.ooer.com" className="color15">
          <header>Test The Web</header>
          <div>
            <p>A website about testing that isn't even close to finished.</p>
          </div>
        </article>
        <div></div><div></div>
        <article href="https://autograph.ooer.com" className="color16">
          <header>Autograph</header>
          <div>
            <p>Generate lovely art using a system similar to spirograph</p>
          </div>
        </article>
        <article href="https://imgsvg.ooer.com" className="color17">
          <header>IMGSVG</header>
          <div>
            <p>Turn images in to SVG graphics using tessellating shapes.</p>
          </div>
        </article>
        <div></div><div></div>
        <div></div><div></div><div></div><div></div><div></div>
      </main>
    );
  }
}

export default App;


