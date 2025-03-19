import React from 'react'
import Button from './Button'
const ImageClip = ({src,clipClass})=>{
    return(<div className={clipClass}>
        <img src={src} />
     </div>)
}
const Contact = () => {
  return (
    <div id='contact' className='my-20 min-h-96 w-screen px-10'>
      <div className='relative rounded-lg bg-black py-24 to-blue-50 sm:overflow-hidden'>
        <div className='absolute -left-20 top-0 hidden h-full w-72 overflow-hidden sm:block lg:left-20 lg:w-96'>
            <ImageClip clipClass='contact-clip-path-1' src="img/contact-1.webp"/>
            <ImageClip clipClass='contact-clip-path-2 lg:traslate-y-40 traslate-y-60' 
            src="img/contact-2.webp"/>
        </div>
        <div className='absolute -topo-40 left-20  h-full w-60  sm:top-1/2 md:left-auto md:right-10 lg:w-80 lg:top-20'>
        <ImageClip 
        clipClass='absolute scale-125' 
        src="img/swordman-partial.webp"/>
        <ImageClip 
        clipClass='sword-man-clip-path md:scale-125' 
        src="img/swordman.webp"/>
        </div>
        <div className='flex flex-col items-center text-center text-blue-50'>
            <p className='font-general text-[10px] uppercase' >Join Zentry</p>
            <p className='special-font mt-10 w-full font-zentry text-5xl leading-[0.9] md:text-[6rem]'>Let's b<b>u</b>ild <br /> the new <b>e</b>ra of <br /> g<b>a</b>ming t<b>o</b>gether</p>
            <Button title="Contact us" containerClass='mt-10 cursor-pointer'/>
        </div>
      </div>
    </div>
  )
}

export default Contact
