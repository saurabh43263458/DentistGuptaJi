export default function Button({
  children,
  variant = "primary",
  size = "md",
  className = "",
  href,
  onClick,
  type = "button",
  disabled = false,
  ...props
}) {
  const baseStyles =
    "inline-flex items-center justify-center font-medium rounded-full transition-all duration-200 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#1F5A4A] select-none cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed disabled:active:scale-100";

  const sizeStyles = {
    sm: "px-4 py-2 text-xs min-h-[38px]",
    md: "px-6 py-3 text-sm min-h-[46px]",
    lg: "px-8 py-3.5 text-base min-h-[52px]",
  };

  const variantStyles = {
    primary:
      "bg-[#1F5A4A] hover:bg-[#17483B] text-white shadow-pill hover:shadow-lg hover:-translate-y-0.5",
    secondary:
      "bg-[#DCEFF7] hover:bg-[#CBE7F3] text-[#0F3B4A] hover:-translate-y-0.5",
    outline:
      "border-1.5 border-[#1F5A4A] text-[#1F5A4A] hover:bg-[#D6EFE3] hover:-translate-y-0.5",
    mint:
      "bg-[#B7E4CC] hover:bg-[#A3DCBE] text-[#1F5A4A] font-semibold hover:-translate-y-0.5 shadow-sm",
    ghost:
      "text-[#0F3B4A] hover:bg-[#DCEFF7]/60",
  };

  const combinedClasses = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`;

  if (href) {
    return (
      <a href={href} className={combinedClasses} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={combinedClasses}
      {...props}
    >
      {children}
    </button>
  );
}

