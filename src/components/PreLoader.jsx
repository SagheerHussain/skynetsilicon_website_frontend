import React, { useEffect, useRef } from 'react';
import { gsap } from "gsap";
import logo from "/Images/logo-white.svg"
import "./preLoader.css";

const PreLoader = () => {

    const logoRef = useRef();
    const loadingRef = useRef();

    useEffect(() => {
        gsap.fromTo(
            ".loading-page",
            { opacity: 1 },
            {
                opacity: 0,
                duration: 1.5,
                delay: 2.2,
                scale: 2.5,
                display: "none",
                onComplete: () => {
                    console.log("Preloader Finished");
                    if (typeof setLoading === "function") {
                        setLoading(false);
                    }
                },
            },
        );
    }, [])

    return (
        <>
            <div className="loading-page" ref={loadingRef}>
                {/* Generator: Adobe Illustrator 24.0.1, SVG Export Plug-In . SVG Version: 6.00 Build 0)  */}
                <svg version="1.1" id="svg" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 1000 1000" style={{ enableBackground: 'new 0 0 1000 1000' }} xmlSpace="preserve">
                    <style type="text/css" dangerouslySetInnerHTML={{ __html: "\n                        .st0 {\n                            fill: #fff;\n                        stroke: #FFFFFF;\n                        stroke-miterlimit: 10;\n                }\n                    " }} />
                    <g>
                        <g>
                            <path className="st0" d="M847.81,280.8c-1.6-1.28-3.2-2.24-5.11-3.2c-6.71-3.83-14.7-5.75-23.01-5.75
 c-26.84,0-48.57,21.73-48.57,48.57c0,15.34,7.03,28.76,18.21,37.7v79.88c-17.25-10.22-37.38-15.98-58.79-15.98H329.85
 c-22.37,0-40.26-20.45-35.47-43.78c0.32-2.24,0.96-4.47,2.24-6.71c5.43-13.42,19.49-22.05,34.51-22.05h287.89
 c8.95,11.82,23.01,19.81,38.98,19.81c26.52,0,48.57-21.73,48.57-48.57c0-0.96,0-1.92-0.32-2.88c-0.64-9.91-4.15-19.17-10.22-26.84
 c-8.63-11.5-22.69-18.85-38.02-18.85c-15.66,0-29.4,7.35-38.34,18.85H329.85c-14.7,0-28.76,3.51-41.22,9.59
 c-33.23,15.98-55.92,51.12-53.04,91.38c2.24,36.43,25.88,66.14,57.83,79.88c12.14,5.11,25.56,8.31,39.94,8.31h397.17
 c21.73,0,40.9,11.82,50.8,29.72c5.11,8.31,7.99,18.21,7.99,29.08c0,2.56,0,5.11-0.32,7.99c-1.28,9.27-4.79,17.57-9.59,25.24
 c-0.64,0.64-1.28,1.6-2.24,2.56l7.67,4.15c28.12-14.7,49.85-40.26,58.79-71.25c1.92-6.71,3.2-13.42,3.83-20.45
 c0.32-2.56,0.32-5.11,0.32-7.35V360.05c12.46-8.63,20.77-23.33,20.77-39.62S860.59,289.75,847.81,280.8z M658.01,297.74
 c12.46,0,22.69,10.22,22.69,22.69s-10.22,22.69-22.69,22.69c-12.46,0-22.69-10.22-22.69-22.69S645.54,297.74,658.01,297.74z
  M819.37,343.11c-12.46,0-22.69-10.22-22.69-22.69c0.32-12.46,10.54-22.69,22.69-22.69c12.46,0,22.69,10.22,22.69,22.69
 S831.83,343.11,819.37,343.11z M706.25,528.12c-12.14-5.11-25.56-8.31-39.94-8.31H269.46c-21.73,0-40.9-11.82-50.8-29.72
 c-5.11-8.31-7.99-18.21-7.99-29.08c0-2.56,0-5.11,0.32-7.99c1.28-9.27,4.79-17.57,9.59-25.24c0.64-0.64,1.28-1.6,2.24-2.56
 l-7.67-4.15c-28.12,14.7-49.85,40.26-58.79,71.25c-1.92,6.71-3.2,13.42-3.83,20.45c-0.32,2.56-0.32,5.11-0.32,7.35v119.82
 c-12.46,8.63-20.77,23.33-20.77,39.62c0,16.3,7.99,30.67,20.77,39.62c1.6,1.28,3.2,2.24,5.11,3.2c6.71,3.83,14.7,5.75,23.01,5.75
 c26.84,0,48.57-21.73,48.57-48.57c0-15.34-7.03-28.76-18.21-37.7v-79.88c17.25,10.22,37.38,15.98,58.79,15.98h400.37
 c22.37,0,40.26,20.45,35.47,43.78c-0.32,2.24-0.96,4.47-2.24,6.71c-5.43,13.42-19.49,22.05-34.51,22.05H380.34
 c-8.95-11.82-23.01-19.81-38.98-19.81c-26.52,0-48.57,21.73-48.57,48.57c0,0.96,0,1.92,0.32,2.88
 c0.64,9.91,4.15,19.17,10.22,26.84c8.63,11.5,22.69,18.85,38.02,18.85c15.66,0,29.4-7.35,38.34-18.85h289.81
 c14.7,0,28.76-3.51,41.22-9.59c33.55-15.98,56.24-51.12,53.36-91.38C761.85,571.57,738.21,541.86,706.25,528.12z M179.99,702.26
 c-12.46,0-22.69-10.22-22.69-22.69c0-12.46,10.22-22.69,22.69-22.69s22.69,10.22,22.69,22.69
 C202.68,692.04,192.46,702.26,179.99,702.26z M341.67,702.26c-12.46,0-22.69-10.22-22.69-22.69c0-12.46,10.22-22.69,22.69-22.69
 c12.46,0,22.69,10.22,22.69,22.69C364.36,692.04,354.14,702.26,341.67,702.26z" />
                        </g>
                    </g>
                </svg>
            </div>

        </>
    )
}

export default PreLoader

