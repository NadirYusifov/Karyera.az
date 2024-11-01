import { MdArrowForwardIos } from "react-icons/md";

function NextArrow({onClick}:any) {
  return (
    <div>
            <button className="py-3 px-3 inline-flex justify-center absolute top-48 -right-14  text-[25px] bg-mostly-desaturated-dark-cyan text-white rounded-full" onClick={onClick}>
            <MdArrowForwardIos/>
            </button>
    </div>
  )
}

export default NextArrow