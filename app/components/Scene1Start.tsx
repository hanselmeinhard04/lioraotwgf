"use client";
import { motion } from 'framer-motion';


export default function Scene1Start({ onNext } : { onNext: () => void }) {
return (
<div
className="w-full min-h-screen bg-cover bg-center flex items-center justify-center"
style={{ backgroundImage: "url('/photo-berdua.jpg')" }}
>
<div className="absolute inset-0 bg-black/80"></div>


<motion.div
initial={{ opacity: 0, scale: 0.98 }}
animate={{ opacity: 1, scale: 1 }}
transition={{ duration: 0.8 }}
className="relative z-10 w-3/4 text-center p-6 border-2 rounded-2xl bg-black/50"
>
<h1 className="text-2xl md:text-4xl font-semibold mb-1 drop-shadow-lg">Halo<br />LIORA THEOPHILIA!</h1>
<p className="text-xs md:text-sm justify-center items-center text-red-200 mb-5 container-max">akhirnya setelah sekian lama deket, kita nemu tanggal bagus 25/10/25 wkwk</p>


<button onClick={onNext} className="btn-primary text-md text-bold bg-red-400/70 px-4 py-1 rounded-lg border-white">MULAI</button>
</motion.div>
</div>
);
}