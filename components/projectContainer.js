import Project from "./project"

const ProjectContainer = () => (
    <div className='max-w-max flex flex-col max-xl:justify-center max-xl:items-center xl:grid xl:grid-cols-2 gap-12 mt-14 lg:mt-28 m-auto'>
        <Project
            src="/images/checkin.png" 
            title="Check-In"
            github="https://github.com/Sectonic/Check-In?tab=readme-ov-file#check-in-preview"
            live="https://check--in.vercel.app"
            tags={["JavaScript", "NextJS", "TailwindCSS", "Neon", "Prisma", "Socket.IO", "Vercel", "Git"]}
            delay={.2}
        >
            Automating attendance management. Uses custom QR codes and IDs to automatically detect events present for you to attend.
        </Project>
        <Project
            src="/images/dan.png" 
            title="Dementia Assistance Network"
            github="https://github.com/Sectonic/DAN"
            tags={["TypeScript", "Python", "React Native", "Flask", "Firebase", "TensorFlow", "Expo", "Git"]}
            delay={.2}
        >
            A mobile integration with wearable technology that tracks agitation of people with Dementia and proactively plays meaningful music to calm them.
        </Project>
        <Project 
            src="/images/hitchhikr.png" 
            title="HitchHikr"
            github="https://github.com/Sectonic/HitchHikr?tab=readme-ov-file#hitchhikr"
            tags={["Javascript", "Python", "React Native", "Flask", "Neon", "Socket.IO", "Stripe", "Expo"]}
            delay={.2}
        >
            A mobile app for dynamic carpooling. Integrates drives where carpoolers can join and leave the driver route to reach their destinations.
        </Project>
        <Project
            src="/images/medieval_markets.png" 
            title="Medieval Markets"
            github="https://github.com/Sectonic/Medieval-Markets?tab=readme-ov-file#medieval-markets"
            tags={["C#", "Unity", "Aseprite", "Procedural Generation", "DFS Pathfinding", "Game AI"]}
            delay={.2}
        >
            Top-down pixel-art game where you trade, build, and optimize a medieval economy. Includes Perlin noise terrain, L-system roads, and class-based NPC behaviors.
        </Project>
    </div>
)

export default ProjectContainer;