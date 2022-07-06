import React from "react"
import ContentLoader from "react-content-loader"

const NumbersLoader = (props) => (
  <ContentLoader 
    speed={2}
    width={56}
    height={20}
    viewBox="0 0 56 20"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="0" y="0" rx="8" ry="8" width="56" height="20" />
  </ContentLoader>
)

export default NumbersLoader;