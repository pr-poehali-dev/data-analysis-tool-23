export const Logo = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      viewBox="0 0 160 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      {/* Mountain/Peak icon */}
      <path
        d="M4 36L20 8L36 36H4Z"
        fill="white"
      />
      <path
        d="M12 36L20 20L28 36H12Z"
        fill="#0a0a0a"
      />
      {/* SKAL text */}
      <text
        x="46"
        y="30"
        fontFamily="Arial, sans-serif"
        fontSize="20"
        fontWeight="600"
        fill="white"
        letterSpacing="2"
      >
        SKAL
      </text>
      {/* VENTURES text */}
      <text
        x="47"
        y="38"
        fontFamily="Arial, sans-serif"
        fontSize="7"
        fontWeight="400"
        fill="white"
        opacity="0.5"
        letterSpacing="3"
      >
        VENTURES
      </text>
    </svg>
  );
};
