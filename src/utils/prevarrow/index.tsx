import { MdArrowBackIos } from 'react-icons/md'

function PrevArrow({onClick}:any) {
  return (
    <div>
        <button className='absolute top-48 -left-8 text-[20px] text-blue-8' onClick={onClick}>
            <MdArrowBackIos/>
        </button>
    </div>
  )
}

export default PrevArrow