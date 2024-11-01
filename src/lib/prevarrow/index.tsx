import { MdArrowBackIos } from 'react-icons/md'

function PrevArrow({onClick}:any) {
  return (
    <div>
        <button className='py-3 px-3 absolute top-48 -left-14 text-[25px] bg-mostly-desaturated-dark-cyan text-white rounded-full' onClick={onClick}>
            <MdArrowBackIos/>
        </button>
    </div>
  )
}

export default PrevArrow