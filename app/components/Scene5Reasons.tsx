"use client";
import { motion } from 'framer-motion';


const reasons = [
'Aku merasa nyaman sama kamu, bisa ngomong dan cerita apapun.',
'Aku selalu bahagia dan senang kalo sama kamu.',
'Kamu selalu support aku dan membuat aku menjadi lebih baik.',
'Aku mau terus sama-sama berkembang bareng kamu, dan aku sudah yakin sama kamu.'
];


export default function Scene5Reasons({ onNext, onPrev } : { onNext: () => void; onPrev: () => void }) {
return (
<div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-black to-red-900">
<div className="relative w-9/10 z-10 container-max px-6 py-12 bg-white/5 rounded-2xl backdrop-blur-sm shadow-lg max-w-3xl mx-auto">
<h2 className="text-2xl font-bold mb-4">Alasan kenapa suka kamu</h2>


<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
{reasons.map((r, i) => (
<motion.div key={i} className="p-4 bg-white/5 rounded-lg" initial={{ y: 10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: i * 0.12 }}>
<div className="font-semibold mb-2">Alasan {i + 1}</div>
<div className="text-sm text-white/80">{r}</div>
</motion.div>
))}
</div>


<div className="mt-6 flex gap-3 justify-end">
<button onClick={onPrev} className="px-4 py-2 rounded-full border border-white/20">Kembali</button>
<button onClick={onNext} className="btn-primary px-4 py-2 rounded-full bg-white text-black/80 hover:bg-transparent hover:border-white">Next</button>
</div>
</div>
</div>
);
}