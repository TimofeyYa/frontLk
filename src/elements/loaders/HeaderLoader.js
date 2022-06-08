import React from "react"
import ContentLoader from "react-content-loader"

const HeaderLoader = (props) => (
  <ContentLoader 
    speed={2}
    width={251}
    height={22}
    viewBox="0 0 251 22"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="1" y="3" rx="7" ry="7" width="250" height="18" />
  </ContentLoader>
)

export default HeaderLoader;