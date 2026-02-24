import { useState, useEffect, useRef } from "react";

type Props = {
  open: boolean;
  onClose: () => void;
};

export default function AgentsModal({ open, onClose }: Props) {
  const [activeAgent, setActiveAgent] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const agents = [
    {
      name: "Speak in Saudi",
      lang: "🇸🇦",
      assistantId: "4d8090a4-75c1-49e8-b912-70595ac5f6c9",
    },
  ];

  useEffect(() => {
    if (!open || !activeAgent) return;

    const script = document.createElement("script");
    script.src = "https://app.sondos-ai.com/embed.js";
    script.async = true;
    script.setAttribute(
      "data-assistant-id",
      "4d8090a4-75c1-49e8-b912-70595ac5f6c9",
    );

    containerRef.current?.appendChild(script);

    return () => {
      if (containerRef.current) {
        containerRef.current.innerHTML = "";
      }
    };
  }, [open, activeAgent]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[999] flex items-center justify-center bg-violet-50/60 backdrop-blur-lg">
      <div className="w-[380px] rounded-3xl bg-white shadow-[0_20px_60px_rgba(124,58,237,0.2)] border border-violet-100 overflow-hidden">
        <div className="px-6 py-4 flex justify-between items-center border-b border-violet-100">
          <span className="font-semibold text-violet-600">
            Choose your AI Agent
          </span>

          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full hover:bg-violet-50"
          >
            ✕
          </button>
        </div>

        {!activeAgent && (
          <div className="p-4 space-y-2">
            {agents.map((a, i) => (
              <button
                key={i}
                onClick={() => setActiveAgent(true)}
                className="w-full flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-violet-50 transition"
              >
                <span className="text-lg">{a.lang}</span>
                <span className="font-medium text-gray-700">{a.name}</span>
              </button>
            ))}
          </div>
        )}

        {activeAgent && (
          <div className="p-5">
            <div className="text-center mb-4">
              <div className="mx-auto w-12 h-12 rounded-full bg-violet-100 flex items-center justify-center text-violet-600">
                🎙️
              </div>
              <p className="text-sm text-gray-500 mt-2">Voice AI Assistant</p>
            </div>

            <div
              ref={containerRef}
              className="rounded-2xl border border-violet-100 bg-white overflow-hidden min-h-[420px]"
            />

            <button
              onClick={() => setActiveAgent(false)}
              className="mt-4 text-sm text-violet-600 hover:underline"
            >
              ← Back
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
