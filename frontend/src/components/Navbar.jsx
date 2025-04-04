import React, { useEffect, useState } from 'react';
import logo from '../assets/Logo2.png';
import hamburger from '../assets/Icons/bars-solid.svg'

function Navbar({ ref1, ref2, ref3, scrolled }) {
    const [drop, setDrop] = useState(false);

    return (
        <nav
            className='absolute custom-container flex justify-between items-center w-full p-2 bg-transparent z-10'
            style={{
                backdropFilter: 'blur(4px)',
                WebkitBackdropFilter: 'blur(4px)',
                boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.18)',
                borderRadius: '10px',
                border: '1px solid rgba(255, 255, 255, 0.18)',
                background: scrolled ? 'rgba(0, 0, 0, 0.95)' : 'rgba(0, 0, 0, 0.15)',
                transition: "background-color 0.5s ease",
            }}
        >
            <div className='font-extrabold text-white text-3xl '>
                <img className='nav h-24 aboutUs2:h-32' src={logo} alt=""
                    style={{
                        filter: 'invert(1)'
                    }}
                />
            </div>
            <div className='text-black'>
                <ul
                    className='text-lg text-white w-auto list-none text-1xl font-bold justify-evenly items-center hidden navlim:flex'
                    style={{ gap: '45px', margin: '0 45px' }}
                >
                    {/* <li className='p-2 rounded-lg hover:bg-black hover:bg-opacity-30 cursor-pointer'>
                        Pricing
                    </li> */}
                    <li className='p-2 rounded-lg hover:bg-black hover:bg-opacity-30 cursor-pointer' onClick={() => ref2.current ? ref2.current.scrollIntoView({ behavior: 'smooth' }) : null}>
                        About Us
                    </li>
                    <li className='p-2 rounded-lg hover:bg-black hover:bg-opacity-30 cursor-pointer' onClick={() => ref3.current ? ref3.current.scrollIntoView({ behavior: 'smooth' }) : null}>
                        Contact Us
                    </li>
                    <li className='cursor-pointer'>
                        <div className='px-3 py-2 bg-blue-400 rounded-2xl text-white hover:bg-blue-500 transition duration-200' onClick={() => ref1.current ? ref1.current.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'center' }) : null}>
                            Request Demo
                        </div>
                    </li>
                </ul>
                <div className='block navlim:hidden'>
                    <img
                        className='w-10 h-10'
                        src={hamburger}
                        alt="hamburger icon"
                        onClick={() => setDrop(c => !c)}
                        style={{ cursor: "pointer" }}
                    />
                    {drop && <div className='rounded-lg absolute p-3 bg-white shadow-lg'
                        style={{
                            transform: 'translate(calc(-100% + 2.5rem), -0%)',
                            width: '150px',
                            height: 'auto'
                        }}>
                        <ul className='list-none'>
                            <li className='p-2 cursor-pointer border-b-2 border-slate-300'><span onClick={() => {
                                ref2.current.scrollIntoView({
                                    behavior: "smooth",
                                    block: "center",
                                    inline: "start"
                                })
                            }}>About Us</span></li>
                            <li className='p-2 cursor-pointer border-b-2 border-slate-300'><span href="" onClick={() => {
                                ref1.current.scrollIntoView({
                                    behavior: "smooth",
                                    block: "center",
                                    inline: "start"
                                })
                            }}>Request Demo</span></li>
                            <li className='p-2 cursor-pointer'><span href="" onClick={() => {
                                ref3.current.scrollIntoView({
                                    behavior: "smooth",
                                    block: "center",
                                    inline: "start"
                                })
                            }}>Contact Us</span></li>
                        </ul>
                    </div>}
                </div>

            </div >
        </nav >
        // <>
        // </>
    );
}

export default Navbar;
