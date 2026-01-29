import "../../styles/blocks/navbar.css"
import "../../styles/blocks/section-content.css"
import "../../styles/blocks/card-top.css"
import Navbar from "../navbar/navbar"
import CardTop from "../cards/cardTop"
import Content from "../content/content"
import "../../styles/blocks/club-card.css"
import ClubCard from "../cards/clubCard"

export default function App() {
    return (
        <div className="container-block">
            <div className="block-1">
                <Navbar/>
                <Content/>
            </div>
            <div className="block-2
            pt-12.5
            bg-[#0a0e27]
            flex
            justify-center
            w-full
            pb-10
            ">
                 <div className="
                inner-block-2
                flex    
                flex-col
                justify-around
                w-350
                h-auto
                 ">
                    <div className="
                    header-block-2
                    flex
                    items-center
                    gap-[10px]
                    justify-center
                    mb-[20px]
                    ">
                    <div className="left-side-header-block-2">
                        <div className="
                        w-[48px]
                        h-[48px]
                        flex
                        justify-center
                        items-center
                        rounded-[8px]
                        bg-gradient-to-br from-[#06B6D4] to-[#9333EA]
                        ">
                            <img src="/images/increase.svg" alt="" />
                        </div>
                    </div>
                    <div className="right-side-header-block-2 ">
                        <p className="
                        text-[24px]
                        bg-gradient-to-br from-[#22D3EE] to-[#A855F7] bg-clip-text text-transparent
                        ">Popular Now</p>
                        <p className="
                        text-[#9CA3AF]
                        text-[16px]
                        ">Top-rated clubs this week</p>
                    </div>
                 </div>
                     <div className="
  top-cards-part
  flex
  flex-wrap
  justify-center  /* центрируем карточки при переносе */
  gap-6
">
                         <CardTop />
                         <CardTop />
                         <CardTop />
                         <CardTop />
                     </div>

                 </div>
            </div>
            <div className="block-3
            w-full
            pb-[50px]
            pt-[50px]
            flex
            h-[auto]
            justify-center
            bg-[#0a0e27]
            ">
                <div className="inner-block-3
                px-[20px]
                ">
                    <div className="header-clubs
                    text-center
                mb-[20px]
                ">
                    <p className="
                    text-white
                    text-[30px]

                    ">All Clubs</p>
                    <p className="
                    text-[#9CA3AF]
                    text-[16px]

                    ">Found 15 clubs</p>
                </div>

                    <div className="wrapper-cards-clubs flex justify-center">
                        <div className="
  cards-top-clubs
  flex
  flex-wrap
  justify-center
  gap-6
">
                            <ClubCard />
                            <ClubCard />
                            <ClubCard />
                        </div>
                    </div>


                </div>
            </div>
            <footer className="
            w-[100%]
            h-[298px]
            bg-[#0a0e27]
            border-t-[#06B6D433]
            border
            flex
            justify-center
            ">
                <div className="
                inner-footer
                w-[1400px]
                flex
                items-center
                justify-center
                gap-[40px]
                flex-col
                ">
                    <div className="left-side-nav flex items-center gap-[8px]">
                        <p className="
                        w-[40px]
                         h-[40px]
                           rounded 
                           flex
                            items-center
                            text-white
                             justify-center
                             bg-gradient-to-br from-[#06B6D4] to-[#9333EA]
                             shadow-[0_4px_10px_0_#06B6D480]
                             ">PC</p>
                        <p className="
                        logo-text
                        text-[24px]
                        bg-gradient-to-r from-[#22D3EE] to-[#A855F7] bg-clip-text text-transparent
                        ">CyberClubs</p>
                    </div>
                    <p className="
                    text-white
                    text-center
                    ">
                        Your ultimate guide to finding the best PC gaming
clubs in the city.
                    </p>
                </div>
            </footer>
        </div>
    )
}