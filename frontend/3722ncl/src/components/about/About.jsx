import { Card } from 'antd'
import { Link, animateScroll as scroll, scrollSpy } from 'react-scroll';
const { Meta } = Card;
import "./about.scss";
import { motion } from "framer-motion"
import { useRef, useState, useEffect } from 'react';
import { UserOutlined, FireOutlined, PhoneOutlined, AimOutlined } from '@ant-design/icons';
export const About = (props) => {
    const [isVisible, setIsVisible] = useState(false);
    const scrollTo = (to) => {
        scroll.scrollTo(to); // Scrolling to 100px from the top of the page.
    };
    return (
        <div className='aboutContainer'>
            <div className='aboutContent'>
                <motion.div
                    initial="hidden"
                    whileInView={props.scrollY >= 1000 ? "visible" : "hidden"}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 1 }}
                    variants={{
                        hidden: { opacity: 0, x: -50 },
                        visible: { opacity: 1, x: 0 },
                    }}
                    className='aboutLeft'
                // style={{
                //     display: props.scrollY >= 1100 ? "" : "none",
                // }}
                >
                    <Card
                        hoverable

                        cover={<img style={{ height: 'auto', maxWidth: '100%' }} alt="avatar" src="/avatar.jpg" />}
                    >
                        <Meta style={{ fontSize: 18 }} title="Hi, I'm Hieu" description="I'm a full-stack developer" />
                    </Card>

                </motion.div>
                <motion.div initial="hidden"
                    whileInView={props.scrollY >= 1000 ? "visible" : "hidden"}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 1 }}
                    variants={{
                        hidden: { opacity: 0, x: 50 },
                        visible: { opacity: 1, x: 0 },
                    }}
                    // style={{ display: props.scrollY >= 1100 ? "" : "none" }}
                    className='aboutLeft'>
                    <Card style={{ marginBottom: 20, fontSize: 18 }} hoverable title={null}>
                        "This is my Port4lio, heavily inspired by Jhin - a champion from
                        the game LoL. I created this project to test some 3D tools to animate the website,
                        such as ThreeJS and React Three Fiber. More about me below: "
                    </Card>
                    <Card hoverable title={null}>
                        <div style={{ margin: '0 auto', width: '80%' }}>
                            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                                <motion.div whileHover={{
                                    scale: 1.2,
                                    transition: { duration: 0.2 },
                                }} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 20 }}>
                                    <UserOutlined onClick={() => scrollTo(1550)} />
                                    <div>About</div>
                                </motion.div>
                                <motion.div whileHover={{
                                    scale: 1.2,
                                    transition: { duration: 0.2 },
                                }} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 20 }}>
                                    <FireOutlined onClick={() => scrollTo(2050)} />
                                    <div>Hobby</div>
                                </motion.div>
                                <motion.div whileHover={{
                                    scale: 1.2,
                                    transition: { duration: 0.2 },
                                }} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 20 }}>
                                    <AimOutlined onClick={() => scrollTo(2550)} />
                                    <div>Projects</div>
                                </motion.div>
                                <motion.div whileHover={{
                                    scale: 1.2,
                                    transition: { duration: 0.2 },
                                }} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 20 }}>
                                    <PhoneOutlined onClick={() => scrollTo(3050)} />
                                    <div>Contacts</div>
                                </motion.div>
                            </div>
                        </div>

                    </Card>

                </motion.div>
            </div>
        </div>
    )
}
