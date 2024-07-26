import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

const Project = ({ src, title, tags, github, live, children, delay = 0 }) => {

    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: .5
    })

    return (
        <motion.div 
            ref={ref}
            className="group w-[600px] basis-1/2 mr-2"
            initial={{ opacity: 0, translateY: -50 }}
            animate={inView ? { opacity: 1, translateY: 0 } : {}}
            transition={{ delay: delay }}
        >
            <a href={live} target="_blank" rel="noopener noreferrer" className="block cursor-pointer relative w-full h-[350px] rounded-lg overflow-hidden">
                <div className="transition absolute w-full h-full bg-blue-600/45 group-hover:bg-transparent z-20"></div>
                <img src={src} className="transition grayscale group-hover:grayscale-0 w-full h-full" />
            </a>
            <div className="relative -mt-[60px] ml-5 w-full h-[145px] bg-gray-900 z-20 rounded-lg p-4">
                <div className="flex justify-between items-center">
                    <div className="transition text-lg font-semibold text-slate-300 group-hover:text-cyan-100">{title}</div>
                    <div className="flex justify-center items-center gap-1">
                        <a href={github} target="_blank" rel="noopener noreferrer" title="GitHub"><svg className="cursor-pointer p-[10px] w-10 h-10 fill-slate-300 hover:fill-cyan-200" viewBox="0 0 24 24"><path d="M10.07031,20.50291a1.00008,1.00008,0,0,0-1.18115-.9834c-1.30908.24024-2.96191.27637-3.40137-.958a5.70754,5.70754,0,0,0-1.83691-2.415,1.20073,1.20073,0,0,1-.1665-.10938,1,1,0,0,0-.93067-.64551H2.54883a.99965.99965,0,0,0-1,.99512c-.00391.81543.811,1.33789,1.1416,1.51465a4.4408,4.4408,0,0,1,.92383,1.35937c.36426,1.02344,1.42285,2.57617,4.46582,2.376.001.03516.00195.06836.00244.09863l.00439.26758a1,1,0,0,0,2,0l-.00488-.31836C10.07715,21.4951,10.07031,21.22068,10.07031,20.50291Zm10.667-15.126c.03174-.125.063-.26367.09034-.41992a6.27792,6.27792,0,0,0-.40821-3.293,1.002,1.002,0,0,0-.61572-.58007c-.356-.12012-1.67041-.35645-4.18408,1.25a13.86918,13.86918,0,0,0-6.354,0C6.76221.751,5.45459.9658,5.10205,1.07908a.99744.99744,0,0,0-.63135.584,6.3003,6.3003,0,0,0-.40332,3.35644c.02442.12793.05078.2461.07813.35449A6.26928,6.26928,0,0,0,2.89014,9.20311a8.42168,8.42168,0,0,0,.04248.92187c.334,4.60254,3.334,5.98438,5.42431,6.459-.04345.125-.083.25878-.11816.40039a1.00023,1.00023,0,0,0,1.94238.47851,1.6784,1.6784,0,0,1,.46778-.87793.99947.99947,0,0,0-.5459-1.74512c-3.4541-.39453-4.95362-1.80175-5.1792-4.89843a6.61076,6.61076,0,0,1-.03369-.73828,4.25769,4.25769,0,0,1,.91943-2.71289,3.022,3.022,0,0,1,.1958-.23145.99988.99988,0,0,0,.188-1.02441,3.3876,3.3876,0,0,1-.15527-.55567A4.09356,4.09356,0,0,1,6.1167,3.06346a7.54263,7.54263,0,0,1,2.415,1.17968,1.00877,1.00877,0,0,0,.82764.13282,11.77716,11.77716,0,0,1,6.17285.001,1.00549,1.00549,0,0,0,.83056-.13769,7.572,7.572,0,0,1,2.40528-1.19043,4.03977,4.03977,0,0,1,.0874,1.57812,3.205,3.205,0,0,1-.16895.60743.9999.9999,0,0,0,.188,1.02441c.07715.08691.1543.18066.22363.26855A4.12186,4.12186,0,0,1,20,9.20311a7.03888,7.03888,0,0,1-.0376.77734c-.22021,3.05566-1.72558,4.46387-5.1958,4.85937a1,1,0,0,0-.54541,1.7461,1.63079,1.63079,0,0,1,.46631.9082,3.06079,3.06079,0,0,1,.09229.81934v2.334C14.77,21.2949,14.77,21.78025,14.77,22.00291a1,1,0,1,0,2,0c0-.2168,0-.69238.00977-1.33984V18.31346a4.8815,4.8815,0,0,0-.15479-1.31153,4.25638,4.25638,0,0,0-.11621-.416,6.51258,6.51258,0,0,0,5.44531-6.42383A8.69677,8.69677,0,0,0,22,9.20311,6.13062,6.13062,0,0,0,20.7373,5.37693Z"/></svg></a>
                        <a href={live} target="_blank" rel="noopener noreferrer" title="External Link" ><svg title="sfasdf" className="cursor-pointer p-[11px] w-10 h-10 fill-slate-300 hover:fill-cyan-200" viewBox="0 0 24 24"><path d="M20,11v8c0,2.757-2.243,5-5,5H5c-2.757,0-5-2.243-5-5V9c0-2.757,2.243-5,5-5H13c.552,0,1,.448,1,1s-.448,1-1,1H5c-1.654,0-3,1.346-3,3v10c0,1.654,1.346,3,3,3H15c1.654,0,3-1.346,3-3V11c0-.552,.448-1,1-1s1,.448,1,1ZM21,0h-7c-.552,0-1,.448-1,1s.448,1,1,1h6.586L8.293,14.293c-.391,.391-.391,1.023,0,1.414,.195,.195,.451,.293,.707,.293s.512-.098,.707-.293L22,3.414v6.586c0,.552,.448,1,1,1s1-.448,1-1V3c0-1.654-1.346-3-3-3Z"/></svg></a>
                    </div>
                </div>
                <div className="transition text-sm text-slate-400 group-hover:text-slate-300">{children}</div>
                <div className="mt-3 flex flex-wrap justify-start items-start gap-2">
                    { tags.map(tag => (
                        <div className="transition bg-slate-700 group-hover:bg-cyan-200/90 text-slate-200 group-hover:text-slate-950 px-2 rounded-full text-sm font-medium">{tag}</div>
                    )) }
                </div>
            </div>
        </motion.div>
    )
}

export default Project;