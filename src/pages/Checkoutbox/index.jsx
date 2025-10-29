import { useState } from 'react'
import Step1 from './Step1'
import Step2 from './Step2'
import Step3 from './Step3'
import CheckoutCard from '../../components/CheckoutCard'

const Checkoutbox = () => {

    const [step, setStep] = useState(1)
    const handleNext = () => {
        setStep(cur => cur + 1)
    }

    return (

        <>
        <main className='flex lg:py-[65px] lg:px-[122px] gap-5 justify-center'>
        <div className="left-part">
            {step === 1 && <Step1  onNext={handleNext} />}
            {step === 2 && <Step2  onNext={handleNext} />}
            {step === 3 && <Step3  onNext={handleNext} />}
        </div>
        <div className='right-part'>
            <CheckoutCard></CheckoutCard>

        </div>
        </main>
        </>
    )

}

export default Checkoutbox