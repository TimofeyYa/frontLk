import React from "react"
import ContentLoader from "react-content-loader"

const SumLoader = (props) => (
  <ContentLoader 
    speed={2}
    width={100}
    height={30}
    viewBox="0 0 100 32"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="0" y="2" rx="8" ry="8" width="100" height="32" />
  </ContentLoader>
)

export default SumLoader;