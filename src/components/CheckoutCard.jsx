import p1 from "../assets/images/p-1.png";

export default function CheckoutCard( ) {
  return (
    <>
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

      </>
  );
}