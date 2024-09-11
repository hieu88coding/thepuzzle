import { Card } from 'antd'
import { Link, animateScroll as scroll, scrollSpy } from 'react-scroll';
const { Meta } = Card;
import "./project.scss";
import { motion } from "framer-motion"
import { useRef, useState, useEffect } from 'react';
import { UserOutlined, BankOutlined, ProfileOutlined, CalendarOutlined, GifOutlined } from '@ant-design/icons';

export const Project = (props) => {
    const [isVisible, setIsVisible] = useState(false);
    const scrollTo = (to) => {
        scroll.scrollTo(to); // Scrolling to 100px from the top of the page.
    };
    return (
        <div className='projectContainer'>
            <div className='projectContent'>
                <motion.div initial="hidden"
                    whileInView={props.scrollY > 2500 ? "visible" : "hidden"}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 1 }}
                    variants={{
                        hidden: { opacity: 0, x: 50 },
                        visible: { opacity: 1, x: 0 },
                    }}
                    className='projectRight'>
                    <Card
                        cover={<img width={"100%"} height={200} alt="example" src="/lotus.png" />}
                        style={{ marginTop: 50, fontSize: 18, textAlign: 'end', height: '300px', width: '40%' }} hoverable title={null}>
                        <a title='Github' src="https://github.com/hieu88coding/toeic_app_frontend">Toeic App</a>
                    </Card>
                    <Card
                        cover={<img width={"100%"} height={200} alt="example" src="/lotus.png" />}
                        style={{ marginTop: 100, fontSize: 18, textAlign: 'end', height: '300px', width: '40%' }} hoverable title={null}>
                        <a title='Github' src="https://github.com/HaiHoangND/frontend_mockshipping">Shipping App</a>
                    </Card>
                </motion.div>
                <motion.div initial="hidden"
                    whileInView={props.scrollY > 2500 ? "visible" : "hidden"}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 1 }}
                    variants={{
                        hidden: { opacity: 0, x: -50 },
                        visible: { opacity: 1, x: 0 },
                    }} className='projectLeft'>

                    <div style={{ marginBottom: 20, fontSize: 20, fontWeight: 'bold', textAlign: 'right' }}>
                        Project
                    </div>


                </motion.div>
            </div>
        </div>
    )
}
