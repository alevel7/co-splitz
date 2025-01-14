import React, { ReactNode } from 'react'

interface AnchorButtonProps {
  label: string | ReactNode;
//   onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
//   disabled?: boolean;
//   outline?: boolean;
//   small?: boolean;
//   type?: "button" | "submit";
//   loading?: boolean;
//   variant?:
//     | "primary"
//     | "danger"
//     | "secondary"
//     | "neutral"
//     | "transparent"
//     | "danfo"
//     | "transparentBorder";
//   size?: "small" | "medium" | "large";
//   customClass?: string; // Must be a tailwind class
//   leftAccessory?: ReactNode;
//   rightAccessory?: ReactNode;
}

const AnchorButton = ({label}: AnchorButtonProps ) => {
  return (
    <a className="bg-torquoise text-white h-10 w-32 rounded-xl font-bold flex justify-center items-center cursor-pointer disabled:opacity-50">
      <span>{label}</span>
    </a>
  );
};

export default AnchorButton
