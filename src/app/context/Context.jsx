
"use client"
import Image from 'next/image';
import emailjs from 'emailjs-com';
import React, { createContext, useContext, useState, useEffect, useRef } from 'react';
import { FaCalendarAlt, FaRegSnowflake, FaAngleLeft, FaStar } from 'react-icons/fa';
import styled from '../home.module.scss'
import { format } from 'date-fns';
const ThemeContext = createContext();
export function useTheme() {
    return useContext(ThemeContext);
}



export function ThemeProvider({ children }) {
    const [dayMoon, setDayMoon] = useState(false);
    const clickBtn = async () => {
        setDayMoon(!dayMoon)
    };
    useEffect(() => {
        document.body.style.background = dayMoon ? '#24272C' : '#E6E7EE';
    }, [dayMoon]);


    // open close
    const [openClose_1, setOpenClose_1] = useState(true)
    const [openClose_2, setOpenClose_2] = useState(false)
    const [openClose_3, setOpenClose_3] = useState(false)
    const [openClose_4, setOpenClose_4] = useState(false)

    const openFolder_1 = () => { setOpenClose_1(!openClose_1); setOpenClose_2(false); setOpenClose_3(false); setOpenClose_4(false); }
    const openFolder_2 = () => { setOpenClose_2(!openClose_2); setOpenClose_1(false); setOpenClose_3(false); setOpenClose_4(false); }
    const openFolder_3 = () => { setOpenClose_3(!openClose_3); setOpenClose_1(false); setOpenClose_2(false); setOpenClose_4(false); }
    const openFolder_4 = () => { setOpenClose_4(!openClose_4); setOpenClose_1(false); setOpenClose_2(false); setOpenClose_3(false); }


    const [userName, setUserName] = useState("")
    const [userEmail, setUserEmail] = useState("")
    const [userMessage, setUserMessage] = useState("")

    const onChangeName = async (e) => { e.preventDefault(); setUserName(e.target.value); }
    const onChangeEmail = async (e) => { e.preventDefault(); setUserEmail(e.target.value); }
    const onChangeMessage = async (e) => { e.preventDefault(); setUserMessage(e.target.value); }
    const sendEmail = async (e) => {
        e.preventDefault();
        
        // const token = "5891664254:AAGAX3r9LYu9HuB4EH3EiJC8S7A1bSFI9nI";
        const token = process.env.REACT_APP_BOT_TOKEN;
        
        const channel_id = "6170489931";
        const name_trim = userName.trim(); const email_trim = userEmail.trim(); const message_trim = userMessage.trim();
        const message = `User Name: ${name_trim}; User email address: ${email_trim}; User Message: ${message_trim}`;
        const url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${channel_id}&text=${message}`;
        try {
            const response = await fetch(url, {
                method: 'GET',
            });
            if (response.ok) {
                setUserName(" "); setUserEmail(" "); setUserMessage(" ");
                document.getElementById('check-right').classList.add('active')
                setTimeout(() => {
                    document.getElementById('check-right').classList.remove('active')
                }, 3000);
            } else {
                document.getElementById('check-error').classList.add('active')
                setTimeout(() => {
                    document.getElementById('check-error').classList.remove('active')
                }, 3000);
            }
        } catch (error) {
            document.getElementById('check-error').classList.add('active')
            setTimeout(() => {
                document.getElementById('check-error').classList.remove('active')
            }, 6000);
        }
    };

    // email js

    const form = useRef();

    const sendMail = (e) => {
        e.preventDefault();
        const service = process.env.REACT_APP_SERVICE_ID
        const template = process.env.REACT_APP_TEMPLATE_ID
        const public_key = process.env.REACT_APP_PUBLIC_KEY

        emailjs.sendForm(service, template, form.current, public_key)
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };



    const [porfolio, setPortfolio] = useState([])
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        fetch('https://portfoliobilmer.pythonanywhere.com/api/v5/portfolio-data/')
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`Network response was not ok, status: ${response.status}`);
                }
                return response.json();
            })
            .then((porfolio) => {
                setPortfolio(porfolio);
                setLoading(false);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
                setLoading(false);
            });
    }, [])
    // truncateString
    const truncateString = (string = '', maxLength = 50) =>
        string.length > maxLength
            ? `${string.substring(0, maxLength)}…`
            : string
    // truncateString
    const portfolio_object = porfolio.map((item) => {
        const inputDate = item.portfolio_data;
        const parsedDate = new Date(inputDate);
        const formattedDate = format(parsedDate, "dd MMMM yyyy");
        const portfolio_text = truncateString(item.portfolio_text, 76)
        return (
            <div className={`${styled.next_handler_content_list_item} ${dayMoon ? styled.background_color : ""}`} key={item.id}>
                <Image
                    alt=''
                    src={item.portfolio_img}
                    className={styled.next_handler_content_list_item_image}
                    fill
                    sizes="(max-width: 320px) 100vw, 50vw"
                />
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
    })
    const portfolio_data = portfolio_object.slice(-5)




    return (
        <ThemeContext.Provider value={{
            dayMoon,
            clickBtn,

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

            // send message
            userName,
            userEmail,
            userMessage,
            sendEmail,
            onChangeName,
            onChangeEmail,
            onChangeMessage,

            // portfolio database
            portfolio_data,
            form,
            sendMail
        }}>
            {children}
        </ThemeContext.Provider>
    );
}
