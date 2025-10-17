import { Link } from "react-router-dom" 
/*從react的react-router-dom 取出link*/
import cartImg from '../assets/images/shopping_cart.png';
import menu from '../assets/images/dehaze-24px.png';

    export default function Navbar() {
    return (
        <>
    <nav className="flex lg:px-[42px] lg:py-[30px] py-[33px] px-[30px]  p-0 justify-between items-center text-[var(--color-primary-600)]">
         {/* 手機選單 */}
         <img src={menu} alt="menu" className="lg:hidden" />
        {/* 左邊 */}
         <div className="flex gap-[8.27px] justify-center items-center">
            <img src="https://raw.githubusercontent.com/hexschool/webLayoutTraining1st/refs/heads/master/student-week1/logotype-sm-dark.svg" alt="logo-sm" className="lg:hidden flex w-[114.14px] h-auto object-contain"/>
            <img src="https://raw.githubusercontent.com/hexschool/webLayoutTraining1st/refs/heads/master/student-week1/logo-all-dark.svg" alt="logo-lg" className="hidden lg:flex lg:w-[219.49px] h-auto w-[114.14px]" />
        </div> 

        {/* 右半邊 */}
        <div className="flex gap-[79px]">
        {/*右邊列表*/ }
        <div className="hidden lg:flex text-[16px] gap-[60px] justify-center items-center font-semibold">
            <span>首頁</span>
             <Link to="/product">甜點</Link>
            <Link to="/login">登入</Link> 
            
        </div>

        { /*購物車*/ }
        
        <img src={cartImg} alt="cart"  />

        </div>






    </nav>
    </>
    
  );}