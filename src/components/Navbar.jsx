import {useRef, useState,useEffect} from 'react'
import Button from './Button'
import { TiLocationArrow } from 'react-icons/ti'
import {useWindowScroll} from 'react-use'
import gsap from 'gsap'

const navItems = ['Nexus','Vault','Prologue','About','Contact']

const Navbar = () => {
    const [isPlaying, setisPlaying] = useState(false)
    const [isInActive,SetisInActive] = useState(false)
    const [lastScrollY,setlastScrollY] = useState(0);
    const [isNavVisible,setisNavVisible] = useState(true);
    
    const navContainerRef = useRef(null)
    const audioElementRef = useRef(null)

    const { y : currentScrollY } = useWindowScroll();
    useEffect(() => {
        if (currentScrollY === 0) {
            setisNavVisible(true);
            navContainerRef.current.classList.remove('floating-nav');
        } else if (currentScrollY > lastScrollY) {
            setisNavVisible(false); // Scrolling down -> Hide navbar
            navContainerRef.current.classList.add('floating-nav');
        } else if (currentScrollY < lastScrollY) {
            setisNavVisible(true); // Scrolling up -> Show navbar
            navContainerRef.current.classList.add('floating-nav');
        }
        setlastScrollY(currentScrollY);
    }, [currentScrollY]);
    
    

    useEffect(() => {
        if (navContainerRef.current) {
            gsap.to(navContainerRef.current, {
                y: isNavVisible ? 0 : -100,
                opacity: isNavVisible ? 1 : 0,
                duration: 0.2,
            });
        }
    }, [isNavVisible]);
    


    const toggelAudio = ()=>{
            setisPlaying((prev) => !prev)
            SetisInActive((prev) => !prev)
    }
    useEffect(()=>{
        if(isPlaying){
            audioElementRef.current.play()
        }else{
            audioElementRef.current.pause()
        }
    },[isPlaying])
  return (
    <div 
    ref={navContainerRef}
    className='fixed inset-x-0 top-10 z-50 border-none transition-all duration-500 sm:inset-x-6'>
      <header className='absolute top-1/2 w-full -translate-y-1/2'>
      <nav className='flex size-full items-center justify-between p-4'>
        <div className='flex items-center gap-7'>
            <img src="public/logo-z.png" alt="logo" className='w-10'/>
            <Button id="product button" title="Products" rIcon={TiLocationArrow} containerClass="bg-blue-50 md:flex ms:hidden items-center justify-center gap-1"/>
        </div>

        <div className='flex h-full items-center'>
            <div className='hidden md:block '>
                {navItems.map((item)=>(
                    <a key={item} 
                    href={`#${item.toLowerCase()}`}
                    className="nav-hover-btn">{item}</a>
                ))}
            </div>
            <button className='ml-10 flex items-center space-x-0.5'
            onClick={toggelAudio}>
                <audio 
                ref={audioElementRef} 
                className='hidden'
                src="/audio/loop.mp3" loop />
                    {[1,2,3,4].map((bar)=>(
                        <div key={bar} 
                        className={`indicator-line ${isInActive ? 'active' : '' }`} 
                        style={{animationDelay:`${bar*0.1}s`}}>

                        </div>
                    ))}
               
            </button>
        </div>

      </nav>
      
      </header>
    </div>
  )
}

export default Navbar
