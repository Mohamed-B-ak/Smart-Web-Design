import { useState, useEffect } from "react";
import { useLanguage } from "@/context/LanguageContext";

const APPS_SCRIPT_URL =
  "https://script.google.com/a/macros/sondos-ai.com/s/AKfycbxg3V1VB-S50WJrFwm6D-VskJzXLIP4FuquNt5X9HOYjrxP7UIImFX4zc3zqxxfwHhN/exec";
const SONDOS_TOKEN = "1016|0c1ta4b7Jr6GpTfYTI6AgnZDkVPMgFxmRtC6NH3H18f46e28";
const SONDOS_ASSISTANT_ID = 6299;

type Props = {
  open: boolean;
  onClose: () => void;
};

type CallState = "idle" | "connecting" | "talking";

// ✅ Accepte saoudien + tunisien + format international
function isValidPhone(phone: string): boolean {
  const cleaned = phone.replace(/[\s\-().]/g, "");
  if (cleaned.startsWith("+")) return cleaned.length >= 10;
  if (cleaned.startsWith("00")) return cleaned.length >= 11;
  if (cleaned.startsWith("966")) return cleaned.length >= 11;
  if (cleaned.startsWith("216")) return cleaned.length >= 11;
  if (cleaned.startsWith("0")) return cleaned.length >= 9;
  return cleaned.length >= 8;
}

// ✅ Formate vers +XXXXXXXXXXX selon le pays détecté
function formatPhone(phone: string): string {
  const cleaned = phone.replace(/[\s\-().]/g, "");

  // Déjà en format international
  if (cleaned.startsWith("+")) return cleaned;

  // Format 00XXX
  if (cleaned.startsWith("00")) return "+" + cleaned.slice(2);

  // Indicatif saoudien sans +
  if (cleaned.startsWith("966")) return "+" + cleaned;

  // Indicatif tunisien sans +
  if (cleaned.startsWith("216")) return "+" + cleaned;

  // Mobile saoudien local : 05X ou 04X
  if (/^0[45]/.test(cleaned)) return "+966" + cleaned.slice(1);

  // Mobile tunisien local : 02X, 07X, 09X, 05X (hors 05 saoudien géré avant)
  if (/^0[2379]/.test(cleaned)) return "+216" + cleaned.slice(1);

  // Numéro sans préfixe : 9 chiffres → saoudien, 8 chiffres → tunisien
  if (cleaned.length === 9) return "+966" + cleaned;
  if (cleaned.length === 8) return "+216" + cleaned;

  // Fallback
  return "+" + cleaned;
}

