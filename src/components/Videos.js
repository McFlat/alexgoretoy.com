import React from "react";

import YouTube from "react-youtube";

const opts={
	width: '100%',
	height: '100%'
}
const _onReady = (event) => event.target.pauseVideo()

const videos = [
	[
		{	
			name: 'Flat Earth man',
			id: 'PLjMH2UZmBI'
		},
		{
			name: 'NASA crazy',
			id: 'VPI9orIyEf0'
		},
		{
			name: '"Rich Old White Men" by DISL Automatic (Prod. by Young Forever)',
			id: 'qC1CPc0ZcfA'
		},
		{
			name: 'round and curvy',
			id: 'nLTiTrt3904'
		},
		{
			name: 'Jaba - Earth is Flat',
			id: 'hMHIiqi8Xoo'
		},
		{
			name: 'No Gravity song',
			id: 'Lmogh9kqTLQ'
		},
		{
			name: 'ODD',
			id: 'MRMXifWfHVg'
		},
		{
			name: 'payday monsanto',
			id: 'gTXm3IAyBmg'
		},
		{
			name: 'The World is Flat: B.A.G. D.A.G. ft. D. Marble (Official Video)',
			id: 'iybvB5uCbnM'
		},
		{
			name: "Before there was Flat Earth Man....",
			id: 'AFe6LlwaXJU'
		},
		{
			name: 'Payday Monsanto POP CULTURE (gay rap industry)',
			id: '3L5jB-q3hSo'
		},
		{
			name: 'flouride song',
			id: 'nYnEer0KbNY'
		},
		{
			name: "Dear NASA, Why Are You Lying? Anti NASA Song",
			id: 'LYIRoGB3pUU'
		},
		{
			name: "Brainstorm - Flat Earth [Official Music Video]",
			id: 'RcBxvIF-f_0'
		},
		{
			name: 'THOMAS DOLBY (THE FLAT EARTH)',
			id: 'VaMJCix5l3c'
		},
		{
			name: 'Gravity Sucks - Curved Water ft. Eric Dubay - Flat Earth Music',
			id: 'JUjZwf9T-cs'
		},
		{
			name: 'The Earth is Flat Song - Jaba and Friends',
			id: 'jCFjqL5RrJY'
		},
		{
			name: 'ODD TV | The Matrix Has You | Official Truth Music Video',
			id: 'JwkBInninzU'
		},
		{
			name: 'FLAT! - Hat Films ♪ [Improv Song]',
			id: 'lu3rxI7qGRM'
		},
		{
			name: 'K-Rino - Deprogrammed',
			id: '1bpusYY9noI'
		},
		{
			name: 'Best of PayDay Monsanto',
			id: 'DiSvqH3Q5Dk'
		},
		{
			name: 'ODD TV living in hell',
			id: 'CqrN8iOMg5k'
		},
		{
			name: 'ODD TV never sleep again',
			id: 'TlTR7QQZQ8I'
		},
		{
			name: 'K-Rino grand deception',
			id: 'z_w_2QH6svM'
		}
	]
]

const videosCount = videos.length;
const videoIdx = randomInt(0, videosCount-1);
const videoList = videos[videoIdx];

function randomInt (low, high) {
  low = parseInt(low, 10);
  high = parseInt(high, 10);
  let number = -1;
  do {
    number = Math.floor(Math.random() * (high - low + 1) + low);
  } while(number < low && number > high);
  return number;
}

