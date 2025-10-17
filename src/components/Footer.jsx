import mailImg from "../assets/images/mail-24px.png";
import enterImg from "../assets/images/arrow_forward-24px.png";

export default function Footer() {
  return (
    <>
      <footer className="flex flex-col  w-full">
        {/* 深色區塊 */}
        <div className="flex w-full gap-[33px] lg:flex-row flex-col justify-between items-center lg:px-[122px] p-[30px] bg-primary-600 ">
          <div className="flex gap-5">
            <img
              src="https://raw.githubusercontent.com/hexschool/webLayoutTraining1st/refs/heads/master/student-week1/logo-light.svg"
              alt="logo"
              className="w-10 h-10"
            />
            <h2 className="h2-text font-normal">訂閱你我的甜蜜郵件</h2>
          </div>
          {/* 信箱輸入欄 */}
          <div className="flex bg-primary-100  max-w-[380px] w-full justify-between items-center">
            <div className="flex h-[64px] w-[56px]  items-center justify-center">
              <img src={mailImg} alt="mail" className="h-6 w-6" />
            </div>

            <div className="flex h-[64px] w-[56px] bg-secondary-200 items-center justify-center">
              <img src={enterImg} alt="enter" className="" />
            </div>
          </div>
        </div>
        {/* 淺色區塊 */}
        <div className="flex flex-col justify-between gap-10 px-[30px] py-[39px] bg-primary-100 ">
          <div className="flex flex-col gap-10  justify-start">
            <img
              src="https://raw.githubusercontent.com/hexschool/webLayoutTraining1st/refs/heads/master/student-week1/logotype-sm-dark.svg"
              alt="logo"
              className="w-[177px] h-auto"
            />
          </div>

          <div className="flex flex-col gap-[30px]">
            <p className="footer-text flex  leading-6">
              07-1234-5678 <br />
              sweetaste@email.com 800 <br />
              高雄市新興區幸福路 520 號
            </p>
            <div className="flex flex-col gap-[23px]">
              <div className="flex gap-2">
                <img
                  src="https://raw.githubusercontent.com/hexschool/webLayoutTraining1st/refs/heads/master/student-week1/ic-facebook.svg"
                  alt="fb"
                  className="w-8 h-8"
                />
                <img
                  src="https://raw.githubusercontent.com/hexschool/webLayoutTraining1st/refs/heads/master/student-week1/ic-line%40.svg"
                  alt="line"
                  className="w-8 h-8"
                />
              </div>
              <div className="font-times text-primary-600 flex justify-center items-center gap-0.5">
                <p>©2018</p>
                <img
                  src="https://raw.githubusercontent.com/hexschool/webLayoutTraining1st/refs/heads/master/student-week1/logotype-sm-dark.svg"
                  alt="logo"
                  className="h-[13px] w-auto"
                />
                <p>All rights reserved.</p>
              </div>
            </div>
          </div>

          <div className="hidden">
            <h3>今天是個——</h3>
            <h3>吃甜點的好日子</h3>
          </div>
        </div>
      </footer>
    </>
  );
}
