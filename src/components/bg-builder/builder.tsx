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
    palette: string;
}

const Builder = ({ preset, palette }: BuilderProps) => {
    console.log(palette);
    return (
        <div className="absolute w-full h-full">
            {/* Base background layer */}
            <div className="absolute inset-0 z-[-40]">
                <img
                    src={preset.baseLayer}
                    alt="base"
                    className="object-cover w-full h-full"
                    style={{ filter: `hue-rotate(${palette}deg)` }} // Ensure aspect ratio
                />
            </div>
            
            {/* Cover layer */}
            <div className="absolute inset-0 z-[-30]">
                <div className="relative w-full h-full overflow-hidden">
                    <img
                        src={preset.coverLayer}
                        alt="cover"
                        className="object-cover w-full h-full"
                        style={{ 
                            filter: `hue-rotate(${palette}deg)`
                        }}
                    />
                </div>
            </div>

            {/* Back front layer */}
            <div className="absolute inset-0 z-[-20]">
                <img
                    src={preset.backFrontLayer}
                    alt="back-front"
                    className="w-full h-full object-cover"
                    style={{ filter: `hue-rotate(${palette}deg)` }} // Maintain aspect ratio
                />
            </div>

            {/* Very front layer */}
            <div className="absolute inset-0 z-[-10]">
                <img
                    src={preset.veryFrontLayer}
                    alt="front"
                    className="w-full h-full object-cover"
                    style={{ filter: `hue-rotate(${palette}deg)` }} // Maintain aspect ratio
                />
            </div>
        </div>
    );
};

export default Builder;
