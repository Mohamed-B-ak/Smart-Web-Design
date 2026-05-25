"use client";

import { useLanguage } from "@/context/LanguageContext";
import { Play } from "lucide-react";

const CSS = `
  .testi-root {
    font-family: 'din-next-lt-arabic-b4fd9f01e2', sans-serif;
    padding: 96px 24px;
  }

  .testi-wrap {
    max-width: 1280px;
    margin: 0 auto;
  }

  .testi-head {
    text-align: center;
    margin-bottom: 56px;
  }

  .testi-tag {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    font-size: 0.72rem;
    font-weight: 700;
    letter-spacing: 2.5px;
    text-transform: uppercase;
    color: #672D92;
    margin-bottom: 16px;
  }

  .testi-tag::before {
    content: '';
    width: 24px;
    height: 2px;
    border-radius: 999px;
    background: linear-gradient(90deg, #672D92, #7f47ac);
    display: inline-block;
  }

  .testi-title {
    font-size: clamp(1.8rem, 3.5vw, 2.8rem);
    font-weight: 800;
    line-height: 1.15;
    color: #0a0a0a;
  }

  /* 3 vidéos ligne */
  .video-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
  }

  .video-card {
    position: relative;
    border-radius: 24px;
    overflow: hidden;
    cursor: pointer;
    background: #000;
    aspect-ratio: 9 / 16;
    box-shadow: 0 10px 30px rgba(0,0,0,0.15);
    transition: 0.3s ease;
  }

  .video-card:hover {
    transform: translateY(-6px);
  }

  .video-thumb {
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: 0.95;
    transition: 0.3s ease;
  }

  .video-card:hover .video-thumb {
    transform: scale(1.05);
    opacity: 1;
  }

  /* PLAY BUTTON */
  .play-btn {
    position: absolute;
    inset: 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .play-circle {
    width: 64px;
    height: 64px;
    border-radius: 50%;
    background: rgba(255,255,255,0.25);
    backdrop-filter: blur(10px);
    display: flex;
    align-items: center;
    justify-content: center;
    transition: 0.3s ease;
  }

  .video-card:hover .play-circle {
    transform: scale(1.15);
    background: rgba(255,255,255,0.35);
  }

  @media (max-width: 900px) {
    .video-grid {
      grid-template-columns: 1fr;
    }
  }

  @media (min-width: 901px) and (max-width: 1100px) {
    .video-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }
`;

export default function Testimonials() {
  const { lang, t } = useLanguage();

  const videos = [
    {
      url: "https://www.youtube.com/shorts/kkie-6Md0m0",
      thumb: "https://img.youtube.com/vi/kkie-6Md0m0/maxresdefault.jpg",
    },
    {
      url: "https://www.youtube.com/shorts/VMnQYK8cPBo",
      thumb: "https://img.youtube.com/vi/VMnQYK8cPBo/maxresdefault.jpg",
    },
    {
      url: "https://www.youtube.com/shorts/e5UkmFYfcGI",
      thumb: "https://img.youtube.com/vi/e5UkmFYfcGI/maxresdefault.jpg",
    },
  ];

  return (
    <>
      <style>{CSS}</style>

      <section
        className="testi-root"
        dir={lang === "ar" ? "rtl" : "ltr"}
      >
        <div className="testi-wrap">

          <div className="testi-head">
            <div className="testi-tag">
              {t("testimonials.label")}
            </div>

            <h2 className="testi-title">
              {t("testimonials.title")}
            </h2>
          </div>

          <div className="video-grid">

            {videos.map((v, i) => (
              <div
                key={i}
                className="video-card"
                onClick={() => window.open(v.url, "_blank")}
              >

                <img
                  className="video-thumb"
                  src={v.thumb}
                  alt="video"
                />

                {/* PLAY ICON */}
                <div className="play-btn">
                  <div className="play-circle">
                    <Play size={26} color="white" />
                  </div>
                </div>

              </div>
            ))}

          </div>

        </div>
      </section>
    </>
  );
}