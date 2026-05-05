const BotanicalCorner = ({ className = "" }: { className?: string }) => (
  <svg
    viewBox="0 0 120 120"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M10 110 Q 20 60 60 40 Q 40 70 35 110"
      stroke="currentColor"
      strokeWidth="0.8"
      fill="none"
      opacity="0.5"
    />
    <path
      d="M5 110 Q 30 80 80 30 Q 50 60 25 110"
      stroke="currentColor"
      strokeWidth="0.6"
      fill="none"
      opacity="0.4"
    />
    <path
      d="M60 40 Q 70 35 75 25"
      stroke="currentColor"
      strokeWidth="0.6"
      fill="none"
      opacity="0.4"
    />
    <path
      d="M80 30 Q 85 20 82 10"
      stroke="currentColor"
      strokeWidth="0.5"
      fill="none"
      opacity="0.35"
    />
    <circle cx="75" cy="25" r="2" fill="currentColor" opacity="0.2" />
    <circle cx="82" cy="10" r="1.5" fill="currentColor" opacity="0.2" />
    <path
      d="M35 110 Q 38 90 50 75 Q 42 88 40 110"
      stroke="currentColor"
      strokeWidth="0.5"
      fill="none"
      opacity="0.3"
    />
  </svg>
);

export default BotanicalCorner;
