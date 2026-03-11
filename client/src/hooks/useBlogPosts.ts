import { useState, useEffect } from "react";

const SHEET_ID = "1qGGrcCNRAwWErdNaxzUBbONVmigNSTwU1djkOYzkFe0";
const API_KEY = "AIzaSyAskreCINK1t3099jsIvLJ5C3JgQqKXQJM";
const RANGE = "الورقة1!A:A";

function slugify(text: string, index: number) {
  return (
    text
      ?.substring(0, 50)
      .toLowerCase()
      .replace(/\s+/g, "-")
      .replace(/[^\w-]/g, "")
      .trim() + `-${index}`
  );
}

export function useBlogPosts() {
  const [posts, setPosts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const url = `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/${RANGE}?key=${API_KEY}`;

    fetch(url)
      .then((r) => r.json())
      .then((data) => {
        if (!data.values) {
          setError("Sheet vide ou non public");
          setLoading(false);
          return;
        }
        const [, ...rows] = data.values;
        const posts = rows
          .filter((row: string[]) => row[0]?.trim())
          .map((row: string[], i: number) => ({
            slug: slugify(row[0], i),
            title: row[0].substring(0, 80),
            titleAr: row[0].substring(0, 80),
            excerpt: row[0].substring(0, 150) + "...",
            excerptAr: row[0].substring(0, 150) + "...",
            content: row[0],
            category: "IA",
            categoryAr: "الذكاء الاصطناعي",
            readTime: "5",
            image: `https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=800`,
            date: new Date().toISOString(),
          }));
        setPosts(posts.reverse());
        setLoading(false);
      })
      .catch(() => {
        setError("Erreur de chargement");
        setLoading(false);
      });
  }, []);

  return { posts, loading, error };
}
