import Button from "./Btn.jsx";
import heart from "../assets/images/favorite_border.png";

export default function Card({ title, subtitle, img }) {
  return (
    <>
      <div className="flex flex-col justify-center lg:w-[300px] w-[315px]">
        <div className="flex flex-col justify-start lg:w-[300px] w-[315px] h-[315px] lg:h-[300px]"
          style={{
            backgroundImage: `url(${img})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="w-full  flex justify-between items-start pl-[21px] pr-[24.2px]">
            <div className=" [writing-mode:vertical-rl] [text-orientation:upright] tracking-[0.25rem]  lebel-text bg-primary-600 px-[10px] py-[10.5px]">
              本日精選
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-heart w-6 h-auto text-primary-600 mt-4"
              viewBox="0 0 16 16"
            >
              <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15" />
            </svg>
          </div>
           </div>

          <div className="flex w-full border-1 border-primary-100">
            <div className="flex justify-center items-center py-[13px] name-text text-primary-700 border-r-1 border-primary-100 w-3/5">
              {title}
            </div>
            <div className="flex justify-center items-center py-[14px] px-[25.4px] money-text  text-primary-700 w-2/5">
              {" "}
              {subtitle}
            </div>
          </div>
       

        <Button variant="primary">加入購物車</Button>
      </div>
    </>
  );
}
