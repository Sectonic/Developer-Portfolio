import { motion } from "framer-motion"
import { useInView } from 'react-intersection-observer';

const InViewDiv = ({ translateX = 0, translateY = 0, className, threshold, children, onClick, style, delay = 0 }) => {

    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: threshold
    });

    return (
        <motion.div
            style={style}
            ref={ref}
            className={className}
            initial={{ opacity: 0, translateX: translateX, translateY: translateY }}
            animate={inView ? { opacity: 1, translateX: 0, translateY: 0} : {}}
            transition={{ delay: delay, ease: "easeInOut" }}
            onClick={onClick}
        >
            {children}
        </motion.div>
    )

}

export default InViewDiv;