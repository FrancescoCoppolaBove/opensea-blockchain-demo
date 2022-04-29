import React from 'react'
import { AiOutlineInfoCircle } from 'react-icons/ai'

const style = {
  wrapper: `relative`,
  container: `before:content-[''] before:bg-red-500 before:absolute before:top-0 before:left-0 before:right-0 before:bottom-0 before:bg-[url('https://lh3.googleusercontent.com/51ADjK-OruSkpYwOhLbW5bjc4nCwgMJG_qVx8-NbWpyUJLz_DjHZ9_1zEDTzeWTXqWa2IEJrSEOfbN02u_SJagDEpN2igIUGHtRBzA=s550')] before:bg-cover before:bg-center before:opacity-30 before:blur`,
  contentWrapper: `flex h-screen relative justify-center flex-wrap items-center`,
  copyContainer: `w-1/2`,
  title: `relative text-white text-[46px] font-semibold`,
  description: `text-[#8a939b] container-[400px] text-2xl mt-[0.8rem] mb-[2.5rem]`,
  ctaContainer: `flex`,
  accentedButton: ` relative text-lg font-semibold px-12 py-4 bg-[#2181e2] rounded-lg mr-5 text-white hover:bg-[#42a0ff] cursor-pointer`,
  button: ` relative text-lg font-semibold px-12 py-4 bg-[#363840] rounded-lg mr-5 text-[#e4e8ea] hover:bg-[#4c505c] cursor-pointer`,
  cardContainer: `rounded-[3rem]`,
  infoContainer: `h-20 bg-[#313338] p-4 rounded-b-lg flex items-center text-white`,
  author: `flex flex-col justify-center ml-4`,
  name: ``,
  infoIcon: `flex justify-end items-center flex-1 text-[#8a939b] text-3xl font-bold cursor-pointer`,
}

const Hero = () => {
  return (
    <div className={style.wrapper}>
      <div className={style.container}>
        <div className={style.contentWrapper}>
          <div className={style.copyContainer}>
            <div className={style.title}>
              Discover, collect and sell extraordinary NFTs
            </div>
            <div className={style.description}>
              Opensea is the world&apos;s first and largest NFT Marketplace
            </div>
            <div className={style.ctaContainer}>
              <button className={style.accentedButton}>Explore</button>
              <button className={style.button}>Create</button>
            </div>
          </div>
          <div className={style.cardContainer}>
            <img
              className="rounded-t-lg"
              src="https://lh3.googleusercontent.com/51ADjK-OruSkpYwOhLbW5bjc4nCwgMJG_qVx8-NbWpyUJLz_DjHZ9_1zEDTzeWTXqWa2IEJrSEOfbN02u_SJagDEpN2igIUGHtRBzA=s550"
              alt=""
            />
            <div className={style.infoContainer}>
              <img
                className="h-[2.25rem] rounded-full"
                src="https://lh3.googleusercontent.com/g1L9mrcQQCgejvLmcgHmvSBOdX_SXF6qKfRl67FA_9UtNvqcJn7OCHhjeKYT3JqiCKMn22pkTHEjbNyqobYSlJKuGrIhzqW-OANN=s80"
                alt=""
              />
              <div className={style.author}>
                <div className={style.name}>Sakura Vista - Inaka</div>
                <a
                  className="text-[#2081e2] hover:text-[#1868b7]"
                  href="https://opensea.io/assets/0xd25508dab0b8fa88e783ee065d8f78b10745dd21/3"
                >
                  0xManekiNeko
                </a>
              </div>
              <div className={style.infoIcon}>
                <AiOutlineInfoCircle className="hover:text-[#e5e8eb]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
