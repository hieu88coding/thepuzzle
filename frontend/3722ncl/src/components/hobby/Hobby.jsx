import { Card } from 'antd'
import { Link, animateScroll as scroll, scrollSpy } from 'react-scroll';
const { Meta } = Card;
import "./hobby.scss";
import { motion } from "framer-motion"
import { useRef, useState, useEffect } from 'react';
import { UserOutlined, BankOutlined, ProfileOutlined, CalendarOutlined, GifOutlined } from '@ant-design/icons';

export const Hobby = (props) => {
    const [isVisible, setIsVisible] = useState(false);
    const scrollTo = (to) => {
        scroll.scrollTo(to); // Scrolling to 100px from the top of the page.
    };
    return (
        <div className='hobbyContainer'>
            <div className='hobbyContent'>

                <motion.div initial="hidden"
                    whileInView={props.scrollY > 2000 ? "visible" : "hidden"}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 1 }}
                    variants={{
                        hidden: { opacity: 0, x: -50 },
                        visible: { opacity: 1, x: 0 },
                    }} className='hobbyLeft'>

                    <div style={{ color: 'white', marginBottom: 20, fontSize: 20, fontWeight: 'bold', textAlign: 'left' }}>
                        HOBBY
                    </div>


                </motion.div>
                <motion.div initial="hidden"
                    whileInView={props.scrollY > 2000 ? "visible" : "hidden"}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 1 }}
                    variants={{
                        hidden: { opacity: 0, x: -50 },
                        visible: { opacity: 1, x: 0 },
                    }} className='hobbyLeft'>

                    <div style={{ marginTop: 100, fontSize: 20, fontWeight: 'bold', textAlign: 'left' }}>
                        <iframe width="100%" height="300" scrolling="no" frameBorder="no" allow="autoplay"
                            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/503588622&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true">

                        </iframe>
                    </div>


                </motion.div>
                <motion.div initial="hidden"
                    whileInView={props.scrollY > 2000 ? "visible" : "hidden"}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 1 }}
                    variants={{
                        hidden: { opacity: 0, x: 50 },
                        visible: { opacity: 1, x: 0 },
                    }}
                    className='hobbyRight'>
                    <Card style={{ marginTop: 200, fontSize: 18, textAlign: 'end' }} hoverable title={null}>
                        "I love staying alone at home and spend most of my time watching YouTube or playing LoL
                        (sounds desperate but I myself feel super comfortable alone, lol).
                        I'm also into music—please check out my SoundCloud playlists if you're interested.
                        Sometimes I'm writing on my blog or checking out some new technology to learn,
                        and this website is one of them!"
                    </Card>

                </motion.div>
            </div>
        </div>
    )
}
