import Button from "./Btn.jsx";

export default function Card({ title, subtitle }) {
  return (
    <>
    <div className="flex flex-col w-full">
        <div className="flex justify-between items-start h-[315px] w-full pl-[21px] pr-[24.2px] ">
            <div className=" [writing-mode:vertical-rl] [text-orientation:upright] tracking-[0.25rem]  lebel-text bg-primary-600 px-[10px] py-[10.5px]">本日精選</div>
            {/* <div></div>愛心 */}
        </div>

        <div className="flex w-full border-1 border-primary-100">
            <div className="flex justify-center items-center py-[13px] px-[38px] name-text text-primary-700 border-r-1 border-primary-100 w-3/5">{title}</div>
            <div className="flex justify-center items-center py-[14px] px-[25.4px] money-text  text-primary-700 w-2/5"> {subtitle}</div>
        </div>

        <Button varient='primary'>加入購物車</Button>
    </div>
 </>
  );
}