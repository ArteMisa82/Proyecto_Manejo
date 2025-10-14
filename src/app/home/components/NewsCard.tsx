import React from "react";

interface NewsCardProps {
  title: string;
  imageUrl: string;
  date: string;
  summary: string;
  link: string;
}

export default function NewsCard({ title, imageUrl, date, summary, link }: NewsCardProps) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="block rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 bg-gray-900"
    >
      <div className="flex justify-center items-center bg-gray-800">
        <img
          src={imageUrl}
          alt={title}
          className="
            object-contain 
            w-full 
            max-w-full 
            max-h-[250px] 
            md:max-h-[300px] 
            transition-transform 
            duration-300 
            hover:scale-105
          "
        />
      </div>

      <div className="p-4 bg-gray-800 text-white">
        <h3 className="text-lg font-bold mb-1">{title}</h3>
        <p className="text-gray-400 text-sm mb-2">{date}</p>
        <p className="text-gray-200 text-sm leading-relaxed">{summary}</p>
      </div>
    </a>
  );
}
