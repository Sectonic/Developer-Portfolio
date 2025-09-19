import { useState } from "react";
import Experience from "./experience";
import InViewDiv from "./inViewDiv";

const ExperienceContainer = () => {
    const [experienceIdx, setExperienceIdx] = useState(0);

    const experiences = [
        <Experience
            key={0}
            title="Engineering Manager"
            company="Bits of Good"
            dates="Jan. 2025 – Present"
            attachments={[]}
        >
            <div className="text-slate-300">
                Orchestrated development of medical distribution platform for <strong>56 facilities</strong> and <strong>100,000+</strong> annual items shipped.
            </div>
            <div className="text-slate-300">
                Automated distribution workflows, reducing manual efforts by <strong>80%</strong> and accelerating inventory lookups from <strong>hours to seconds</strong>, by introducing Azure AI Services with OpenAI models and RAG pipelines.
            </div>
            <div className="text-slate-300">
                Authored <strong>60+ GitHub issues</strong>, reviewed <strong>400+ commits</strong>, and resolved merge conflicts to a team of 5 developers.
            </div>
        </Experience>,
        <Experience
            key={1}
            title="Undergraduate Researcher"
            company="Georgia Institute of Technology"
            dates="Aug. 2024 – Present"
            attachments={[]}
        >
            <div className="text-slate-300">
                Collected <strong>2.4 million</strong> health metrics from a <strong>4-week study</strong> on <strong>12</strong> Dementia patients to track agitation events.
            </div>
            <div className="text-slate-300">
                Cleaned datapoints to <strong>≥90% completeness</strong> by converting Firebase real-time data to CSVs for Pandas processing.
            </div>
            <div className="text-slate-300">
                Modeled agitation prediction with a <strong>semi-supervised LSTM</strong>, reaching <strong>AUROC [0.87]</strong> on multimodal wearable streams, by applying anomaly detection to partially labeled data using PyTorch and Numpy.
            </div>
        </Experience>,
        <Experience
            key={2}
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
                Rebuilt UI/UX, increasing <strong>Lighthouse Accessibility and SEO to 96/100</strong>, with TailwindCSS and React.
            </div>
            <div className="text-slate-300">
                <strong>Reduced API load by 55%</strong> by adding middleware that caches WordPress REST calls and merges frequent fetches.
            </div>
        </Experience>
    ];

    const labels = ["Bits of Good", "Georgia Tech", "Technique Newspaper"];

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