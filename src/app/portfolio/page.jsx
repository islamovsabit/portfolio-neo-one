"use client"
import Image from 'next/image'
import React from 'react'
import { useState, useEffect } from 'react'

import styled from '../scss/portfolio.module.scss'
import logo from '../../Components/Images/neo.png'

import { ImCheckmark } from 'react-icons/im'
import { FaRegSnowflake, FaCalendarAlt } from 'react-icons/fa'
import { BiUserCircle } from 'react-icons/bi'
import { BsPhoneFill } from 'react-icons/bs'
import { MdOutlineEmail } from 'react-icons/md'
import { useTheme } from '../context/Context'
import { format } from 'date-fns';
import Link from 'next/link'


export default function Page() {
    const { 
        sendEmail,
        onChangeName,
        onChangeEmail,
        onChangeMessage,
        dayMoon, 
        userName,
        userEmail,
        userMessage, 
    } = useTheme();
    
    
    const [all_category, setAll] = useState('all_category')
    const [website, setWebsite] = useState('website')
    const [webDesign, setWebDesign] = useState('web-design')
    const [appDesign, setAppDesign] = useState('app-design')
    const [api, setApi] = useState('api')
    const [telegramBot, setTelegramBot] = useState('telegram-bot')


    const [selectedCategory, setSelectedCategory] = useState('all_category');

    const [porfolio, setPortfolio] = useState([])
    const [loading, setLoading] = useState(true);
    const truncateString = (string = '', maxLength = 50) =>
        string.length > maxLength
            ? `${string.substring(0, maxLength)}…`
            : string
    // useEffect(() => {
    //     fetch('https://portfoliobilmer.pythonanywhere.com/api/v5/portfolio-data/')
    //         .then((response) => {
    //             if (!response.ok) throw new Error(`Network response was not ok, status: ${response.status}`);
    //             return response.json();
    //         })
    //         .then((porfolio) => { setPortfolio(porfolio); setLoading(false); })
    //         .catch((error) => { setLoading(false); });
    // }, [])
    
    
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://portfoliobilmer.pythonanywhere.com/api/v5/portfolio-data/');
                if (!response.ok) {
                    throw new Error(`Network response was not ok, status: ${response.status}`);
                }
                const porfolio = await response.json();
                setPortfolio(porfolio);
                setLoading(false);
            } catch (error) {
                setLoading(false);
            }
        };
    
        fetchData();
    }, []);
    
    
    const filteredPortfolio = selectedCategory === 'all_category' ? porfolio : porfolio.filter(item => item.portfolio_category_slug.slug === selectedCategory);

    const count = filteredPortfolio.length;



    const itemsPerPage = 6;
    const [currentPage, setCurrentPage] = useState(1);
    const totalItems = filteredPortfolio.length;
    const totalPages = Math.ceil(totalItems / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = Math.min(startIndex + itemsPerPage, totalItems);

    const portfolio_objects = filteredPortfolio.slice(startIndex, endIndex).map(item => {
        const inputDate = item.portfolio_data;
        const parsedDate = new Date(inputDate);
        const formattedDate = format(parsedDate, "dd MMMM yyyy");
        const portfolio_text = truncateString(item.portfolio_text, 76)
        return (
            <div className={`${styled.next_handler_content_list_item} ${dayMoon ? styled.background_color : ""}`} key={item.id} data-category={item.portfolio_category_slug.slug}>
                <Image alt='' src={item.portfolio_img} className={styled.next_handler_content_list_item_image} fill sizes="(max-width: 320px) 100vw, 50vw" />
                <ul className={styled.next_handler_content_list}>
                    <li className={styled.next_handler_content_list_item_title_blog}>
                        <span className={`${styled.next_handler_content_list_item_title_blog_circle} ${dayMoon ? styled.next_handler_content_list_item_title_blog_circle_active : ""}`}></span>
                        <h6 className={`${styled.next_handler_content_list_item_title} ${dayMoon ? styled.text_color : ""}`}>{item.uploader_name}</h6>
                    </li>
                    <li className={styled.next_handler_content_list_item_title_blog}>
                        <FaCalendarAlt className={`${styled.next_handler_content_list_item_title_blog_icon} ${dayMoon ? styled.text_color : ""}`} />
                        <p className={`${styled.next_handler_content_list_item_title_blog_data} ${dayMoon ? styled.text_color : ""}`}>{formattedDate}</p>
                    </li>
                </ul>
                <h4 className={`${styled.next_handler_content_list_title}  ${dayMoon ? styled.text_color : ""}`}>{item.portfolio_title}</h4>
                <p className={`${styled.next_handler_content_list_text}  ${dayMoon ? styled.text_color : ""}`}>{portfolio_text}</p>
                <div className={styled.next_handler_content_list_btn_blog}>
                    <a href={item.portfolio_link} target='_blank' className={`${styled.next_handler_content_list_btn}  ${dayMoon ? styled.main_content_btn_active : ""}`}>Learn More</a>
                    <FaRegSnowflake className={`${styled.next_handler_content_list_btn_icon}  ${dayMoon ? styled.text_color : ""}`} />
                </div>
            </div>
        )
    });
    // useEffect(() => {
    //     const storedCategory = localStorage.getItem('selectedCategory');
    //     if (storedCategory) {
    //         setSelectedCategory(storedCategory);
    //     }
    // }, []);


    return (
        <>
            <section className={styled.main}>
                <div className="container-main">
                    <div className={styled.main_content}>
                        <div className={styled.main_content_left}>
                            <h2 className={`${styled.main_content_left_text_page_title} ${dayMoon ? styled.text_color : ""}`}>My All Portfolio Work</h2>
                            <p className={`${styled.main_content_left_text_page_text_one} ${dayMoon ? styled.text_color : ""}`}>Themesberg is an experienced and passionate group of designers, developers, project managers, writers and artists. Every client we work with becomes a part of the team. Together we face the challenges and celebrate the victories.</p>
                            <div className={styled.main_content_left_btn_group}>
                                <button className={`${styled.main_content_left_btn} ${dayMoon ? styled.main_content_btn_active : ""}`}>Download</button>
                                <button className={`${styled.main_content_left_btn} ${dayMoon ? styled.main_content_btn_active : ""}`}>Contact</button>
                            </div>
                        </div>
                        {/* <Image src={logo} alt='logo' className={styled.main_content_right_logo} /> */}
                        <div className={styled.main_content_right}>
                            <div className={`${styled.main_content_right_logo_blog} ${dayMoon ? styled.background_color_plus : ""}`}>
                                <Image src={logo} alt="logo" fill className={`${styled.main_content_right_logo_blog_image} ${dayMoon ? styled.main_content_right_logo_blog_image_active : ""}`} />
                            </div>
                            <div className={`${styled.main_content_right_z_index} ${dayMoon ? styled.shadow_inset_active : ""}`}></div>
                        </div>
                    </div>
                </div>
            </section>
            <section className={styled.rectangle}>
                <div className="container-main">
                    <div className={`${styled.rectangle_content} ${dayMoon ? styled.background_color : ""}`}>
                        <div className={`${styled.rectangle_content_blog} ${dayMoon ? styled.shadow_inset_active : ""}`} >

                        </div>
                        <div className={`${styled.rectangle_content_blog} ${dayMoon ? styled.shadow_inset_active : ""}`} >

                        </div>
                        <div className={`${styled.rectangle_content_blog} ${dayMoon ? styled.shadow_inset_active : ""}`} >

                        </div>
                    </div>
                </div>
            </section>
            <section className={styled.all_portfolio}>
                <div className="container-main">
                    <div className={styled.all_portfolio_content}>
                        <div className={styled.all_portfolio_content_filter_category}>
                            <h6 className={`${styled.all_portfolio_content_filter_category_title} ${dayMoon ? styled.text_color : ""}`} >Categories</h6>
                            <div className={styled.all_portfolio_content_filter_category_list}>
                                <button
                                    className={`
                                        ${styled.all_portfolio_content_filter_category_item} 
                                        ${dayMoon ? styled.all_portfolio_content_filter_category_item_night : ""} 
                                        ${selectedCategory === all_category ? 'website_active' : ''}`}
                                    onClick={
                                        () => {
                                            setSelectedCategory(all_category);
                                            setCurrentPage(1)
                                            console.log(currentPage);
                                            // localStorage.setItem('selectedCategory', all_category);
                                        }
                                    }
                                    disabled={
                                        selectedCategory === all_category
                                    }
                                >All</button>
                                <button
                                    className={`
                                        ${styled.all_portfolio_content_filter_category_item} 
                                        ${dayMoon ? styled.all_portfolio_content_filter_category_item_night : ""} 
                                        ${selectedCategory === website ? 'website_active' : ''}`}
                                    onClick={() => {
                                        setSelectedCategory(website)
                                        setCurrentPage(1)
                                        console.log(currentPage);
                                        // localStorage.setItem('selectedCategory', website);
                                    }
                                    }
                                    disabled={
                                        selectedCategory === website
                                    }
                                >Website</button>
                                <button
                                    className={`
                                        ${styled.all_portfolio_content_filter_category_item} 
                                        ${dayMoon ? styled.all_portfolio_content_filter_category_item_night : ""} 
                                        ${selectedCategory === webDesign ? 'website_active' : ''}`}
                                    onClick={() => {
                                        setSelectedCategory(webDesign)
                                        setCurrentPage(1)
                                        console.log(currentPage);
                                        // localStorage.setItem('selectedCategory', webDesign);
                                    }
                                    }
                                    disabled={
                                        selectedCategory === webDesign
                                    }
                                >Web design</button>
                                <button
                                    className={`
                                        ${styled.all_portfolio_content_filter_category_item} 
                                        ${dayMoon ? styled.all_portfolio_content_filter_category_item_night : ""} 
                                        ${selectedCategory === appDesign ? 'website_active' : ''}`}
                                    onClick={() => {
                                        setSelectedCategory(appDesign)
                                        setCurrentPage(1)
                                        console.log(currentPage);
                                        // localStorage.setItem('selectedCategory', appDesign);
                                    }
                                    }
                                    disabled={
                                        selectedCategory === appDesign
                                    }
                                >App design</button>
                                <button
                                    className={`
                                        ${styled.all_portfolio_content_filter_category_item} 
                                        ${dayMoon ? styled.all_portfolio_content_filter_category_item_night : ""} 
                                        ${selectedCategory === api ? 'website_active' : ''}`}
                                    onClick={() => {
                                        setSelectedCategory(api)
                                        setCurrentPage(1)
                                        console.log(currentPage);
                                        // localStorage.setItem('selectedCategory', api);

                                    }
                                    }
                                    disabled={
                                        selectedCategory === api
                                    }
                                >API</button>
                                <button
                                    className={`
                                        ${styled.all_portfolio_content_filter_category_item} 
                                        ${dayMoon ? styled.all_portfolio_content_filter_category_item_night : ""} 
                                        ${selectedCategory === telegramBot ? 'website_active' : ''}`}
                                    onClick={() => {
                                        setSelectedCategory(telegramBot)
                                        setCurrentPage(1)
                                        console.log(currentPage);
                                        // localStorage.setItem('selectedCategory', telegramBot);
                                    }
                                    }
                                    disabled={
                                        selectedCategory === telegramBot
                                    }
                                >Telegram bot</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className={styled.next_handler}>
                <div className="container-main">
                    <div className={styled.next_handler_content} id="portfolio">
                        {portfolio_objects}
                        {/* <div className={`${styled.next_handler_content_list_item} ${dayMoon ? styled.background_color : ""}`}>
                            <div className={`${styled.next_handler_content_list_item_more_blog}  ${dayMoon ? styled.main_content_box_shadow_inset_active : ""}`}>
                                <Link href="portfolio" className={`${styled.next_handler_content_list_item_more} ${dayMoon ? styled.main_content_btn_active : ""}`}>More</Link>
                            </div>
                        </div> */}
                        {
                            count === 0 &&
                            <div className={`${styled.next_handler_content_not_found} ${dayMoon ? styled.background_color : ""}`}>
                                <div className={`${styled.next_handler_content_not_found_element} ${dayMoon ? styled.shadow_inset_active : ""}`}>
                                    <h4 className={`${styled.next_handler_content_not_found_title} ${dayMoon ? styled.shadow_text : ""}`}>No articles found or published in this category yet</h4>
                                </div>
                            </div>
                        }
                    </div>
                    <div className={styled.all_portfolio_content_article_pagination}>
                        <button
                            className={`${styled.all_portfolio_content_article_pagination_btn} ${dayMoon ? styled.all_portfolio_content_article_pagination_btn_night : ""}`}
                            onClick={() => setCurrentPage(currentPage - 1)}
                            disabled={currentPage === 1 || totalPages === 0}
                        >
                            Previous
                        </button>
                        <span className={`${styled.all_portfolio_content_article_pagination_span} ${dayMoon ? styled.main_content_btn_active : ""}`}>
                            {currentPage}
                            /
                            {totalPages}
                        </span>
                        <button
                            className={`${styled.all_portfolio_content_article_pagination_btn} ${dayMoon ? styled.all_portfolio_content_article_pagination_btn_night : ""}`}
                            onClick={() => setCurrentPage(currentPage + 1)}
                            disabled={currentPage === totalPages || totalPages === 0}
                        >
                            Next
                        </button>
                    </div>
                </div>
            </section>
            <section className={styled.next_form_section}>
                <div className="container-main">
                    
                    
                    <form onSubmit={sendEmail} action="" className={`${styled.next_form} ${dayMoon ? styled.background_color : ""}`}>
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
