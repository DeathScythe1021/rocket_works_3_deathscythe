import { useNavigate } from "react-router-dom";
import Button from "../../components/Btn.jsx";

const Step2 = ({ onNext }) => {
  return (
    <section className=" bg-primary-600 w-full flex flex-col justify-between items-center lg:w-[460px]">
      <div className="p-[30px] w-full">
        <div className="flex w-full justify-between items-center pb-[30px]">
          <h1 className="h1-text ">付款</h1>
          {/* 三顆點點 */}

          <div className="flex justify-between items-center relative w-[190px] h-[1px] bg-primary-400">
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

            <div className="flex justify-center items-center top-[-10px] w-5 h-5 border-1 border-primary-400 rounded-full bg-primary-600 "></div>
          </div>
        </div>
        {/* 個資 */}
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-4">
            <div className="flex gap-[9px] w-full">
              <div className="flex flex-col w-full gap-2">
                <p className="money-text text-white">信用卡卡號</p>
                <div className="flex items-center gap-3 bg-primary-100 text-primary-400 py-[17px] px-[20px] shadow-md ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24px"
                    width="24px"
                    fill="#3F5D45"
                    viewBox="0 -960 960 960"
                  >
                    <path d="M864-696v432q0 29-21.15 50.5T792-192H168q-29 0-50.5-21.5T96-264v-432q0-29 21.5-50.5T168-768h624q29.7 0 50.85 21.5Q864-725 864-696Zm-696 72h624v-72H168v72Zm0 144v216h624v-216H168Zm0 216v-432 432Z" />
                  </svg>
                  <input
                    type="text"
                    placeholder="9012-3456-7890-1234"
                    className="flex-1 bg-transparent outline-none placeholder-primary-400 text-primary-600"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="flex gap-[9px] w-full">
            <div className="flex flex-col w-full gap-2">
              <p className="money-text text-white">姓名</p>
              <div className="flex gap-2 w-full">
                <div
                  contentEditable
                  className="flex justify-start text w-full py-[17px] px-[20px] bg-primary-100 text-primary-400"
                >
                  王
                </div>
                <div
                  contentEditable
                  className="flex justify-start text w-full py-[17px] px-[20px] bg-primary-100 text-primary-400"
                >
                  小明
                </div>
              </div>
            </div>
          </div>

          <div className="flex gap-[9px] w-full">
            <div className="flex flex-col w-full gap-2">
              <p className="money-text text-white">有效期限</p>
              <div className="flex  w-full gap-2">
                <div className="relative w-full">
                  <select
                    defaultValue=""
                    className="w-full py-[17px] px-[20px] bg-primary-100 text-primary-400 appearance-none"
                  >
                    {/* 提示字，只顯示在未選時，不會出現在展開選單 */}
                    <option value="" disabled hidden>
                      月
                    </option>

                    {/* 月份選項 */}
                    {Array.from({ length: 12 }, (_, i) => (
                      <option key={i + 1} value={i + 1}>
                        {i + 1}
                      </option>
                    ))}
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
                  <select
                    defaultValue=""
                    className="w-full py-[17px] px-[20px] bg-primary-100 text-primary-400 appearance-none"
                  >
                    <option value="" disabled hidden>
                      年
                    </option>
                    {Array.from({ length: 12 }, (_, i) => {
                      const year = new Date().getFullYear() + i; //new Date().getFullYear() 取得 今年的西元年
                      return (
                        //在箭頭函式中回傳一個 JSX 元素，用以渲染下拉選項
                        <option key={year} value={year}>
                          {year}
                        </option>
                      );
                    })}
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
              <div className="flex gap-[9px] w-full">
                <div className="flex flex-col w-full gap-2">
                  <p className="money-text text-white">背後末三碼</p>
                  <div className="flex justify-between w-[calc(50%-8px)] py-[17px] px-[20px] bg-primary-100 text-primary-400">
                    123
                  </div>
                </div>
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

export default Step2;
