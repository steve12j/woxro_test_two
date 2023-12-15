import React from 'react'
import bannerImg from '../assets/main_banner.png'

const BannerSection = () => {
    return (
        <section
            className=' py-20 px-40  text-white'
        >
            <div className='max-w-[1415px] mx-auto flex flex-col items-center justify-center'>
                <h2 className='text-white text-3xl text-center max-w-[1375px] min-w-[340px]'>
                    Epic Games : An American video game and software developer and publisher based in Cary, North Carolina.
                </h2>
                <img
                    className='my-10 min-w-[340px]'
                    height="500px"
                    src={bannerImg}
                    alt="main-banner"
                />
                <p className='text-center min-w-[340px]'>Create, play, and battle with friends for free in Fortnite. Be the last player standing in Battle Royale and Zero Build, experience a concert or live event, or discover over a million creator made games, including racing, parkour, zombie survival, and more. Each Fortnite island has an individual age rating so you can find the one that's right for you and your friends. Find it all in Fortnite ... Drop In</p>
                <button
                className='text-black text-sm font-medium bg-white px-16 py-4 mt-10'
                >
                    Vist Website
                </button>
            </div>
        </section>
    )
}

export default BannerSection