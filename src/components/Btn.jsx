
export default function Button({
  children,
  onClick,
  type = "button",
  variant = "primary",
  className = "",
  disabled = false,
}) {

    // 共同樣式
  const baseStyles = " btn-text text-primary-700";

  // 定義不同 variant 的 Tailwind class
  const variants = {
    primary: "bg-primary-100 hover:bg-primary-600 hover:text-white ", // 加入購物車
    secondary: "bg-secondary-200 hover:bg-primary-600 ", //登入
    third: "bg-primary-100 text-primary-700 hover:bg-primary-200 border-b border-primary-100", // 甜點類別
    fourth:"bg-white font-light hover:font-semibold  text-primary-700 hover:bg-primary-600 hover:text-primary-100 active:bg-primary-600 active:text-primary-100"
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`
        ${className}
        flex justify-center items-center btn-text py-4 w-full h-[65px]
        ${variants[variant] || variants.primary} 
      `}
    >
      {children}
    </button>
  );
}
