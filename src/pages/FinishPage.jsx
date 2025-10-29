import { useNavigate } from "react-router-dom";
import React from "react";
import Button from "../components/Btn";

function FinishPage() {
  const navigate = useNavigate();
  // 頁面跳轉

  const handleClick = () => {
    navigate("/products"); 
  };
  return (
    <main className="flex flex-col justify-center items-center lg:px-[42px] w-full h-[583px] lg:h-[518px] lg:py-[210px]">
      <div className="flex flex-col justify-center items-center lg:gap-8 lg:py-[168px] lg:px-[375px] bg-[url('../assets/images/banner.avif')] bg-cover bg-center w-full  lg:w-[940px] h-[518px] lg:h-[460px]">
        <div className="flex flex-col justify-center items-center gap-[51px] w-full lg:w-[300px]">
          <div className="flex flex-col gap-[33px]">
          <div className="flex justify-between items-center relative w-[190px] h-[1px] bg-primary-400">
            <div className="flex justify-center items-center top-[-10px] w-5 h-5 border-1 border-primary-400 rounded-full bg-primary-600 ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="20px"
                viewBox="0 -960 960 960"
                width="20px"
                fill="#ffffff"
              >
                <path d="M389-267 195-460l51-52 143 143 325-324 51 51-376 375Z" />
              </svg>
            </div>
            <div className="flex justify-center items-center top-[-10px] w-5 h-5 border-1 border-primary-400 rounded-full bg-primary-600 ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="20px"
                viewBox="0 -960 960 960"
                width="20px"
                fill="#ffffff"
              >
                <path d="M389-267 195-460l51-52 143 143 325-324 51 51-376 375Z" />
              </svg>
            </div>
            <div className="flex justify-center items-center top-[-10px] w-5 h-5 border-1 border-primary-400 rounded-full bg-primary-600 ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="20px"
                viewBox="0 -960 960 960"
                width="20px"
                fill="#ffffff"
              >
                <path d="M389-267 195-460l51-52 143 143 325-324 51 51-376 375Z" />
              </svg>
            </div>
          </div>
          <h1 className="headline-2 ">付款成功</h1>
          </div>
          
          
          <Button variant="secondary" onClick={handleClick} special="hidden lg:flex ">繼續逛逛</Button>
        </div>
        
      </div>
       <Button variant="secondary" onClick={handleClick} special="flex lg:hidden" >繼續逛逛</Button>
    </main>
  );
}

export default FinishPage;
