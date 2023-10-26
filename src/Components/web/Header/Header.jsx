"use client"
import Link from 'next/link'
import styled from './header.module.scss'
import { FaGithub } from 'react-icons/fa'
import { FaTelegramPlane } from 'react-icons/fa'
import { GrInstagram } from 'react-icons/gr'
import { BsSun } from 'react-icons/bs'
import { BiMoon } from 'react-icons/bi'

import { useTheme } from '@/app/context/Context_alisa'

export default function Header() {
    
    const { dayMoon, clickBtn } = useTheme();
    
    // const [dayMoon, setDayMoon] = useState(() => {
    //     const storedPreference = localStorage.getItem('themePreference');
    //     return storedPreference === 'night';
    // });
    // const clickBtn = () => {
    //     const newDayMoon = !dayMoon;
    //     setDayMoon(newDayMoon);
    //     localStorage.setItem('themePreference', newDayMoon ? 'night' : 'day');
    //     document.body.style.background = newDayMoon ? '#24272C' : '#E6E7EE';
    // };
    // useEffect(() => {
    //     document.body.style.background = dayMoon ? '#24272C' : '#E6E7EE';
    // }, [dayMoon]);
    
    return (
        <header className={styled.main}>
            <div className="container-navigation">
                <div className={styled.main_content}>
                    <div className={styled.main_content_left}>
                        <Link href="/" className={`${styled.main_logo_link} ${dayMoon ? styled.main_logo_link_active : ""}`}>B</Link>
                        <ul className={styled.main_content_left_list}>
                            <li className={styled.main_content_left_item}>
                                <Link href="/about" className={`${styled.main_content_left_link} ${dayMoon ? styled.main_content_left_link_active : ""}`} >About</Link>
                            </li>
                            <li className={styled.main_content_left_item}>
                                <Link href="/education" className={`${styled.main_content_left_link} ${dayMoon ? styled.main_content_left_link_active : ""}`} >Education</Link>
                            </li>
                            <li className={styled.main_content_left_item}>
                                <Link href="/portfolio" className={`${styled.main_content_left_link} ${dayMoon ? styled.main_content_left_link_active : ""}`} >Portfolio</Link>
                            </li>
                            <li className={styled.main_content_left_item}>
                                <Link href="/service" className={`${styled.main_content_left_link} ${dayMoon ? styled.main_content_left_link_active : ""}`} >Service</Link>
                            </li>
                            <li className={styled.main_content_left_item}>
                                <Link href="/contact" className={`${styled.main_content_left_link} ${dayMoon ? styled.main_content_left_link_active : ""}`} >Contact</Link>
                            </li>
                        </ul>
                    </div>
                    <div className={styled.main_content_right}>
                        <ul className={styled.main_content_right_list}>
                            <li className={styled.main_content_right_item}>
                                <Link href="https://github.com/BilmerIslamov" target="_blank" className={`${styled.main_content_right_link} ${dayMoon ? styled.main_content_right_link_active : ""}`} >
                                    <FaGithub className={`${styled.main_content_right_link_icon} ${dayMoon ? styled.main_content_right_link_icon_active : ""}`} />
                                </Link>
                            </li>
                            <li className={styled.main_content_right_item}>
                                <Link href="https://t.me/Sabit_Islamov" target="_blank" className={`${styled.main_content_right_link} ${dayMoon ? styled.main_content_right_link_active : ""}`} >
                                    <FaTelegramPlane className={`${styled.main_content_right_link_icon} ${dayMoon ? styled.main_content_right_link_icon_active : ""}`} />
                                </Link>
                            </li>
                            <li className={styled.main_content_right_item}>
                                <Link href="https://www.instagram.com/_bilmer_" target="_blank" className={`${styled.main_content_right_link} ${dayMoon ? styled.main_content_right_link_active : ""}`} >
                                    <GrInstagram className={`${styled.main_content_right_link_icon} ${dayMoon ? styled.main_content_right_link_icon_active : ""}`} />
                                </Link>
                            </li>
                        </ul>
                        <button onClick={clickBtn} className={`${styled.main_content_right_btn_theme} ${dayMoon ? styled.btn_active : ""}`}>
                            <div className={`${styled.main_content_right_btn_theme_icon} ${dayMoon ? styled.icon_active : ""}`}>
                                <BsSun className={`${styled.main_content_right_btn_theme_day} ${dayMoon ? styled.theme_day_active : ""}`} />
                                <BiMoon className={`${styled.main_content_right_btn_theme_moon} ${dayMoon ? styled.theme_moon_active : ""}`} />
                            </div>
                        </button>
                        <a href='https://bilmer-library.vercel.app/' target="_blank" className={`${styled.main_content_right_btn_library} ${dayMoon ? styled.library_link_active : ""}`}>
                            Library
                        </a>
                    </div>
                </div>

            </div>
        </header>
    )
}

