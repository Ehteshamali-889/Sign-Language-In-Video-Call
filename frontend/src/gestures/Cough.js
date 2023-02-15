import {Finger, FingerCurl, FingerDirection, GestureDescription} from 'fingerpose';

const CoughSign = new GestureDescription('BadCough');
//  Bad cough is S
// [
//     [
//       "Thumb",
//       "No Curl",
//       "Diagonal Up Right"
//     ],
//     [
//       "Index",
//       "Full Curl",
//       "Vertical Up"
//     ],
//     [
//       "Middle",
//       "Full Curl",
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
//       "Diagonal Up Left"
//     ]
//   ]

//Thumb
CoughSign.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
CoughSign.addDirection(Finger.Index, FingerDirection.DiagonalUpRight, 0.70);
// CoughSign.addDirection(Finger.Index, FingerDirection.DiagonalUpLeft, 0.70);

//Index
CoughSign.addCurl(Finger.Index, FingerCurl.FullCurl, 1);
CoughSign.addDirection(Finger.Index, FingerDirection.VerticalUp, 0.70);
// CoughSign.addDirection(Finger.Index, FingerDirection.DiagonalUpLeft, 0.70);

//Middle
CoughSign.addCurl(Finger.Middle, FingerCurl.FullCurl, 1);
CoughSign.addDirection(Finger.Middle, FingerDirection.VerticalUp, 0.70);
// CoughSign.addDirection(Finger.Middle, FingerDirection.DiagonalUpLeft, 0.70);

//Ring
CoughSign.addCurl(Finger.Ring, FingerCurl.FullCurl, 1);
CoughSign.addDirection(Finger.Ring, FingerDirection.VerticalUp, 0.70);

//Pinky
CoughSign.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1);
CoughSign.addDirection(Finger.Pinky, FingerDirection.VerticalUp, 0.70);


export default CoughSign;

