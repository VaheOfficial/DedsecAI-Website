'use client';

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

const Builder = ({ preset, palette }: BuilderProps) => {
    return (
        <div className="absolute w-full h-full">
            {/* Base background layer */}
            <div className="absolute inset-0 z-[-40]">
                <img src={preset.baseLayer} alt="base" className="w-full h-full object-cover" />
            </div>
            
            {/* Cover layer */}
            <div className="absolute inset-0 z-[-30]">
                <img src={preset.coverLayer} alt="cover" className="w-full h-full object-cover" />
            </div>

            {/* Back front layer */}
            <div className="absolute inset-0 z-[-20]">
                <img src={preset.backFrontLayer} alt="back-front" className="w-full h-full object-cover" />
            </div>

            {/* Very front layer */}
            <div className="absolute inset-0 z-[-10]">
                <img src={preset.veryFrontLayer} alt="front" className="w-full h-full object-cover" />
            </div>
        </div>
    );
};

export default Builder;
