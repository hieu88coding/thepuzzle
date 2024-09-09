import React from 'react'
import { useRef, useState, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import { Clock } from 'three';
const Floor = (props) => {
    const gridRef1 = useRef();
    const gridRef2 = useRef();
    const clock = new Clock();
    const [isAnimating, setIsAnimating] = useState(true);
    useFrame(() => {
        const delta = clock.getDelta() * 3;
        if (isAnimating && gridRef1.current && gridRef2.current) {
            // Di chuyển cả hai lưới về phía sau
            gridRef1.current.position.z -= delta;
            gridRef2.current.position.z -= delta;

            // Khi lưới thứ nhất ra khỏi màn hình, di chuyển nó về vị trí ban đầu phía sau lưới thứ hai
            if (gridRef1.current.position.z < -20) {
                gridRef1.current.position.z = gridRef2.current.position.z + 20;
            }

            // Khi lưới thứ hai ra khỏi màn hình, di chuyển nó về vị trí ban đầu phía sau lưới thứ nhất
            if (gridRef2.current.position.z < -20) {
                gridRef2.current.position.z = gridRef1.current.position.z + 20;
            }
        }
    });

    useEffect(() => {
        if (props.actionType === "Run_Fast") {
            setIsAnimating(true);
        } else {
            setIsAnimating(false);
        }
    }, [props.actionType]);

    return (
        <>
            <gridHelper ref={gridRef1} args={[50, 50, 0xff0000, 'teal']} position={[0, 0, 0]} />
            <gridHelper ref={gridRef2} args={[50, 50, 0xff0000, 'teal']} position={[0, 0, 20]} />
        </>
    );
}

export default Floor



