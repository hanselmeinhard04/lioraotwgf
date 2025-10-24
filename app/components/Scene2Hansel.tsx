"use client";
import { motion } from 'framer-motion';


export default function Scene2Hansel({ onNext, onPrev } : { onNext: () => void; onPrev: () => void }) {
return (
<div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-black via-gray-900 to-red-900">
<div className="z-10 w-7/8 container-max px-6 py-12 bg-white/5 rounded-2xl backdrop-blur-sm shadow-lg max-w-4xl mx-auto flex flex-col md:flex-row gap-8 items-center">
<motion.img
src="/hansel.jpg"
alt="Foto Hansel"
className="w-48 h-48 object-cover rounded-xl border-2 border-white/20"
initial={{ x: -30, opacity: 0 }}
animate={{ x: 0, opacity: 1 }}
transition={{ duration: 0.8 }}
/>


<motion.div initial={{ x: 30, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.8 }}>
<h2 className="text-2xl font-bold">Hansel Meinhard</h2>
<p className="text-sm text-pink-100 mb-4">21 • otw pcr Liora</p>


<div className="text-sm text-white/80 space-y-2">
<p><strong>Hobi:</strong> mikirin kamu, pergi sama kamu.</p>
<p><strong>Mimpi:</strong> nikah sama kamu.</p>
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