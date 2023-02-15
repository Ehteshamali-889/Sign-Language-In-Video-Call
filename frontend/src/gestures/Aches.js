import {Finger, FingerCurl, FingerDirection, GestureDescription} from 'fingerpose';

const achSign = new GestureDescription('Aches');
// aches is r
// [
//     [
//       "Thumb",
//       "Half Curl",
//       "Diagonal Up Left"
//     ],
//     [
//       "Index",
//       "No Curl",
//       "Diagonal Up Right"
//     ],
//     [
//       "Middle",
//       "No Curl",
//       "Vertical Up"
//     ],
//     [
//       "Ring",
//       "Full Curl",
//       "Vertical Up"
//     ],
//     [
//       "Pinky",
//       "Full Curl",
//       "Vertical Up"
//     ]
//   ]

//Thumb
achSign.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 1.0);
achSign.addDirection(Finger.Index, FingerDirection.DiagonalUpLeft, 0.70);

//Index
achSign.addCurl(Finger.Index, FingerCurl.NoCurl, 1);
achSign.addDirection(Finger.Index, FingerDirection.VerticalUp, 0.70);

//Middle
achSign.addCurl(Finger.Middle, FingerCurl.NoCurl, 1);
achSign.addDirection(Finger.Middle, FingerDirection.VerticalUp, 0.70);

//Ring
achSign.addCurl(Finger.Ring, FingerCurl.FullCurl, 1);
achSign.addDirection(Finger.Ring, FingerDirection.VerticalUp, 0.70);

//Pinky
achSign.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1);
achSign.addDirection(Finger.Pinky, FingerDirection.VerticalUp, 0.70);

export default achSign;