const Videos = () => (
  <section id="videos">
    <div className="row">
      <div className="twelve columns">
        <div className="row item">
        	<div className="three columns video">
	          <YouTube
			        videoId={videoList[0].id}
			        opts={opts}
			        onReady={_onReady}
		      	/>
	        </div>
	        <div className="three columns video">
	          <YouTube
			        videoId={videoList[1].id}
			        opts={opts}
			        onReady={_onReady}
		      	/>
	        </div>
	        
	        <div className="three columns video">
	          <YouTube
			        videoId={videoList[2].id}
			        opts={opts}
			        onReady={_onReady}
		      	/>
	        </div>
	        <div className="three columns video">
	          <YouTube
			        videoId={videoList[3].id}
			        opts={opts}
			        onReady={_onReady}
		      	/>
	        </div>
	      </div>
	      <div className="row item">
        	<div className="three columns video">
	          <YouTube
			        videoId={videoList[4].id}
			        opts={opts}
			        onReady={_onReady}
		      	/>
	        </div>
	        <div className="three columns video">
	          <YouTube
			        videoId={videoList[5].id}
			        opts={opts}
			        onReady={_onReady}
		      	/>
	        </div>
	        
	        <div className="three columns video">
	          <YouTube
			        videoId={videoList[6].id}
			        opts={opts}
			        onReady={_onReady}
		      	/>
	        </div>
	        <div className="three columns video">
	          <YouTube
			        videoId={videoList[7].id}
			        opts={opts}
			        onReady={_onReady}
		      	/>
	        </div>
	      </div>
	      <div className="row item">
        	<div className="three columns video">
	          <YouTube
			        videoId={videoList[8].id}
			        opts={opts}
			        onReady={_onReady}
		      	/>
	        </div>
	        <div className="three columns video">
	          <YouTube
			        videoId={videoList[9].id}
			        opts={opts}
			        onReady={_onReady}
		      	/>
	        </div>
	        
	        <div className="three columns video">
	          <YouTube
			        videoId={videoList[10].id}
			        opts={opts}
			        onReady={_onReady}
		      	/>
	        </div>
	        <div className="three columns video">
	          <YouTube
			        videoId={videoList[11].id}
			        opts={opts}
			        onReady={_onReady}
		      	/>
	        </div>
	      </div>
	      <div className="row item">
        	<div className="three columns video">
	          <YouTube
			        videoId={videoList[12].id}
			        opts={opts}
			        onReady={_onReady}
		      	/>
	        </div>
	        <div className="three columns video">
	          <YouTube
			        videoId={videoList[13].id}
			        opts={opts}
			        onReady={_onReady}
		      	/>
	        </div>
	        
	        <div className="three columns video">
	          <YouTube
			        videoId={videoList[14].id}
			        opts={opts}
			        onReady={_onReady}
		      	/>
	        </div>
	        <div className="three columns video">
	          <YouTube
			        videoId={videoList[15].id}
			        opts={opts}
			        onReady={_onReady}
		      	/>
	        </div>
	      </div>
	      <div className="row item">
        	<div className="three columns video">
	          <YouTube
			        videoId={videoList[16].id}
			        opts={opts}
			        onReady={_onReady}
		      	/>
	        </div>
	        <div className="three columns video">
	          <YouTube
			        videoId={videoList[17].id}
			        opts={opts}
			        onReady={_onReady}
		      	/>
	        </div>
	        
	        <div className="three columns video">
	          <YouTube
			        videoId={videoList[18].id}
			        opts={opts}
			        onReady={_onReady}
		      	/>
	        </div>
	        <div className="three columns video">
	          <YouTube
			        videoId={videoList[19].id}
			        opts={opts}
			        onReady={_onReady}
		      	/>
	        </div>
	        <div className="three columns video">
	          <YouTube
			        videoId={videoList[20].id}
			        opts={opts}
			        onReady={_onReady}
		      	/>
	        </div>
	        <div className="three columns video">
	          <YouTube
			        videoId={videoList[21].id}
			        opts={opts}
			        onReady={_onReady}
		      	/>
	        </div>
	        <div className="three columns video">
	          <YouTube
			        videoId={videoList[22].id}
			        opts={opts}
			        onReady={_onReady}
		      	/>
	        </div>
	        <div className="three columns video">
	          <YouTube
			        videoId={videoList[23].id}
			        opts={opts}
			        onReady={_onReady}
		      	/>
	        </div>
	      </div>
			</div>
    </div>
	</section>
);

export default Videos;
