function ChurchIcon({ color = 'var(--color-primary)', size = '2rem' }) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      width={size}
      height={size}
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
      <g id="SVGRepo_iconCarrier">
        <path fillRule="evenodd" clipRule="evenodd" d="M23 14V6H25V14H23Z" fill={color}></path>
        <path fillRule="evenodd" clipRule="evenodd" d="M28 11L20 11L20 9L28 9L28 11Z" fill={color}></path>
        <path d="M6 28.5C6 27.5797 6.53902 26.7782 7.5 26.5L15 24V42H6C6 42 6 29.4203 6 28.5Z" fill={color}></path>
        <path d="M42 28.5C42 27.5797 41.461 26.7782 40.5 26.5L33 24V42H42C42 42 42 29.4203 42 28.5Z" fill={color}></path>
        <path fillRule="evenodd" clipRule="evenodd" d="M17 42V18.5C17 17.5 17.7778 17 17.7778 17L24 13L30.2222 17C30.2222 17 31 17.5 31 18.5V42H27V32C27 30.3431 25.6569 29 24 29C22.3431 29 21 30.3431 21 32V42H17Z" fill={color}></path>
      </g>
    </svg>
  );
}

export default ChurchIcon;