import { Model } from '../../components/3D/Model';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera, CameraControls, Environment } from "@react-three/drei";
import { Leva } from "leva";
import { useState, useRef, useEffect } from 'react';
import * as THREE from 'three';
import { Suspense } from 'react';
import Floor from '../../components/floor/Floor';
import Header from '../../components/header/Header';
import './landingPage.scss';
import TextAnimation from '../../components/text/TextAnimation';
import Loading from '../../components/loading/Loading';
import { Parallax } from 'react-scroll-parallax';
import { About } from '../../components/about/About';
export default function LandingPage() {
    const [isVideoLoaded, setIsVideoLoaded] = useState(false);
    const [position, setPosition] = useState([0, 0, 0]);
    const [actionType, setActionType] = useState("Run_Fast");
    const controlsRef = useRef();
    const [scrollPosition, setScrollPosition] = useState(0);

    const handleScroll = () => {
        let scrollY = window.scrollY;
        console.log(window.scrollY);
        if (scrollY > 1100 && scrollY < 1500) {
            moveAndLookAt([0, 1, -3], [0, Math.PI / 2], "Respawn");
            setScrollPosition(scrollY);// Zoom
        } else if (scrollY >= 1500 && scrollY < 2000) {
            moveAndLookAt([0, 1, 4], [Math.PI, Math.PI / 2], "Recall"); // Move to the back
        } else if (scrollY >= 2000 && scrollY < 2500) {
            moveAndLookAt([0, 1, -4], [Math.PI / 8, Math.PI / 2], "Idle_Base"); // Move to the right
        } else if (scrollY >= 2500 && scrollY < 3000) {
            moveAndLookAt([0, 1, 0], [Math.PI / 4, Math.PI / 2], "Run_Fast"); // Move to the first position
        } else {
            moveAndLookAt([0, 1, 0], [Math.PI / 4, Math.PI / 2], "Idle_Base"); // Move to the first position
        }
    };

    useEffect(() => {

        window.addEventListener('scroll', handleScroll);

        // Cleanup function to remove the event listener
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [window.scrollY]);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVideoLoaded(true);
        }, 1000); // Thay đổi thời gian đợi tùy ý

        return () => clearTimeout(timer);
    }, []);

    const moveAndLookAt = (position, target, type) => {
        console.log(type);
        controlsRef.current.moveTo(position[0], position[1], position[2], true);
        controlsRef.current.rotateTo(target[0], target[1], true);
        setActionType(type);
    };
    return (
        <div className="landingContainer" id='landingContainer'>
            {!isVideoLoaded &&
                <Loading />
            }
            {
                isVideoLoaded &&
                <div>
                    <Header />
                    <div className='coverContainer'>
                        <video muted autoPlay loop className='landingCover' src="/JhinVid.mp4" alt="cover" />
                        <div className="text-overlay">
                            <div className='text-content'>
                                <TextAnimation />
                            </div>

                        </div>
                    </div>
                    <div style={{ position: 'relative' }}>
                        <Parallax speed={50} style={{ position: 'relative', zIndex: 1, top: 210 }}>
                            <About scrollY={scrollPosition} />
                        </Parallax>
                        <Canvas style={{ height: 500, position: 'sticky', top: '0px' }} shadows>
                            <Suspense fallback={null}>
                                <CameraControls ref={controlsRef} />
                                <Model position={position} actionType={actionType} />
                            </Suspense>
                            <Floor actionType={actionType} />

                        </Canvas>

                    </div>
                    <div style={{ height: '1000px', }}>troll2</div>
                </div>
            }
        </div>
    );
}
