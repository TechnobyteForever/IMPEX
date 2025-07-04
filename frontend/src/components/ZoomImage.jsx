// import React, { useEffect, useState } from 'react';
// import bg from '../assets/Wall.jpg'

// const ZoomImage = () => {
//     const [scale, setScale] = useState(1);
//     const handleScroll = () => {
//         const scrollPosition = window.scrollY;
//         const newScale = 1 + scrollPosition / 1000;
//         setScale(newScale);
//     };

//     // Add event listener for scroll on component mount and remove it on unmount
//     useEffect(() => {
//         window.addEventListener('scroll', handleScroll);
//         return () => {
//             window.removeEventListener('scroll', handleScroll);
//         };
//     }, []);

//     return (
//         <div className="image-container overflow-hidden relative h-full w-full"
//             style={{
//                 height: '100vh',
//                 width: '100vw'
//             }}
//         >
//             <img
//                 src={bg}
//                 alt="Ship Image"
//                 className="zoom-image w-full h-auto absolute top-0 left-0"
//                 style={{
//                     transform: `scale(${scale})`,
//                     transformOrigin: 'center top',
//                     transition: 'transform ease-out',
//                 }} // Dynamically adjust the scale
//             />
//         </div>
//     );
// };

// const ZoomImage = () => {
//     const [containerHeight, setContainerHeight] = useState(window.innerHeight); // Initial container height

//     // Function to handle the scroll event
//     const handleScroll = () => {
//         const scrollPosition = window.scrollY;
//         // Decrease the container height as you scroll down
//         const newHeight = window.innerHeight - scrollPosition / 2; // Adjust the division factor as needed
//         if (newHeight > 100) { // Minimum height limit to prevent disappearing
//             setContainerHeight(newHeight);
//         }
//     };

//     // Add event listener for scroll on component mount and remove it on unmount
//     useEffect(() => {
//         window.addEventListener('scroll', handleScroll);
//         return () => {
//             window.removeEventListener('scroll', handleScroll);
//         };
//     }, []);

//     return (
//         <div
//             className="image-container relative"
//             style={{
//                 height: `${containerHeight}px`,
//                 transition: 'height ease-out'
//             }}
//         >
//             <img src={bg} alt="Fixed Image" className="fixed-image absolute h-auto w-full top-0 left-0"
//                 style={{

//                 }}
//             />
//         </div>
//     );
// };

// export const ZoomImage = () => {
//     return (
//         <div className="container w-full"
//             style={{

//                 backgroundPosition: 'center',
//                 backgroundSize: 'cover',
//                 backgroundImage: `url(${bg})`,
//                 backgroundAttachment: 'fixed'
//             }}
//         >
//         </div>
//     )
// }


import bg from '../assets/Wall.jpg'

export const ZoomImage = () => {
    return (
        // <></>
        <div
            className='min-h-screen bg-fixed'
            style={{
                // backgroundImage: `url(${bg})`,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                padding: '10vw',
                // backdropFilter: 'blur(4px)',
                // WebkitBackdropFilter: 'blur(4px)',
            }}
        >
            <div className='text-white text-wrap text-5xl text-center rounded-xl flex flex-col gap-5 heading:text-6xl' style={{
                // filter: 'blur(5px)',
                textShadow: '5px 5px 5px black'
            }}>
                <div>Grow your Global Businesses with Shiply</div>
                {/* <div>Seamless Import - Export  trade software for  businesses of all sizes.</div> */}

            </div>
        </div>
    )
}


// import { useEffect, useState } from 'react';
// import bg from '../assets/Wall.jpg'

// export const ZoomImage = () => {
//     const [backgroundSize, setBackgroundSize] = useState(100); // Initial background size in percentage

//     // Function to handle scroll event
//     const handleScroll = () => {
//         const scrollPosition = window.scrollY;
//         // Decrease the background size slightly as you scroll down
//         const newSize = 100 + scrollPosition / 10; // Adjust division factor as needed
//         setBackgroundSize(newSize);
//         console.log(`${scrollPosition} : ${newSize} : `);
//     };

//     useEffect(() => {
//         // Add event listener on component mount
//         window.addEventListener('scroll', handleScroll);
//         return () => {
//             // Cleanup listener on component unmount
//             window.removeEventListener('scroll', handleScroll);
//         };
//     }, []);

//     return (
//         <div
//             className='min-h-screen bg-fixed'
//             style={{
//                 backgroundImage: `url(${bg})`,
//                 backgroundSize: `${backgroundSize}%`, // Dynamically change background size
//                 backgroundRepeat: 'no-repeat',
//                 backgroundPosition: 'center',
//             }}
//         >
//         </div>
//     );
// };



export default ZoomImage;
