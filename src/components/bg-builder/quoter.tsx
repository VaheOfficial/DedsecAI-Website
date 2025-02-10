'use client';

import { useEffect, useState } from "react";
import axios from "axios";

const Quoter = () => {
    const [text, setText] = useState("DedsecAI");
    const [author, setAuthor] = useState("DedsecAI");

    useEffect(() => {
        const fetchText = async () => {
            try {
                const response = await fetch("/api/quote");
                const data = await response.json();
                console.log(data);
                setText(data.content);
                setAuthor(data.author); 
            } catch (error) {
                console.error('Error fetching text:', error);
            }
        };

        fetchText();
    }, []);
    return (
        <div className="absolute flex-col justify-center items-center h-screen w-full isolate flex" style={{ top: '50%', transform: 'translateY(-50%)' }}>
            <h1 className="text-gray-300 text-[250px] font-HACKED font-outline-6 outline-none text-center">
            DedsecAI
            </h1>
            <h1 className="text-gray-300 text-[50px] font-tempesta_five font-outline-4 outline-none text-center max-w-[1200px]">
            {text}
            </h1>
        </div>
    );
};

export default Quoter;
