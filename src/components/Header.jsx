import React from "react";
import getCookie from '../functions/getCookie';
import UserMenu from "../elements/UserMenu";

function Header(){
    const KEY = getCookie("userKey");

    return(
        <header>
            <div className="header__top">
                <div className="container">
                    <div className="header__phone">
                        <p>тел:<a href="tel:88007759990">8 (800) 775-99-90</a></p>
                    </div>
                    {KEY.length > 10 && <UserMenu/>}
                </div>
            </div>
            <div className="header__bottom">
                <div className="container">
                    <div className="header__bottomLogo">
                        <svg width="199" height="53" viewBox="0 0 199 53" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M96.7739 12.4875C86.7926 12.4875 83.9929 17.7671 82.7478 27.1529C81.4291 36.9845 83.1008 42.704 93.4079 42.704C103.395 42.704 106.256 36.9845 107.574 27.1529C108.837 17.7671 107.109 12.4875 96.7739 12.4875ZM96.5613 19.2512C100.275 19.2512 100.691 21.363 99.9272 27.1705C99.091 33.4062 97.683 35.9697 93.6376 35.9697C89.9234 35.9697 89.6317 32.9897 90.4059 27.1705C91.2476 20.9289 92.5097 19.2512 96.5776 19.2512H96.5613Z" fill="#1B1A19"/>
                            <path fillRule="evenodd" clipRule="evenodd" d="M133.211 22.5771C134.164 15.5905 130.708 12.9918 123.903 12.9918H113.512L109.584 42.2287H117.013L118.483 31.2883H120.289L124.087 42.2404H132.027L127.471 30.5081C130.731 29.4053 132.621 26.9884 133.211 22.5595V22.5771ZM120.116 19.0867H122.634C125.412 19.0867 126.175 19.4974 125.855 21.7265C125.529 24.3604 124.278 25.1875 121.468 25.1875H119.302L120.116 19.0867Z" fill="#1B1A19"/>
                            <path fillRule="evenodd" clipRule="evenodd" d="M157.504 12.9977H151.035V12.9918H143.606V12.9977L137.131 12.9918L136.256 19.4974L142.731 19.5091L139.673 42.2286H147.101L150.154 19.5091H156.629L157.504 12.9977Z" fill="#1B1A19"/>
                            <path fillRule="evenodd" clipRule="evenodd" d="M179.151 19.5091L180.026 12.9977L168.344 12.9918H161.758L157.825 42.2286H165.259V42.2228L176.099 42.2286L176.968 35.7173L166.128 35.7114L166.836 30.4847L177.036 30.4905L177.905 23.985L167.705 23.9732L168.311 19.4974L179.151 19.5091Z" fill="#1B1A19"/>
                            <path fillRule="evenodd" clipRule="evenodd" d="M189.038 35.7173L192.096 12.9918H184.673L180.74 42.2228H187.339V42.2286L198.117 42.2228L198.992 35.7114L189.038 35.7173Z" fill="#1B1A19"/>
                            <path fillRule="evenodd" clipRule="evenodd" d="M19.0828 12.2879C4.75319 24.4308 11.7441 41.1962 27.3473 44.6748C-1.94594 58.4896 -12.1349 15.5846 19.0828 12.2879Z" fill="#1F79DF"/>
                            <path fillRule="evenodd" clipRule="evenodd" d="M0.455322 19.0809C14.2407 3.34789 31.8133 6.97319 43.6574 22.143C44.2521 -3.87919 8.29342 -9.50485 0.455322 19.0809Z" fill="#1F79DF"/>
                            <path fillRule="evenodd" clipRule="evenodd" d="M70.3424 13.2266C58.605 17.4092 55.7547 38.1401 67.178 42.0821C70.4548 43.2143 74.674 42.6688 77.9957 41.9824L78.9266 35.0721C75.7678 35.8405 70.9707 37.2074 68.9507 33.7757C66.6057 29.7984 68.154 21.6035 73.2878 19.697C75.4816 18.8698 78.7528 19.4506 80.9521 20.002L81.8387 13.4319C78.2199 12.5579 73.9557 11.9361 70.3424 13.2266Z" fill="#1B1A19"/>
                            <path fillRule="evenodd" clipRule="evenodd" d="M27.2656 23.9323L27.4845 39.941L42.2124 52.4359H60.0936L27.2656 23.9323Z" fill="#FF512A"/>
                        </svg>                            
                    </div>
                    <div className="header__bottomNav">

                    </div>
                </div>
            </div>
            </header>
    )
}

export default Header;