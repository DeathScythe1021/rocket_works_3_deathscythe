   import bgImage from '../assets/images/product_page_banner.avif';
   import Button from '../components/Btn.jsx';
   import Card from '../components/Card.jsx';

   import right from'../assets/images/arrow_right.png';
   import left from'../assets/images/arrow_left.png';

   {/* 卡片資料 */}
   const products = [
    { title: '奇異果優格', subtitle: 'NT$250' },
    { title: '焦糖馬卡龍', subtitle: 'NT$150' },
    { title: '藍莓派', subtitle: 'NT$130' },
    { title: '藍莓派', subtitle: 'NT$130' },
    { title: '藍莓派', subtitle: 'NT$130' },
    { title: '藍莓派', subtitle: 'NT$130' },
    
  ];

   export default function ProductPage() {
  return (
    <>
    <main className='flex flex-col lg:px-13  pb-[30px]'>
        {/* banner */}
        <section className="bg-cover bg-center  h-[277px] pr-[30px] pt-[30px] w-full flex justify-end "
        style={{ backgroundImage: `url(${bgImage})` }}>

           <div className="relative w-[60px] h-[218.69px] headline flex">
            <h3 className="absolute right-0 top-0">想吃甜點——</h3>
            <h3 className="absolute left-0 bottom-0">是不需要理由的。</h3>
            </div>
        </section>

        {/* product_list DT=橫 MB=直*/}
      <section className='flex flex-col lg:justify-between w-full lg:flex-row lg:gap-5 lg:py-[60px] '>
        <div className='flex flex-col  w-full lg:w-[300px]'>
          <div className='flex justify-center items-center h-[65px] bg-primary-700 btn-text text-primary-100'>甜點類別</div>
          <Button variant="third" className='bg-primary-100'>所有甜點（48）</Button>
          <Button variant="third" >本日精選（10）</Button>
          <Button variant="third" >人氣推薦（26）</Button>
          <Button variant="third" >新品上市（12）</Button>
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-[30px] px-[30px] py-[30px]'>
        {/* 甜點卡片列表 */}
          
          {products.map((product, index) => (
            <Card
            key={index}
            title={product.title}
            subtitle={product.subtitle}
          />
          ))}
         
        {/* 頁數列表 */}

          <div className='w-full flex justify-center items-center  lg:col-start-3  md:col-start-2  '>
            <Button variant="fourth" className='hover:bg-primary-400 w-[60px] h-[60px] border-1 border-primary-100 money-text flex justify-center items-center'><img src={left} /></Button>
            <Button className='font-semibold bg-primary-600 text-primary-100  h-[60px] border-1 border-primary-100 money-text'>1</Button>
            <Button variant="fourth" className='h-[60px] border-1 border-primary-100 money-text'>2</Button>
            <Button variant="fourth" className='h-[60px] border-1 border-primary-100 money-text'>3</Button>
            <Button variant="fourth" className='hover:bg-primary-400 h-[60px] border-1 border-primary-100 money-text flex justify-center items-center'><img src= {right} /></Button>
            
          </div>

        </div>
        
      </section>

      
    


</main>
 </>
  );
}

