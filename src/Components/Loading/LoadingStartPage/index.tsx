import { CSSProperties } from "react"
import { HashLoader } from "react-spinners"

const override: CSSProperties = {
    display: "block",
}

function LoadingSpinner() {

  return (
    <>
    <div className="flex justify-center items-center h-screen">
        <HashLoader 
        color="#194C6F"
        cssOverride={override}
        size={80}
        /> 
    </div>
    </>
  )
}

export default LoadingSpinner