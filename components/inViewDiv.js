import { motion } from "framer-motion"
import { useInView } from 'react-intersection-observer';

const InViewDiv = ({ translateX = 0, translateY = 0, className, threshold, children }) => {

    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: threshold
    });

    return (
        <motion.div
            ref={ref}
            className={className}
            initial={{ opacity: 0, translateX: translateX, translateY: translateY }}
            animate={inView ? { opacity: 1, translateX: 0, translateY: 0} : {}}
        >
            {children}
        </motion.div>
    )

}

export default InViewDiv;