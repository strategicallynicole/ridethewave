import React from 'react';
import Scroll from '../common/Scroll';
//start typewriter

const Introduction = () =>
  <section id="intro" className="wrapper style1 fullscreen fade-up">
    <div className="inner">
      <h1>
        <a href="" class="typewrite" data-period="2000" data-type='[ "Hi, Im Si.", "I am Creative.", "I Love Design.", "I Love to Develop." ]'>
          <span class="lickthewrapper"></span>
            </a>
      </h1>
      <h1>Marketing strategy, brand, is a scam.</h1>
      <h2>but it doesn't have to be.  </h2>
      <ul className="actions">
        <li>
          <Scroll type="id" element="one">
            <a href="#one" className="button">
              Learn more
            </a>
          </Scroll>
        </li>
      </ul>
    </div>
  </section>


export default Introduction;
