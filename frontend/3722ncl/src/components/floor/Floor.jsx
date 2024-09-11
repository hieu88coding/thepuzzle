import React, { useRef, useState, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import { Clock } from 'three';


const Floor = (props) => {
    const gridRef1 = useRef();
    const gridRef2 = useRef();
    const clock = new Clock();
    const [isAnimating, setIsAnimating] = useState(true);


    useFrame(() => {
        const delta = clock.getDelta() * 3; // Thời gian trôi qua giữa các khung hình

        if (isAnimating && gridRef1.current && gridRef2.current) {
            // Di chuyển cả hai lưới về phía sau với tốc độ tính toán
            gridRef1.current.position.z -= delta;
            gridRef2.current.position.z -= delta;

            // Khi lưới thứ nhất ra khỏi màn hình, di chuyển nó về vị trí ban đầu phía sau lưới thứ hai
            if (gridRef1.current.position.z < -10) {
                gridRef1.current.position.z = gridRef2.current.position.z + 10;
            }

            // Khi lưới thứ hai ra khỏi màn hình, di chuyển nó về vị trí ban đầu phía sau lưới thứ nhất
            if (gridRef2.current.position.z < -10) {
                gridRef2.current.position.z = gridRef1.current.position.z + 10;
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
            {/* GridHelper chạy lùi về phía sau */}
            <gridHelper ref={gridRef1} args={[50, 50, `white`, `white`]} position={[0, 0, 0]} />
            <gridHelper ref={gridRef2} args={[50, 50, `white`, `white`]} position={[0, 0, 10]} />


        </>
    );
}

export default Floor;
