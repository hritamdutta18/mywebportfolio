// Creating dark & light themed variables

export const lightTheme= {
    body: "#F7FBFD",
    text: "#00000E",
    fontFamily: "'Source Sans Pro', sans-serif",
    bodyRgba : "247, 251, 253",
    textRgba: "0, 0, 14"
}

export const DarkTheme= {
    body: "#00000E",
    text: "#F7FBFD",
    fontFamily: "'Source Sans Pro', sans-serif",
    textRgba : "247, 251, 253",
    bodyRgba: "0, 0, 14"
}

// Media Queries (in em)
export const breakpoints = {
    sm: 20,
    md: 30,
    lg: 45,
    xl: 60,
    xxl:75
}
  
export const mediaQueries = key => {
    return style => `@media (max-width: ${key}em) { ${style} }`
}