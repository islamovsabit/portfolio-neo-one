"use client"
import React from 'react'
import styled from '../scss/education.module.scss'
import Image from 'next/image'
import Images from '../../Components/Images/white.png'
import { ImCheckmark } from 'react-icons/im'
import { FaRegSnowflake, FaCalendarAlt } from 'react-icons/fa'
import { BiUserCircle } from 'react-icons/bi'
import { BsPhoneFill } from 'react-icons/bs'
import { MdOutlineEmail } from 'react-icons/md'
import { useTheme } from '../context/Context'
import { format } from 'date-fns';

import { useEffect, useState } from 'react';
import AOS from 'aos';
import Link from 'next/link'

export default function Page() {
    const {
        dayMoon,
        sendEmail,
        onChangeName,
        onChangeEmail,
        onChangeMessage,
        userName,
        userEmail,
        userMessage,
        portfolio_data
    } = useTheme();

    const [skills, setSkills] = useState([])
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('https://portfoliobilmer.pythonanywhere.com/api/v6/skills/')
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`Network response was not ok, status: ${response.status}`);
                }
                return response.json();
            })
            .then((skills) => {
                setSkills(skills);
                setLoading(false);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
                setLoading(false);
            });
    }, [])


    console.log(skills);
    const skills_data = skills.map((item) => {
        return (
            <li className={styled.skills_content_item} key={item.id}>
                <h6 className={`${styled.skills_content_item_title} ${dayMoon ? styled.text_color : ""}`}>{item.skills_title}</h6>
                <p className={`${styled.skills_content_item_text} ${dayMoon ? styled.text_color : ""}`}>{item.skills_text}</p>
            </li>
        )
    })


    AOS.init();

    return (
        <>
            <section className={styled.main}>
                <div className="container-main">
                    <div className={styled.main_content}>
                        <div className={styled.main_content_left}>
                            <h2 className={`${styled.main_content_left_text_page_title} ${dayMoon ? styled.text_color : ""}`}>My Education Level</h2>
                            <p className={`${styled.main_content_left_text_page_text_one} ${dayMoon ? styled.text_color : ""}`}>Themesberg is an experienced and passionate group of designers, developers, project managers, writers and artists. Every client we work with becomes a part of the team. Together we face the challenges and celebrate the victories.</p>
                            <div className={styled.main_content_left_btn_group}>
                                <button className={`${styled.main_content_left_btn} ${dayMoon ? styled.main_content_btn_active : ""}`}>Download</button>
                                <button className={`${styled.main_content_left_btn} ${dayMoon ? styled.main_content_btn_active : ""}`}>Contact</button>
                            </div>
                        </div>
                        <div className={styled.main_content_right}>
                            <Image src={Images} alt="logo" className={`${styled.main_content_right_image} ${dayMoon ? styled.main_content_right_image_active : ""}`} />
                        </div>
                    </div>
                </div>
            </section>
            <section className={styled.architecture}>
                <div className="container-main">
                    <div className={styled.architecture_content}>
                        <div className={styled.architecture_content_one}>
                            <div className={`${styled.architecture_content_one_block} ${dayMoon ? styled.shadow_inset_active : ""}`} data-aos="fade-up">
                                <h6 className={`${styled.architecture_content_one_block_title} ${dayMoon ? styled.text_color : ""}`}>Title block</h6>
                                <p className={`${styled.architecture_content_one_block_text} ${dayMoon ? styled.text_color : ""}`}>lorem impus is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry{"'"}s standard.</p>
                            </div>

                            <div className={styled.architecture_content_one_block}>
                                <span className={`${styled.architecture_content_one_block_span_text} ${dayMoon ? styled.text_color : ""}`}>
                                    2022.01.30
                                </span>
                                <span className={`${styled.architecture_content_one_block_span_icon} ${dayMoon ? styled.check_shadow_active : ""}`}>
                                    <ImCheckmark />
                                </span>
                            </div>

                            <div className={`${styled.architecture_content_one_block} ${dayMoon ? styled.shadow_inset_active : ""}`} data-aos="fade-up">
                                <h6 className={`${styled.architecture_content_one_block_title} ${dayMoon ? styled.text_color : ""}`}>Title block</h6>
                                <p className={`${styled.architecture_content_one_block_text} ${dayMoon ? styled.text_color : ""}`}>lorem impus is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry{"'"}s standard.</p>
                            </div>

                            <div className={styled.architecture_content_one_block}>
                                <span className={`${styled.architecture_content_one_block_span_text} ${dayMoon ? styled.text_color : ""}`}>
                                    2022.01.30
                                </span>
                                <span className={`${styled.architecture_content_one_block_span_icon} ${dayMoon ? styled.check_shadow_active : ""}`}>
                                    <ImCheckmark />
                                </span>
                            </div>
                        </div>

                        <div className={`${styled.architecture_content_two} ${dayMoon ? styled.shadow_inset_active : ""}`}></div>

                        <div className={styled.architecture_content_three}>
                            <div className={styled.architecture_content_three_block} data-aos="fade-up">
                                <span className={`${styled.architecture_content_three_block_span_icon} ${dayMoon ? styled.check_shadow_active : ""}`}>
                                    <ImCheckmark />
                                </span>
                                <span className={`${styled.architecture_content_three_block_span_text} ${dayMoon ? styled.text_color : ""}`}>
                                    2022.01.30
                                </span>
                            </div>

                            <div className={`${styled.architecture_content_three_block} ${dayMoon ? styled.shadow_inset_active : ""}`} data-aos="fade-up">
                                <h6 className={`${styled.architecture_content_one_block_title} ${dayMoon ? styled.text_color : ""}`}>Title block</h6>
                                <p className={`${styled.architecture_content_one_block_text} ${dayMoon ? styled.text_color : ""}`}>lorem impus is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry{"'"}s standard.</p>
                            </div>

                            <div className={styled.architecture_content_three_block} data-aos="fade-up">
                                <span className={`${styled.architecture_content_three_block_span_icon} ${dayMoon ? styled.check_shadow_active : ""}`}>
                                    <ImCheckmark />
                                </span>
                                <span className={`${styled.architecture_content_three_block_span_text} ${dayMoon ? styled.text_color : ""}`}>
                                    2022.01.30
                                </span>
                            </div>

                            <div className={`${styled.architecture_content_three_block} ${dayMoon ? styled.shadow_inset_active : ""}`} data-aos="fade-up">
                                <h6 className={`${styled.architecture_content_one_block_title} ${dayMoon ? styled.text_color : ""}`}>Title block</h6>
                                <p className={`${styled.architecture_content_one_block_text} ${dayMoon ? styled.text_color : ""}`}>lorem impus is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry{"'"}s standard.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className={styled.skills}>
                <div className="container-main">
                    <div className={`${styled.skills_content} ${dayMoon ? styled.background_color : ""}`}>
                        <h4 className={`${styled.skills_content_title} ${dayMoon ? styled.text_color : ""}`}>Skills</h4>
                        <ul className={styled.skills_content_list}>
                            
                            {skills_data}
                            
                            {/* <li className={styled.skills_content_item}>
                                <h6 className={`${styled.skills_content_item_title} ${dayMoon ? styled.text_color : ""}`}>Markup Styling Language</h6>
                                <p className={`${styled.skills_content_item_text} ${dayMoon ? styled.text_color : ""}`}>htnl/pug</p>
                            </li>
                            <li className={styled.skills_content_item}>
                                <h6 className={`${styled.skills_content_item_title} ${dayMoon ? styled.text_color : ""}`}>Css Frameeorks</h6>
                                <p className={`${styled.skills_content_item_text} ${dayMoon ? styled.text_color : ""}`}>bootstrp/+5</p>
                            </li>
                            <li className={styled.skills_content_item}>
                                <h6 className={`${styled.skills_content_item_title} ${dayMoon ? styled.text_color : ""}`}>Css Preprocessor</h6>
                                <p className={`${styled.skills_content_item_text} ${dayMoon ? styled.text_color : ""}`}>css/scss</p>
                            </li>
                            <li className={styled.skills_content_item}>
                                <h6 className={`${styled.skills_content_item_title} ${dayMoon ? styled.text_color : ""}`}>Telegram Bot</h6>
                                <p className={`${styled.skills_content_item_text} ${dayMoon ? styled.text_color : ""}`}>telebot/aiogram</p>
                            </li>
                            <li className={styled.skills_content_item}>
                                <h6 className={`${styled.skills_content_item_title} ${dayMoon ? styled.text_color : ""}`}>Windows</h6>
                                <p className={`${styled.skills_content_item_text} ${dayMoon ? styled.text_color : ""}`}>word/excel</p>
                            </li>
                            <li className={styled.skills_content_item}>
                                <h6 className={`${styled.skills_content_item_title} ${dayMoon ? styled.text_color : ""}`}>Pragramming Language</h6>
                                <p className={`${styled.skills_content_item_text} ${dayMoon ? styled.text_color : ""}`}>javaScript/python</p>
                            </li>
                            <li className={styled.skills_content_item}>
                                <h6 className={`${styled.skills_content_item_title} ${dayMoon ? styled.text_color : ""}`}>JavaScript Frameeorks</h6>
                                <p className={`${styled.skills_content_item_text} ${dayMoon ? styled.text_color : ""}`}>react.js/next.js</p>
                            </li>
                            <li className={styled.skills_content_item}>
                                <h6 className={`${styled.skills_content_item_title} ${dayMoon ? styled.text_color : ""}`}>Python Frameeorks</h6>
                                <p className={`${styled.skills_content_item_text} ${dayMoon ? styled.text_color : ""}`}>django/rest-framework</p>
                            </li>
                            <li className={styled.skills_content_item}>
                                <h6 className={`${styled.skills_content_item_title} ${dayMoon ? styled.text_color : ""}`}>API</h6>
                                <p className={`${styled.skills_content_item_text} ${dayMoon ? styled.text_color : ""}`}>any api</p>
                            </li>
                            <li className={styled.skills_content_item}>
                                <h6 className={`${styled.skills_content_item_title} ${dayMoon ? styled.text_color : ""}`}>Free Hosting</h6>
                                <p className={`${styled.skills_content_item_text} ${dayMoon ? styled.text_color : ""}`}>github/vercel/pythonanywhere</p>
                            </li>
                            <li className={styled.skills_content_item}>
                                <h6 className={`${styled.skills_content_item_title} ${dayMoon ? styled.text_color : ""}`}>Database</h6>
                                <p className={`${styled.skills_content_item_text} ${dayMoon ? styled.text_color : ""}`}>sql</p>
                            </li>
                            <li className={styled.skills_content_item}>
                                <h6 className={`${styled.skills_content_item_title} ${dayMoon ? styled.text_color : ""}`}>Package Managers</h6>
                                <p className={`${styled.skills_content_item_text} ${dayMoon ? styled.text_color : ""}`}>npm/yarn/pip</p>
                            </li>
                            <li className={styled.skills_content_item}>
                                <h6 className={`${styled.skills_content_item_title} ${dayMoon ? styled.text_color : ""}`}>Web Design</h6>
                                <p className={`${styled.skills_content_item_text} ${dayMoon ? styled.text_color : ""}`}>figma/canvas</p>
                            </li> */}
                        </ul>
                    </div>
                </div>
            </section>
            <section className={styled.next_handler}>
                <div className="container-main">
                    <div className={styled.next_handler_content}>

                        {portfolio_data}

                        <div className={`${styled.next_handler_content_list_item} ${dayMoon ? styled.background_color : ""}`}>
                            <div className={`${styled.next_handler_content_list_item_more_blog}  ${dayMoon ? styled.main_content_box_shadow_inset_active : ""}`}>
                                <Link href="portfolio" className={`${styled.next_handler_content_list_item_more} ${dayMoon ? styled.main_content_btn_active : ""}`}>More</Link>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
            <section className={styled.next_form_section}>
                <div className="container-main">
                    <form action="" onSubmit={sendEmail} className={`${styled.next_form} ${dayMoon ? styled.background_color : ""}`}>

                        <label htmlFor="" className={styled.next_form_label}>
                            <span className={`${styled.next_form_label_span} ${dayMoon ? styled.text_color : ""}`} >Your Name</span>
                            <div className={styled.next_form_label_group}>
                                <span className={`${styled.next_form_label_span_bg} ${dayMoon ? styled.text_color_plus : ""}`}>
                                    <BiUserCircle />
                                </span>
                                <input
                                    onChange={onChangeName}
                                    type="text"
                                    className={`${styled.next_form_label_input} ${dayMoon ? styled.shadow_inset_active_plus : ""}`}
                                    required
                                    value={userName} />
                            </div>
                        </label>

                        <label htmlFor="" className={styled.next_form_label}>
                            <span className={`${styled.next_form_label_span} ${dayMoon ? styled.text_color : ""}`}>Your Email</span>
                            <div className={styled.next_form_label_group}>
                                <span className={`${styled.next_form_label_span_bg} ${dayMoon ? styled.text_color_plus : ""}`}>
                                    <MdOutlineEmail />
                                </span>
                                <input
                                    onChange={onChangeEmail}
                                    type="email"
                                    className={`${styled.next_form_label_input} ${dayMoon ? styled.shadow_inset_active_plus : ""}`}
                                    required
                                    value={userEmail}
                                />
                            </div>
                        </label>

                        <label htmlFor="" className={styled.next_form_label}>
                            <span className={`${styled.next_form_label_span} ${dayMoon ? styled.text_color : ""}`}>Your Message</span>
                            <textarea
                                onChange={onChangeMessage}
                                type="text"
                                className={`${styled.next_form_label_textarea} ${dayMoon ? styled.shadow_inset_active_plus : ""}`}
                                required
                                value={userMessage} />
                        </label>
                        <div className={styled.next_form_section_btn_group}>
                            <button type='reset' className={`${styled.next_form_section_btn} ${dayMoon ? styled.main_content_btn_active : ""}`} >Clear Message</button>
                            <button type='submit' className={`${styled.next_form_section_btn} ${dayMoon ? styled.main_content_btn_active : ""}`} >Send Message</button>
                        </div>
                    </form>
                </div>
            </section>
        </>
    )
}
