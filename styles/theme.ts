import { DefaultTheme } from "styled-components";

export const theme: DefaultTheme = {
  color: {
    white: "#fff",
    footerColor: "#333333",
    mainColor: "#006BFF",
    backBright: "#FAFAFA",
    backDark: "#111112",
    textBlack: "#000000",
    textGray: "#3a3a3a",
    textGrayBright: "#959595",
    point1: "#748BFF",
    point2: "#82AAE3",
    point3: "#91D8E4",
    point4: "#BFEAF5",
    point5: "#EAFDFC",
    point6: "#E5EDFF",
    point7: "#3A8BFF",
    point8: "#8AC181",
    fontGray1: "#6B7280",
    fontGray2: "#EEEEEE",
    fontPurple1: "#42389D",
    back1: "#FBFDFF",
    back2: "#F5F4FD",
  },
  boxShadow: {
    normal: "0 3px 8px 0 rgb(0 0 0 / 10%)",
    purple: "0 3px 8px 0 #d6c9ff",
    blue: "0 3px 8px 0 #b3e2e6",
  },
  fontFamily: {
    bd: "LINESeedKR-Bd",
    rg: "LINESeedKR-Rg",
    th: "LINESeedKR-Th",
  },
  enfont: {
    bd: "Pretendard-SemiBold",
  },
  font: {
    bk: "Pretendard-Black",
    bd: "Pretendard-Bold",
    ed: "Pretendard-ExtraBold",
    el: "Pretendard-ExtraLight",
    l: "Pretendard-Light",
    m: "Pretendard-Medium",
    r: "Pretendard-Regular",
    sb: "Pretendard-SemiBold",
    t: "Pretendard-Thin",
  },
};

const customMediaQuery = (maxWidth: number): string =>
  `@media (max-width: ${maxWidth}px)`;

export const MIXINS = {
  // flex
  flexBox: (
    direction = "row",
    align = "center",
    justify = "center",
    gap = 0
  ) => `
    display: flex;
    flex-direction: ${direction};
    align-items: ${align};
    justify-content: ${justify};
    gap:${gap}px;

  `,

  // positions
  positionCenter: (type = "absolute") => {
    if (type === "absolute" || type === "fixed")
      return `
        position: ${type};
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
      `;
    return;
  },
  //defaultBox
  defaultBox: (width = "1920", padding = "120") => `
    width: 100%;
    max-width: ${width}px;
    margin: 0px ${padding}px;
`,
};

export const media = {
  custom: customMediaQuery,
  pc1920: customMediaQuery(1920),
  pc1600: customMediaQuery(1600),
  pc1024: customMediaQuery(1024),
  tablet: customMediaQuery(744),
  mobile: customMediaQuery(375),
  mobile2: customMediaQuery(480),
};
