// import { useState } from "react";

// const Envelope = ({ onOpen }: { onOpen: () => void }) => {
//   const [opening, setOpening] = useState(false);

//   const handleClick = () => {
//     setOpening(true);
//     setTimeout(onOpen, 800);
//   };

//   return (
//     <div
//       className={`fixed inset-0 z-50 flex items-center justify-center bg-[#c3cfaa] cursor-pointer transition-colors duration-700 ${
//         opening ? "animate-envelope-open pointer-events-none" : ""
//       }`}
//       onClick={handleClick}
//     >
//       {/* Envelope + wax seal */}
//       <div className="relative flex flex-col items-center gap-6 envelope-inner">
//         {/* Envelope shape */}
//         <div className="relative w-72 h-48 sm:w-80 sm:h-56 bg-[#c3cfaa] shadow-2xl overflow-hidden">
//           {/* Embossed floral pattern using layered gradients */}
//           <div className="absolute inset-0 opacity-40 mix-blend-multiply pointer-events-none bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.5),transparent_55%),radial-gradient(circle_at_80%_30%,rgba(255,255,255,0.45),transparent_55%),radial-gradient(circle_at_20%_80%,rgba(255,255,255,0.45),transparent_55%),radial-gradient(circle_at_80%_80%,rgba(255,255,255,0.5),transparent_55%)]" />

//           {/* Main envelope body (bottom flap) */}
//           <div className="absolute inset-0 border border-[#a6b58e] rounded-sm" />

//           {/* Top flap */}
//           <div
//             className="absolute inset-x-0 -top-px h-1/2 origin-top bg-[#c3cfaa] [clip-path:polygon(0%_0%,100%_0%,50%_100%)] border-b border-[#a6b58e] shadow-[0_6px_12px_rgba(0,0,0,0.18)]"
//           />

//           {/* Wax seal */}
//           <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-[4%] flex items-center justify-center">
//             <div className="wax-seal animate-seal-pulse">
//               <div className="wax-seal-inner" />
//               <span className="wax-seal-logo font-script">F&amp;R</span>
//             </div>
//           </div>
//         </div>

//         {/* Caption under the envelope */}
//         <p className="font-display text-base sm:text-lg text-[#5e5a4a] text-center">
//           This invitation is
//           <br />
//           <span className="font-script text-2xl">exclusively for you</span>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Envelope;


// import { useState } from "react";

// const Envelope = ({ onOpen }) => {
//   const [isOpening, setIsOpening] = useState(false);

//   const handleSealClick = () => {
//     if (isOpening) return;
//     setIsOpening(true);
    
//     // Fires the next part of your invitation after the animation finishes
//     setTimeout(() => { 
//       if (onOpen) onOpen(); 
//     }, 1500);
//   };

//   return (
//     /* The main container covers the full screen */
//     <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#c3cfaa] overflow-hidden">
      
//       {/* Container for the 3D effect */}
//       <div 
//         className={`relative w-full h-full max-w-lg aspect-square transition-all duration-1000 ease-in-out ${
//           isOpening ? "scale-110 translate-y-20 opacity-0" : "scale-100"
//         }`}
//         style={{ perspective: "1500px" }}
//       >
        
//         {/* BASE: The bottom part of the envelope */}
//         <div 
//           className="absolute inset-0 bg-cover bg-center shadow-2xl"
//           style={{ 
//             backgroundImage: "url('/src/components/env.png')", 
//             clipPath: "polygon(0 50%, 100% 50%, 100% 100%, 0 100%)" 
//           }}
//         />

//         {/* FLAP: The top triangle that flips up */}
//         <div 
//           className="absolute inset-0 bg-cover bg-center origin-top transition-transform  ease-in-out z-20"
//           style={{ 
//             backgroundImage: "url('/src/components/env.png')",
//             clipPath: "polygon(0 0, 100% 0, 50% 50%)",
//             transform: isOpening ? "rotateX(180deg)" : "rotateX(0deg)",
//             transformStyle: "preserve-3d",
//             backfaceVisibility: "hidden"
//           }}
//         >
//           {/* Back of the flap (what you see when it's open) */}
//           <div 
//             className="absolute inset-0 bg-[#b1be97]" 
//             style={{ transform: "rotateX(180deg)", backfaceVisibility: "hidden" }}
//           />
//         </div>

//         {/* WAX SEAL: Centered precisely at the point */}
//         <div className="absolute inset-0 flex items-center justify-center z-30">
//           <img 
//             src="pj-digital-vows-main/src/components/R___F-removebg-preview.png" 
//             alt="Wax Seal"
//             onClick={handleSealClick}
//             className={`w-32 h-32 cursor-pointer rounded-full shadow-xl transition-all duration-700 ease-in-out ${
//               isOpening ? "opacity-0 scale-150 -translate-y-20" : "hover:scale-110"
//             }`}
//           />
//         </div>

//         {/* Caption */}
//         {!isOpening && (
//           <div className="absolute bottom-10 left-0 right-0 text-center z-10">
//             <p className="text-[#5e5a4a] text-lg font-serif">
//               This invitation is <br />
//               <span className="italic text-2xl">exclusively for you</span>
//             </p>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Envelope;

import { useState } from "react";
import introVideo from "./ff047453-c122-4937-a30e-239c201da014-intro.mp4";
import introPoster from "./PP.png";

const Envelope = ({ onOpen }) => {
  const [isOpening, setIsOpening] = useState(false);
  const [showVideo, setShowVideo] = useState(false);

  const handleSealClick = () => {
    if (isOpening) return;
    setIsOpening(true);

    // Reveal video shortly after the envelope fades
    setTimeout(() => {
      setShowVideo(true);
    }, 600);
  };

  const handleVideoEnd = () => {
    if (onOpen) onOpen();
  };

  return (
    /* 1. The main container is the full-screen background */
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-cover bg-center transition-all duration-1000 ease-in-out"
      style={{ 
        backgroundImage: `url(${introPoster})`,
      }}
      onClick={handleSealClick}
    >
      {/* 2. Content overlay that fades/slides out when opened */}
      <div 
        className={`relative flex flex-col items-center justify-center w-full h-full transition-opacity duration-1000 ${
          isOpening ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
      >
        
        {/* 3. WAX SEAL: Positioned precisely in the center of the background */}
        {/* <div className="flex items-center justify-center">
          <img 
            src={introPoster}
            alt="Wax Seal"
            onClick={handleSealClick}
            className="w-32 h-32 cursor-pointer transition-transform duration-500 hover:scale-110 active:scale-95 drop-shadow-2xl"
          />
        </div> */}

        {/* 4. Caption: Styled to match the video aesthetic */}
        {/* <div className="mt-8 text-center px-4">
          <p className="text-[#5e5a4a] text-lg font-serif">
            This invitation is <br />
            <span className="italic text-2xl font-light">exclusively for you</span>
          </p>
        </div> */}
      </div>

      {/* 5. Full-screen intro video overlay */}
      {showVideo && (
        <div className="absolute inset-0 z-40 bg-black">
          <video
            src={introVideo}
            poster={introPoster}
            className="w-full h-full object-cover"
            autoPlay
            playsInline
            preload="auto"
            onEnded={handleVideoEnd}
          />
        </div>
      )}
    </div>
  );
};

export default Envelope;