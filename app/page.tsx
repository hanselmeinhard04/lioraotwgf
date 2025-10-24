"use client";
import { useEffect, useState } from 'react';
import Scene1Start from './components/Scene1Start';
import Scene2Hansel from './components/Scene2Hansel';
import Scene3Liora from './components/Scene3Liora';
import Scene4Story from './components/Scene4Story';
import Scene5Reasons from './components/Scene5Reasons';
import Scene6Confession from './components/Scene6Confession';


export default function Home() {
const [scene, setScene] = useState(1);

const playMusic = () => {
const audio = new Audio('/sempurna.mp3');
audio.play().catch(() => console.log('play prevented'));
};


useEffect(() => {
playMusic();
}, []);

// preload images
useEffect(() => {
const imgs = ['photo-berdua.jpg','hansel.jpg','her.jpg','love-bg.jpg'];
imgs.forEach((src) => {
const i = new Image();
i.src = '/' + src;
});
}, []);


return (
<div className="min-h-screen">
{scene === 1 && <Scene1Start onNext={() => setScene(2)} />}
{scene === 2 && <Scene2Hansel onNext={() => setScene(3)} onPrev={() => setScene(1)} />}
{scene === 3 && <Scene3Liora onNext={() => setScene(4)} onPrev={() => setScene(2)} />}
{scene === 4 && <Scene4Story onNext={() => setScene(5)} onPrev={() => setScene(3)} />}
{scene === 5 && <Scene5Reasons onNext={() => setScene(6)} onPrev={() => setScene(4)} />}
{scene === 6 && <Scene6Confession/>}
</div>
);
}