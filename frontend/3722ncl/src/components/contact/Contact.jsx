import { Card } from 'antd'
import { Link, animateScroll as scroll, scrollSpy } from 'react-scroll';
const { Meta } = Card;
import "./contact.scss";
import { motion } from "framer-motion"
import { useRef, useState, useEffect } from 'react';
import { GithubOutlined, FacebookOutlined, InstagramOutlined, UpCircleTwoTone } from '@ant-design/icons';
export const Contact = (props) => {
    const scrollTo = (to) => {
        scroll.scrollTo(to); // Scrolling to 100px from the top of the page.
    };
    return (
        <div className='contactContainer'>
            <div className='contactContent'>
                <motion.div initial="hidden"
                    whileInView={props.scrollY > 3000 ? "visible" : "hidden"}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 1 }}
                    variants={{
                        hidden: { opacity: 0, x: 50 },
                        visible: { opacity: 1, x: 0 },
                    }}
                    className='contactLeft'>
                    <div style={{ color: 'white', marginTop: 200, marginBottom: 20, fontSize: 20, fontWeight: 'bold', textAlign: 'left' }}>
                        CONTACT
                    </div>
                    <Card hoverable title={null}>
                        <div style={{ margin: '0 auto', width: '80%' }}>
                            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                                <motion.div whileHover={{
                                    scale: 1.2,
                                    transition: { duration: 0.2 },
                                }} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 20 }}>
                                    <GithubOutlined onClick={() => scrollTo(1500)} />
                                    <div>Github</div>
                                </motion.div>
                                <motion.div whileHover={{
                                    scale: 1.2,
                                    transition: { duration: 0.2 },
                                }} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 20 }}>
                                    <FacebookOutlined onClick={() => scrollTo(2000)} />
                                    <div>Facebook</div>
                                </motion.div>
                                <motion.div whileHover={{
                                    scale: 1.2,
                                    transition: { duration: 0.2 },
                                }} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 20 }}>
                                    <InstagramOutlined onClick={() => scrollTo(2500)} />
                                    <div>Instagram</div>
                                </motion.div>
                                <motion.div whileHover={{
                                    scale: 1.2,
                                    transition: { duration: 0.2 },
                                }} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 20 }}>
                                    <UpCircleTwoTone twoToneColor={"#1677ff"} onClick={() => scrollTo(0)} />
                                    <div>To Top</div>
                                </motion.div>
                            </div>
                        </div>

                    </Card>

                </motion.div>
            </div>
        </div>
    )
}
