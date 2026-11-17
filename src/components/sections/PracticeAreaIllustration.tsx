import type { ReactNode } from "react";

export type PracticeAreaVisual =
  | "military"
  | "family"
  | "deployment"
  | "conversation"
  | "benefits"
  | "location"
  | "equality"
  | "generations"
  | "property"
  | "separation"
  | "checklist"
  | "evidence"
  | "eye"
  | "order"
  | "shield"
  | "scales"
  | "vehicle";

const illustrations: Record<PracticeAreaVisual, ReactNode> = {
  military: (
    <>
      <path d="M94 42 152 64v52c0 39-25 67-58 82-33-15-58-43-58-82V64z" />
      <path d="m93 74 9 18 20 3-15 14 4 20-18-10-18 10 4-20-15-14 20-3z" />
    </>
  ),
  family: (
    <>
      <circle cx="60" cy="72" r="20" />
      <circle cx="135" cy="72" r="20" />
      <circle cx="98" cy="45" r="23" />
      <path d="M18 160c3-37 18-56 42-56s39 19 42 56M96 160c3-42 17-64 39-64s36 22 39 64M50 169c4-48 21-73 48-73s44 25 48 73" />
    </>
  ),
  deployment: (
    <>
      <rect x="42" y="42" width="116" height="125" rx="8" />
      <path d="M42 77h116M68 28v29M132 28v29M68 103h20M107 103h25M68 132h20M107 132h25" />
      <path d="m80 190 24-19-2 17 35 1-3 10-34-6 7 15z" />
    </>
  ),
  conversation: (
    <>
      <path d="M32 43h108a18 18 0 0 1 18 18v52a18 18 0 0 1-18 18H83l-34 25v-25h-17a18 18 0 0 1-18-18V61a18 18 0 0 1 18-18z" />
      <path d="M103 91h51a18 18 0 0 1 18 18v33a18 18 0 0 1-18 18h-7v23l-31-23h-9" />
      <path d="M45 79h84M45 103h59M118 119h27" />
    </>
  ),
  benefits: (
    <>
      <path d="M38 173h128M53 152v-35h24v35M92 152V84h24v68M131 152V53h24v99" />
      <path d="m42 93 37-30 29 10 42-34" />
      <circle cx="151" cy="39" r="8" />
    </>
  ),
  location: (
    <>
      <path d="M98 183s62-64 62-111a62 62 0 1 0-124 0c0 47 62 111 62 111z" />
      <circle cx="98" cy="72" r="22" />
      <path d="M54 165h88M69 184h58" />
    </>
  ),
  equality: (
    <>
      <circle cx="73" cy="105" r="48" />
      <circle cx="123" cy="105" r="48" />
      <path d="M76 96h44M76 116h44" />
    </>
  ),
  generations: (
    <>
      <circle cx="66" cy="66" r="22" />
      <circle cx="132" cy="68" r="20" />
      <path d="M22 166c4-43 19-66 44-66s40 23 44 66M104 166c3-39 13-59 31-59s30 20 33 59" />
      <path d="M157 128v45M148 173h18" />
    </>
  ),
  property: (
    <>
      <path d="m25 94 73-58 73 58M42 86v90h112V86M79 176v-54h39v54" />
      <circle cx="151" cy="49" r="23" />
      <path d="M151 36v26M143 43c2-7 15-7 16 0 1 5-4 7-8 8s-9 4-8 9c1 7 14 7 17 0" />
    </>
  ),
  separation: (
    <>
      <path d="M82 42a57 57 0 1 0 57 57M114 57a57 57 0 1 1-57 57" />
      <path d="m80 72 20 26-20 27M116 80l-20 20 20 20" />
      <path d="M80 99h16M100 99h17" />
    </>
  ),
  checklist: (
    <>
      <rect x="45" y="28" width="108" height="154" rx="7" />
      <path d="M72 68h54M72 103h54M72 138h54M59 66l5 5 9-11M59 101l5 5 9-11M59 136l5 5 9-11" />
      <path d="M80 28v-9h38v9" />
    </>
  ),
  evidence: (
    <>
      <path d="M38 57h59l16 17h48v88H38z" />
      <path d="M38 83h123M63 108h68M63 133h48" />
      <circle cx="137" cy="145" r="31" />
      <path d="m159 168 20 21" />
    </>
  ),
  eye: (
    <>
      <path d="M18 104s31-55 80-55 80 55 80 55-31 55-80 55-80-55-80-55z" />
      <circle cx="98" cy="104" r="28" />
      <circle cx="98" cy="104" r="9" />
    </>
  ),
  order: (
    <>
      <path d="M48 27h82l23 24v132H48zM130 27v27h23M69 81h60M69 105h38M69 129h35" />
      <circle cx="133" cy="147" r="20" />
      <path d="m124 147 6 6 13-14" />
    </>
  ),
  shield: (
    <>
      <path d="M98 28 161 51v55c0 41-28 69-63 87-35-18-63-46-63-87V51z" />
      <path d="m67 104 21 21 43-47" />
    </>
  ),
  scales: (
    <>
      <path d="M98 34v137M61 171h74M48 62h100M98 62 60 78M98 62l39 16M60 78 39 119M60 78l22 41M137 78l-22 41M137 78l22 41M28 119h66M104 119h66M70 171l28-28 28 28" />
      <path d="M83 34h30" />
    </>
  ),
  vehicle: (
    <>
      <path d="m30 131 15-48a18 18 0 0 1 17-12h70a18 18 0 0 1 17 12l15 48v31h-22v-18H52v18H30z" />
      <path d="M50 112h105M61 76l10 36M134 76l-10 36" />
      <circle cx="62" cy="144" r="11" />
      <circle cx="143" cy="144" r="11" />
      <path d="M22 190h152M44 204h108" />
    </>
  ),
};

export function PracticeAreaIllustration({ visual }: { visual: PracticeAreaVisual }) {
  return (
    <figure className={`practice-artwork practice-artwork-${visual}`} aria-hidden="true">
      <svg viewBox="0 0 640 420" focusable="false">
        <rect x="1" y="1" width="638" height="418" rx="3" fill="#101a2b" />
        <circle cx="525" cy="89" r="112" fill="#c29e61" fillOpacity=".08" />
        <path d="M0 332c106-44 194-26 287 11 109 43 219 56 353-8v85H0z" fill="#172438" />
        <path d="M48 52h90M48 66h54M490 350h94" fill="none" stroke="#f4f0e6" strokeOpacity=".16" />
        <g
          transform="translate(222 102)"
          fill="none"
          stroke="#c29e61"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="6"
        >
          {illustrations[visual]}
        </g>
        <circle cx="178" cy="298" r="5" fill="#c29e61" />
        <circle cx="465" cy="260" r="4" fill="#f4f0e6" fillOpacity=".45" />
      </svg>
    </figure>
  );
}
