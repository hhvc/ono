const Logo = () => (
    <svg
        viewBox="0 0 178 48"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        className="brand-wordmark"
    >
        {/* Isotipo: círculo oscuro + línea cian + letras ONO */}
        <circle cx="24" cy="24" r="22" fill="#0B1220" />
        <line x1="8" y1="24" x2="40" y2="24" stroke="#22D3EE" strokeWidth="2.5" strokeLinecap="round" />
        <text x="13" y="33" textAnchor="middle" fontSize="23" fill="#FFFFFF" fontFamily="Space Grotesk, Manrope, sans-serif" fontWeight="600">O</text>
        <text x="24" y="30" textAnchor="middle" fontSize="23" fill="#FFFFFF" fontFamily="Space Grotesk, Manrope, sans-serif" fontWeight="600">n</text>
        <text x="35" y="33" textAnchor="middle" fontSize="23" fill="#FFFFFF" fontFamily="Space Grotesk, Manrope, sans-serif" fontWeight="600">O</text>
        {/* Wordmark */}
        <text
            x="58"
            y="31"
            fontSize="21"
            fontFamily="Space Grotesk, Manrope, sans-serif"
            fontWeight="700"
            letterSpacing="-0.04em"
            fill="var(--secondary, #16352f)"
        >
            ono.ar
        </text>
    </svg>
);

export default Logo;
