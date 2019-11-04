import Typography from "typography"
import bootstrapTheme from "typography-theme-moraga"
bootstrapTheme.headerFontFamily = ["arial", "helvetica", "sans-serif"]
const typography = new Typography(bootstrapTheme)
export const { scale, rhythm, options } = typography
export default typography
