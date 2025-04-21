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
            dates="January 2025 – Present"
            attachments={[
                { src: "/images/ican.png", title: "iCAN", href: "https://main--bog-ican.netlify.app" }
            ]}
        >
            <div className="text-slate-300">
                Refactored the backend from raw MongoDB to Mongoose, <strong>restructuring 10 micro-services and 23 API endpoints</strong>, enhancing maintainability and type safety.
            </div>
            <div className="text-slate-300">
                Built a multi-screen medication management system in NextJS and TailwindCSS, <strong>creating 17 reusable components</strong> and integrating Zod for user validation, <strong>reducing input errors by 60%</strong>.
            </div>
            <div className="text-slate-300">
                Designed a secure password reset system with NodeJS, Mongoose, and BoG’s internal email tool, streamlining account recovery for users.
            </div>
        </Experience>,
        <Experience
            key={1}
            title="Software Developer"
            company="Technique Newspaper"
            dates="November 2024 – Present"
            attachments={[
                { src: "/images/nique.png", title: "Website", href: "https://nique-test.vercel.app" }
            ]}
        >
            <div className="text-slate-300">
                Rebuilt Georgia Tech’s student newspaper website with NextJS and TailwindCSS, replacing WordPress’s builder while maintaining WordPress as a CMS. <strong>Decreased load times by 8000ms and improved SEO rankings.</strong>
            </div>
            <div className="text-slate-300">
                Engineered a custom service wrapper for the WordPress REST API, <strong>reducing API call redundancy by 55%</strong> through caching and simplifying access to posts, images, authors, and categories.
            </div>
            <div className="text-slate-300">
                Constructed a modular front-end with reusable story components and an optimized search feature.
            </div>
        </Experience>,
        <Experience
            key={3}
            title="Co-Founder"
            company="Personality Academy"
            dates="August 2020 – August 2024"
            attachments={[
                { src: "/images/pa.png", title: "Website", href: "https://personalityacademy.vercel.app" }
            ]}
        >
            <div className="text-slate-300">
                Launched a personality education platform <strong>attracting 3,000+ registered users</strong> using NextJS and Supabase with courses, educative tools, and Stripe integration for donations.
            </div>
            <div className="text-slate-300">
                Implemented a <strong>custom OAuth system</strong> with Google, Discord, and email validation, utilizing Prisma ORM.
            </div>
            <div className="text-slate-300">
                Developed the TypeSearch tool for <strong>querying 2,000+ typed individuals</strong>, featuring <strong>multi-filter search</strong>, and <strong>dynamic diagrams for 512 unique types</strong> with images managed by ImageKit.
            </div>
            <div className="text-slate-300">
                Created the TypeChart tool, allowing users to explore personality types interactively and generating unique behavioral spectrums from a 10-digit type code.
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
        <div className="mt-28 flex justify-center items-start gap-3">
            <InViewDiv
                className="flex flex-col gap-3 pr-3 py-2 left-gradient-border relative"
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
                            ) + "transition duration-300 px-4 py-1.5 rounded-r-full cursor-pointer"
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
            <div className="w-[600px] min-h-[420px] py-2 px-3 flex flex-col gap-8">
                {experiences[experienceIdx]}
            </div>
        </div>
    )
}

export default ExperienceContainer;