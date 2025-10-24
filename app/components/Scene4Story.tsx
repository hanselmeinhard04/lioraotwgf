"use client";
import { motion } from 'framer-motion';


export default function Scene4Story({ onNext, onPrev } : { onNext: () => void; onPrev: () => void }) {
return (
<div className="min-h-screen flex items-center justify-center" style={{ backgroundImage: "url('/love-bg.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
<div className="absolute inset-0 bg-black/60"></div>
<div className="relative z-10 w-7/8 container-max px-6 py-12 bg-white/5 rounded-2xl backdrop-blur-sm shadow-lg max-w-3xl mx-auto">
<motion.h2 className="text-2xl font-bold mb-4" initial={{ y: 10, opacity: 0 }} animate={{ y: 0, opacity: 1 }}>Cerita Singkat</motion.h2>
<motion.p className="text-white/90 leading-tight justify-center align-middle" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}>
Sebenernya kita waktu awal kenal lagi sama-sama ngga mau deket sama orang in realationship, kita pun temenan pada saat itu. Tapi entah kenapa kita jadi deket dan sampe kayak sekarang (mangkannya setiap ditanya kobisa kita deket aku bingung harus jawab apa wkwk). Sekarang bahkan aku sudah sangat merasa nyaman dan deket sama kamu. Kamu adalah orang yang selalu tak pikirin dan utamakan saat ini.
</motion.p>


<div className="mt-6 flex gap-3 justify-end">
<button onClick={onPrev} className="px-4 py-2 rounded-full border border-white/20">Kembali</button>
<button onClick={onNext} className="btn-primary px-4 py-2 rounded-full bg-white text-black/80 hover:bg-transparent hover:border-white">Next</button>
</div>
</div>
</div>
);
}