'use client';

import React from 'react';
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
    preset: Preset;
    palette: Palette;
}

const presets: Preset = {
    baseLayer: '/assets/backgrounds/backdrops/Backdrop1.png', // C:\Users\vaheofficial\Documents\GitHub\DedsecAI-Website\public\assets\backgrounds\backdrops\Backdrop1.png
    coverLayer: '/assets/backgrounds/backdrop2/BackgroundLayer2.png',
    backFrontLayer: '/assets/backgrounds/cover/MummyBack.png',
    veryFrontLayer: '/assets/backgrounds/frontLayer/Eyes.png',
}

const palette: Palette = {
    coverColor: '#FFFFFF',
}

const props: BuilderProps = {
    preset: presets,
    palette: palette,
}

const HomePage = () => {
    return (
        <div className='flex flex-col items-center h-screen w-full bg-transparent select-none overflow-hidden'>
            <Builder palette={palette} preset={presets}/>
            <Navbar />
            <RandomPopups />
            <Quoter />
        </div>
    );
  };

  export default HomePage;
