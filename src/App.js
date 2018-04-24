import React, { Component } from 'react';
import LinkArticle from './LinkArticle';

import './App.css';

const data = [
  { href:"https://github.com/onion2k", title:"Github", description:"I write code every day, and most of it is open source and freely available on Github. Clone all the things!", color:"color1" },
  { href:"https://blog.ooer.com", title:"Blog", description:"I don't really write a blog but occasionally I dump something in to a file somewhere and it makes it's way on to the web.", color:"color2" },
  { href:"https://www.linkedin.com/in/cdneale", title:"LinkedIn", description:"Why not join my professional network? Besides the fact LinkedIn is awful of course.", color:"color4" },
  { href:"https://yt1210.ooer.com", title:"YT1210", description:"Decks (well, a deck) in React. Build a playlist of 6 tracks from YouTube and control them by dragging the record arm.", color:"color5" },
  { href:"https://light.ooer.com", title:"Light", description:"A GLSL shader coupled to code that maps where divs are on the page, to give a nice back light effect.", color:"color6" },
  { href:"https://synth.ooer.com", color:"color7", title:"Synth", description:"A React sequencer that plays samples from a timeline. Vaporwave!" },
  { href:"http://coe.ooer.com", color:"color8", title:"Crispy", description:"A React gallery that displays a part of an image, and then replaces all of the thumbnails with the whole image when you hover over." },
  { href:"http://time.ooer.com", color:"color9", title:"Time", description:"A timeline of the Internet built using the same base HTML and updated by replacing the CSS." },
  { href:"https://advent.ooer.com", color:"color10", title:"Advent", description:"An advent calendar in React." },
  { href:"https://pixelheart.ooer.com", color:"color11", title:"Pixelheart", description:"3D pixel hearts in three.js" },
  { href:"https://art.ooer.com", color:"color12", title:"Art", description:"Arty experiments" },
  { href:"https://disco.ooer.com", color:"color13", title:"Disco", description:"three.js disco ducks" },
  { href:"https://mccree.ooer.com", color:"color14", title:"McCree", description:"Shoot a page to make holes that light shines through." },
  { href:"http://test.ooer.com", color:"color15", title:"Test", description:"A website about testing that isn't even close to finished." },
  { href:"https://autograph.ooer.com", color:"color16", title:"Autograph", description:"Generate lovely art using a system similar to spirograph" },
  { href:"https://imgsvg.ooer.com", color:"color17", title:"IMGSVG", description:"Turn images in to SVG graphics using tessellating shapes." },
  { href:"https://mandala.ooer.com", color:"color18", title:"Mandala", description:"A canvas manadala generator." }
]

class App extends Component {
  render() {

    let links = data.map((d)=>{
      return <LinkArticle href={d.href} color={d.color} title={d.title} description={d.description} />
    });

    return (
      <main>
        <div></div><div></div><div></div><div></div><div></div>
        <div className="title"><h1>Ooer</h1></div>
        {links}
        <div className="footer"><h2>Thanks for visiting</h2></div>
        <div></div><div></div><div></div><div></div><div></div>
      </main>
    );
  }
}

export default App;
