import { useRef, useState } from 'react';
import Hero from '@/components/hero';
import { useInView } from 'react-intersection-observer';
import SkillsCircle from '@/components/skillsCircle';
import { motion } from 'framer-motion';
import Nav from '@/components/nav';
import InViewDiv from '@/components/inViewDiv';
import Project from '@/components/project';
import ContactForm from '@/components/contact';
import { Mukta } from "next/font/google";
import Link from 'next/link';

const mukta = Mukta({ subsets: ["latin"], weight: ['200', '300', '400', '500', '600', '700', '800'] });

export default function Home() {
  const [pageLoad, setPageLoad] = useState(false);
  const contactRef = useRef(null);

  const goToContact = () => {
    contactRef.current.scrollIntoView({ behavior: 'smooth' });
  }

  const bgView = useInView({ 
    triggerOnce: true,
    threshold: .4,
  });

  return (
    <div className={mukta.className} >
      {pageLoad && <Nav/>}
      <Hero pageLoad={pageLoad} setPageLoad={setPageLoad}>
        <motion.div 
          initial={{ opacity: 0, translateY: -20 }}
          animate={{ opacity: 1, translateY: 0, transition: { duration: .25, delay: .35 } }}
          className="text-8xl sm:text-9xl font-bold cursor-default max-md:text-left leading-[1.125] mx-10"
        >
          Sujal <br className='md:hidden' /> Dhakal
        </motion.div>
        <motion.div
          initial={{ opacity: 0, translateY: -10 }}
          animate={{ opacity: 1, translateY: 0, transition: { duration: .25, delay: .45 } }}
          className="md:m-auto text-center max-w-[400px] md:w-[275px] cursor-default max-md:text-left max-md:mx-10"
        >
          I'm a software engineer experienced in web, mobile, and game development studying at Georgia Tech
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: .25, delay: .55 } }}
          className="cursor-pointer mt-6 border-2 border-white bg-transparent transition hover:bg-white hover:text-slate-950 text-white font-medium py-3 px-9 rounded-full max-w-max max-md:mx-10 md:mx-auto"
          onClick={goToContact}
        >
          Contact Me
        </motion.div>
        <motion.svg 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { delay: .75, duration: 1 } }}
          className="max-md:hidden mt-16 m-auto w-6 h-6 fill-white animate-bounce" 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 24 24"
        >
          <path d="M12,17.17a5,5,0,0,1-3.54-1.46L.29,7.54A1,1,0,0,1,1.71,6.12l8.17,8.17a3,3,0,0,0,4.24,0l8.17-8.17a1,1,0,1,1,1.42,1.42l-8.17,8.17A5,5,0,0,1,12,17.17Z"/>
        </motion.svg>
      </Hero>
      {pageLoad && (
        <div className='relative'>
          <div className='top-60 absolute w-full overflow-hidden'>
            <motion.img 
              ref={bgView.ref}
              src='/polygon-scatter.svg' 
              className='min-w-[1300px] w-full' 
              initial={{ opacity: 0, top: '11rem' }}
              animate={bgView.inView ? { opacity: 1, top: '13rem' } : {}}
            />
          </div>
          <InViewDiv
            className="pt-8 md:pt-16 text-5xl text-slate-200 max-md:mx-10 text-left md:text-center cursor-default font-bold"
            threshold={.9}
            translateX={-50}
          >
            Some Of My Skills
          </InViewDiv>
          <div className='overflow-hidden mx-auto mt-20 lg:mt-40 h-[350px] w-[350px] min-[450px]:w-[440px] min-[450px]:h-[440px] md:h-[530px] md:w-[530px]'>
            <SkillsCircle />
          </div>
          <InViewDiv
            className="mt-20 lg:mt-40 text-5xl text-slate-200 max-md:mx-10 text-left md:text-center cursor-default font-bold"
            threshold={.9}
            translateX={-50}
          >
            Selected Projects
          </InViewDiv>
          <InViewDiv
            className="max-md:mx-10 md:m-auto pt-2 text-slate-300 text-left md:text-center cursor-default max-w-96"
            threshold={.9}
            translateX={50}
          >
            These are my favorite projects I've created that show what I'm capable of.
          </InViewDiv>
          <div className='max-w-max flex flex-col max-xl:justify-center max-xl:items-center xl:grid xl:grid-cols-2 gap-12 mt-14 lg:mt-28 m-auto'>
            <Project 
              src="/images/pa.png" 
              title="Personality Academy"
              github="https://github.com/Sectonic/pa"
              live="https://personality.academy"
              tags={["NextJS", "SupaBase", "Stripe", "OAuth", "ImageKit", "Vercel"]}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, modi facilis libero magnam sint voluptatem fuga alias.
            </Project>
            <Project 
              src="/images/checkin.png" 
              title="Check-In"
              github="https://github.com/Sectonic/Check-In"
              live="https://check-iin.vercel.app/"
              tags={["NextJS", "SupaBase", "Socket.IO", "Tailwind", "Vercel"]}
              delay={.2}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, modi facilis libero magnam sint voluptatem fuga alias.
            </Project>
            <Project 
              src="/images/medieval_markets.png" 
              title="Medieval Markets"
              github="https://github.com/Sectonic/pa"
              live="https://personality.academy"
              tags={["C#", "Unity", "Photoshop", "Steam"]}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, modi facilis libero magnam sint voluptatem fuga alias.
            </Project>
            <Project 
              src="/images/csya.png" 
              title="HitchHikr"
              github="https://github.com/CSYA-Web/csya-website"
              live="https://csya-edu.org"
              tags={["React Native", "Flask", "Neon", "Socket.IO", "Stripe", "Expo"]}
              delay={.2}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, modi facilis libero magnam sint voluptatem fuga alias.
            </Project>
          </div>
          <InViewDiv
            className="pt-20 lg:pt-40 text-5xl text-slate-200 max-md:mx-10 text-left md:text-center cursor-default font-bold"
            threshold={.9}
            translateX={-50}
          >
            <div ref={contactRef}>
              Get In Touch
            </div>
          </InViewDiv>
          <InViewDiv
            className="max-md:mx-10 md:m-auto pt-2 text-slate-300 text-left md:text-center cursor-default max-w-96"
            threshold={.9}
            translateX={50}
          >
            Don't hesitate to reach out if you have a question about my projects or want to work with me.
          </InViewDiv>
          <InViewDiv
            className="max-md:mx-10 mt-5 flex md:justify-center items-center gap-5"
            threshold={.9}
            translateY={-50}
          >
            <Link href='mailto:hello@sujaldhakal.dev' target='_blank' rel='noopener noreferrer'>
              <svg className='transition cursor-pointer w-8 h-8 fill-slate-500 hover:fill-blue-200' viewBox="0 0 24 24" ><path d="M12,0A12.013,12.013,0,0,0,0,12c-.126,9.573,11.159,15.429,18.9,9.817a1,1,0,1,0-1.152-1.634C11.3,24.856,1.9,19.978,2,12,2.549-1.266,21.453-1.263,22,12v2a2,2,0,0,1-4,0V12C17.748,4.071,6.251,4.072,6,12a6.017,6.017,0,0,0,10.52,3.933A4,4,0,0,0,24,14V12A12.013,12.013,0,0,0,12,0Zm0,16a4,4,0,0,1,0-8A4,4,0,0,1,12,16Z"/></svg>
            </Link>
            <Link href='https://www.linkedin.com/in/sujal-dhakal/' target='_blank' rel='noopener noreferrer'>
              <svg className='transition cursor-pointer w-8 h-8 fill-slate-500 hover:fill-blue-200' viewBox="0 0 128 128">
                <path d="M116 3H12a8.91 8.91 0 00-9 8.8v104.42a8.91 8.91 0 009 8.78h104a8.93 8.93 0 009-8.81V11.77A8.93 8.93 0 00116 3zM39.17 107H21.06V48.73h18.11zm-9-66.21a10.5 10.5 0 1110.49-10.5 10.5 10.5 0 01-10.54 10.48zM107 107H88.89V78.65c0-6.75-.12-15.44-9.41-15.44s-10.87 7.36-10.87 15V107H50.53V48.73h17.36v8h.24c2.42-4.58 8.32-9.41 17.13-9.41C103.6 47.28 107 59.35 107 75z"></path>
              </svg>
            </Link>
            <Link href='https://github.com/Sectonic' target='_blank' rel='noopener noreferrer'>
              <svg className='transition cursor-pointer w-[34px] h-[34px] fill-slate-500 hover:fill-blue-200' viewBox="0 0 128 128">
                <g fill="currentFill"><path fill-rule="evenodd" clip-rule="evenodd" d="M64 5.103c-33.347 0-60.388 27.035-60.388 60.388 0 26.682 17.303 49.317 41.297 57.303 3.017.56 4.125-1.31 4.125-2.905 0-1.44-.056-6.197-.082-11.243-16.8 3.653-20.345-7.125-20.345-7.125-2.747-6.98-6.705-8.836-6.705-8.836-5.48-3.748.413-3.67.413-3.67 6.063.425 9.257 6.223 9.257 6.223 5.386 9.23 14.127 6.562 17.573 5.02.542-3.903 2.107-6.568 3.834-8.076-13.413-1.525-27.514-6.704-27.514-29.843 0-6.593 2.36-11.98 6.223-16.21-.628-1.52-2.695-7.662.584-15.98 0 0 5.07-1.623 16.61 6.19C53.7 35 58.867 34.327 64 34.304c5.13.023 10.3.694 15.127 2.033 11.526-7.813 16.59-6.19 16.59-6.19 3.287 8.317 1.22 14.46.593 15.98 3.872 4.23 6.215 9.617 6.215 16.21 0 23.194-14.127 28.3-27.574 29.796 2.167 1.874 4.097 5.55 4.097 11.183 0 8.08-.07 14.583-.07 16.572 0 1.607 1.088 3.49 4.148 2.897 23.98-7.994 41.263-30.622 41.263-57.294C124.388 32.14 97.35 5.104 64 5.104z"></path><path d="M26.484 91.806c-.133.3-.605.39-1.035.185-.44-.196-.685-.605-.543-.906.13-.31.603-.395 1.04-.188.44.197.69.61.537.91zm2.446 2.729c-.287.267-.85.143-1.232-.28-.396-.42-.47-.983-.177-1.254.298-.266.844-.14 1.24.28.394.426.472.984.17 1.255zM31.312 98.012c-.37.258-.976.017-1.35-.52-.37-.538-.37-1.183.01-1.44.373-.258.97-.025 1.35.507.368.545.368 1.19-.01 1.452zm3.261 3.361c-.33.365-1.036.267-1.552-.23-.527-.487-.674-1.18-.343-1.544.336-.366 1.045-.264 1.564.23.527.486.686 1.18.333 1.543zm4.5 1.951c-.147.473-.825.688-1.51.486-.683-.207-1.13-.76-.99-1.238.14-.477.823-.7 1.512-.485.683.206 1.13.756.988 1.237zm4.943.361c.017.498-.563.91-1.28.92-.723.017-1.308-.387-1.315-.877 0-.503.568-.91 1.29-.924.717-.013 1.306.387 1.306.88zm4.598-.782c.086.485-.413.984-1.126 1.117-.7.13-1.35-.172-1.44-.653-.086-.498.422-.997 1.122-1.126.714-.123 1.354.17 1.444.663zm0 0"></path></g>
              </svg>
            </Link>
          </InViewDiv>
          <ContactForm />
          <div className='pt-[150px]'>

          </div>
        </div>
      )}
    </div>
  );
}
