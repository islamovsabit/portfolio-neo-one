import React, { useState, useEffect } from 'react';
import styled from './home.module.scss';
import './home.scss'
import { useTheme } from '@/app/context/Context_alisa';
import Link from 'next/link';
import { LuCode2 } from 'react-icons/lu';
import { MdDarkMode } from 'react-icons/md';
import { MdWork } from 'react-icons/md';
import { MdLibraryAddCheck } from 'react-icons/md';
import { FaCalendarAlt, FaRegSnowflake, FaAngleLeft, FaStar } from 'react-icons/fa';
import { BiUserCircle } from 'react-icons/bi'
import { MdOutlineEmail } from 'react-icons/md'
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { format } from 'date-fns';






export default function Home() {
    // console.log(params);

    const {
        dayMoon,
        // open close
        openClose_1,
        openClose_2,
        openClose_3,
        openClose_4,
        // function
        openFolder_1,
        openFolder_2,
        openFolder_3,
        openFolder_4,
        
        sendEmail,
        onChangeName,
        onChangeEmail,
        onChangeMessage,
        userName,
        userEmail,
        userMessage,
        
        portfolio_data,
        
    } = useTheme();
    
    
    const [certificateData, setCertificate] = useState([]);
    useEffect(() => {
        fetch('https://portfoliobilmer.pythonanywhere.com/api/v2/certificate-class/')
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`Network response was not ok, status: ${response.status}`);
                }
                return response.json();
            })
            .then((certificateData) => {
                setCertificate(certificateData);
                setLoading(false);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
                setLoading(false);
            });
    }, []);
    const sertificat = certificateData.map((item) => {
        return (
            <div className={`${styled.next_sertificate_content_logo_page} ${dayMoon ? styled.shadow_inset_active : ""}`} key={item.id}>
                <div className={`${styled.next_sertificate_content_logo_blog} ${dayMoon ? styled.background_color : ""}`}>
                    <Image 
                        src={item.certificate_img}
                        alt='logo'
                        className={styled.next_sertificate_content_logo_blog_image} 
                        // fill
                        width={450}
                        height={304} />
                </div>
                <div className={`${styled.next_sertificate_content_info_blog} ${dayMoon ? styled.background_color : ""}`}>
                    <Link href="https://proweb.uz/" className={`${styled.next_sertificate_content_info_blog_link} ${dayMoon ? styled.text_color : ""}`} target='_blank'>{item.certificate_name}</Link>
                    <p className={styled.next_sertificate_content_info_blog_data}>
                        <FaCalendarAlt className={`${styled.next_sertificate_content_info_blog_data_icon} ${dayMoon ? styled.text_color : ""}`} />
                        <span className={`${styled.next_sertificate_content_info_blog_data_text} ${dayMoon ? styled.text_color : ""}`}>{item.certificate_created}</span>
                    </p>
                </div>
            </div>
        )
    });
    return (
        <>
            <section className={styled.main}>
                <div className="container-main">
                    <div className={styled.main_content}>
                        <p className={`${styled.main_content_welcome_text} ${dayMoon ? styled.text_color : ""}`} >/ welcome \</p>
                        <h1 className={`${styled.main_content_name_title} ${dayMoon ? styled.text_color : ""}`}>Islamov Sabit</h1>
                        <ul className={styled.main_content_direction_list}>
                            <li className={styled.main_content_direction_item}>
                                <Link href="" className={`${styled.main_content_direction_link} ${dayMoon ? styled.text_color : ""}`}>Frontend</Link>
                            </li>
                            <li className={styled.main_content_direction_item}>
                                <Link href="" className={`${styled.main_content_direction_link} ${dayMoon ? styled.text_color : ""}`}>Backend</Link>
                            </li>
                            <li className={styled.main_content_direction_item}>
                                <Link href="" className={`${styled.main_content_direction_link} ${dayMoon ? styled.text_color : ""}`}>Design</Link>
                            </li>
                        </ul>
                        <div className={styled.main_content_btn_group}>
                            
                                <button className={`${styled.main_content_btn} ${dayMoon ? styled.main_content_btn_active : ""}`}>Download</button>
                            
                            <Link href="contact">
                                <button className={`${styled.main_content_btn} ${dayMoon ? styled.main_content_btn_active : ""}`}>Contact</button>
                            </Link>
                        </div>
                        <ul className={styled.main_content_job_list}>

                            <li className={styled.main_content_job_item}>
                                <div className={`${styled.main_content_job_surrounding} ${dayMoon ? styled.background_color : ""}`}>
                                    <LuCode2 className={`${styled.main_content_job_surrounding_icon} ${dayMoon ? styled.text_color : ""}`} />
                                </div>
                                <h4 className={`${styled.main_content_job_item_title} ${dayMoon ? styled.text_color : ""}`}>More than 10 projects</h4>
                            </li>

                            <li className={styled.main_content_job_item}>
                                <div className={`${styled.main_content_job_surrounding} ${dayMoon ? styled.background_color : ""}`}>
                                    <MdDarkMode className={`${styled.main_content_job_surrounding_icon} ${dayMoon ? styled.text_color : ""}`} />
                                </div>
                                <h4 className={`${styled.main_content_job_item_title} ${dayMoon ? styled.text_color : ""}`}>18 Hour working hours</h4>
                            </li>

                            <li className={styled.main_content_job_item}>
                                <div className={`${styled.main_content_job_surrounding} ${dayMoon ? styled.background_color : ""}`}>
                                    <MdWork className={`${styled.main_content_job_surrounding_icon} ${dayMoon ? styled.text_color : ""}`} />
                                </div>
                                <h4 className={`${styled.main_content_job_item_title} ${dayMoon ? styled.text_color : ""}`}>1.5 Years of work experience</h4>
                            </li>

                            <li className={styled.main_content_job_item}>
                                <div className={`${styled.main_content_job_surrounding} ${dayMoon ? styled.background_color : ""}`}>
                                    <MdLibraryAddCheck className={`${styled.main_content_job_surrounding_icon} ${dayMoon ? styled.text_color : ""}`} />
                                </div>
                                <h4 className={`${styled.main_content_job_item_title} ${dayMoon ? styled.text_color : ""}`}>Many portfolio projects</h4>
                            </li>

                        </ul>
                        <div className={`${styled.main_content_get_contact} ${dayMoon ? styled.background_color : ""}`}>
                            <div className={styled.main_content_get_contact_title_blog}>
                                <h6 className={`${styled.main_content_get_contact_title} ${dayMoon ? styled.text_color : ""}`}>Get in touch</h6>
                                <p className={`${styled.main_content_get_contact_text} ${dayMoon ? styled.text_color : ""}`}>If you need any help with our products or services, choose one of the following ways to contact us.</p>
                            </div>
                            <button className={`${styled.main_content_get_contact_btn} ${dayMoon ? styled.main_content_btn_active : ""}`}>Contact Us</button>
                        </div>

                    </div>
                </div>
            </section>
            <section className={styled.next_handler}>
                <div className="container-main">
                    <div className={styled.next_handler_content}>
                        {portfolio_data}


                        <div className={`${styled.next_handler_content_list_item} ${dayMoon ? styled.background_color : ""}`}>
                            <div className={`${styled.next_handler_content_list_item_more_blog}  ${dayMoon ? styled.main_content_box_shadow_inset_active : ""}`}>
                                <Link href="/portfolio" className={`${styled.next_handler_content_list_item_more} ${dayMoon ? styled.main_content_btn_active : ""}`}>More</Link>
                            </div>
                        </div>
                    </div>

                    <ul className={styled.next_handler_question_answer_list}>
                        <li className={`${styled.next_handler_question_answer_item} ${openClose_1 ? styled.next_handler_open : ""} ${dayMoon ? styled.background_color_plus : ""}`}>
                            <div className={styled.next_handler_question_answer_item_blog} onClick={openFolder_1}>
                                <h4 className={`${styled.next_handler_question_answer_item_blog_title} ${dayMoon ? styled.text_color : ""}`}>How is the cost of the created project calculated?</h4>
                                <FaAngleLeft className={`${styled.next_handler_question_answer_item_blog_icon} ${dayMoon ? styled.text_color : ""}`} />
                            </div>
                            <p className={`${styled.next_handler_question_answer_item_text_blog} ${dayMoon ? styled.text_color : ""}`}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry{"'"}s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                        </li>

                        <li className={`${styled.next_handler_question_answer_item} ${openClose_2 ? styled.next_handler_open : ""} ${dayMoon ? styled.background_color_plus : ""}`}>
                            <div className={styled.next_handler_question_answer_item_blog} onClick={openFolder_2}>
                                <h4 className={`${styled.next_handler_question_answer_item_blog_title} ${dayMoon ? styled.text_color : ""}`}>How to transfer money?</h4>
                                <FaAngleLeft className={`${styled.next_handler_question_answer_item_blog_icon} ${dayMoon ? styled.text_color : ""}`} />
                            </div>
                            <p className={`${styled.next_handler_question_answer_item_text_blog} ${dayMoon ? styled.text_color : ""}`}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry{"'"}s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                        </li>

                        <li className={`${styled.next_handler_question_answer_item} ${openClose_3 ? styled.next_handler_open : ""} ${dayMoon ? styled.background_color_plus : ""}`}>
                            <div className={styled.next_handler_question_answer_item_blog} onClick={openFolder_3}>
                                <h4 className={`${styled.next_handler_question_answer_item_blog_title} ${dayMoon ? styled.text_color : ""}`}>How does your project stand out from the rest?</h4>
                                <FaAngleLeft className={`${styled.next_handler_question_answer_item_blog_icon} ${dayMoon ? styled.text_color : ""}`} />
                            </div>
                            <p className={`${styled.next_handler_question_answer_item_text_blog} ${dayMoon ? styled.text_color : ""}`}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry{"'"}s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                        </li>

                        <li className={`${styled.next_handler_question_answer_item} ${openClose_4 ? styled.next_handler_open : ""} ${dayMoon ? styled.background_color_plus : ""}`}>
                            <div className={styled.next_handler_question_answer_item_blog} onClick={openFolder_4}>
                                <h4 className={`${styled.next_handler_question_answer_item_blog_title} ${dayMoon ? styled.text_color : ""}`}>What is the project lead time?</h4>
                                <FaAngleLeft className={`${styled.next_handler_question_answer_item_blog_icon} ${dayMoon ? styled.text_color : ""}`} />
                            </div>
                            <p className={`${styled.next_handler_question_answer_item_text_blog} ${dayMoon ? styled.text_color : ""}`}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry{"'"}s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                        </li>
                    </ul>
                    <Swiper
                        direction={'vertical'}
                        slidesPerView={1}
                        spaceBetween={30}
                        mousewheel={true}
                        pagination={{
                            dynamicBullets: true,
                        }}
                        modules={[Pagination]}
                        className={styled.mySwiper}
                    >
                        <SwiperSlide className={` ${dayMoon ? styled.main_content_box_shadow_inset_active : ""}`}>
                            <div className={`${styled.next_handler_swipper}  ${dayMoon ? styled.background_color : ""}`}>
                                {/* <Image alt="" src="https://github.com/BilmerIslamov/javascript-bot/assets/142201562/d22a50e9-1b1a-45ab-8805-f5b8c8f86e5b" width={110} height={110} className={styled.next_handler_swipper_image} /> */}
                            </div>
                            <p className={`${styled.next_handler_swipper_text} ${dayMoon ? styled.text_color : ""}`}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has beenLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been</p>
                            <ul className={styled.next_handler_swipper_list}>
                                <li className={styled.next_handler_swipper_item}>
                                    <FaStar className={`${styled.next_handler_swipper_item_link} ${dayMoon ? styled.text_color : ""}`} />
                                </li>
                                <li className={styled.next_handler_swipper_item}>
                                    <FaStar className={`${styled.next_handler_swipper_item_link} ${dayMoon ? styled.text_color : ""}`} />
                                </li>
                                <li className={styled.next_handler_swipper_item}>
                                    <FaStar className={`${styled.next_handler_swipper_item_link} ${dayMoon ? styled.text_color : ""}`} />
                                </li>
                                <li className={styled.next_handler_swipper_item}>
                                    <FaStar className={`${styled.next_handler_swipper_item_link} ${dayMoon ? styled.text_color : ""}`} />
                                </li>
                                <li className={styled.next_handler_swipper_item}>
                                    <FaStar className={`${styled.next_handler_swipper_item_link} ${dayMoon ? styled.text_color : ""}`} />
                                </li>
                            </ul>
                        </SwiperSlide>

                        <SwiperSlide className={` ${dayMoon ? styled.main_content_box_shadow_inset_active : ""}`}>
                            <div className={`${styled.next_handler_swipper}  ${dayMoon ? styled.background_color : ""}`}>
                                {/* <Image alt="" src="https://github.com/BilmerIslamov/javascript-bot/assets/142201562/d22a50e9-1b1a-45ab-8805-f5b8c8f86e5b" width={110} height={110} className={styled.next_handler_swipper_image} /> */}
                            </div>
                            <p className={`${styled.next_handler_swipper_text} ${dayMoon ? styled.text_color : ""}`}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has beenLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been</p>
                            <ul className={styled.next_handler_swipper_list}>
                                <li className={styled.next_handler_swipper_item}>
                                    <FaStar className={`${styled.next_handler_swipper_item_link} ${dayMoon ? styled.text_color : ""}`} />
                                </li>
                                <li className={styled.next_handler_swipper_item}>
                                    <FaStar className={`${styled.next_handler_swipper_item_link} ${dayMoon ? styled.text_color : ""}`} />
                                </li>
                                <li className={styled.next_handler_swipper_item}>
                                    <FaStar className={`${styled.next_handler_swipper_item_link} ${dayMoon ? styled.text_color : ""}`} />
                                </li>
                                <li className={styled.next_handler_swipper_item}>
                                    <FaStar className={`${styled.next_handler_swipper_item_link} ${dayMoon ? styled.text_color : ""}`} />
                                </li>
                                <li className={styled.next_handler_swipper_item}>
                                    <FaStar className={`${styled.next_handler_swipper_item_link} ${dayMoon ? styled.text_color : ""}`} />
                                </li>
                            </ul>
                        </SwiperSlide>

                        <SwiperSlide className={` ${dayMoon ? styled.main_content_box_shadow_inset_active : ""}`}>
                            <div className={`${styled.next_handler_swipper}  ${dayMoon ? styled.background_color : ""}`}>
                                {/* <Image alt="" src="https://github.com/BilmerIslamov/javascript-bot/assets/142201562/d22a50e9-1b1a-45ab-8805-f5b8c8f86e5b" width={110} height={110} className={styled.next_handler_swipper_image} /> */}
                            </div>
                            <p className={`${styled.next_handler_swipper_text} ${dayMoon ? styled.text_color : ""}`}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has beenLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been</p>
                            <ul className={styled.next_handler_swipper_list}>
                                <li className={styled.next_handler_swipper_item}>
                                    <FaStar className={`${styled.next_handler_swipper_item_link} ${dayMoon ? styled.text_color : ""}`} />
                                </li>
                                <li className={styled.next_handler_swipper_item}>
                                    <FaStar className={`${styled.next_handler_swipper_item_link} ${dayMoon ? styled.text_color : ""}`} />
                                </li>
                                <li className={styled.next_handler_swipper_item}>
                                    <FaStar className={`${styled.next_handler_swipper_item_link} ${dayMoon ? styled.text_color : ""}`} />
                                </li>
                                <li className={styled.next_handler_swipper_item}>
                                    <FaStar className={`${styled.next_handler_swipper_item_link} ${dayMoon ? styled.text_color : ""}`} />
                                </li>
                                <li className={styled.next_handler_swipper_item}>
                                    <FaStar className={`${styled.next_handler_swipper_item_link} ${dayMoon ? styled.text_color : ""}`} />
                                </li>
                            </ul>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </section>
            <section className={styled.next_sertificate}>
                <div className="container-main">
                    <div className={styled.next_sertificate_content}>
                        {sertificat}
                    </div>
                </div>
            </section>
            <section className={styled.next_form_section}>
                <div className="container-main">
                    
                    
                    
                    <form action="" onSubmit={sendEmail} className={` ${styled.next_form}  ${dayMoon ? styled.background_color : ""}`}>
                        <label htmlFor="" className={styled.next_form_label}>
                            <span className={`${styled.next_form_label_span} ${dayMoon ? styled.text_color : ""}`} >Your Name</span>
                            <div className={styled.next_form_label_group}>
                                <span className={`${styled.next_form_label_span_bg} ${dayMoon ? styled.text_color_plus : ""}`}>
                                    <BiUserCircle />
                                </span>
                                <input 
                                    onChange={onChangeName} 
                                    type="text" 
                                    name="userName" 
                                    className={` ${styled.next_form_label_input}  ${dayMoon ? styled.shadow_inset_active_plus : ""}`} 
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
                                    name="userEmail"
                                    className={` ${styled.next_form_label_input} ${dayMoon ? styled.shadow_inset_active_plus : ""}`}
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
                                name="userMessage"  
                                className={` ${styled.next_form_label_textarea}  ${dayMoon ? styled.shadow_inset_active_plus : ""} `} 
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
