import React, { useState } from "react";
import Button from "../components/Btn";
import Card from "../components/Card";
import HomeImg from "../assets/images/Homepage.avif";
import BannerImg from "../assets/images/banner-1.avif";
import HomeCard from "../components/HomeCard";
import Img1 from '../assets/images/1.avif';
import Img2 from '../assets/images/2.avif';
import Img3 from '../assets/images/3.avif';
import CardImg1 from  '../assets/images/p-1.png';
import CardImg2 from  '../assets/images/p-2.png';
import CardImg3 from  '../assets/images/p-3.png';

{
  /* 卡片資料 */
}
const products = [
  { title: "奇異果優格", subtitle: "NT$250", img: CardImg1},
  { title: "焦糖馬卡龍", subtitle: "NT$150",img: CardImg2 },
  { title: "藍莓派", subtitle: "NT$130",img: CardImg3 },
];

const card = [
  { title: "本日精選", backgroundImage: Img1 },
  { title: "人氣推薦", backgroundImage: Img2 },
  { title: " 新品上市", backgroundImage: Img3 },
];

export default function HomePage() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  
  return (
    <main>
      <section className="relative flex flex-col  items-center w-full lg:h-[713px] lg:px-13 lg:mb-[60px]">
        <img src={BannerImg} className="lg:h-[496px] h-[277px] w-full object-cover " />
        <div className="lg:absolute bottom-0 top-[457px] flex lg:h-[256px] lg:w-200 w-full h-[180px]">
          {card.map((card, index) => (
            <HomeCard
              key={index}
              variant={selectedIndex === index ? "primary" : "secondary"} // ✅ 動態決定顏色
              backgroundImage={card.backgroundImage} // 如果每個有不同背景
              onClick={() => setSelectedIndex(index)} // ✅ 點擊切換選中
              className={index === 2 ? "border-0" : "border-r border-primary-100 "} // 第三張不加 border
            >
              {card.title}
            </HomeCard>
          ))}
        </div>
      </section>
      {/* 內文介紹 */}
      <section className="flex flex-col gap-[30px] lg:gap-[105px] w-full">
        <div className=" flex justify-center  items-center lg:h-[420px] lg:bg-primary-100 w-full ">
          <div className="lg:justify-between justify-center items-center flex flex-col lg:flex-row-reverse w-full h-full max-w-[1320px] lg:px-[42px]">
            <div className="lg:relative flex flex-col justify-center items-center headline-2 lg:text-[40px] py-[30px] gap-3 text-[30px] lg:[writing-mode:vertical-rl] lg:[text-orientation:upright] lg:w-[88px] lg:h-[430px]">
              <h1 className="lg:absolute right-0 top-[-17px]">為什麼——</h1>
              <h1 className="lg:absolute right-[54px] top-0">選擇了做甜點？</h1>
            </div>
            <img
              src={HomeImg}
              className=" h-[250px] w-full object-cover lg:order-3 lg:w-[460px] lg:h-[460px]  lg:left-0"
            />
            <div className="lg:right-60 flex p-[30px] text  bg-primary-100 lg:order-2 lg:py-[70px] lg:h-full ">
              <p className="lg:[writing-mode:vertical-rl] lg:[text-orientation:upright] lg:leading-[40px] ">
                青山依舊在，幾度夕陽紅。慣看秋月春風。一壺濁酒喜相逢，浪花淘盡英雄。是非成敗轉頭空，滾滾長江東逝水，白髮漁樵江渚上，古今多少事，都付笑談中。{" "}
                <br />
                <br />
                是非成敗轉頭空，青山依舊在，幾度夕陽紅。白髮漁樵江渚上，古今多少事，都付笑談中。
              </p>
            </div>
          </div>
        </div>
        <div className=" flex justify-center  items-center lg:h-[420px] lg:bg-primary-100 w-full ">
          <div className="lg:justify-between justify-center items-center flex flex-col lg:flex-row-reverse w-full h-full max-w-[1320px] lg:px-[42px]">
            <div className="lg:relative flex flex-col justify-center items-center headline-2 lg:text-[40px] py-[30px] gap-3 text-[30px] lg:[writing-mode:vertical-rl] lg:[text-orientation:upright] lg:w-[88px] lg:h-[430px] lg:order-2">
              <h1 className="lg:absolute right-0 top-[-17px]">為什麼——</h1>
              <h1 className="lg:absolute right-[54px] top-0">選擇了做甜點？</h1>
            </div>
            <img
              src={HomeImg}
              className="lg:order-1 h-[250px] w-full object-cover  lg:w-[460px] lg:h-[460px]  lg:left-0"
            />
            <div className="lg:right-60 flex p-[30px] text  bg-primary-100 lg:order-2 lg:py-[70px] lg:h-full ">
              <p className="lg:[writing-mode:vertical-rl] lg:[text-orientation:upright] lg:leading-[40px] ">
                青山依舊在，幾度夕陽紅。慣看秋月春風。一壺濁酒喜相逢，浪花淘盡英雄。是非成敗轉頭空，滾滾長江東逝水，白髮漁樵江渚上，古今多少事，都付笑談中。{" "}
                <br />
                <br />
                是非成敗轉頭空，青山依舊在，幾度夕陽紅。白髮漁樵江渚上，古今多少事，都付笑談中。
              </p>
            </div>
          </div>
        </div>

        <div className="flex justify-center items-center ">
          <div className="lg:relative flex flex-col justify-center items-center headline-2 lg:text-[40px] py-[30px] gap-3 text-[30px] lg:[writing-mode:vertical-rl] lg:[text-orientation:upright] lg:w-[88px] lg:h-[430px] lg:order-2">
            <h1 className="lg:absolute right-0 top-[-17px]">想吃甜點——</h1>
            <h1 className="lg:absolute right-[54px] top-0">是不需要理由的。</h1>
          </div>
        </div>
      </section>
      {/* 卡片 */}
      <section className="w-full lg:pb-[42px] overflow-x-auto flex lg:justify-center justify-start pb-[30px]">
        <div className="flex justify-between gap-5 lg:px-13 px-[30px] whitespace-nowrap">
          {/* 甜點卡片列表 */}

          {products.map((product, index) => (
            <Card
              key={index}
              img={product.img}
              title={product.title}
              subtitle={product.subtitle}
            />
          ))}
        </div>
      </section>
    </main>
  );
}
