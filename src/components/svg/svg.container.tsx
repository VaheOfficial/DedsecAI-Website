import Image from 'next/image';
import { icons } from './icons';

interface IconProps {
    icon: string;
    width?: number;
    height?: number;
    className?: string;
    onClick?: (event: React.MouseEvent<HTMLImageElement>) => void; // Add onClick prop
}

export const Icon: React.FC<IconProps> = ({
    icon,
    width = 24,
    height = 24,
    className = '',
    onClick,
}) => {
    const SVGIcon = icons[icon];

    if (!SVGIcon) {
        console.warn(`Icon "${icon}" not found`);
        return null;
    }

    return (
        <Image
            src={SVGIcon}
            width={width}
            height={height}
            className={className}
            alt={`${icon} icon`}
            onClick={onClick}
            style={{ 
                cursor: onClick ? "url('/assets/icons/pointer24.png') 12 0, pointer" : 'default',
                width: `${width}px`,
                height: `${height}px`,
                objectFit: 'contain'
            }}
        />
    );
};