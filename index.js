import React, {useRef, useState} from 'react';
import {motion} from 'framer-motion';
import Logo from "./Logo.PNG";

const ScrollToElement = ({elementSelector, instance = 0}) => {
    const elementRef = useRef(null);

    useEffect(() => {
        const elements = document.querySelectorAll(elementSelector);

        if (elements.legnth > instance){
            elementRef.current = elements[instance];
        }
    }, [elementSelector, instance] 
    );


const scrollToElement = () => {
    if(elementRef.current) {
        elementRef.current.scrollIntoView({behavior: 'smooth'});}
};
return <div onClick={scrolltoElement} />;
};

const Portfolio = () => {
    const [projects] = useState([
        { id: 1, name: 'Project 1', description: 'Description 1', url: '#'},
        { id: 1, name: 'Project 2' , description: 'Description 2', url: '#'},
    ]);

    return(
        <motion.div className="bg-gray-100">
            <header className="bg-gray-800 py-6">
                <nav className="container mx-auto flex justify-between items-center">
                    <motion.div className="text-white text-3xl font-bold">Portfolio</motion.div>
                    <ul className="flex space-x-4">
                        <li>
                            <ScrollToElement elementSelector=".header" />
                        </li>
                        <li>
                            <ScrollToElement elementSelector=".header" instance={1} />
                        </li>
                        <li>
                            <ScrollToElement elementSelector=".column" />
                        </li>
                    </ul>
                </nav>
            </header>
        </motion.div>
    )
}