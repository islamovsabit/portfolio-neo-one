"use client"
import React from 'react'
import styled from './footer.module.scss'
import Link from 'next/link'
import { FaGithub } from 'react-icons/fa'
import { FaTelegramPlane } from 'react-icons/fa'
import { GrInstagram } from 'react-icons/gr'

import { useTheme } from '@/app/context/Context_alisa'

export default function Footer() {
    
    const { dayMoon } = useTheme();
    
    return (
        <footer className={styled.main}>
            <div className={styled.main_block}>
                <div className="container-navigation">
                    <div className={styled.main_block_cat}>
                        <div className={styled.main_block_cat_one_content}>
                            <Link href="/" className={styled.main_block_cat_one_content_logo}>B</Link>
                            <ul className={styled.main_block_cat_one_content_list}>
                                <li className={styled.main_block_cat_one_content_item}>
                                    <Link href="/about" className={styled.main_block_cat_one_content_link} >About</Link>
                                </li>
                                <li className={styled.main_block_cat_one_content_item}>
                                    <Link href="/education" className={styled.main_block_cat_one_content_link} >Education</Link>
                                </li>
                                <li className={styled.main_block_cat_one_content_item}>
                                    <Link href="/portfolio" className={styled.main_block_cat_one_content_link} >Portfolio</Link>
                                </li>
                                <li className={styled.main_block_cat_one_content_item}>
                                    <Link href="/service" className={styled.main_block_cat_one_content_link} >Service</Link>
                                </li>
                                <li className={styled.main_block_cat_one_content_item}>
                                    <Link href="/contact" className={styled.main_block_cat_one_content_link} >Contact</Link>
                                </li>
                            </ul>
                            <ul className={styled.main_block_cat_one_content_icons}>
                                <li className={styled.main_block_cat_one_content_icons_item}>
                                    <Link href="https://github.com/islamovsabit" target='_blank' className={styled.main_block_cat_one_content_icons_link}>
                                        <FaGithub/>
                                    </Link>
                                </li>
                                <li className={styled.main_block_cat_one_content_icons_item}>
                                    <Link href="https://t.me/Sabit_Islamov" target='_blank' className={styled.main_block_cat_one_content_icons_link}>
                                        <FaTelegramPlane/>
                                    </Link>
                                </li>
                                <li className={styled.main_block_cat_one_content_icons_item}>
                                    <Link href="https://www.instagram.com/_bilmer_" target='_blank' className={styled.main_block_cat_one_content_icons_link}>
                                        <GrInstagram/>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className={styled.main_block_cat_two}>
                            <div className={styled.main_block_cat_two_list}></div>
                            <div className={styled.main_block_cat_two_item}>© 2023/Bilmer-Islamov</div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
