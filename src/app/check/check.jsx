"use client"
import React from 'react'
import './page.scss'
import BsPatchCheck from 'react-icons/bs'
import BsPatchExclamation from 'react-icons/bs'
import { useTheme } from '@/app/context/Context_alisa';

export default function Check() {
    
    const { dayMoon } = useTheme();
    
    return (
        <>
            <div id='check-error' className={`check-error ${dayMoon ? "check-error-night" : ""}`}>
                {/* <BsPatchExclamation className="check-error-icon"/> */}
                <span className='check-error-text'>An Error Occurred or Failed To Send The Message </span>
            </div>
            <div id='check-right' className={`check-right ${dayMoon ? "check-error-night" : ""}`}>
                {/* <BsPatchExclamation className="check-error-icon"/> */}
                <span className='check-right-text'>Message sent successfully </span>
            </div>
        </>
    )
}
