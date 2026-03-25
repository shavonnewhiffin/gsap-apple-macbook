import { useEffect , useRef} from 'react'

const Hero = () => {
const videoRef = useRef();

// Play opening Macbook video on 2x speed on component mount if video exists

useEffect(()=>{
    if(videoRef.current) videoRef.current.playbackRate = 2;
},[])

  return (
 <section id="hero">
<div>
    <h1>Macbook Pro</h1>
    <img src="/title.png" alt=""/>
</div>
<video ref={videoRef} src="/videos/hero.mp4" className="w-full h-auto "autoPlay muted playsInline />
<button>Buy</button>
<p>From $1599 or $133/mo for 12 months</p>
 </section>
  )
}

export default Hero

// md:max-w-[760px] lg:w-full