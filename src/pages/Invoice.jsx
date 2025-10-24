import React from "react";
import Button from "../components/Btn";
import p1 from "../assets/images/p-1.png";

function InvoicePage() {
  return (
    <main className="flex lg:py-[65px] lg:px-[122px] gap-5  justify-center">
      <section className=" bg-primary-600 w-full flex flex-col  items-center lg:h-[491px] lg:w-[460px]">
        
          <div className="p-[30px] w-full flex flex-col gap-[30px]">
            <div className="flex w-full flex-col justify-center items-center ">
            <div className="flex w-full justify-between items-center pb-[30px]">
              <h1 className="h1-text ">發票</h1>
              {/* 三顆點點 */}

              <div className="flex justify-between items-center relative w-[153px] lg:w-[190px] h-[1px] bg-white">
                <div className="flex justify-center items-center top-[-10px] w-5 h-5 border-1 border-white rounded-full bg-white ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24px"
                    viewBox="0 -960 960 960"
                    width="24px"
                    fill="#3F5D45"
                  >
                    <path d="M389-267 195-460l51-52 143 143 325-324 51 51-376 375Z" />
                  </svg>
                </div>
                <div className="flex justify-center items-center top-[-10px] w-5 h-5 border-1 border-white rounded-full bg-white ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24px"
                    viewBox="0 -960 960 960"
                    width="24px"
                    fill="#3F5D45"
                  >
                    <path d="M389-267 195-460l51-52 143 143 325-324 51 51-376 375Z" />
                  </svg>
                </div>

                <div className="flex justify-center items-center top-[-10px] w-5 h-5 border-1 border-white rounded-full bg-primary-600 ">
                  <div className="w-3 h-3  bg-white rounded-full"></div>
                </div>
              </div>
                
                </div>
                <div className="w-full flex ">
                    <div className="w-full flex justify-center items-center lg:px-[55px] py-[14px] bg-primary-100 money-text text-primary-600 border-1 border-primary-100">電子發票</div>
                    <div className="w-full flex justify-center items-center lg:px-[55px] py-[14px] bg-primary-600 money-text text-primary-100 border-1 border-primary-100">郵寄發票</div>

                </div>
            </div>
            {/* 個資 */}
            <div className="flex flex-col gap-4">
              <div className="flex flex-col w-full gap-2">
                <p className="money-text text-white">信用卡卡號</p>
                <div className="flex justify-between text w-full py-[17px] px-[20px] bg-primary-100 text-primary-400">
                  <p>9012-3456-7890-1234</p>
                </div>
              </div>
              <div className="flex flex-col w-full gap-2">
                <p className="money-text text-white">信用卡卡號</p>
                <div className="flex justify-between text w-full py-[17px] px-[20px] bg-primary-100 text-primary-400">
                  <p>9012-3456-7890-1234</p>
                </div>
              </div>
            
          </div>

        </div>
        <Button variant="secondary">下一步</Button>
      </section>

      <section className="lg:flex flex-col hidden  w-[300px] gap-5">
        <div className="flex flex-col justify-center items-center gap-4   w-[300px] border-1 border-primary-100 ">
          <h2 className="w-full flex justify-center items-center py-4 h2-text bg-primary-100 text-primary-400  ">
            訂單摘要
          </h2>

          <div className="flex flex-col  w-full py-4 px-5">
            <div className="flex w-full justify-between pb-2">
              <p className="text text-primary-400 ">小計</p>
              <p className="text text-primary-400 ">NT$ 2,700</p>
            </div>
            <div className="flex w-full justify-between pb-4">
              <p className="text text-primary-400 ">運費</p>
              <p className="text text-primary-400 ">NT$ 300</p>
            </div>
            <div className="flex w-full justify-between ">
              <p className="money-text text-primary-400 ">總計</p>
              <p className="money-text text-primary-400 ">NT$ 3,000</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center gap-4   w-[300px] border-1 border-primary-100 ">
          <h2 className="w-full flex justify-center items-center py-4 h2-text bg-primary-100 text-primary-400  ">
            購物清單
          </h2>
          <div className="flex flex-col py-4 px-5  gap-4">
            <div className="flex flex-row gap-5">
              <img src={p1} className="w-[120px] h-[80px] object-cover" />
              <div className="flex flex-col justify-center items-start">
                <p className="text text-primary-400">焦糖馬卡龍（2）</p>
                <p className="money-text text-primary-400">NT$ 900</p>
              </div>
            </div>
            <div className="flex flex-row gap-5">
              <img src={p1} className="w-[120px] h-[80px] object-cover" />
              <div className="flex flex-col justify-center items-start">
                <p className="text text-primary-400">焦糖馬卡龍（2）</p>
                <p className="money-text text-primary-400">NT$ 900</p>
              </div>
            </div>
            <div className="flex flex-row gap-5">
              <img src={p1} className="w-[120px] h-[80px] object-cover" />
              <div className="flex flex-col justify-center items-start">
                <p className="text text-primary-400">焦糖馬卡龍（2）</p>
                <p className="money-text text-primary-400">NT$ 900</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default InvoicePage;
