"use client"
import { useState } from 'react';

export default function TelegramUserForm() {
    // const [formData, setFormData] = useState({
    //     chat_id: '',
    //     username: '',
    //     first_name: '',
    //     last_name: '',
    // });

    // const handleChange = (e) => {
    //     const { name, value } = e.target;
    //     setFormData({
    //         ...formData,
    //         [name]: value,
    //     });
    // };

    // const handleSubmit = async (e) => {
    //     e.preventDefault();
    //     try {
    //         const response = await fetch('http://127.0.0.1:8000/portfolio/telegram-users/', {
    //             method: 'POST',
    //             headers: {
    //                 'Content-Type': 'application/json',
    //             },
    //             body: JSON.stringify(formData),
    //         });
    //         if (response.ok) {
    //             console.log('Data sent successfully');
    //         } else {
    //             console.error('Failed to send data');
    //         }
    //     } catch (error) {
    //         console.error('Fetch error:', error);
    //     }
    // };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Chat ID:</label>
                {/* <input type="text" name="chat_id" value={formData.chat_id} onChange={handleChange} /> */}
            </div>
            <div>
                <label>Username:</label>
                {/* <input type="text" name="username" value={formData.username} onChange={handleChange} /> */}
            </div>
            <div>
                <label>First Name:</label>
                {/* <input type="text" name="first_name" value={formData.first_name} onChange={handleChange} /> */}
            </div>
            <div>
                <label>Last Name:</label>
                {/* <input type="text" name="last_name" value={formData.last_name} onChange={handleChange} /> */}
            </div>
            <div>
                <button type="submit">Submit</button>
            </div>
        </form>
    );
}
