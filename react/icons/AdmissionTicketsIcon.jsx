const React = require("react");
const AdmissionTicketsIcon = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 32 32"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g filter="url(#prefix__a)">
      <path
        fill="url(#prefix__b)"
        d="M29.305 19.4a1.14 1.14 0 1 1 0-2.28h.22c.26 0 .48-.21.48-.48v-1.27a.48.48 0 0 0-.48-.48h-.18c-.63 0-1.17-.49-1.18-1.12-.01-.64.5-1.16 1.14-1.16h.22c.26 0 .48-.21.48-.48v-1.56c0-.24-.18-.44-.42-.47a3.267 3.267 0 0 1-2.79-2.73.57.57 0 0 0-.56-.48H5.745c-.28 0-.52.2-.56.48a3.268 3.268 0 0 1-2.77 2.72c-.24.03-.42.23-.42.47v1.57c0 .26.21.48.48.48h.18c.63 0 1.17.49 1.18 1.12.01.64-.5 1.16-1.14 1.16h-.22a.48.48 0 0 0-.48.48v1.27c0 .26.21.48.48.48h.22a1.14 1.14 0 1 1 0 2.28h-.22a.48.48 0 0 0-.48.48v1.58c0 .24.18.44.42.47 1.42.19 2.55 1.3 2.77 2.71.04.27.28.47.56.47h20.51c.28 0 .52-.2.56-.47a3.246 3.246 0 0 1 2.76-2.71c.24-.03.42-.23.42-.47v-1.58a.48.48 0 0 0-.48-.48h-.21Z"
      />
    </g>
    <path
      fill="url(#prefix__c)"
      fillRule="evenodd"
      d="M6.26 11.98a2.284 2.284 0 0 1 2.285-2.285h14.91a2.285 2.285 0 0 1 2.285 2.285V20a2.284 2.284 0 0 1-2.285 2.285H20.45a.284.284 0 0 1-.21 0h-8.48a.284.284 0 0 1-.21 0H8.545A2.284 2.284 0 0 1 6.26 20v-8.02Zm14.37 9.735h2.825c.952 0 1.715-.771 1.715-1.715v-8.02c0-.944-.763-1.715-1.715-1.715H20.63v11.45Zm-.57-11.45v11.45h-8.12v-11.45h8.12Zm-11.515 0h2.825v11.45H8.545A1.714 1.714 0 0 1 6.83 20v-8.02c0-.944.763-1.715 1.715-1.715Z"
      clipRule="evenodd"
    />
    <path
      fill="#C43B66"
      d="M9.085 12.17c-.51 0-.93.42-.93.93v5.64c0 .51.42.93.93.93s.93-.42.93-.93V13.1c0-.52-.42-.93-.93-.93Z"
    />
    <path
      fill="#C53C66"
      d="M23.025 12.17c-.51 0-.93.42-.93.93v5.64c0 .51.42.93.93.93s.93-.42.93-.93V13.1c0-.52-.42-.93-.93-.93Z"
    />
    <path
      fill="#C43B66"
      d="M15.995 18.29a1.93 1.93 0 1 0 0-3.86 1.93 1.93 0 0 0 0 3.86Z"
    />
    <defs>
      <linearGradient
        id="prefix__b"
        x1={1.995}
        x2={30.005}
        y1={17.375}
        y2={17.375}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#ED3558" />
        <stop offset={1} stopColor="#FF51A8" />
      </linearGradient>
      <linearGradient
        id="prefix__c"
        x1={8.62}
        x2={24.307}
        y1={15.313}
        y2={15.313}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#C43B66" />
        <stop offset={1} stopColor="#C63C66" />
      </linearGradient>
      <filter
        id="prefix__a"
        width={29.01}
        height={18.72}
        x={1.495}
        y={6.39}
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
        <feColorMatrix
          in="SourceAlpha"
          result="hardAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feOffset dx={-0.5} />
        <feGaussianBlur stdDeviation={0.25} />
        <feComposite in2="hardAlpha" k2={-1} k3={1} operator="arithmetic" />
        <feColorMatrix values="0 0 0 0 1 0 0 0 0 0.55 0 0 0 0 0.769156 0 0 0 1 0" />
        <feBlend in2="shape" result="effect1_innerShadow_18_1325" />
        <feColorMatrix
          in="SourceAlpha"
          result="hardAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feOffset dx={0.5} />
        <feGaussianBlur stdDeviation={0.25} />
        <feComposite in2="hardAlpha" k2={-1} k3={1} operator="arithmetic" />
        <feColorMatrix values="0 0 0 0 0.909804 0 0 0 0 0.403922 0 0 0 0 0.427451 0 0 0 1 0" />
        <feBlend
          in2="effect1_innerShadow_18_1325"
          result="effect2_innerShadow_18_1325"
        />
        <feColorMatrix
          in="SourceAlpha"
          result="hardAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feOffset dy={-0.5} />
        <feGaussianBlur stdDeviation={0.5} />
        <feComposite in2="hardAlpha" k2={-1} k3={1} operator="arithmetic" />
        <feColorMatrix values="0 0 0 0 0.811765 0 0 0 0 0.164706 0 0 0 0 0.439216 0 0 0 1 0" />
        <feBlend
          in2="effect2_innerShadow_18_1325"
          result="effect3_innerShadow_18_1325"
        />
      </filter>
    </defs>
  </svg>
);
module.exports = AdmissionTicketsIcon;