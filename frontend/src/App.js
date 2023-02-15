import Button from "@material-ui/core/Button"
import IconButton from "@material-ui/core/IconButton"
import TextField from "@material-ui/core/TextField"
import AssignmentIcon from "@material-ui/icons/Assignment"
import PhoneIcon from "@material-ui/icons/Phone"
import React, { useEffect, useRef, useState } from "react"
import { CopyToClipboard } from "react-copy-to-clipboard"
import Peer from "simple-peer"
import io from "socket.io-client"
import "./App.css"


import Webcam from "react-webcam";
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

import { Grid, Typography, Paper, makeStyles } from '@material-ui/core';



import * as tf from "@tensorflow/tfjs";
import * as handpose from "@tensorflow-models/handpose";


import { drawHand } from "./utils";
import * as fp from "fingerpose";
// import ThumbsDownGesture from "./gestures/ThumbsDown.js";
import ThumbsDownGesture from './gestures/ThumbsDown.js';
// import thumbs_down from "./img/thumbs_down.png";
import thumbs_down from './img/thumbs_down.png';
import MiddleFingerGesture from "./gestures/MiddleFinger.js";
import OKSignGesture from "./gestures/OKSign.js";
import PinchedFingerGesture from "./gestures/PinchedFinger.js";
import PinchedHandGesture from "./gestures/PinchedHand.js";
import RaisedHandGesture from "./gestures/RaisedHand.js";
import LoveYouGesture from "./gestures/LoveYou.js";
import RockOnGesture from "./gestures/RockOn.js";
import CallMeGesture from "./gestures/CallMe.js";
import PointUpGesture from "./gestures/PointUp.js";
import PointDownGesture from "./gestures/PointDown.js";
import PointRightGesture from "./gestures/PointRight.js";
import PointLeftGesture from "./gestures/PointLeft.js";
import RaisedFistGesture from "./gestures/RaisedFist.js";
import CoughSign from './gestures/Cough';
import GoodMorningGesture from './gestures/GoodMorning';
import IhaveGesture from './gestures/Ihave';
import NoseGesture from './gestures/Nose';
import MyBodySign from './gestures/MyBody';
import achSign from './gestures/Aches'
import victory from "./img/victory.png";
import thumbs_up from "./img/thumbs_up.png";
import middle_finger from "./img/middle_finger.png";
import ok from "./img/ok_sign.png";
import pinched_finger from "./img/pinched_finger.png";
import pinched_hand from "./img/pinched_hand.png";
import raised_hand from "./img/raised_hand.png";
import love_you from "./img/love_you.png";
import rock_on from "./img/rock_on.png";
import call_me from "./img/call_me.png";
import point_up from "./img/point_up.png";
import point_down from "./img/point_down.png";
import point_left from "./img/point_left.png";
import point_right from "./img/point_right.png";
import raised_fist from "./img/raised_fist.png";
import MyBody from './img/body.png'
import BadCough from './img/cough.png';
import daily from './img/daily.png';
import drugs from './img/drugs.png';
import flu from './img/Flu.png';
import GoodMorning from './img/GoodMorning.png';
import iam from './img/IAM.png';
import RunningNose from './img/Nose.png';
import Aches from './img/Pain.png';
import prescription from './img/prescription.png';
import problem from './img/Problem.png';
import temperature from './img/Temperature.png';
import Ihave from './img/Ihave.png'

const useStyles = makeStyles((theme) => ({
  video: {
    width: '550px',
    height:'200px',
    [theme.breakpoints.down('xs')]: {
      width: '300px',
    },
  },
  gridContainer: {
    justifyContent: 'center',
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column',
    },
  },
  paper: {
    padding: '10px',
    border: '2px solid black',
    margin: '10px',
  },
  messages: {
    display:'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gridTemplateRows: 'repeat(3, 1fr)'
  },
}));

