import React from 'react'

const ContactUs = () => {
    return (
        <section className='py-20 px-40  text-white'>
            <div className='flex flex-col items-center justify-center gap-10'>
                <h2 className='text-5xl text-center min-w-[340px]'>Interested in delving deeper into the project?</h2>
                <p className='text-center min-w-[340px]'>If you'd like to explore further details about our initiatives or any of our affiliated brands, don't hesitate to connect. You can reach out to us via email at hello@abc.com or give us a call at +91 480 20802730</p>
                <div className='flex items-center flex-col sm:flex-row  gap-10'>
                    <button
                        className='text-white  whitespace-nowrap text-sm font-medium bg-black  px-12 py-4 mt-10 border border-white'
                    >
                        Ring Us On Skype
                    </button>
                    <button
                        className='text-black whitespace-nowrap text-sm font-medium bg-white px-16 py-4 mt-10'
                    >
                        Contact Us
                    </button>
                </div>
            </div>
        </section>
    )
}

export default ContactUs