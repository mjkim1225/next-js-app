"use client";
import { useEffect, useState } from "react";
import "./globals.css";
import Link from 'next/link';

// export const metadata = {
//   title: "Web tutorials", // 탭에 표시되는 제목
//   description: "Generated by 감만정", // 메타 태그에 표시되는 설명
// };

export default function RootLayout({ children }) {

  const [topics, setTopics] = useState([]);

  useEffect(() => { 
    fetch('http://localhost:9999/topics ')
    .then(res => res.json())
    .then(data => setTopics(data) );
  }, []);

  return (
    <html>
      <body>
        <h1><a href="/">WEB</a></h1>
        <ol>
          {
            topics.map(topic => {
              return <li key={topic}><a href={`/topic/${topic.id}`}>{topic.title}</a></li>
            })
          }
        </ol>
        {children}
        <ul>
          <li><Link href="create">Create</Link></li>
          <li><Link href="update/1">Update</Link></li>
          <li><input type="button" value="delete"></input></li>
        </ul>
      </body>
    </html>
  );
}
