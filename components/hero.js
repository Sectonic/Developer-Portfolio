import { motion, useAnimation, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

function Hero({ pageLoad, setPageLoad, children }) {
  const [started, setStarted] = useState(false);

  const swingControls = useAnimation();
  const wireControls = useAnimation();
  const lightControls1 = useAnimation();
  const lightControls2 = useAnimation();

  useEffect(() => {
    const handleClick = () => {
      setStarted(true);
      swingControls.start({
        rotate: 0,
        transition: {
          duration: 1.4,
          ease: "easeInOut"
        }
      })
      wireControls.start({ height: "25px", ease: "easeInOut", transition: { duration: .4 } });

      setTimeout(() => {
        setPageLoad(true);
      }, 800);

      setTimeout(() => {
        lightControls1.start({
          height: "100%",
          width: "100%",
          rotate: [0, -.5, .5, -.5, 0],
          transition: {
            height: { duration: .2, ease: "easeInOut" },
            width: { duration: .2, ease: "easeInOut", delay: .05 },
            rotate: { duration: 3, ease: "easeInOut", repeat: Infinity, delay: .65 },
          },
        });
        lightControls2.start({
          height: "100%",
          width: "90%",
          rotate: [0, -.5, .5, -.5, 0],
          transition: {
            height: { duration: .2, ease: "easeInOut" },
            width: { duration: .35, ease: "easeInOut", delay: .05 },
            rotate: { duration: 3, ease: "easeInOut", repeat: Infinity, delay: .65 },
          },
        });
      }, 850);

      setTimeout(() => {
        swingControls.start({
          rotate: [0, -.5, .5, -.5, 0],
          transition: {
            duration: 3,
            ease: "easeInOut",
            repeat: Infinity
          }
        });
      }, 1500);

      window.removeEventListener("click", handleClick);
    };

    window.addEventListener("click", handleClick);
    swingControls.start({
      rotate: [5, -5, 5],
      transition: {
        duration: 3,
        ease: "easeInOut",
        repeat: Infinity
      }
    })

    return () => {
      window.removeEventListener("click", handleClick);
    };
  }, []);
 
  return (
    <div className="h-svh bg-slate-950 mb-1 w-full overflow-x-hidden">
        <motion.div
          className="absolute m-auto left-0 right-0 flex flex-col items-center w-[300px] origin-top z-10"
          animate={swingControls}
        >
          <motion.div animate={wireControls} className="relative w-[4px] h-[calc(40svh)] bg-gray-800 z-10"></motion.div>
          <div className="flex flex-col justify-evenly items-center w-[30px] bg-gray-700 aspect-[4/5] rounded-[1px] z-20">
            <div className="bg-gray-800 w-[34px] h-[3px] z-30"></div>
            <div className="bg-gray-800 w-[34px] h-[3px] z-30"></div>
            <div className="bg-gray-800 w-[34px] h-[3px] z-30"></div>
          </div>
          <div className={`${started ? 'bulbflash' : ''} flex flex-col items-center justify-start -mt-[2px] w-[92px] aspect-square rounded-[50%] bg-gray-900 border border-gray-500/30 z-10`}>
            <div className="-mt-[1px] relative border border-gray-950 w-[22px] h-[11px] rounded-[50%] z-20"></div>
            <div className="-mt-[5px] relative border border-gray-950 w-[22px] h-[11px] rounded-[50%] z-20"></div>
            <div className="-mt-[5px] relative border border-gray-950 w-[22px] h-[11px] rounded-[50%] z-20"></div>
          </div>
        </motion.div>
        <AnimatePresence>
          { !started && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5, transition: { duration: 1 } }}
              exit={{ opacity: 0 }}
              className="cursor-default absolute -translate-x-1/2 left-1/2 top-[calc(40%+150px)] z-10 flex items-center justify-center gap-1 text-gray-100"
            >
              <svg className="-mt-1 fill-gray-200 w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="m15.5,3h-2.5V0h-2v3h-2.5c-2.481,0-4.5,2.019-4.5,4.5v8.5c0,4.411,3.589,8,8,8s8-3.589,8-8V7.5c0-2.481-2.019-4.5-4.5-4.5Zm0,2c1.379,0,2.5,1.122,2.5,2.5v2.5h-5v-5h2.5Zm-7,0h2.5v5h-5v-2.5c0-1.378,1.122-2.5,2.5-2.5Zm3.5,17c-3.309,0-6-2.691-6-6v-4h12v4c0,3.309-2.691,6-6,6Z"/>
              </svg>
              click to start
            </motion.div>
          )}
        </AnimatePresence>
        <motion.div 
          initial={{ height: 0, width: 0, rotate: 0 }}
          animate={lightControls1}
          className={`origin-top absolute w-full h-full m-auto left-0 right-0 top-0 bg-gradient-to-b from-blue-500/75 to-blue-500/10 [clip-path:polygon(50%_100px,48%_100px,0%_100%,100%_100%,52%_100px)]`}
        >
        </motion.div>
        <motion.div 
          initial={{ height: 0, width: 0, rotate: 0 }}
          animate={lightControls2}
          className={`origin-top absolute max-w-[700px] w-full h-full m-auto left-0 right-0 top-0 bg-gradient-to-b from-blue-500/75 to-blue-500/10 [clip-path:polygon(50%_100px,48%_100px,0%_100%,100%_100%,52%_100px)]`}
        >
        </motion.div>
        { pageLoad && (
          <div className="w-full absolute text-center -translate-x-1/2 -translate-y-1/2 max-[1000px]:top-[52.5%] left-1/2 top-1/2">
            { children }
          </div>
        ) }
        <div className="absolute -bottom-28 left-0 w-full overflow-hidden">
          { pageLoad && (
            <motion.svg 
              initial={{ opacity: 0, translateY: 200 }}
              animate={{ opacity: 1, translateY: 0, transition: { duration: .25 } }}
              className="m-auto min-w-[1000px] transition-all" 
              xmlns="http://www.w3.org/2000/svg" 
              xmlnsXlink="http://www.w3.org/1999/xlink" 
              id="visual" 
              version="1.1" 
              viewBox="0 369 960 172"
              >
              <path d="M0 388L120 389L240 393L360 370L480 395L600 435L720 417L840 369L960 380L960 541L840 541L720 541L600 541L480 541L360 541L240 541L120 541L0 541Z" fill="#1f2937"/>
              <path d="M0 444L120 426L240 443L360 418L480 456L600 404L720 412L840 446L960 461L960 541L840 541L720 541L600 541L480 541L360 541L240 541L120 541L0 541Z" fill="#171f2c"/>
              <path d="M0 463L120 475L240 486L360 470L480 459L600 475L720 476L840 465L960 467L960 541L840 541L720 541L600 541L480 541L360 541L240 541L120 541L0 541Z" fill="#0f1521"/>
              <path d="M0 499L120 478L240 496L360 507L480 495L600 513L720 506L840 515L960 477L960 541L840 541L720 541L600 541L480 541L360 541L240 541L120 541L0 541Z" fill="#020617"/>
            </motion.svg>
          )}
        </div>
    </div>
  )
}

export default Hero;