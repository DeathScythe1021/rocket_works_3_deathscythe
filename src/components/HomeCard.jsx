export default function HomeCard({
  children,
  onClick,
  type = "button",
  variant = "primary",
  className = "",
  disabled = false,
  backgroundImage, // ✅ 從外層傳入圖片路徑
}) {
  // 共同樣式
  const baseStyles =
    "relative cursor-pointer flex w-1/3 h-full money-text lg:btn-text [writing-mode:vertical-rl] [text-orientation:upright] tracking-widest justify-center items-center overflow-hidden";

   // 文字樣式
  const textVariants = {
    primary: "text-primary-700 ",
    secondary: "text-white name-text font-light",
  };

  const overlayVariants = {
    primary: "bg-secondary-200/95 ",
    secondary: "bg-primary-600/95",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyles} ${className}`}
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* 半透明遮罩層 */}
      <div
        className={`absolute inset-0 ${
          overlayVariants[variant] || overlayVariants.primary
        }`}
      ></div>

      {/* 文字層（在最上面） */}
       <div className={`relative z-10 ${textVariants[variant] || textVariants.primary}`}>
        {children}
      </div>
    </button>
  );
}
