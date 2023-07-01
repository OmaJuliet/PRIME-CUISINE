import SideBar from '../Components/SideBar';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const About = () => {
    return (
        <>
            <SideBar />
            <section className="w-full container mx-auto flex flex-col justify-center px-20 ml-32">
                <div className="mx-aut flex flex-col items-center gap-2 overflow-hidden ">
                    <h1 className="font-bold text-2xl mb-4 text-brandColor">
                        About Prime Cuisine
                    </h1>
                    <p className="text-white">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                    <p className="text-white">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                    <p className="text-white">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </div>
                <div className="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center">
                    <a className="text-brandColor">sample@email.com</a>
                    <p className="leading-normal my-5 text-white">49 Lopez St.
                        <br />Ikeja Lagos, Nigeria
                    </p>
                    <span className="inline-flex">
                        <a className="text-brandColor cursor-pointer" href="www.facebook.com" target="_blank">
                            <FaFacebook className="w-6 h-6" />
                        </a>
                        <a className="ml-4 text-brandColor cursor-pointer" href="www.twitter.com" target="_blank">
                            <FaTwitter className="w-6 h-6" />
                        </a>
                        <a className="ml-4 text-brandColor cursor-pointer" href="www.instagram.com" target="_blank">
                            <FaInstagram className="w-6 h-6" />
                        </a>
                        <a className="ml-4 text-brandColor cursor-pointer" href="www.linkedin.com" target="_blank">
                            <FaLinkedin className="w-6 h-6" />
                        </a>
                    </span>
                </div>
            </section>
        </>
    )
}

export default About