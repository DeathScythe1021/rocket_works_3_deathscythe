import Button from "../components/Btn.jsx";
import SmCard from "../components/SmCard.jsx";

{
  /* 卡片資料 */
}
const products = [
    { title: "奇異果優格", price: "250", total: "500" },
    { title: "奇異果優格", price: "250", total: "500" },
    { title: "奇異果優格", price: "250", total: "500" },
    { title: "奇異果優格", price: "250", total: "500" },
    { title: "奇異果優格", price: "250", total: "500" },
    { title: "奇異果優格", price: "250", total: "500" },

];


function ShoppingPage() {
  return (
    <main className="flex justify-center w-full lg:px-[42px]">
        <div className="flex flex-col lg:flex-row  lg:gap-5 w-full lg:py-[60px]  justify-center  items-start">
      <section className="flex flex-col w-full max-w-[1320px] ">
        <h2 className=" py-[16px] w-full  flex justify-center items-center bg-primary-100 h2-text text-primary-600">
          您的購物車
        </h2>

        <div className="flex flex-col p-[30px] gap-[30px] lg:px-0">
          {/* 甜點卡片列表 */}

          {products.map((products, index) => (
            <SmCard
              key={index}
              title={products.title}
              price={products.price}
              total={products.total}
            />
          ))}
        </div>
      </section>
      {/* 訂單資訊 */}
      <section className="flex flex-col w-full lg:w-[300px]">
        
      <div className="flex flex-col justify-center items-center gap-4  lg:bg-primary-600 text-primary-600 lg:text-white py-[16px] px-[30px] lg:px-[22px] w-full  ">
        <h2 className="w-full flex justify-center items-center py-4 lg:p-0 lg:pb-4 h2-text lg:border-b-1 text-primary-600 lg:lg:text-white lg:border-white bg-primary-100  lg:bg-primary-600">
          訂單摘要
        </h2>

        <div className="flex flex-col  w-full ">
          <div className="flex w-full justify-between pb-2">
            <p className="text text-primary-600 lg:text-white">小計</p>
            <p className="text text-primary-600 lg:text-white">NT$ 2,700</p>
          </div>
          <div className="flex w-full justify-between pb-4">
            <p className="text text-primary-600 lg:text-white">運費</p>
            <p className="text text-primary-600 lg:text-white">NT$ 300</p>
          </div>
          <div className="flex w-full justify-between ">
            <p className="money-text text-primary-600 lg:text-white">總計</p>
            <p className="money-text text-primary-600 lg:text-white">NT$ 3,000</p>
          </div>
        </div>
      </div>
      <Button variant="secondary">結帳</Button>
      </section>
      </div>
    </main>
  );
}

export default ShoppingPage;
