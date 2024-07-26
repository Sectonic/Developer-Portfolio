import { useAnimate } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { motion } from "framer-motion";
import openInNewTab from '@/utls/newTab';

const skills = {
    'HTML': 'https://developer.mozilla.org/en-US/docs/Web/HTML',
    'CSS': 'https://developer.mozilla.org/en-US/docs/Web/CSS',
    'Javascript': 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
    'NodeJS': 'https://nodejs.org/',
    'React': 'https://reactjs.org/',
    'NextJS': 'https://nextjs.org/',
    'Python': 'https://www.python.org/',
    'Flask': 'https://flask.palletsprojects.com/',
    'Django': 'https://www.djangoproject.com/',
    'PostgreSQL': 'https://www.postgresql.org/',
    'Java': 'https://www.oracle.com/java/',
    'Csharp': 'https://docs.microsoft.com/en-us/dotnet/csharp/',
    'Unity': 'https://unity.com/',
    'Git': 'https://git-scm.com/',
    'PHP': 'https://www.php.net/'
};

const SkillLine = ({ currentIndex, name, url }) => {
    const [scope, animate] = useAnimate();
    const rotateAngle = currentIndex * 24;
    const imageRotationAngle = 360 - rotateAngle;
  
    return (
      <div>
        <motion.div
          ref={scope}
          className="absolute top-0 bottom-0 left-0 right-0 m-auto transform border-b border-slate-600"
          style={{
            transform: `rotate(${rotateAngle}deg) translate(-50%, -50%)`,
          }}
          initial={{ width: 0, height: 0 }}
          animate={{ width: 200 }}
          transition={{ duration: 0.1, delay: currentIndex * 0.075, ease: 'easeInOut' }}
        >
          <motion.div 
            className='flex flex-col justify-center items-center gap-1 w-[100px] h-[50px] cursor-pointer absolute right-[70%] top-full -translate-x-1/2 -translate-y-1/2 transform'
            initial={{ '--tw-rotate': (imageRotationAngle) + 'deg', opacity: 0 }}
            animate={{ '--tw-rotate': (imageRotationAngle - 360) + 'deg', opacity: 1 }}
            transition={{ 
              '--tw-rotate': { repeat: Infinity, duration: 30, ease: 'linear' }, 
              opacity: { delay: currentIndex * 0.075, ease: 'easeInOut' } 
            }}
            onHoverStart={() => animate(scope.current, { borderColor: '#e2e8f0' })}
            onHoverEnd={() => animate(scope.current, { borderColor: '#475569' })}
            onClick={() => openInNewTab(url)}
          >
            <img className='w-10 h-10' src={`/skillIcons/${name}.svg`} />
            <div className='text-slate-100 text-center'>{ name == 'Csharp' ? 'C#' : name }</div>
          </motion.div>
        </motion.div>
      </div>
    );
}

const SkillsCircle = () => {

    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    return (
        <motion.div
            ref={ref}
            className="relative mt-28 w-full h-[600px]"
            animate={ inView ? { rotate: 360 } : {}}
            transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
        >
            {inView && Object.entries(skills).map(([name, url], i) => (
                <SkillLine key={i} name={name} url={url} currentIndex={i} />
            ))}
        </motion.div>
    )
}

export default SkillsCircle;