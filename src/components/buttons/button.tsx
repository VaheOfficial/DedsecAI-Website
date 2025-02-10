'use client';

import { Icon } from '../svg/svg.container';

interface ButtonWithIconProps {
    text: string;
    icon?: string;  // Changed to string for icon name
    onClick?: () => void;
    variant?: 'primary' | 'secondary';
    className?: string;
    height?: number;
    width?: number;
}

const ButtonWithIcon: React.FC<ButtonWithIconProps> = ({
    text,
    icon,
    onClick,
    variant = 'primary',
    className = '',
    height = 24,
    width = 24,
}) => {
    return (
        <button
            type="button"
            onClick={onClick}
            className={`flex items-center justify between gap-2 px-4 py-2 rounded-full ${
                variant === 'primary' 
                    ? 'bg-[#070F2B] text-white hover:bg-[#0D1A4A]' 
                    : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
            } ${className}`}
        >
            {icon && <Icon icon={icon} width={width} height={height} className={`w-[${width}px] h-[${height}px]`} />}
            <span className='font-tempesta_five text-nowrap text-center justify-center text-white-white'>{text}</span>
        </button>
    );
};

export default ButtonWithIcon;