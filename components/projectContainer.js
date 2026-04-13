import Project from "./project"

const ProjectContainer = () => (
    <div className='max-w-max flex flex-col max-xl:justify-center max-xl:items-center xl:grid xl:grid-cols-2 gap-12 mt-14 lg:mt-28 m-auto'>
        <Project
            src="/images/orca.jpg"
            title="Orca, HackIllinois Grand Prize Winner"
            live="https://devpost.com/software/orca-net"
            tags={["TypeScript", "Next.js", "Python", "FastAPI", "React Three Fiber", "Modal", "OpenClaw"]}
        >
            A 3D world-model pipeline that simulates fire scenarios on real buildings using Google Street View and World Labs, orchestrated by multi-agent reasoning on Modal.
        </Project>
        <Project
            src="/images/terrawatt.jpg"
            title="TerraWatt, EnergyHacks Overall Winner"
            live="https://devpost.com/software/the-test-test"
            tags={["TypeScript", "Next.js", "Google Earth Engine", "Gemini", "ElevenLabs", "Auth0", "RAG"]}
            delay={.2}
        >
            A digital twin that models solar feasibility across 879M+ acres of farmland, with a voice-first analytics layer that turns soil and weather data into CAPEX, kWh, and payback in minutes.
        </Project>
        <Project
            src="/images/cimic.jpeg"
            title="Cimic, AI ATL Hackathon Winner"
            github="https://github.com/Sectonic/Ai-ATL-25"
            live="https://devpost.com/software/cimic"
            tags={["React", "Rust", "Azure", "LangChain", "Python", "Pandas", "Tailwind"]}
        >
            Simulate urban policy and watch cities react in real-time. Interact with constituents and observe the impact of your decisions.
        </Project>
        <Project
            src="/images/cfg.jpeg" 
            title="JPMorgan Chase Code for Good Project"
            github="https://github.com/cfgtexas25/Team-3"
            tags={["TypeScript", "Next.js", "Mastra", "OpenAI", "Twilio", "Socket.IO", "PostgreSQL"]}
        >
            AI-powered volunteer platform with a proactive SMS agent that automates event discovery and registration.
        </Project>
        <Project
            src="/images/DataFly-CLI.png" 
            title="DataFly CLI"
            github="https://github.com/Sectonic/DataFly-CLI?tab=readme-ov-file#datafly-cli-ai-powered-relationally-aware-mock-data-generation"
            tags={["GoLang", "Cobra", "SQL", "LangChain", "BubbleTea", "Git"]}
        >
            An intelligent CLI for analyzing SQL schemas and generating realistic, relationally-aware mock data for testing.
        </Project>
        <Project
            src="/images/pa.png" 
            title="Personality Academy"
            github="https://github.com/Sectonic/Personality-Academy"
            live="https://personalityacademy.vercel.app"
            tags={["JavaScript", "NextJS", "Prisma", "PostgreSQL", "CSS", "ImageKit", "GCP"]}
            delay={.2}
        >
            Unfold the spectrum of personality through a scientific perspective.
        </Project>
        <Project
            src="/images/ican.png" 
            title="International Children's Advisory Network"
            github="https://github.com/GTBitsOfGood/ican"
            tags={["TypeScript", "NextJS", "MongoDB", "TailwindCSS", "Netlify", "Git"]}
        >
            A web-based application that gamifies medication adherence for children. Made for Atlanta nonprofit iCAN.
        </Project>
        <Project
            src="/images/checkin.png" 
            title="Check-In"
            github="https://github.com/Sectonic/Check-In"
            live="https://check--in.vercel.app"
            tags={["JavaScript", "NextJS", "TailwindCSS", "Neon", "Prisma", "Socket.IO", "Vercel", "Git"]}
            delay={.2}
        >
            Automating attendance management. Uses custom QR codes and IDs to automatically detect events present for you to attend.
        </Project>
        <Project 
            src="/images/hitchhikr.png" 
            title="HitchHikr"
            github="https://github.com/Sectonic/HitchHikr?tab=readme-ov-file#hitchhikr"
            tags={["Javascript", "Python", "React Native", "Flask", "Neon", "Socket.IO", "Stripe", "Expo"]}
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