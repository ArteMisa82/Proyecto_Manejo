// src/app/home/components/NewsCard.tsx
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
      className="block rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
    >
      <img src={imageUrl} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4 bg-gray-800 text-white">
        <h3 className="text-lg font-bold">{title}</h3>
        <p className="text-gray-300 text-sm">{date}</p>
        <p className="text-gray-200">{summary}</p>
      </div>
    </a>
  );
}