import { useState } from 'react'
import BlurText from './components/BlurText'
import Squares from './components/Squares';
import Noise from './components/Noise'
import PixelCard from './components/PixelCard'

import './App.css'

function App() {

  return (
    <main>
      <nav>
        <div className="nav-text">Enhancing creativity with expert design, dynamic editing, innovative products, and strategic social media.</div>
        <div className="nav-logo"></div>
      </nav>
      <div className="main-text">
        <BlurText className="upper-line" text="Crafting Your Vision"/>
        <div className="image-holder">
          <img src="/assets/eyes.jpeg" className="sliding-image" />
        </div>
        <BlurText text="into Reality .!"/>
      </div>
        <div className="sub-text">Enhancing creativity with expert design, dynamic editing, innovative products, and strategic social media.</div>
        <div className='main-noise'>
        <Noise
          patternSize={250}
          patternScaleX={1}
          patternScaleY={1}
          patternRefreshInterval={2}
          patternAlpha={35}
        />
      </div>
        <Squares 
        speed={0.5} 
        squareSize={60}
        direction='diagonal'
        borderColor='#222'
        hoverFillColor='#222'
        />
      <PixelCard variant="default" className='pixel-card'>
        <div className="hover-text">Connect with us</div>
        <div className="card-hover">
          <div className="card-text"><a href="mailto:someoneadvertisingagency@gmail.com">Level Up Your Brand!</a></div>
          <div class="heart-emoji"></div>
        </div>
      </PixelCard>
      <div className="footer">
        <div className="copyright-text">©2025 SOMEONE Advertising Agency</div>
        <div className="footer-links">
          <a href="https://wa.me/+918931990990?text=Hello%20there!" class="whatsapp-link" target="_blank">Connect on WhatsApp</a>
          <a href="https://instagram.com/someoneadvertisingagency/" class="instagram-link" target="_blank">Instagram</a>
        </div>
      </div>
    </main>
  )
}

export default App

