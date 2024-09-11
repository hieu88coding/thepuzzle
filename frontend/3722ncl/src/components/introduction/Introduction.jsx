import { Card } from 'antd'
import { Link, animateScroll as scroll, scrollSpy } from 'react-scroll';
const { Meta } = Card;
import "./introduction.scss";
import { motion } from "framer-motion"
import { useRef, useState, useEffect } from 'react';
import { UserOutlined, BankOutlined, ProfileOutlined, CalendarOutlined, GifOutlined } from '@ant-design/icons';
export const Introduction = (props) => {
    const [isVisible, setIsVisible] = useState(false);
    const scrollTo = (to) => {
        scroll.scrollTo(to); // Scrolling to 100px from the top of the page.
    };
    return (
        <div className='introductionContainer'>
            <div className='introductionContent'>

                <motion.div initial="hidden"
                    whileInView={props.scrollY > 1500 ? "visible" : "hidden"}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 1 }}
                    variants={{
                        hidden: { opacity: 0, x: -50 },
                        visible: { opacity: 1, x: 0 },
                    }} className='introductionLeft'>

                    <div style={{ color: 'white', marginBottom: 20, fontSize: 20, fontWeight: 'bold', textAlign: 'left' }}>
                        ABOUT
                    </div>


                    <Card style={{ marginBottom: 20, fontSize: 18, textAlign: 'left' }} hoverable title={null}>
                        "Each bullet is a piece of my soul. Each shot is a piece of me."
                    </Card>

                </motion.div>
                <motion.div initial="hidden"
                    whileInView={props.scrollY > 1500 ? "visible" : "hidden"}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 1 }}
                    variants={{
                        hidden: { opacity: 0, x: 50 },
                        visible: { opacity: 1, x: 0 },
                    }}
                    className='introductionRight'>
                    <Card style={{ marginBottom: 20, marginTop: 50, fontSize: 18 }} hoverable title={null}>

                        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 20 }}>
                            <BankOutlined />
                            <div>Education: HUST(2020-2024)</div>
                        </div>

                    </Card>
                    <Card style={{ marginBottom: 20, fontSize: 18 }} hoverable title={null}>

                        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 20 }}>
                            <CalendarOutlined />
                            <div>DoB: 21/03/2002</div>
                        </div>

                    </Card>
                    <Card style={{ marginBottom: 20, fontSize: 18 }} hoverable title={null}>

                        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 20 }}>
                            <ProfileOutlined />
                            <div>MBTI: ISTP-T</div>
                        </div>

                    </Card>
                    <Card style={{ marginBottom: 20, fontSize: 18 }} hoverable title={null}>

                        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 20 }}>
                            <GifOutlined />
                            <div>Age: 22</div>
                        </div>

                    </Card>

                </motion.div>
            </div>
        </div>
    )
}
