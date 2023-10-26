"use client"

import React, { useState, useEffect } from 'react'
import styled from '../scss/about.module.scss'
import Image from 'next/image'
import { FaRegSnowflake, FaCalendarAlt } from 'react-icons/fa'
import { BiUserCircle } from 'react-icons/bi'
import { BsPhoneFill } from 'react-icons/bs'
import { MdOutlineEmail } from 'react-icons/md'

import { useTheme } from '@/app/context/Context_alisa';
import { format } from 'date-fns';
import logo from '../../Components/Images/about_logo.jpg'
import about_image from '../../Components/Images/about_image.png'

import Signature from '../../Components/Images/signature.svg'
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
        // userName,
    } = useTheme();
    console.log(dayMoon);

    const [biography, setBiography] = useState([])
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('https://portfoliobilmer.pythonanywhere.com/api/v1/biography/')
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`Network response was not ok, status: ${response.status}`);
                }
                return response.json();
            })
            .then((biography) => {
                setBiography(biography);
                setLoading(false);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
                setLoading(false);
            });
    }, [])

    const biography_content = biography.map((item) => {
        return (
            <li className={styled.biography_content_item} key={item.id}>
                <p className={`${styled.biography_content_item_text_one} ${dayMoon ? styled.text_color : ""}`}>{item.biography_title}</p>
                <p className={`${styled.biography_content_item_text_two} ${dayMoon ? styled.text_color : ""}`}>{item.biography_text}</p>
            </li>
        )
    })

    return (
        <>
            <section className={styled.main}>
                <div className="container-main">
                    <div className={styled.main_content}>
                        <div className={`${styled.main_content_left_logo_page} ${dayMoon ? styled.box_2x_shadow : ""}`}>
                            <Image src={logo} sizes={false} alt="logo" className={styled.main_content_left_logo_page_image} fill />
                        </div>
                        <div className={styled.main_content_right_text_page}>
                            <h2 className={`${styled.main_content_right_text_page_title} ${dayMoon ? styled.text_color : ""}`}>About Me</h2>
                            <p className={`${styled.main_content_right_text_page_text_one} ${dayMoon ? styled.text_color : ""}`}>Themesberg is an experienced and passionate group of designers, developers, project managers, writers and artists. Every client we work with becomes a part of the team. Together we face the challenges and celebrate the victories.</p>
                            <br />
                            <p className={`${styled.main_content_right_text_page_text_two} ${dayMoon ? styled.text_color : ""}`}>Our small team is active in the creative community, endlessly interested in what’s next, and generally pleasant to be around.</p>
                            <Image src={about_image} alt="" className={`${styled.main_content_right_text_page_image} ${dayMoon ? styled.image_filter : ""}`} fill sizes={false} />
                        </div>
                    </div>
                </div>
            </section>
            <section className={styled.biography}>
                <div className="container-main">
                    <div className={`${styled.biography_content} ${dayMoon ? styled.background_color : ""}`}>
                        <h4 className={`${styled.biography_content_title} ${dayMoon ? styled.text_color : ""}`}>Biography</h4>
                        <ul className={styled.biography_content_list}>
                            {biography_content}
                            {/* <li className={styled.biography_content_item}>
                                <p className={`${styled.biography_content_item_text_one} ${dayMoon ? styled.text_color : ""}`}>Birthday:</p>
                                <p className={`${styled.biography_content_item_text_two} ${dayMoon ? styled.text_color : ""}`}>17,March 2004</p>
                            </li>
                            <li className={styled.biography_content_item}>
                                <p className={`${styled.biography_content_item_text_one} ${dayMoon ? styled.text_color : ""}`}>City:</p>
                                <p className={`${styled.biography_content_item_text_two} ${dayMoon ? styled.text_color : ""}`}>Tashkent</p>
                            </li>
                            <li className={styled.biography_content_item}>
                                <p className={`${styled.biography_content_item_text_one} ${dayMoon ? styled.text_color : ""}`}>Country:</p>
                                <p className={`${styled.biography_content_item_text_two} ${dayMoon ? styled.text_color : ""}`}>Uzbekistan</p>
                            </li>
                            <li className={styled.biography_content_item}>
                                <p className={`${styled.biography_content_item_text_one} ${dayMoon ? styled.text_color : ""}`}>Phone:</p>
                                <p className={`${styled.biography_content_item_text_two} ${dayMoon ? styled.text_color : ""}`}>+998 (95) 244 28 24</p>
                            </li>
                            <li className={styled.biography_content_item}>
                                <p className={`${styled.biography_content_item_text_one} ${dayMoon ? styled.text_color : ""}`}>Age:</p>
                                <p className={`${styled.biography_content_item_text_two} ${dayMoon ? styled.text_color : ""}`}>19 Years</p>
                            </li>
                            <li className={styled.biography_content_item}>
                                <p className={`${styled.biography_content_item_text_one} ${dayMoon ? styled.text_color : ""}`}>Degree:</p>
                                <p className={`${styled.biography_content_item_text_two} ${dayMoon ? styled.text_color : ""}`}>Training Center</p>
                            </li>
                            <li className={styled.biography_content_item}>
                                <p className={`${styled.biography_content_item_text_one} ${dayMoon ? styled.text_color : ""}`}>Email:</p>
                                <p className={`${styled.biography_content_item_text_two} ${dayMoon ? styled.text_color : ""}`}>bilmerlibrary@gmail.com</p>
                            </li> */}
                        </ul>
                        <div className={styled.biography_content_logo_blog}>
                            <div className={`${styled.biography_content_logo_blog_modul} ${dayMoon ? styled.main_content_box_shadow_inset_active : ""}`}>

                            </div>
                            <div className={`${styled.biography_content_logo_blog_modul} ${dayMoon ? styled.main_content_box_shadow_inset_active : ""}`}>

                            </div>
                            <div className={`${styled.biography_content_logo_blog_modul} ${dayMoon ? styled.main_content_box_shadow_inset_active : ""}`}>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className={styled.next_handler}>
                <div className="container-main">
                    <div className={styled.next_handler_content}>{portfolio_data}
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
                                    value={userName}
                                />
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
                                value={userMessage}
                            />
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
