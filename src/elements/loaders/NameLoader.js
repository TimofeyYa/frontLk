import React from "react"
import ContentLoader from "react-content-loader"

const NameLoader = (props) => (
    <ContentLoader 
    speed={2}
    width={232}
    height={33}
    viewBox="0 0 232 33"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="1" y="1" rx="7" ry="7" width="160" height="31" />
  </ContentLoader>
)

export default NameLoader;