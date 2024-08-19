import { RxCross2 } from "react-icons/rx";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaBehanceSquare } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { IoMdMail } from "react-icons/io";
import { FaTelegram } from "react-icons/fa";
import { MdContentCopy } from "react-icons/md";
import { useState } from "react";

const CollabWindow = ({ setState }) => {

    const textToCopy = 'https://movie-mania.com';
    const [copySuccess, setCopySuccess] = useState(false);

    const handleClose = () => {
        setState(false);
    };
    const handleCopyClick = () => {
        navigator.clipboard.writeText(textToCopy)
            .then(() => {
                setCopySuccess(true);
                setTimeout(() => {
                    setCopySuccess(false);
                }, 2000)
            })
            .catch((err) => {
                setCopySuccess(false);
                console.error('Could not copy text: ', err);
            });
    };
    const handleMailClick = () => {
        window.open("https://mail.google.com/mail/?view=cm&fs=1&to=kaushikjatin25jetjk@gmail.com&su=Collaboration%20Inquiry&body=Hi,%20I'd%20like%20to%20discuss%20a%20potential%20collaboration%20with%20you.", '_blank');
    };

    return (
        <div className="fixed top-0 left-0 z-20 w-full h-full text-[--charcoal] bg-[rgba(0,0,0,0.4)] backdrop-blur-sm flex justify-center items-center">
            <div className="relative bg-white rounded-md text-center p-2 w-[90%] sm:w-4/5 md:w-1/2 pb-8">
                <div className="text-end">
                    <button onClick={handleClose} className="text-2xl p-1 rounded hover:bg-[rgba(0,0,0,0.05)]  "><RxCross2 /></button>
                </div>
                <div className="px-4">
                    <div className="collab-content text-wrap">
                        <p>Glad you’re here to collaborate!</p>
                        <p>Let’s create something amazing together!</p>
                    </div>
                    <div className="collab-icons flex flex-row gap-6 justify-center items-center text-2xl sm:text-3xl my-5 mb-10">
                        <button onClick={handleMailClick} className="hover:text-black transition"><IoMdMail /></button>
                        <a href="http://linkedin.com/in/jatinkaushik-jk" target="_blank" rel="noopener noreferrer" className="hover:text-black transition"><FaLinkedin /></a>
                        <a href="http://github.com/jatinkaushik-jk" target="_blank" rel="noopener noreferrer" className="hover:text-black transition"><FaGithub /></a>
                        <a href="http://behance.net/jatinkaushik-jk" target="_blank" rel="noopener noreferrer" className="hover:text-black transition"><FaBehanceSquare /></a>
                        <a href="http://instagram.com/jatinkaushik.jk" target="_blank" rel="noopener noreferrer" className="hover:text-black transition"><BsInstagram /></a>
                        <a href="https://t.me/jatinkaushik_jk" target="_blank" rel="noopener noreferrer" className="hover:text-black transition"><FaTelegram /></a>
                    </div>
                    <div className="collab-link relative w-[90%] lg:w-[70%] mx-auto">
                        <div className="flex flex-row justify-center items-center rounded-full overflow-hidden  border-2 border-[--charcoal] w-full">
                            <div className="w-4/5 overflow-x-scroll" style={{ scrollbarWidth: 'none' }}>{textToCopy}</div>
                            <button onClick={handleCopyClick} className="hover:bg-[rgba(0,0,0,0.08)] w-1/5 text-center border-l border-[--charcoalLight]"><MdContentCopy className="text-4xl p-2 mx-auto" /></button>
                        </div>
                        {copySuccess && <div id="copy" className="group z-[4] absolute top-[-80%] right-3 bg-black text-white p-1 rounded text-xs">Copied!</div>}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CollabWindow