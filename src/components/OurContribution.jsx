import React from 'react'


const OurContributions = () => {
    return (
        <section className='py-20 px-40  text-white'>
            <div className='flex flex-col items-center justify-center gap-10'>
                <div className='flex flex-col items-center justify-center gap-10'>
                    <h2 className='text-5xl text-center'>Our Contribution</h2>
                    <p className='text-center'>
                        Our core offering extends beyond mere profit generation; we emphasize the growth and active involvement of our user community. Collaborating with us represents an investment, rather than a mere expenditure. Our dedication to providing distinctive digital interactions guarantees unparalleled benefits for our clientele.
                    </p>
                </div>
                <div className="flex gap-20 flex-col md:flex-row  items-center justify-between">
                    <div className='w-40 flex flex-col items-center justify-center'>
                        <p className='text-5xl font-light'>5M</p>
                        <p className='text-center mt-3'> Daily User Engagements</p>
                    </div>
                    <div className='w-40 flex flex-col items-center justify-center'>
                        <p className='text-5xl font-light'>&#x24;500K</p>
                        <p className='text-center mt-3'>
                            Revenue Surge for an Platform
                        </p>
                    </div>
                    <div className='w-40 flex flex-col items-center justify-center'>
                        <p className='text-5xl font-light'>10X</p>
                        <p className='text-center mt-3'>ROAS on all our marketing campaigns</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default OurContributions