const socket = io.connect('http://localhost:5000')
function App() {

	const [string, setString] = useState([])
  const webcamRef = useRef(null);
  const canvasRef = useRef(null);
  const classes = useStyles();
  const [emoji, setEmoji] = useState(null);
  const images = {
    thumbs_up: thumbs_up,
    // victory: victory,
    // thumbs_down: thumbs_down,
    // middle_finger: middle_finger,
    ok: ok,
    // pinched_finger: pinched_finger,
    // pinched_hand: pinched_hand,
    // raised_hand: raised_hand,
    // love_you: love_you,
    // rock_on: rock_on,
    // call_me: call_me,
    // point_up: point_up,
    // point_down: point_down,
    // point_left: point_left,
    // point_right: point_right,
    // raised_fist: raised_fist,
    BadCough: BadCough,
    MyBody:MyBody,
    drugs: drugs,
    flu: flu,
    GoodMorning:GoodMorning,
    iam:iam,
    RunningNose:RunningNose,
    Aches:Aches,
    prescription:prescription,
    problem:problem,
    temperature:temperature,
    Ihave:Ihave
  };
  const runHandpose = async () => {
    const net = await handpose.load();
    //console.log("handpose model loaded");
    // loop and detect hand
    setInterval(() => {
      detect(net)
    }, 1000);

  }
  var arrayspeak=[];
  const detect = async (net) => {
    if (typeof webcamRef.current !== "undefined" && webcamRef.current != null && webcamRef.current.video.readyState === 4) {
      // get video properties
      const video = webcamRef.current.video;

      const videoWidth = webcamRef.current.video.videoWidth;
      const videoHeight = webcamRef.current.video.videoHeight;

      webcamRef.current.video.width = videoWidth;
      webcamRef.current.video.height = videoHeight;

      canvasRef.current.width = videoWidth;
      canvasRef.current.height = videoHeight;
      
      // make detection
      const hand = await net.estimateHands(video);

      if (hand.length > 0) {
        const GE = new fp.GestureEstimator([
          // fp.Gestures.VictoryGesture,
          // fp.Gestures.ThumbsUpGesture,
          // ThumbsDownGesture,
          // MiddleFingerGesture,
          OKSignGesture,
          // PinchedFingerGesture,
          // PinchedHandGesture,
          // RaisedHandGesture,
          // LoveYouGesture,
          // RockOnGesture,
          // CallMeGesture,
          // PointRightGesture,
          // PointUpGesture,
          // PointLeftGesture,
          // PointDownGesture,
          // RaisedFistGesture,
          CoughSign,
          GoodMorningGesture,
          IhaveGesture,
          NoseGesture,
          MyBodySign,
          achSign
        ])
        const gesture = await GE.estimate(hand[0].landmarks, 8);
        if (gesture.gestures !== undefined && gesture.gestures.length > 0) {
          const confidence = gesture.gestures.map(
            (prediction) => prediction.score
          );
          const maxConfidence = confidence.indexOf(
            Math.max.apply(null, confidence)
          );
          setEmoji(gesture.gestures[maxConfidence].name);
          console.log("gesture",gesture.gestures[maxConfidence].name)
          const mysign=gesture.gestures[maxConfidence].name
              console.log('mysign',mysign)
              if (!string.includes(mysign)) {
                string.push(mysign)
              }
          // console.log('emoji',emoji)
          // if(emoji!=null){
          //   speak({ text: emoji })
          // }
          // var speakdata=gesture.gestures[maxConfidence].name;
          // var speakarray=speakdata.split('_')
          // for(var i=0;i<speakarray.length;i++){
          //   speak({ text: speakarray[i] })
          // }
          // arrayspeak.push(gesture.gestures[maxConfidence].name)
          // arrayspeak.filter((v,i) => arrayspeak.indexOf(v) == i)
          // console.log(arrayspeak)
          // speak({ text: arrayspeak[0] })
          // for(var i=0;i<arrayspeak.length;i++){
          //   speak({ text: arrayspeak[i] })
          // }
          // arrayspeak=[]
          // speak({ text: emoji })
          
        }
      }

      // Draw mesh
      const ctx = canvasRef.current.getContext("2d");
      drawHand(hand, ctx);

    }
  }

  runHandpose();
  

	const [ me, setMe ] = useState("")
	const [ stream, setStream ] = useState()
	const [ receivingCall, setReceivingCall ] = useState(false)
	const [ caller, setCaller ] = useState("")
	const [ callerSignal, setCallerSignal ] = useState()
	const [ callAccepted, setCallAccepted ] = useState(false)
	const [ idToCall, setIdToCall ] = useState("")
	const [ callEnded, setCallEnded] = useState(false)
	const [ name, setName ] = useState("")
	const myVideo = useRef()
	const userVideo = useRef()
	const connectionRef= useRef()

	useEffect(() => {
		navigator.mediaDevices.getUserMedia({ video: true, audio: true }).then((stream) => {
			setStream(stream)
				myVideo.current.srcObject = stream
		})

	socket.on("me", (id) => {
			setMe(id)
		})

		socket.on("callUser", (data) => {
			setReceivingCall(true)
			setCaller(data.from)
			setName(data.name)
			setCallerSignal(data.signal)
		})
	}, [])

	const callUser = (id) => {
		const peer = new Peer({
			initiator: true,
			trickle: false,
			stream: stream
		})
		peer.on("signal", (data) => {
			socket.emit("callUser", {
				userToCall: id,
				signalData: data,
				from: me,
				name: name
			})
		})
		peer.on("stream", (stream) => {
			
				userVideo.current.srcObject = stream
			
		})
		socket.on("callAccepted", (signal) => {
			setCallAccepted(true)
			peer.signal(signal)
		})

		connectionRef.current = peer
	}

	const answerCall =() =>  {
		setCallAccepted(true)
		const peer = new Peer({
			initiator: false,
			trickle: false,
			stream: stream
		})
		peer.on("signal", (data) => {
			socket.emit("answerCall", { signal: data, to: caller })
		})
		peer.on("stream", (stream) => {
			userVideo.current.srcObject = stream
		})

		peer.signal(callerSignal)
		connectionRef.current = peer
	}

	const leaveCall = () => {
		setCallEnded(true)
		connectionRef.current.destroy()
	}

	const {
		transcript,
		listening,
		resetTranscript,
		browserSupportsSpeechRecognition
	  } = useSpeechRecognition();
	
	  if (!browserSupportsSpeechRecognition) {
		return <span>Browser doesn't support speech recognition.</span>;
	  }
	

	return (
		<>
			<h1 style={{ textAlign: "center", color: '#fff' }}>Video Call Sign</h1>
		<div className="container">
			<div className="video-container">
				<div className="video">
					{stream &&  <video playsInline muted ref={myVideo} autoPlay style={{ width: "300px" }} />}
				</div>
				<Webcam ref={webcamRef}
            className={classes.video}
            playsInline
          style={{
            // position: "absolute",
            // marginLeft: "auto",
            // marginRight: "auto",
            // left: 0,
            // right: 0,
            // textAlign: "center",
            // zindex: 9,
            // width: 400,
            // height: 400
			position:'fixed',
			top:'600px',
			left:'50px',

          }} />
            
            <canvas ref={canvasRef}
          style={{
            // position: "absolute",
            // marginLeft: "auto",
            // marginRight: "auto",
            // left: 0,
            // right: 0,
            // textAlign: "center",
            // zindex: 9,
			width: "199px",
			height: "200px",
			position: "fixed",
			top: "600px",
			left: "220px",
          }} />
            {emoji !== null ? (
          <img
            src={images[emoji]}
            style={{
              position:'fixed',
              top:'800px',
              textAlign: "center",
              height: 100,
            }}
          />) : (
          ""
        )}
		
		<div style={{zIndex:'20',position:'fixed',top:'900px',left:'200px'}}>
            {
              string.length>0?
              <h1 style={{fontWeight:'bold',fontSize:'24px',color:'white'}}>
              Message
            </h1>
            :''
            }
            {
              string.length>0?
              <div style={{backgroundColor:'#A8DDFD',padding:'20px',color:'black',borderRadius:'10px'}}
              className={classes.messages}
              >
            
            
            
   

            
            {string.map(item => (
              <span key={item}>{item} &nbsp;</span>
            ))}

            </div>
            :''
            }
          </div>

				<div className="video">
					{callAccepted && !callEnded ?
					<div>
					<video playsInline ref={userVideo} autoPlay style={{ width: "300px"}} />
					<div>
            <p style={{color:'white'}}>Microphone: {listening ? 'on' : 'off'}</p>
            <button onClick={SpeechRecognition.startListening}>Start</button>
            <button onClick={SpeechRecognition.stopListening}>Stop</button>
            <button onClick={resetTranscript}>Reset</button>
            <p style={{color:'white'}}>{transcript}</p>
          </div>
					</div>
					
					:
					null}
					
				</div>
			</div>
			<div className="myId">
				<TextField
					id="filled-basic"
					label="Name"
					variant="filled"
					value={name}
					onChange={(e) => setName(e.target.value)}
					style={{ marginBottom: "20px" }}
				/>
				<CopyToClipboard text={me} style={{ marginBottom: "2rem" }}>
					<Button variant="contained" color="primary" startIcon={<AssignmentIcon fontSize="large" />}>
						Copy ID
					</Button>
				</CopyToClipboard>

				<TextField
					id="filled-basic"
					label="ID to call"
					variant="filled"
					value={idToCall}
					onChange={(e) => setIdToCall(e.target.value)}
				/>
				<div className="call-button">
					{callAccepted && !callEnded ? (
						<Button variant="contained" color="secondary" onClick={leaveCall}>
							End Call
						</Button>
					) : (
						<IconButton color="primary" aria-label="call" onClick={() => callUser(idToCall)}>
							<PhoneIcon fontSize="large" />
						</IconButton>
					)}
					{idToCall}
				</div>
			</div>
			<div>
				{receivingCall && !callAccepted ? (
						<div className="caller">
						<h1 >{name} is calling...</h1>
						<Button variant="contained" color="primary" onClick={answerCall}>
							Answer
						</Button>
					</div>
				) : null}
			</div>
		</div>
		</>
	)
}

export default App
