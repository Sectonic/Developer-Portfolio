import { useState } from "react";
import Experience from "./experience";
import InViewDiv from "./inViewDiv";

const ExperienceContainer = () => {
    const [experienceIdx, setExperienceIdx] = useState(0);

    const experiences = [
        <Experience
            key={0}
            title="Software Developer for iCAN"
            company="Bits of Good"
            dates="Jan. 2025 – Present"
            attachments={[
                { src: "/images/ican.png", title: "iCAN", href: "https://main--bog-ican.netlify.app" }
            ]}
        >
            <div className="text-slate-300">
                Accelerated new feature development by <strong>25%</strong> by migrating the backend from raw MongoDB to Mongoose, <strong>refactoring 10 services and 23 API endpoints</strong> to enforce type safety and improve long-term code maintainability.
            </div>
            <div className="text-slate-300">
                Engineered full-stack medication management feature using Next.js and TailwindCSS, architecting 17 reusable React components and implementing schema-based validation with Zod, which <strong>decreased user input errors by 60%</strong>.
            </div>
            <div className="text-slate-300">
                Developed and deployed a <strong>secure, token-based password reset system</strong> using Node.js and Mongoose, integrating with an internal email API to automate the account recovery process and improve user security.
            </div>
        </Experience>,
        <Experience
            key={1}
            title="Software Developer"
            company="Technique Newspaper"
            dates="Nov. 2024 – Present"
            attachments={[
                { src: "/images/nique.png", title: "Website", href: "https://wp.nique.net" }
            ]}
        >
            <div className="text-slate-300">
                <strong>Slashed page load time by 80%</strong> (from 10s to &lt;2s) by architecting and deploying a new front-end for Georgia Tech's student newspaper using a headless Next.js system, leading to improved SEO performance and engagement.
            </div>
            <div className="text-slate-300">
                <strong>Reduced backend load and cut API call redundancy by 55%</strong> by engineering a custom service wrapper for the WordPress REST API, implementing an aggressive caching strategy that simplified data fetching.
            </div>
        </Experience>,
        <Experience
            key={3}
            title="Co-Founder"
            company="Personality Academy"
            dates="Sept. 2022 – Aug. 2024"
            attachments={[
                { src: "/images/pa.png", title: "Website", href: "https://personalityacademy.vercel.app" }
            ]}
        >
            <div className="text-slate-300">
                Co-founded and <strong>scaled an educational platform to over 3,000 users</strong> by developing a full-stack application with Next.js, Supabase, and Prisma; implemented course delivery and a secure donation system via Stripe.
            </div>
            <div className="text-slate-300">
                Architected and built 'TypeSearch,' a <strong>complex query tool for a database of 2,000+ individuals</strong>, featuring multi-filter search logic and dynamic data visualization for 512 unique types.
            </div>
            <div className="text-slate-300">
                Engineered a <strong>custom authentication system from the ground up</strong>, integrating OAuth 2.0 for Google and Discord alongside secure email/password login, managing user data and sessions with Prisma ORM.
            </div>
        </Experience>,
        <Experience
            key={2}
            title="Chief Technology Officer"
            company="Computer Science Youth of America"
            companyBreak={true}
            dates="May 2023 - August 2024"
            attachments={[
                { src: "/images/csya.png", title: "Website", href: "https://csya-edu.org" }
            ]}
        >
            <div className="text-slate-300">
                Developed a modular, scalable web platform using NextJS and TypeScript with Wix Headless CMS, enabling <strong>10+ non-technical contributors to manage dynamic content</strong> without code.
            </div>
            <div className="text-slate-300">
                Architected end-to-end registration flows via the Sheets API, <strong>serving over 950 students with automated forms</strong> across courses, team, and chapter applications.
            </div>
            <div className="text-slate-300">
                Led a team of 14 to secure over <strong>$285K in sponsored scholarships</strong>, mentoring 8 developers and directing full-stack feature development.
            </div>
        </Experience>
    ];

    const labels = ["Bits of Good", "Technique Newspaper", "Personality Academy", "Comp. Sci. Youth of America"];

    return (
        <div className="mt-14 lg:mt-28 flex flex-col lg:flex-row justify-center items-start gap-3">
            <InViewDiv
                className="flex max-lg:mx-auto max-[827px]:px-10 max-[827px]:w-full max-lg:max-w-max max-lg:overflow-x-scroll lg:flex-col justify-start gap-3 pr-3 py-2 left-gradient-border relative"
                style={{ 
                    '--end': ((experienceIdx + 1)/experiences.length * 100) + "%"
                }}
                threshold={.5}
                translateX={-15}
            >
                {labels.map((label, idx) => (
                    <InViewDiv
                        key={idx}
                        className={
                            (idx === experienceIdx
                                ? "bg-blue-500 text-white"
                                : "hover:bg-slate-800 bg-slate-900 text-slate-300"
                            ) + " transition duration-300 px-4 py-1.5 max-lg:rounded-full lg:rounded-r-full cursor-pointer whitespace-nowrap flex-shrink-0"
                        }
                        onClick={() => setExperienceIdx(idx)}
                        threshold={.5}
                        delay={idx * .10}
                        translateX={-15}
                    >
                        {label}
                    </InViewDiv>
                ))}
            </InViewDiv>
            <div className="max-lg:mx-auto max-w-[600px] min-h-[420px] py-2 px-10 lg:px-3 flex flex-col gap-8">
                {experiences[experienceIdx]}
            </div>
        </div>
    )
}

export default ExperienceContainer;