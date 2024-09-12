import { HighNoonJhin } from '../../components/3D/HighNoonJhin';
import { OgJhin } from '../../components/3D/OgJhin';
import { BloodMoonJhin } from '../../components/3D/BloodMoonJhin';
import { DarkCosmicJhin } from '../../components/3D/DarkCosmicJhin';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera, CameraControls, Environment, Plane } from "@react-three/drei";
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
import { Introduction } from '../../components/introduction/Introduction';
import { Hobby } from '../../components/hobby/Hobby';
import { Project } from '../../components/projects/Project';
import { Contact } from '../../components/contact/Contact';
import {
    ref,
    getDownloadURL,
    listAll,
} from "firebase/storage";
import { storage } from '../../../firebase'
import axios from "axios";
const background = {
    "OgJhin": "/planet.jpg",
    "HighNoonJhin": "/orange_planet.jpg",
    "BloodMoonJhin": "/red_planet.jpg",
    "DarkCosmicJhin": "/dark_cosmic_planet.jpg"
}
export default function LandingPage() {
    const [isVideoLoaded, setIsVideoLoaded] = useState(false);
    const [position, setPosition] = useState([0, 0, 0]);
    const [actionType, setActionType] = useState("Run_Fast");
    const controlsRef = useRef();
    const [scrollPosition, setScrollPosition] = useState(0);
    const [jhinState, setJhinState] = useState("OgJhin");
    const [data, setData] = useState([]);
    const fetchData = async () => {
        let imageRefs = await listAll(ref(storage, `/`));
        imageRefs.items.sort((a, b) => {
            if (a.name < b.name) return -1;
            if (a.name > b.name) return 1;
            return 0;
        });
        let imagesUrls = await Promise.all(
            imageRefs.items.map(async (exelRef) => {
                const url = await getDownloadURL(exelRef); // Tải xuống từng ảnh
                return url;
            })
        );
        console.log(imagesUrls);
        setData({
            "OgJhin": {
                splash: imagesUrls[4],
            },
            "HighNoonJhin": {
                splash: imagesUrls[3],
            },
            "BloodMoonJhin": {
                splash: imagesUrls[0],
            },
            "DarkCosmicJhin": {
                splash: imagesUrls[2],
            },
        });
    };
    useEffect(() => {
        fetchData();
        console.log(data);
    }, []);


    const handleChangeState = (state) => {
        setJhinState(state)
    }
    const handleScroll = () => {
        let scrollY = window.scrollY;
        if (scrollY >= 1000 && scrollY < 1500) {
            moveAndLookAt([0, 1, -3], [0, Math.PI / 2], "Respawn");
            setScrollPosition(scrollY);// Zoom
        } else if (scrollY >= 1500 && scrollY < 2000) {
            moveAndLookAt([0, 1, 3], [Math.PI, Math.PI / 2], "Recall"); // Move to the back
            setScrollPosition(scrollY);// Zoom
        } else if (scrollY >= 2000 && scrollY < 2500) {
            moveAndLookAt([0, 1, -3.5], [Math.PI / 8, Math.PI / 2], "DanceLoop");
            setScrollPosition(scrollY);// Zoom // Move to the right
        } else if (scrollY >= 2500 && scrollY < 3000) {
            moveAndLookAt([0, 1, -3.5], [-Math.PI / 8, Math.PI / 2], "Laugh");
            setScrollPosition(scrollY);// Zoom // Move to the first position
        } else if (scrollY >= 3000) {
            moveAndLookAt([0, 1, 0], [-3 * Math.PI / 4, Math.PI / 2], "Run_Fast");
            setScrollPosition(scrollY);
        } else {
            moveAndLookAt([0, 3, 0], [Math.PI / 4, Math.PI / 2], "Idle_Base");
            setScrollPosition(scrollY);// Zoom // Move to the first position
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
                    <Header jhinState={jhinState} handleChangeState={handleChangeState} />
                    <div className='coverContainer'>
                        <video muted autoPlay loop className='landingCover' src={data && `${data[jhinState]?.splash}`} alt="cover" />
                        <div className="text-overlay">
                            <div className='text-content'>
                                <TextAnimation jhinState={jhinState} />
                            </div>

                        </div>
                    </div>
                    <div style={{ position: 'relative' }}>
                        <Canvas style={{ height: '100vh', position: 'sticky', top: '0px' }} shadows>
                            <Suspense fallback={null}>
                                <Environment files={background[jhinState]} background />
                                <CameraControls ref={controlsRef} />
                                {jhinState === "OgJhin" &&
                                    <OgJhin position={position} actionType={actionType} />
                                }
                                {jhinState === "HighNoonJhin" &&
                                    <HighNoonJhin position={position} actionType={actionType} />
                                }
                                {jhinState === "BloodMoonJhin" &&
                                    <BloodMoonJhin position={position} actionType={actionType} />
                                }
                                {jhinState === "DarkCosmicJhin" &&
                                    <DarkCosmicJhin position={position} actionType={actionType} />
                                }
                            </Suspense>
                            <Floor jhinState={jhinState} actionType={actionType} />

                        </Canvas>
                        <Parallax speed={50} style={{ position: 'relative', zIndex: 1, top: -450 }}>
                            <About scrollY={scrollPosition} />
                        </Parallax>
                        <Parallax speed={50} style={{ position: 'relative', zIndex: 1, top: -450 }}>
                            <Introduction scrollY={scrollPosition} />
                        </Parallax>
                        <Parallax speed={50} style={{ position: 'relative', zIndex: 1, top: -450 }}>
                            <Hobby scrollY={scrollPosition} />
                        </Parallax>
                        <Parallax speed={50} style={{ position: 'relative', zIndex: 1, top: -450 }}>
                            <Project scrollY={scrollPosition} />
                        </Parallax>
                        <Parallax speed={50} style={{ position: 'relative', zIndex: 1, top: -450 }}>
                            <Contact scrollY={scrollPosition} />
                        </Parallax>
                    </div>
                </div>
            }
        </div>
    );
}