export default function AgentsModal({ open, onClose }: Props) {
  const { t, lang } = useLanguage();
  const [activeAgent, setActiveAgent] = useState<string | null>(null);
  const [callState, setCallState] = useState<CallState>("idle");
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [phoneError, setPhoneError] = useState<string>("");

  useEffect(() => {
    setCallState("idle");
    setPhoneError("");
  }, [activeAgent]);

  if (!open) return null;

  const agents = [
    {
      id: "saudi",
      name: t("agents.saudi"),
      lang: "🇸🇦",
      color: "#10b981",
      colorEnd: "#0d9488",
      bg: "bg-emerald-50",
      border: "border-emerald-200",
      iframe:
        "https://app.sondos-ai.com/widget/index.html?assistant_id=96a35afc-c49a-4ca6-bf71-964524b1f487&theme=light",
    },
    {
      id: "emirati",
      name: t("agents.emirati"),
      lang: "🇦🇪",
      color: "#f43f5e",
      colorEnd: "#e11d48",
      bg: "bg-red-50",
      border: "border-red-200",
      iframe: "",
    },
    {
      id: "egyptian",
      name: t("agents.egyptian"),
      lang: "🇪🇬",
      color: "#f59e0b",
      colorEnd: "#d97706",
      bg: "bg-amber-50",
      border: "border-amber-200",
      iframe: "",
    },
  ];

  const selectedAgent = agents.find((a) => a.id === activeAgent);

  const translateAgent = (key: string) => {
    if (!activeAgent) return t(`agents.${key}`);
    const dialectKey = `agents.${activeAgent}.${key}`;
    const fallbackKey = `agents.${key}`;
    const dialectTranslation = t(dialectKey);
    if (dialectTranslation === dialectKey) return t(fallbackKey);
    return dialectTranslation;
  };

  const handlePhoneChange = (val: string) => {
    setPhoneNumber(val);
    if (phoneError) setPhoneError("");
  };

  const handleStartClick = async () => {
    if (callState === "idle") {
      if (!phoneNumber.trim()) {
        setPhoneError(t("agents.phone_required"));
        return;
      }
      if (!isValidPhone(phoneNumber)) {
        setPhoneError(t("agents.phone_invalid"));
        return;
      }

      setPhoneError("");
      setCallState("connecting");

      // ✅ Numéro formaté en international
      const phone = formatPhone(phoneNumber.trim());
      const agent = selectedAgent?.name || activeAgent || "";

      // ── 1. Enregistre dans Sheet via JSONP ───────────────────────
      const cbName = "sondos_cb_" + Date.now();
      const params = new URLSearchParams({ phone, agent, callback: cbName });
      (window as any)[cbName] = () => {
        delete (window as any)[cbName];
        if (script.parentNode) document.body.removeChild(script);
      };
      const script = document.createElement("script");
      script.src = `${APPS_SCRIPT_URL}?${params.toString()}`;
      document.body.appendChild(script);

      // ── 2. Lance l'appel Sondos ──────────────────────────────────
      try {
        const res = await fetch(
          "https://app.sondos-ai.com/api/user/make_call",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${SONDOS_TOKEN}`,
            },
            body: JSON.stringify({
              phone_number: phone,
              assistant_id: SONDOS_ASSISTANT_ID,
              variables: { customer_name: "", email: "" },
            }),
          },
        );

        if (!res.ok) {
          const errBody = await res.text();
          console.error("Sondos error:", res.status, errBody);
          setCallState("idle");
          setPhoneError(`Erreur appel: ${res.status}`);
          return;
        }

        setCallState("talking");
      } catch (err) {
        console.error("Sondos error:", err);
        setCallState("idle");
        setPhoneError(t("agents.call_failed") || "Échec de l'appel");
      }
    }
  };

  const handleEndCall = () => {
    setCallState("idle");
  };

  return (
    <div className="fixed inset-0 z-[999] flex items-center justify-center bg-violet-950/40 backdrop-blur-md">
      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(16px) scale(0.97); }
          to   { opacity: 1; transform: translateY(0) scale(1); }
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
        @keyframes ripple {
          0%   { transform: scale(1);   opacity: 0.6; }
          100% { transform: scale(2.2); opacity: 0; }
        }
        @keyframes ripple2 {
          0%   { transform: scale(1);   opacity: 0.4; }
          100% { transform: scale(2.8); opacity: 0; }
        }
        @keyframes wave {
          0%, 100% { transform: scaleY(0.3); }
          50%       { transform: scaleY(1); }
        }
        @keyframes wave-talk {
          0%, 100% { transform: scaleY(0.4); }
          50%       { transform: scaleY(1.3); }
        }
        @keyframes breathe {
          0%, 100% { transform: scale(1); }
          50%       { transform: scale(1.06); }
        }
        @keyframes pulse-dot {
          0%, 100% { opacity: 1; }
          50%       { opacity: 0.3; }
        }
        @keyframes btn-press {
          0%   { transform: scale(1); }
          50%  { transform: scale(0.95); }
          100% { transform: scale(1); }
        }
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          20%       { transform: translateX(-6px); }
          40%       { transform: translateX(6px); }
          60%       { transform: translateX(-4px); }
          80%       { transform: translateX(4px); }
        }
        .modal-enter { animation: fadeUp 0.35s cubic-bezier(0.22, 1, 0.36, 1) forwards; }
        .shake { animation: shake 0.4s ease; }
        .ripple-1 {
          position: absolute; inset: -16px; border-radius: 50%;
          background: rgba(139,92,246,0.25);
          animation: ripple 2s ease-out infinite;
        }
        .ripple-2 {
          position: absolute; inset: -16px; border-radius: 50%;
          background: rgba(139,92,246,0.15);
          animation: ripple2 2s ease-out 0.6s infinite;
        }
        .avatar-breathe { animation: breathe 2.5s ease-in-out infinite; }
        .bar-idle {
          width: 4px; border-radius: 4px; height: 20px;
          animation: wave 1.4s ease-in-out infinite;
          background: linear-gradient(to top, #8b5cf6, #c4b5fd);
        }
        .bar-idle:nth-child(2) { animation-delay: 0.15s; }
        .bar-idle:nth-child(3) { animation-delay: 0.3s; }
        .bar-idle:nth-child(4) { animation-delay: 0.45s; }
        .bar-idle:nth-child(5) { animation-delay: 0.6s; }
        .bar-talk {
          width: 5px; border-radius: 4px;
          animation: wave-talk 0.5s ease-in-out infinite;
          background: linear-gradient(to top, #6d28d9, #a78bfa);
        }
        .bar-talk:nth-child(1) { height: 28px; animation-delay: 0s; }
        .bar-talk:nth-child(2) { height: 40px; animation-delay: 0.07s; }
        .bar-talk:nth-child(3) { height: 52px; animation-delay: 0.14s; }
        .bar-talk:nth-child(4) { height: 44px; animation-delay: 0.21s; }
        .bar-talk:nth-child(5) { height: 32px; animation-delay: 0.28s; }
        .bar-talk:nth-child(6) { height: 48px; animation-delay: 0.35s; }
        .bar-talk:nth-child(7) { height: 36px; animation-delay: 0.42s; }
        .bar-talk:nth-child(8) { height: 24px; animation-delay: 0.49s; }
        .connecting-ring {
          position: absolute; inset: -6px; border-radius: 50%;
          border: 3px solid transparent;
          border-top-color: #8b5cf6;
          border-right-color: #8b5cf6;
          animation: spin-slow 1s linear infinite;
        }
        .pulse-dot { animation: pulse-dot 1s ease-in-out infinite; }
        .btn-start:active { animation: btn-press 0.15s ease-in-out; }
        .phone-input {
          width: 100%;
          padding: 10px 14px;
          border-radius: 12px;
          border: 1.5px solid rgba(139,92,246,0.25);
          background: rgba(139,92,246,0.04);
          color: #4c1d95;
          font-size: 14px;
          outline: none;
          text-align: ${lang === "ar" ? "right" : "left"};
          direction: ${lang === "ar" ? "rtl" : "ltr"};
          transition: border-color 0.2s;
        }
        .phone-input::placeholder { 
          color: #c4b5fd; 
          text-align: ${lang === "ar" ? "right" : "left"}; 
        }
        .phone-input:focus {
          border-color: #8b5cf6;
          background: rgba(139,92,246,0.07);
        }
        .phone-input.error {
          border-color: #ef4444;
          background: rgba(239,68,68,0.04);
        }
      `}</style>

      <div
        className="modal-enter w-[400px] rounded-3xl overflow-hidden shadow-2xl"
        style={{
          background: "linear-gradient(145deg, #ffffff 0%, #faf5ff 100%)",
          border: "1px solid rgba(139,92,246,0.15)",
        }}
      >
        {/* HEADER */}
        <div
          className="px-6 py-4 flex justify-between items-center"
          dir={lang === "ar" ? "rtl" : "ltr"}
          style={{
            borderBottom: "1px solid rgba(139,92,246,0.1)",
            background: "rgba(255,255,255,0.85)",
            backdropFilter: "blur(10px)",
          }}
        >
          <div className="flex items-center gap-2">
            {activeAgent && (
              <button
                onClick={() => {
                  setActiveAgent(null);
                  setCallState("idle");
                  setPhoneError("");
                }}
                className="ml-1 w-7 h-7 rounded-full flex items-center justify-center text-violet-400 hover:bg-violet-100 transition text-sm"
              >
                {lang === "ar" ? "←" : "→"}
              </button>
            )}
            <div
              className="w-2 h-2 rounded-full pulse-dot"
              style={{
                background:
                  callState === "talking"
                    ? "#10b981"
                    : callState === "connecting"
                      ? "#f59e0b"
                      : "#8b5cf6",
              }}
            />
            <span className="font-semibold text-violet-700 text-sm tracking-wide">
              {activeAgent ? selectedAgent?.name : t("agents.title")}
            </span>
          </div>
          <button
            onClick={onClose}
            className="w-7 h-7 rounded-full flex items-center justify-center text-gray-400 hover:bg-violet-50 hover:text-violet-500 transition text-sm"
          >
            ✕
          </button>
        </div>

        {/* AGENT LIST */}
        {!activeAgent && (
          <div className="p-5 space-y-3" dir={lang === "ar" ? "rtl" : "ltr"}>
            <p className="text-xs text-gray-400 text-center mb-4 tracking-wider">
              {t("agents.choose_dialect")}
            </p>
            {agents.map((a) => (
              <button
                key={a.id}
                onClick={() => setActiveAgent(a.id)}
                className={`w-full flex items-center gap-4 px-5 py-4 rounded-2xl ${a.bg} ${a.border} border hover:scale-[1.02] active:scale-[0.99] transition-all duration-200 group`}
              >
                <span className="text-2xl">{a.lang}</span>
                <div className="flex-1 text-right">
                  <span className="font-semibold text-gray-700 group-hover:text-gray-900 transition">
                    {a.name}
                  </span>
                  <div className="text-xs text-gray-400 mt-0.5">
                    {a.iframe ? t("agents.ready") : t("agents.soon")}
                  </div>
                </div>
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center text-white text-sm opacity-80 group-hover:opacity-100 transition"
                  style={{
                    background: `linear-gradient(135deg, ${a.color}, ${a.colorEnd})`,
                  }}
                >
                  {lang === "ar" ? "←" : "→"}
                </div>
              </button>
            ))}
          </div>
        )}

        {/* CHAT VIEW */}
        {activeAgent && selectedAgent && (
          <div className="p-6" dir={lang === "ar" ? "rtl" : "ltr"}>
            {selectedAgent.iframe ? (
              <>
                {/* IDLE */}
                {callState === "idle" && (
                  <div className="flex flex-col items-center gap-6 py-4">
                    <div className="relative flex items-center justify-center w-24 h-24">
                      <div
                        className="w-20 h-20 rounded-full flex items-center justify-center text-3xl shadow-xl"
                        style={{
                          background: `linear-gradient(135deg, ${selectedAgent.color}, ${selectedAgent.colorEnd})`,
                        }}
                      >
                        {selectedAgent.lang}
                      </div>
                    </div>
                    <div className="flex items-center gap-1.5">
                      {[1, 2, 3, 4, 5].map((n) => (
                        <div key={n} className="bar-idle" />
                      ))}
                    </div>
                    <div className="text-center">
                      <p className="text-gray-700 font-semibold">
                        {translateAgent("voice_ready")}
                      </p>
                      <p className="text-gray-400 text-sm mt-1">
                        {translateAgent("press_to_start")}
                      </p>
                    </div>

                    {/* PHONE INPUT */}
                    <div className="w-full">
                      <label className="block text-xs text-violet-500 font-medium mb-1.5 text-right">
                        {t("agents.phone_label")}
                      </label>
                      <input
                        type="tel"
                        className={`phone-input ${phoneError ? "error shake" : ""}`}
                        placeholder={t("agents.phone_placeholder")}
                        value={phoneNumber}
                        onChange={(e) => handlePhoneChange(e.target.value)}
                      />
                      {phoneError && (
                        <p
                          className="text-xs text-red-500 mt-1.5 text-right"
                          style={{ direction: "rtl" }}
                        >
                          ⚠️ {phoneError}
                        </p>
                      )}
                    </div>

                    <button
                      className="btn-start w-full px-8 py-4 rounded-2xl text-white font-bold text-sm tracking-wide flex items-center justify-center gap-3 transition-all duration-150 hover:scale-[1.03] active:scale-95"
                      style={{
                        background:
                          "linear-gradient(135deg, #8b5cf6 0%, #6d28d9 100%)",
                        boxShadow: "0 8px 24px rgba(139,92,246,0.5)",
                      }}
                      onClick={handleStartClick}
                    >
                      <span className="text-lg">🎙️</span>
                      {translateAgent("start_conversation")}
                    </button>
                  </div>
                )}

                {/* CONNECTING */}
                {callState === "connecting" && (
                  <div className="flex flex-col items-center gap-6 py-6">
                    <div className="relative flex items-center justify-center w-28 h-28">
                      <div className="connecting-ring" />
                      <div
                        className="w-20 h-20 rounded-full flex items-center justify-center text-3xl shadow-xl"
                        style={{
                          background: `linear-gradient(135deg, ${selectedAgent.color}, ${selectedAgent.colorEnd})`,
                        }}
                      >
                        {selectedAgent.lang}
                      </div>
                    </div>
                    <div className="text-center">
                      <p className="text-violet-700 font-semibold">
                        {translateAgent("connecting")}
                      </p>
                      <p className="text-gray-400 text-sm mt-1 flex items-center justify-center gap-1">
                        <span className="pulse-dot w-1.5 h-1.5 rounded-full bg-amber-400 inline-block" />
                        {translateAgent("please_wait")}
                      </p>
                    </div>
                    <div className="flex gap-2">
                      {[0, 0.2, 0.4].map((d, i) => (
                        <div
                          key={i}
                          className="w-2 h-2 rounded-full bg-violet-400"
                          style={{
                            animation: `pulse-dot 1s ease-in-out ${d}s infinite`,
                          }}
                        />
                      ))}
                    </div>
                  </div>
                )}

                {/* TALKING */}
                {callState === "talking" && (
                  <div className="flex flex-col items-center gap-5 py-4">
                    <div className="relative flex items-center justify-center w-28 h-28">
                      <div className="ripple-1" />
                      <div className="ripple-2" />
                      <div
                        className="avatar-breathe w-20 h-20 rounded-full flex items-center justify-center text-3xl shadow-2xl"
                        style={{
                          background: `linear-gradient(135deg, ${selectedAgent.color}, ${selectedAgent.colorEnd})`,
                          boxShadow: `0 0 0 4px white, 0 0 0 6px ${selectedAgent.color}44`,
                        }}
                      >
                        {selectedAgent.lang}
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <span
                        className="w-2 h-2 rounded-full"
                        style={{
                          background: "#10b981",
                          boxShadow: "0 0 6px #10b981",
                          animation: "pulse-dot 1.5s ease-in-out infinite",
                        }}
                      />
                      <span className="text-emerald-600 font-semibold text-sm">
                        {translateAgent("in_call")}
                      </span>
                    </div>
                    <div className="flex items-end justify-center gap-1.5 h-14">
                      {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
                        <div key={n} className="bar-talk" />
                      ))}
                    </div>
                    <button
                      onClick={handleEndCall}
                      className="mt-2 w-14 h-14 rounded-full flex items-center justify-center text-2xl transition-all hover:scale-110 active:scale-95"
                      style={{
                        background: "linear-gradient(135deg, #ef4444, #dc2626)",
                        boxShadow: "0 6px 20px rgba(239,68,68,0.5)",
                      }}
                    >
                      📵
                    </button>
                    <p className="text-xs text-gray-400">
                      {translateAgent("end_call")}
                    </p>
                  </div>
                )}
              </>
            ) : (
              <div
                className={`h-[260px] rounded-2xl ${selectedAgent.bg} border ${selectedAgent.border} flex flex-col items-center justify-center gap-3`}
              >
                <span className="text-4xl">{selectedAgent.lang}</span>
                <p className="text-gray-400 font-medium">
                  {t("agents.coming_soon")}
                </p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
