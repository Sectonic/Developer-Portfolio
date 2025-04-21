import { Children } from "react";
import InViewDiv from "./inViewDiv";
import Image from "next/image";
import Link from "next/link";

const Experience = ({
  title,
  companyBreak,
  company,
  dates,
  attachments,
  children,
}) => (
  <InViewDiv 
    className="w-full"             
    threshold={.5}
    translateX={50}
  >
    <div className="text-2xl font-medium">
      {title} <span className="text-blue-500">{companyBreak && <br />}@ {company}</span>
    </div>
    <div className="mt-2 text-slate-100">{dates}</div>
    <div className="mt-3 flex flex-col gap-3">
      {Children.map(children, (child, idx) => (
        <div className="ml-3 flex justify-start items-start gap-3" key={idx}>
          <div className="text-blue-500 text-xl">▸</div>
          {child}
        </div>
      ))}
    </div>
    <div className="ml-3 w-full mt-6 flex justify-start items-start flex-wrap gap-6">
      {attachments.map(attachment => (
        <Link className="block group relative w-48 cursor-pointer" href={attachment.href} target="_blank" rel="noopener noreferrer">
          <div className="rounded-lg transition absolute w-full h-full bg-blue-600/45 group-hover:bg-transparent z-10"></div>
          <Image
            src={attachment.src}
            alt={attachment.title}
            className="w-full h-full rounded-lg"
            width={0}
            height={0}
            sizes="100vw"
          />
          <div className="rounded-lg absolute -bottom-2 -right-2 px-3 py-1 bg-slate-900 z-20 flex justify-center items-center gap-2 text-slate-200 group-hover:text-blue-500">
            {attachment.title}
            <svg title="sfasdf" className="cursor-pointer mb-[2px] w-[13px] h-[13px] fill-slate-300 group-hover:fill-blue-500" viewBox="0 0 24 24"><path d="M20,11v8c0,2.757-2.243,5-5,5H5c-2.757,0-5-2.243-5-5V9c0-2.757,2.243-5,5-5H13c.552,0,1,.448,1,1s-.448,1-1,1H5c-1.654,0-3,1.346-3,3v10c0,1.654,1.346,3,3,3H15c1.654,0,3-1.346,3-3V11c0-.552,.448-1,1-1s1,.448,1,1ZM21,0h-7c-.552,0-1,.448-1,1s.448,1,1,1h6.586L8.293,14.293c-.391,.391-.391,1.023,0,1.414,.195,.195,.451,.293,.707,.293s.512-.098,.707-.293L22,3.414v6.586c0,.552,.448,1,1,1s1-.448,1-1V3c0-1.654-1.346-3-3-3Z"/></svg>
          </div>
        </Link>
      ))}
    </div>
  </InViewDiv>
);

export default Experience;