import { useState } from "react";
import Experience from "./experience";
import InViewDiv from "./inViewDiv";

const ExperienceContainer = () => {
    const [experienceIdx, setExperienceIdx] = useState(0);

    const experiences = [
        <Experience
            key={0}
            title="Software Engineering Manager"
            company="Bits of Good"
            dates="Jan. 2025 – Present"
            attachments={[]}
        >
            <div className="text-slate-300">
                Orchestrated development of medical distribution platform for <strong>56 facilities</strong> and <strong>100,000+</strong> annual items shipped.
            </div>
            <div className="text-slate-300">
                Authored <strong>60+ GitHub issues</strong>, reviewed <strong>400+ commits</strong>, and resolved merge conflicts to a team of 5 developers.
            </div>
            <div className="text-slate-300">
                Collaborated with designers, PMs, and 6 stakeholders to define a <strong>12-sprint agile plan</strong> for production launch.
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
                <strong>Cut page load by 8s</strong> by replacing WordPress front-end with static-rendered Next.js for Tech's student newspaper.
            </div>
            <div className="text-slate-300">
                Rebuilt UI/UX with TailwindCSS and React, increasing <strong>Lighthouse Accessibility and SEO to 96/100</strong>.
            </div>
            <div className="text-slate-300">
                <strong>Reduced API load by 55%</strong> by adding middleware that caches WordPress REST calls and merges frequent fetches.
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
                Built and launched full-stack educational platform used by <strong>3,000+ users</strong>, with custom course delivery.
            </div>
            <div className="text-slate-300">
                Designed a <strong>multi-filter search for 2,000+ profiles</strong> with dynamic charts and tagged filtering with <strong>512 categories</strong>.
            </div>
            <div className="text-slate-300">
                Developed full <strong>admin dashboard</strong> managing the 2,000 profiles and an additional <strong>13,000+ content items</strong>.
            </div>
            <div className="text-slate-300">
                Integrated ImageKit CDN to <strong>cut image load times by 60%</strong>, supporting 99.9% upkeep during traffic spikes.
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