import React from 'react'

interface CustomButtonProps {
  text: string;
  bgColor?: string;
  textColor?: string;
  size?: 'small' | 'medium' | 'large';
  onClick?: () => void;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  text,
  bgColor = 'blue',
  textColor = 'white',
  size = 'medium',
  onClick
}) => {
  const sizeStyles = {
    small: { padding: '5px 10px', fontSize: '12px' },
    medium: { padding: '10px 20px', fontSize: '16px' },
    large: { padding: '15px 30px', fontSize: '20px' }
  };

  const style = {
    backgroundColor: bgColor,
    color: textColor,
    ...sizeStyles[size],
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer'
  };

  return (
    <button style={style} onClick={onClick}>
      {text}
    </button>
  );
};

export default CustomButton;
