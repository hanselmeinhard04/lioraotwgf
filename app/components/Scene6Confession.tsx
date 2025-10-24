"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Confetti from "react-confetti";

export default function Scene6Confession() {
  const [result, setResult] = useState<'yes' | 'no' | null>(null);
  const [showConfetti, setShowConfetti] = useState<boolean>(false);
  const [windowDimension, setWindowDimension] = useState<{ width: number; height: number }>(() => ({
    width: typeof window !== "undefined" ? window.innerWidth : 0,
    height: typeof window !== "undefined" ? window.innerHeight : 0,
  }));

  useEffect(() => {
    const handleResize = () =>
      setWindowDimension({ width: window.innerWidth, height: window.innerHeight });

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      className="min-h-screen flex items-center justify-center"
      style={{
        backgroundImage: "linear-gradient(180deg, rgba(0,0,0,0.7), rgba(40,10,30,0.6))",
      }}
    >
      {showConfetti && (
        <Confetti
          width={windowDimension.width}
          height={windowDimension.height}
          recycle={false}
          numberOfPieces={200}
        />
      )}

      <motion.div
        initial={{ scale: 0.98, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="relative z-10 w-7/8 px-6 py-12 bg-white/5 rounded-2xl backdrop-blur-sm shadow-lg max-w-3xl mx-auto text-center"
      >
        <h2 className="text-4xl font-bold mb-6 text-white">Liora Theophilia, kamu mau ngga jadi pacarku?</h2>

        {/* Tombol hanya muncul sebelum hasil "IYA" */}
        {!showConfetti && (
          <div className="flex gap-4 justify-center">
            <button
              onClick={() => {
                setResult("yes");
                setShowConfetti(true);
              }}
              className="px-6 py-2 rounded-full bg-pink-600 hover:bg-pink-700 font-semibold text-white transition"
            >
              IYA
            </button>
            <button
              onClick={() => {
                setResult("no");
              }}
              className="px-6 py-2 rounded-full bg-white/80 hover:bg-white text-black font-semibold transition"
            >
              g
            </button>
          </div>
        )}

        {/* Pesan hasil */}
        {result === "yes" && (
          <motion.div
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="mt-6 text-red-200 font-semibold text-5xl"
          >
            I LOVE U!❤ <br/> 25/10/2025
          </motion.div>
        )}

        {result === "no" && (
          <motion.div
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="mt-6 text-red-300 font-semibold"
          >
            Maaf tidak bisa, silahkan coba lagi ya😜
          </motion.div>
        )}
      </motion.div>
    </div>
  );
}
