import {Finger, FingerCurl, FingerDirection, GestureDescription} from 'fingerpose';

const MyBodySign = new GestureDescription('MyBody');
// MyBody is L
// [
//     [
//       "Thumb",
//       "No Curl",
//       "Diagonal Up Right"
//     ],
//     [
//       "Index",
//       "No Curl",
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
//       "Vertical Up"
//     ]
//   ]

//Thumb
MyBodySign.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
MyBodySign.addDirection(Finger.Index, FingerDirection.DiagonalUpRight, 0.70);

//Index
MyBodySign.addCurl(Finger.Index, FingerCurl.NoCurl, 1);
MyBodySign.addDirection(Finger.Index, FingerDirection.VerticalUp, 0.70);

//Middle
MyBodySign.addCurl(Finger.Middle, FingerCurl.FullCurl, 1);
MyBodySign.addDirection(Finger.Middle, FingerDirection.VerticalUp, 0.70);

//Ring
MyBodySign.addCurl(Finger.Ring, FingerCurl.FullCurl, 1);
MyBodySign.addDirection(Finger.Ring, FingerDirection.VerticalUp, 0.70);

//Pinky
MyBodySign.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1);
MyBodySign.addDirection(Finger.Pinky, FingerDirection.VerticalUp, 0.70);

export default MyBodySign;