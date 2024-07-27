import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3';
import { useInView } from "react-intersection-observer";

const ContactForm = () => {
    const [initiallyStarted, setInitiallyStarted] = useState(false);
    const [status, setStatus] = useState("");
    const { executeRecaptcha } = useGoogleReCaptcha();

    const formSubmit = async (e) => {
        e.preventDefault();

        if (!executeRecaptcha) {
            console.log('Execute recaptcha not yet available');
            return;
        }

        setStatus("loading");
        setInitiallyStarted(true);

        const token = await executeRecaptcha('contactFormSubmit');

        const url = "/api/handle_form";
        const options = {
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                token,
                name: e.target.name.value,
                email: e.target.email.value,
                message: e.target.message.value,
            })
        };

        const response = await fetch(url, options);
        const data = await response.json();
        setStatus(data.status);
    }

    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: .35
    });

    return (
        <form className="mt-10 lg:mt-20 max-md:px-10 md:w-[500px] h-[420px] md:h-[404px] overflow-hidden m-auto flex flex-col justify-start items-end gap-3" onSubmit={formSubmit} ref={ref}>
            <AnimatePresence>
                { status == "" | status == "loading" && inView && (
                    <>
                        <motion.input 
                            key={1}
                            name="name"
                            className="w-full p-3 bg-gray-900 rounded-lg outline-none border border-slate-800" 
                            placeholder="Name" 
                            initial={{ opacity: 0, translateY: -25  }}
                            animate={{ opacity: 1, translateY: 0, transition: { delay: initiallyStarted ? .5 : 0 } }}
                            whileFocus={{ borderColor: '#3b82f6' }}
                            exit={{ opacity: 0  }}
                            type="text"
                            required
                        />
                        <motion.input 
                            key={2}
                            name="email"
                            className="w-full p-3 bg-gray-900 rounded-lg outline-none border border-slate-800" 
                            placeholder="Email" 
                            initial={{ opacity: 0, translateY: -20 }}
                            animate={{ opacity: 1, translateY: 0, transition: { delay: .15 + (initiallyStarted ? .5 : 0) } }}
                            whileFocus={{ borderColor: '#3b82f6' }}
                            exit={{ opacity: 0  }}
                            type="email"
                            required
                        />
                        <motion.textarea 
                            key={3}
                            name="message"
                            className="w-full min-h-[200px] bg-gray-900 rounded-lg outline-none p-3 border border-slate-800 resize-y" 
                            placeholder="Message"
                            initial={{ opacity: 0, translateY: -15 }}
                            animate={{ opacity: 1, translateY: 0, transition: { delay: .30 + (initiallyStarted ? .5 : 0) } }}
                            whileFocus={{ borderColor: '#3b82f6' }}
                            exit={{ opacity: 0 }}
                            required
                        />
                        <motion.div 
                            key={4}
                            className="text-xs text-left w-full text-slate-400"
                            initial={{ opacity: 0, translateY: -10 }}
                            animate={{ opacity: 1, translateY: 0, transition: { delay: .45 + (initiallyStarted ? .5 : 0) } }}
                            exit={{ opacity: 0 }}
                        >
                            This site is protected by reCAPTCHA and the Google
                            <a className="text-slate-100" href="https://policies.google.com/privacy"> Privacy Policy</a> and
                            <a className="text-slate-100" href="https://policies.google.com/terms"> Terms of Service</a> apply.
                        </motion.div>
                        <motion.button 
                            key={5}
                            className="max-w-max px-7 py-2 rounded-full bg-white text-slate-950"
                            initial={{ opacity: 0, translateY: -10 }}
                            animate={{ opacity: 1, translateY: 0, transition: { delay: .45 + (initiallyStarted ? .5 : 0) } }}
                            whileHover={{ backgroundColor: '#3b82f6', color: 'white' }}
                            exit={{ opacity: 0 }}
                        >     
                            { status != "" ? (
                                <div role="status">
                                    <svg aria-hidden="true" class="w-8 h-8 text-gray-200 animate-spin fill-slate-950" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                                        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                                    </svg>
                                </div>
                            ) : (
                                <>Submit</>
                            )}
                        </motion.button>
                    </>
                ) }
            </AnimatePresence>
            { status == "success" && (
                <motion.div 
                    className="w-full py-28 bg-gray-900 rounded-lg flex flex-col justify-center items-center gap-3"
                    initial={{ opacity: 0, translateY: -50  }}
                    animate={{ opacity: 1, translateY: 0, transition: { delay: .5 } }}
                    exit={{ opacity: 0  }}
                >
                    <svg className="w-10 h-10 fill-emerald-500" viewBox="0 0 507.506 507.506" enableBackground="new 0 0 507.506 507.506" xmlSpace="preserve">
                        <g><path d="M163.865,436.934c-14.406,0.006-28.222-5.72-38.4-15.915L9.369,304.966c-12.492-12.496-12.492-32.752,0-45.248l0,0   c12.496-12.492,32.752-12.492,45.248,0l109.248,109.248L452.889,79.942c12.496-12.492,32.752-12.492,45.248,0l0,0   c12.492,12.496,12.492,32.752,0,45.248L202.265,421.019C192.087,431.214,178.271,436.94,163.865,436.934z"/></g>
                    </svg>
                    <div className="text-lg text-emerald-100">Successfully Sent!</div>
                </motion.div>
            ) }
            { status == "error" && (
                <motion.div 
                    className="w-full py-28 bg-gray-900 rounded-lg flex flex-col justify-center items-center gap-3"
                    initial={{ opacity: 0, translateY: -50  }}
                    animate={{ opacity: 1, translateY: 0, transition: { delay: .5 } }}
                    exit={{ opacity: 0  }}
                >
                    <svg className="w-9 h-9 fill-rose-500" viewBox="0 0 512.021 512.021" enableBackground="new 0 0 512.021 512.021" xmlSpace="preserve">
                        <g><path d="M301.258,256.01L502.645,54.645c12.501-12.501,12.501-32.769,0-45.269c-12.501-12.501-32.769-12.501-45.269,0l0,0   L256.01,210.762L54.645,9.376c-12.501-12.501-32.769-12.501-45.269,0s-12.501,32.769,0,45.269L210.762,256.01L9.376,457.376   c-12.501,12.501-12.501,32.769,0,45.269s32.769,12.501,45.269,0L256.01,301.258l201.365,201.387   c12.501,12.501,32.769,12.501,45.269,0c12.501-12.501,12.501-32.769,0-45.269L301.258,256.01z"/></g>
                    </svg>
                    <div className="text-center">
                        <div className="text-lg text-rose-100">Error occured!</div>
                        <div className="mt-1 text-rose-100" >Email me through <a href="mailto:hello@sujaldhakal.dev" target="_blank" rel="noopener noreferrer" className="cursor-pointer transition border-b-2 border-rose-500 hover:bg-rose-500 px-1">hello@sujaldhakal.dev</a> instead</div>
                    </div>
                </motion.div>
            ) }
            { status == "bot" && (
                <motion.div 
                    className="w-full py-28 bg-gray-900 rounded-lg flex flex-col justify-center items-center gap-3"
                    initial={{ opacity: 0, translateY: -50  }}
                    animate={{ opacity: 1, translateY: 0, transition: { delay: .5 } }}
                    exit={{ opacity: 0  }}
                >
                    <svg className="w-10 h-10 fill-amber-500" viewBox="0 0 24 24"><path d="M23.08,15.33L15,2.57c-.68-.98-1.81-1.57-3-1.57s-2.32,.58-3.03,1.6L.93,15.31c-1.02,1.46-1.21,3.21-.5,4.56,.7,1.35,2.17,2.12,4.01,2.12h15.12c1.85,0,3.31-.77,4.01-2.12,.7-1.35,.51-3.09-.49-4.54ZM11,7c0-.55,.45-1,1-1s1,.45,1,1v6c0,.55-.45,1-1,1s-1-.45-1-1V7Zm1,12c-.83,0-1.5-.67-1.5-1.5s.67-1.5,1.5-1.5,1.5,.67,1.5,1.5-.67,1.5-1.5,1.5Z"/></svg>
                    <div className="text-center">
                        <div className="text-lg text-amber-100">Identified as a bot</div>
                    </div>
                </motion.div>
            ) }
        </form>
    )

}

export default ContactForm;