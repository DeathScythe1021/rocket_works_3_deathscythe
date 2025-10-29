import { useNavigate } from "react-router-dom";
import Button from "../../components/Btn";

const Step1 = ({ onNext }) => {
  return (
    <section className=" bg-primary-600 w-full flex flex-col justify-between items-center lg:w-[460px] ">
      <div className="p-[30px] w-full">
        <div className="flex w-full justify-between items-center pb-[30px]">
          <h1 className="h1-text ">運送</h1>
          {/* 三顆點點 */}

          <div className="flex justify-between items-center relative w-[190px] h-[1px] bg-primary-400">
            <div className="flex justify-center items-center top-[-10px] w-5 h-5 border-1 border-white rounded-full bg-primary-600 ">
              <div className="w-3 h-3  bg-white rounded-full"></div>
            </div>
            <div className="flex justify-center items-center top-[-10px] w-5 h-5 border-1 border-primary-400 rounded-full bg-primary-600 "></div>

            <div className="flex justify-center items-center top-[-10px] w-5 h-5 border-1 border-primary-400 rounded-full bg-primary-600 "></div>
          </div>
        </div>
        {/* 個資 */}
        <div className="flex flex-col gap-4">
          <div className="flex gap-[9px] w-full">
            <div className="flex flex-col w-full gap-2">
              <p className="money-text text-white">姓名</p>
              <div className="flex justify-start text w-full py-[17px] px-[20px] bg-primary-100 text-primary-400">
                王
              </div>
            </div>
            <div className="flex flex-col w-full gap-2">
              <p className="money-text text-white">名字</p>
              <div className="flex justify-start w-full py-[17px] px-[20px] bg-primary-100 text-primary-400">
                小明
              </div>
            </div>
          </div>
          <div className="flex flex-col w-full gap-2">
            <p className="money-text text-white">電話</p>
            <div className="flex justify-start w-full py-[17px] px-[20px] bg-primary-100 text-primary-400">
              0912-345-678
            </div>
          </div>
          <div className="flex gap-[9px] w-full">
            <div className="flex flex-col w-full gap-2">
              <p className="money-text text-white">地址</p>
              <div className="flex  w-full gap-2">
                <div className="relative w-full">
                  <select className="w-full py-[17px] px-[20px] bg-primary-100 text-primary-400 appearance-none ">
                    <option value="kaohsiung">高雄市</option>
                    <option value="taipei">臺北市</option>
                    <option value="taichung">臺中市</option>
                    <option value="tainan">臺南市</option>
                    <option value="taoyuan">桃園市</option>
                  </select>
                  <div className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="24px"
                      viewBox="0 -960 960 960"
                      width="15px"
                      fill="#3F5D45"
                    >
                      <path d="M480-80 240-320l57-57 183 183 183-183 57 57L480-80ZM298-584l-58-56 240-240 240 240-58 56-182-182-182 182Z" />
                    </svg>
                  </div>
                </div>
                <div className="relative w-full">
                  <select className="w-full py-[17px] px-[20px] bg-primary-100 text-primary-400 appearance-none ">
                    <option value="xinxing">新興區</option>
                    <option value="qianjin">前金區</option>
                    <option value="lingya">苓雅區</option>
                    <option value="yancheng">鹽埕區</option>
                    <option value="zuoying">左營區</option>
                  </select>
                  <div className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="24px"
                      viewBox="0 -960 960 960"
                      width="15px"
                      fill="#3F5D45"
                    >
                      <path d="M480-80 240-320l57-57 183 183 183-183 57 57L480-80ZM298-584l-58-56 240-240 240 240-58 56-182-182-182 182Z" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="flex justify-start w-full py-[17px] px-[20px] bg-primary-100 text-primary-400">
                幸福路 520 號
              </div>
            </div>
          </div>
        </div>
      </div>
      <Button variant="secondary" onClick={onNext}>
        下一步
      </Button>
    </section>
  );
};

export default Step1;
