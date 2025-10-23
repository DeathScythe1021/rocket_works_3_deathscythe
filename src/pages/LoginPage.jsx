import Button from '../components/Btn.jsx';
import fb from '../assets/images/ic-facebook-logotype.png';
import google from '../assets/images/ic-google.png';
import yahoo from '../assets/images/ic-yahoo.png';

export default function LoginPage() {
  return (
   <main className='flex flex-col lg:flex-row-reverse  w-full lg:py-[60px] lg:px-[122px] justify-center items-center'>
        
        <h1 className='lg:hidden py-[30px]  w-full flex justify-center items-center bg-primary-600 h1-text text-white'>會員登入</h1>
        {/* 社群帳號 */}
        <div className='flex w-full lg:w-[390px] p-[30px] lg:flex-col lg:gap-[36px] bg-primary-100 justify-center items-center'>
            <h2 className='hidden lg:flex  text-primary-400 font-light text-[24px]'>—— 連結社群帳號 ——</h2>
            <div className='w-full flex lg:flex-col lg:gap-4  lg:py-[17px]'>
                <div className='w-full flex justify-center items-center py-5 px-[13px] lg:border-0 border-1 border-primary-100  bg-white '><img src={fb} alt="fb"  /></div>
                <div className='w-full flex justify-center items-center py-5 px-[13px] lg:border-0 border-1 border-primary-100  bg-white '><img src={google} alt="google"  /></div>
                <div className='w-full flex justify-center items-center py-5 px-[13px] lg:border-0 border-1 border-primary-100  bg-white  '><img src={yahoo} alt="yahoo"  /></div>
            </div>
        </div>
        {/* 帳號密碼 */}
        <div className='flex flex-col w-full lg:w-[390px]'>
            <div className='flex flex-col p-[30px] gap-4 justify-center bg-primary-600 w-full '>
                <h1 className='hidden py-[30px]  w-full lg:flex justify-center items-center bg-primary-600 h1-text text-white'>會員登入</h1>
                <div className='flex justify-start items-center pl-5 gap-5 bg-primary-100 text-primary-400 py-[18px] text '>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi text-primary-600 w-6 h-6" viewBox="0 0 16 16">
                        <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6"/>
                    </svg>
                    <p>電子信箱/手機號碼</p>
                </div>
                <div className='flex justify-start items-center pl-5 gap-5 bg-primary-100 text-primary-400 py-[18px] text '>
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#3F5D45">
                    <path d="M280-240q-100 0-170-70T40-480q0-100 70-170t170-70q81 0 141.5 45.5T506-560h414v160h-80v160H680v-160H506q-24 69-84.5 114.5T280-240Zm0-160q33 0 56.5-23.5T360-480q0-33-23.5-56.5T280-560q-33 0-56.5 23.5T200-480q0 33 23.5 56.5T280-400Z"/></svg>
                    <p>輸入使用者密碼</p>
                    
                </div>
                <div className='flex gap-2 justify-start items-center'>
                    <div className='w-4 h-4 bg-white'></div>
                    <p className='lebel-text text-white'>記住我</p>
                </div>
            </div>
            <Button variant='secondary'>登入帳號</Button>
        </div>
   </main>
  )
}

