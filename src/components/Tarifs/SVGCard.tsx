import React from "react";

const SVGCard = () => (
  <svg
    width={226}
    height={167}
    viewBox="0 0 226 167"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g filter="url(#a)">
      <rect
        x={21.323}
        y={21.323}
        width={182.562}
        height={124.354}
        rx={14.552}
        fill="#fff"
        stroke="#D9D9D9"
        strokeWidth={2.646}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M113.927 110.789c-6.305 5.441-14.485 8.726-23.422 8.726-19.943 0-36.11-16.354-36.11-36.528s16.167-36.529 36.11-36.529c8.938 0 17.117 3.285 23.422 8.726 6.305-5.44 14.485-8.726 23.422-8.726 19.943 0 36.109 16.355 36.109 36.529 0 20.174-16.166 36.528-36.109 36.528-8.937 0-17.117-3.285-23.422-8.726Z"
        fill="#ED0006"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M113.927 110.789c7.764-6.7 12.687-16.67 12.687-27.802 0-11.133-4.923-21.103-12.687-27.803 6.305-5.44 14.485-8.726 23.422-8.726 19.943 0 36.109 16.355 36.109 36.529 0 20.174-16.166 36.528-36.109 36.528-8.937 0-17.117-3.285-23.422-8.726Z"
        fill="#F9A000"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M113.927 110.789c7.764-6.7 12.687-16.67 12.687-27.802 0-11.133-4.923-21.102-12.687-27.802-7.764 6.7-12.687 16.669-12.687 27.802 0 11.132 4.923 21.102 12.687 27.802Z"
        fill="#FF5E00"
      />
    </g>
    <defs>
      <filter
        id="a"
        x={0}
        y={0}
        width={225.208}
        height={167}
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset />
        <feGaussianBlur stdDeviation={10} />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.07 0" />
        <feBlend
          in2="BackgroundImageFix"
          result="effect1_dropShadow_353_4479"
        />
        <feBlend
          in="SourceGraphic"
          in2="effect1_dropShadow_353_4479"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
);

export default SVGCard;
