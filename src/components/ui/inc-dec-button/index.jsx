/* eslint-disable react/prop-types */

const IncDecButton = ({quantity, incHandler, decHandler}) => {
  return (
    <div className="flex bg-slate-200 h-[30px] justify-center items-center text-xl">
    <div onClick={decHandler}  className="px-3 cursor-pointer">-</div>
    <div className="px-3">{quantity}</div>
    <div onClick={incHandler}  className="px-3 cursor-pointer">+</div>
  </div>
  )
}

export default IncDecButton