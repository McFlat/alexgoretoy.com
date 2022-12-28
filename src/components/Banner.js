import React from "react";
import ReactDOM from 'react-dom';
import { OutboundLink } from 'gatsby-plugin-google-analytics';
import WaveSurfer from 'wavesurfer';
import {
  FaPlay,
  FaPause
} from "react-icons/lib/fa";
import SocialLinks from "./SocialLinks";
import ScrollDown from "./ScrollDown";
// <audio preload loop controls style={{height: '30px', width: '180px'}}>
//   <source src={audioTrack + '.ogg'} type="audio/ogg" />
//   <source src={audioTrack + '.mp3'} type="audio/mpeg" />
//   <embed src={audioTrack + '.mp3'} width="180" height="30" hidden="true" />
// </audio>

class Banner extends React.Component {
  wavesurfer = null;
  constructor(props) {
    super(props);

    this.state = {
      playing: true
    };
    this.handleTogglePlay = this.handleTogglePlay.bind(this);
  }
  handleTogglePlay(e) {
    this.setState({
      playing: !this.state.playing
    });
    this.wavesurfer.playPause()
  }
  componentDidUpdate() {
    if (this.state.playing) {
      ReactDOM.render(<FaPause className="pauseBtn" />, this.refs.playPause)
    } else {
      ReactDOM.render(<FaPlay className="playBtn" />, this.refs.playPause)
    }
  }
  componentDidMount() {
    this.wavesurfer = WaveSurfer.create({
      container: '#waveform',
      waveColor: 'lightgray',
      progressColor: 'gray'
    });
    // this.wavesurfer.load('/I-feel-No-Pain-couse-GOD-is-Here-by-K4GOD.pl.mp3');
    this.wavesurfer.load('/Psalm 23.mp3')
    const that = this;
    this.wavesurfer.on('ready', () => {
      if(this.state.playing){
        this.wavesurfer.play();
      } else{
        this.wavesurfer.pause();
      }
    });
    this.wavesurfer.on('finish', () => {
      this.setState({
        playing: false
      });
      ReactDOM.render(<FaPlay className="playBtn" />, this.refs.playPause)
    })
  }
  render() {

    return (
      <div className="row banner">
        <div className="banner-text">
          <h1 className="responsive-headline animated slideInDown">I'm Alex Goretoy.</h1>
          <h3 className="animated pulse">
            I'm a US based <span>full-stack web developer</span>,{" "}
            <span>lead solutions architect</span> and <span>devops engineer</span>.<br />Let's
            <OutboundLink className="smoothscroll" href="#about">
              {" "}
              make something
            </OutboundLink>{" "}
            and <span>change the world</span> together. 
            
            <span>Jesus Christ is LORD!</span>
            <br />
            <bold>Proverbs 1:5-7</bold> <span>A wise man will hear, and will increase learning; and a man of understanding shall attain unto wise counsels: To understand a proverb, and the interpretation; the words of the wise, and their dark sayings. The fear of the LORD <italic>is</italic> the beginning of knowledge: <italic>but</italic> fools despise wisdom and instruction.</span>
            <br />
            <bold>Proverbs 4:19</bold> <span>The way of the wicked <italic>is</italic> as darkness: they know not at what they stumble.</span>
            <br />
            <bold>Psalm 23</bold> <span>is not about you or me, it's about Jesus Christ! He's our only hope, truly research it.</span>
            <div id="waveform"></div>
            <span ref="playPause" onClick={this.handleTogglePlay}>
                <FaPause className="pauseBtn" />
            </span>
          </h3>
          <SocialLinks />
          <ScrollDown />
        </div>
      </div>
    );
  }
}

export default Banner;
