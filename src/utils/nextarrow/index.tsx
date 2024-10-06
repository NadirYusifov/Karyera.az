import { MdArrowForwardIos } from "react-icons/md";

function NextArrow({onClick}:any) {
  return (
    <div>
            <button className="absolute top-48 -right-8 text-[20px] text-blue-8" onClick={onClick}>
            <MdArrowForwardIos/>
            </button>
    </div>
  )
}

export default NextArrow