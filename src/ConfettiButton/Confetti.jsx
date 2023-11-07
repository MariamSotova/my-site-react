// import React from "react";
// import classes from "./Confetti.module.css";
// import { useEffect, useState } from "react";
// import ReactConfetti from "react-confetti";

// const Confetti = () => {
//   const [windowDimension, setDimension] = useState({
//     width: window.innerWidth,
//     height: window.innerHeight,
//   });
//   const [Btn, setBtn] = useState(false);

//   const detectSize = () => {
//     setDimension({ width: window.innerWidth, height: window.innerHeight });
//   };
//   useEffect(() => {
//     window.addEventListener("resize", detectSize);
//     return (
//       () => {
//         window.removeEventListener("resize", detectSize);
//       },
//       [windowDimension]
//     );
//   });

//   return (
//     <div className={classes.Confetti}>
//       <button onClick={() => setBtn(!Btn)}>confetti run</button>
//       {Btn && (
//         <ReactConfetti
//           width={windowDimension.width}
//           height={windowDimension.height}
//           tweenDuration={1000}
//         />
//       )}
//     </div>
//   );
// };

// export default Confetti;
