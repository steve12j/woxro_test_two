import React from 'react'
import imgOne from '../assets/img_one.png'
import imgTwo from '../assets/img_two.png'
import imgThree from '../assets/img_three.png'

const TopGames = () => {
    return (
        <section className='py-20 px-40  text-white'>
            <div  className='flex  flex-col md:flex-row items-center justify-around  gap-10'>
                <div className='w-[347px]'>
                    <img
                        className='object-cover w-[347px]'
                        src={imgOne}
                        alt="image_one"
                    />
                    <p className='text-center mt-5'>Explore large, destructible environments where no two games are ever the same.</p>
                </div>
                <div className='w-[347px]'>
                    <img
                        className='object-cover'
                        src={imgTwo}
                        alt="image_one"
                    />
                    <p className='text-center mt-5'>Explore large, destructible environments where no two games are ever the same.</p>
                </div>
                <div className='w-[347px]'>
                    <img
                        className='object-cover'
                        src={imgThree}
                        alt="image_one"
                    />
                    <p className='text-center mt-5'>Explore large, destructible environments where no two games are ever the same.</p>
                </div>


            </div>
        </section>
    )
}

export default TopGames