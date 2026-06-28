import { useState } from "react";
import Experience from "./experience";
import InViewDiv from "./inViewDiv";

const ExperienceContainer = () => {
    const [experienceIdx, setExperienceIdx] = useState(0);

    const experiences = [
        <Experience
            key={0}
            title="Founder"
            company="Vene Health"
            dates="2026 – Present"
            attachments={[]}
        >
            <div className="text-slate-300">
                Building an AI companion for families and care teams to manage care for aging loved ones.
            </div>
            <div className="text-slate-300">
                Backed by <strong>a16z Speedrun</strong> and <strong>Afore Capital</strong>.
            </div>
        </Experience>,
        <Experience
            key={1}
            title="Software Engineering Intern"
            company="Phia"
            dates="Jan. 2026 – Jun. 2026"
            attachments={[]}
        >
            <div className="text-slate-300">
                Consolidated product workflows across <strong>7,000+ brands</strong> and a <strong>300M-item</strong> catalog by building a unified CMS of editorials, products, and coupons in Next.js, accelerating content operations by <strong>7×</strong>.
            </div>
            <div className="text-slate-300">
                Powered personalized recommendations for <strong>300+ brands</strong> with an LLM pipeline that parsed <strong>1M users'</strong> browsing history into attribute profiles and a K-means model clustering users into <strong>12 cohorts per brand</strong>.
            </div>
            <div className="text-slate-300">
                Boosted extension click-through rate by <strong>40%</strong> and price-drop adoption by <strong>110%</strong> by shipping new product discovery and conversion features.
            </div>
        </Experience>,
        <Experience
            key={2}
            title="Engineering Manager"
            company="Bits of Good — Hack4Impact Chapter"
            dates="Jan. 2025 – Jan. 2026"
            attachments={[]}
        >
            <div className="text-slate-300">
                Orchestrated development of a medical distribution platform serving <strong>56 facilities</strong> and <strong>$50M+</strong> in annual supplies.
            </div>
            <div className="text-slate-300">
                Re-architected a Next.js + React codebase, refactoring <strong>170+ files</strong> into a modular controller–service–repository architecture and reusable hooks/providers, enabling rapid feature delivery for an 8-person team.
            </div>
            <div className="text-slate-300">
                Reduced manual effort by <strong>80%</strong> by automating distribution workflows via GPT-5, Azure, and RAG pipelines.
            </div>
            <div className="text-slate-300">
                Authored <strong>60+ GitHub issues</strong>, reviewed <strong>400+ commits</strong>, and resolved conflicts while mentoring developers.
            </div>
        </Experience>,
        <Experience
            key={3}
            title="Undergraduate Researcher"
            company="Georgia Institute of Technology"
            dates="Aug. 2024 – Jan. 2026"
            attachments={[]}
        >
            <div className="text-slate-300">
                Preprocessed <strong>2.4 million</strong> biometric data points from Apple HealthKit using Pandas, cleaned into time-series data.
            </div>
            <div className="text-slate-300">
                Achieved <strong>91% accuracy</strong> with a semi-supervised LSTM model in PyTorch, predicting health abnormalities.
            </div>
            <div className="text-slate-300">
                Developed Swift app that streams health data via Firebase to the model for monitoring, alerts, and automations.
            </div>
        </Experience>,
        <Experience
            key={4}
            title="Software Developer"
            company="Technique Newspaper"
            dates="Nov. 2024 – Sept. 2025"
            attachments={[
                { src: "/images/nique.png", title: "Website", href: "https://wp.nique.net" }
            ]}
        >
            <div className="text-slate-300">
                <strong>Cut page load by 8s</strong> by replacing WordPress front-end with static-rendered Next.js for Tech's student newspaper.
            </div>
            <div className="text-slate-300">
                Increased Lighthouse Accessibility and SEO to <strong>96/100</strong> by rebuilding the UI/UX with TailwindCSS and React.
            </div>
            <div className="text-slate-300">
                <strong>Reduced API load by 55%</strong> by adding middleware that caches WordPress REST calls and merges frequent fetches.
            </div>
        </Experience>
    ];

    const labels = ["Vene Health", "Phia", "Bits of Good", "Georgia Tech", "Technique Newspaper"];

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
