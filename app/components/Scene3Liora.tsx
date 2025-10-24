"use client";
import { motion } from 'framer-motion';


export default function Scene3Liora({ onNext, onPrev } : { onNext: () => void; onPrev: () => void }) {
return (
<div className="min-h-screen flex items-center justify-center bg-red-900/40">
<div className="z-10 w-7/8 container-max px-6 py-12 bg-white/5 rounded-2xl backdrop-blur-sm shadow-lg max-w-4xl mx-auto flex flex-col md:flex-row-reverse gap-8 items-center">
<motion.img
src="/her.jpg"
alt="Foto Dia"
className="w-48 h-48 object-cover rounded-xl border-2 border-white/20"
initial={{ x: 30, opacity: 0 }}
animate={{ x: 0, opacity: 1 }}
transition={{ duration: 0.8 }}
/>


<motion.div initial={{ x: -30, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.8 }}>
<h2 className="text-2xl font-bold">Liora Theophilia</h2>
<p className="text-sm text-pink-100 mb-4">cewek tercantik di dunia</p>


<div className="text-sm text-white/80 space-y-2">
<p><strong>Kelebihan:</strong> cantik, pintar, perhatian, dan baik hati.</p>
<p><strong>Kekurangan:</strong> tidak ada, terlalu sempurna buat aku.</p>
</div>


<div className="mt-6 flex gap-3">
<button onClick={onPrev} className="px-4 py-2 rounded-full border border-white/20">Kembali</button>
<button onClick={onNext} className="btn-primary px-4 py-2 rounded-full bg-white text-black/80 hover:bg-transparent hover:border-white">Next</button>
</div>
</motion.div>
</div>
</div>
);
}