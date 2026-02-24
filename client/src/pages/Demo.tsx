import AnimatedBackground from "@/sections/AnimatedBackground";

export default function Demo() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 py-24 overflow-hidden bg-[#f6f3fb]">
      {/* Background AI */}
      <AnimatedBackground />

      <div className="relative z-10 w-full max-w-xl bg-white/80 backdrop-blur-xl border border-[rgba(90,24,154,0.15)] rounded-3xl shadow-[0_40px_80px_rgba(0,0,0,0.08)] p-8">
        <h1 className="text-3xl font-bold text-center mb-2">
          احجز عرضك التجريبي
        </h1>

        <p className="text-center text-[#6b5c85] mb-8">
          املأ النموذج وسيتواصل معك فريقنا خلال 24 ساعة
        </p>

        {/* ===== FORM ===== */}
        <form className="flex flex-col gap-5">
          <div>
            <label className="block text-sm mb-1">الاسم الكامل *</label>
            <input
              type="text"
              required
              placeholder="اكتب اسمك"
              className="w-full border border-[#e5def5] rounded-xl px-4 py-3 outline-none focus:border-[#5a189a]"
            />
          </div>

          <div>
            <label className="block text-sm mb-1">البريد الإلكتروني *</label>
            <input
              type="email"
              required
              placeholder="email@example.com"
              className="w-full border border-[#e5def5] rounded-xl px-4 py-3 outline-none focus:border-[#5a189a]"
            />
          </div>

          <div>
            <label className="block text-sm mb-1">رقم الهاتف *</label>
            <input
              type="tel"
              required
              placeholder="+216 XX XXX XXX"
              className="w-full border border-[#e5def5] rounded-xl px-4 py-3 outline-none focus:border-[#5a189a]"
            />
          </div>

          {/* ✅ اسم الشركة أصبح إجباري */}
          <div>
            <label className="block text-sm mb-1">اسم الشركة *</label>
            <input
              type="text"
              required
              placeholder="اكتب اسم شركتك"
              className="w-full border border-[#e5def5] rounded-xl px-4 py-3 outline-none focus:border-[#5a189a]"
            />
          </div>

          {/* ✅ حقل جديد : القطاع */}
          <div>
            <label className="block text-sm mb-1">القطاع *</label>
            <input
              type="text"
              required
              placeholder="مثال: العقارات، الصحة، التجارة الإلكترونية..."
              className="w-full border border-[#e5def5] rounded-xl px-4 py-3 outline-none focus:border-[#5a189a]"
            />
          </div>

          <button
            type="submit"
            className="mt-4 py-3 rounded-xl text-white font-semibold bg-gradient-to-r from-[#5a189a] to-[#9d4edd] hover:opacity-90 transition"
          >
            إرسال الطلب 🚀
          </button>
        </form>
      </div>
    </section>
  );
}
