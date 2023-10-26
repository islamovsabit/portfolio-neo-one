"use client"
import React from 'react'
import styled from '../scss/contact.module.scss'
import Iframe from "react-iframe";

import { FaMapMarkerAlt } from 'react-icons/fa'
import { FaTelegram } from 'react-icons/fa'
import { BsTelephoneFill } from 'react-icons/bs'
import { BsInstagram } from 'react-icons/bs'
import { BsGithub } from 'react-icons/bs'
import { FaGoogle } from 'react-icons/fa'

import { FaRegSnowflake, FaCalendarAlt } from 'react-icons/fa'
import { BiUserCircle } from 'react-icons/bi'
import { BsPhoneFill } from 'react-icons/bs'
import { MdOutlineEmail } from 'react-icons/md'

import { useTheme } from '../context/Context'

export default function Page() {
    const { sendEmail,
            onChangeName,
            onChangeEmail,
            onChangeMessage,
            dayMoon,
            userName,
            userEmail,
            userMessage, 
    } = useTheme();
    return (
        <>
            <section className={styled.main}>
                <div className="container-main">
                    <div className={`${styled.main_content} ${dayMoon ? styled.background_color : ""}`}>
                        <div className={`${styled.main_content_maps} ${dayMoon ? styled.shadow_inset_active : ""}`}>
                            <Iframe
                                some
                                url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3003.741759870898!2d69.18410831541884!3d41.16198597928546!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xdc8bca0decb2231f!2zNDHCsDA5JzQzLjIiTiA2OcKwMTEnMTAuNyJF!5e0!3m2!1suz!2s!4v1674467262473!5m2!1suz!2s"
                                className={`${styled.main_content_map} ${dayMoon ? styled.active_map : ""}`}
                                id=""
                            />
                        </div>
                    </div>
                    <div className={`${styled.main_get_touch} ${dayMoon ? styled.background_color : ""}`}>
                        <h4 className={`${styled.main_get_touch_title} ${dayMoon ? styled.text_color : ""}`}>Get in touch today</h4>
                        <ul className={styled.main_get_touch_list}>

                            <li className={styled.main_get_touch_item} data-name="address">
                                <div className={`${styled.main_get_touch_item_icon_block} ${dayMoon ? styled.main_content_btn_active : ""}`}>
                                    <FaMapMarkerAlt />
                                </div>
                                <h4 className={`${styled.main_get_touch_item_title_blog} ${dayMoon ? styled.text_color : ""}`}>My address</h4>
                                <p className={`${styled.main_get_touch_item_text_blog} ${dayMoon ? styled.text_color : ""}`}>33 Amir Temur Street</p>
                                <p className={`${styled.main_get_touch_item_text_blog} ${dayMoon ? styled.text_color : ""}`}>34 Amir Temur Street</p>
                            </li>

                            <li className={styled.main_get_touch_item} data-name="telephone">
                                <div className={`${styled.main_get_touch_item_icon_block} ${dayMoon ? styled.main_content_btn_active : ""}`}>
                                    <BsTelephoneFill />
                                </div>
                                <h4 className={`${styled.main_get_touch_item_title_blog} ${dayMoon ? styled.text_color : ""}`}>Call</h4>
                                <p className={`${styled.main_get_touch_item_text_blog} ${dayMoon ? styled.text_color : ""}`}>+998 95 019 28 24</p>
                                <p className={`${styled.main_get_touch_item_text_blog} ${dayMoon ? styled.text_color : ""}`}>+998 95 244 28 24</p>
                            </li>

                            <li className={styled.main_get_touch_item} data-name="telegram">
                                <div className={`${styled.main_get_touch_item_icon_block} ${dayMoon ? styled.main_content_btn_active : ""}`}>
                                    <FaTelegram />
                                </div>
                                <h4 className={`${styled.main_get_touch_item_title_blog} ${dayMoon ? styled.text_color : ""}`}>Telegram</h4>
                                <p className={`${styled.main_get_touch_item_text_blog} ${dayMoon ? styled.text_color : ""}`}>@sabit_islamov</p>
                                <p className={`${styled.main_get_touch_item_text_blog} ${dayMoon ? styled.text_color : ""}`}>@bilmer_library</p>
                            </li>

                            <li className={styled.main_get_touch_item} data-name="instagram">
                                <div className={`${styled.main_get_touch_item_icon_block} ${dayMoon ? styled.main_content_btn_active : ""}`}>
                                    <BsInstagram />
                                </div>
                                <h4 className={`${styled.main_get_touch_item_title_blog} ${dayMoon ? styled.text_color : ""}`}>Instagram</h4>
                                <p className={`${styled.main_get_touch_item_text_blog} ${dayMoon ? styled.text_color : ""}`} data-link="https://www.instagram.com/_bilmer_/">@_bilmer_</p>
                            </li>

                            <li className={styled.main_get_touch_item} data-name="github">
                                <div className={`${styled.main_get_touch_item_icon_block} ${dayMoon ? styled.main_content_btn_active : ""}`}>
                                    <BsGithub />
                                </div>
                                <h4 className={`${styled.main_get_touch_item_title_blog} ${dayMoon ? styled.text_color : ""}`}>Git-hub</h4>
                                <p className={`${styled.main_get_touch_item_text_blog} ${dayMoon ? styled.text_color : ""}`} data-link="https://github.com/BilmerIslamov">@BilmerIslamov</p>
                            </li>

                            <li className={styled.main_get_touch_item} data-name="google">
                                <div className={`${styled.main_get_touch_item_icon_block} ${dayMoon ? styled.main_content_btn_active : ""}`}>
                                    <FaGoogle />
                                </div>
                                <h4 className={`${styled.main_get_touch_item_title_blog} ${dayMoon ? styled.text_color : ""}`}>Google</h4>
                                <p className={`${styled.main_get_touch_item_text_blog} ${dayMoon ? styled.text_color : ""}`} data-link="https://github.com/BilmerIslamov">@bilmerlibrary@gmail.com</p>
                            </li>
                        </ul>
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
