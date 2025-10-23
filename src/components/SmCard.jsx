import Button from "./Btn.jsx";


export default function SmCard({ title, price,total,imgSrc }) {
  return (
    <>
    <div className="flex flex-col justify-center items-center lg:flex-row lg:gap-[38px] gap-[8.5px] lg:pb-5 lg:border-b-1 lg:border-primary-100">
        <div className="flex w-full  gap-4 lg:gap-[39px]">
        <img src={imgSrc} className="w-[157px] lg:w-[110px] lg:h-[110px] "/>
        <div className="flex lg:flex-row flex-col lg:justify-center lg:items-center gap-2 lg:gap-[39px]">
            <div>
                <h3 className="name-text text-primary-600">{title}</h3>
                <p className="lebel-text text-primary-600">NT${price}</p>
            </div>

            <div className="flex text">
                <div className="flex w-12 h-12 py-[13px] px-[19px] border-1 border-primary-100 text-primary-600 text hover:bg-primary-100">-</div>
                <div className="flex w-12 h-12 py-[13px] px-[19px] border-1 border-primary-100 text-primary-600 text">2</div>
                <div className="flex w-12 h-12 py-[13px] px-[19px] border-1 border-primary-100 text-primary-600 text  hover:bg-primary-100">+</div>
            </div>
        </div>
        </div>
            <div className="money-text w-full  text-primary-600 lg:border-y-0 border-y-1 border-primary-100 py-[8.5px] flex justify-end ]">NT${total}</div>
            <div className="hidden lg:flex">
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#8DA291">
            <path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"/></svg>
            </div>
    </div>

 </>
  );
}