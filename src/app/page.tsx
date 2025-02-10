'use client';

import React, { useEffect, useState } from 'react';
import Navbar from '../components/navigation/navbar';
import RandomPopups from '../components/popups/randomPopups';
import Builder from '../components/bg-builder/builder';
import Quoter from '../components/bg-builder/quoter';

interface Preset {
    baseLayer: string;
    coverLayer: string;
    backFrontLayer: string;
    veryFrontLayer: string;
}

interface Palette {
    coverColor: string;
}

interface BuilderProps {
    preset: Preset[];
    palette: string;
}

const presets: Preset[] = [{
    baseLayer: '/assets/backgrounds/backdrops/Backdrop1.png',
    coverLayer: '/assets/backgrounds/backdrop2/BackgroundLayer2.png',
    backFrontLayer: '/assets/backgrounds/cover/MummyBack.png',
    veryFrontLayer: '/assets/backgrounds/frontLayer/Eyes.png',
},
{
    baseLayer: '/assets/backgrounds/backdrops/spiral.png',
    coverLayer: '/assets/backgrounds/backdrop2/layer2.png',
    backFrontLayer: '/assets/backgrounds/cover/reapers.png',
    veryFrontLayer: '/assets/backgrounds/frontLayer/tomato.png',
}]

const HomePage = () => {
    const defaultPreset: Preset = presets[0];
    const [selectedPreset, setSelectedPreset] = useState<Preset>(defaultPreset);
    const [selectedPalette, setSelectedPalette] = useState<string>('0');

    useEffect(() => {
        // Randomly select a preset after hydration
        const baseLayer = presets[Math.floor(Math.random() * presets.length)].baseLayer;
        const coverLayer = presets[Math.floor(Math.random() * presets.length)].coverLayer;
        const backFrontLayer = presets[Math.floor(Math.random() * presets.length)].backFrontLayer;
        const veryFrontLayer = presets[Math.floor(Math.random() * presets.length)].veryFrontLayer;
        const selectedPreset: Preset = { baseLayer, coverLayer, backFrontLayer, veryFrontLayer };
        const palette: string = Math.floor(Math.random() * 360).toString();
        setSelectedPalette(palette);
        setSelectedPreset(selectedPreset);
    }, []);

    return (
        <div className='flex flex-col items-center h-screen w-full bg-transparent select-none'>
            <Quoter />
            <Builder palette={selectedPalette} preset={selectedPreset}/>
            <Navbar />
            <RandomPopups />
        </div>
    );
  };

  export default HomePage;
