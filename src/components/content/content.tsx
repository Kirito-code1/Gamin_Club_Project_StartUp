export default function Content() {
    return (
        <section className="
                wrapper-content
                flex
                justify-center
                ">
                    <div className="
                    inner-content
                    w-[100%]
                    h-[500px]
                    flex
                    flex-col
                    items-center
                    justify-center
                    gap-[50px]
                    ">
                        <p className="
                        text-[32px]
                        md:text-[48px]
                        lg:text-[72px]
                        text-center
                        bg-gradient-to-r from-[#22D3EE] to-[#A855F7] bg-clip-text text-transparent
                        ">Find Your Gaming Arena</p>
                        <p className="
                        lg:text-[24px]
                        md:text-[18px]
                        text-center
                        text-white
                        ">
                            Discover premium PC clubs with cutting-edge hardware,
competitive prices, and cyberpunk vibes
                        </p>
                        <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                            {/* Основная кнопка */}
                            <button className="
    w-[177px]
    h-[44px]
    rounded-[6px]
    bg-gradient-to-r from-[#06B6D4] to-[#9333EA]
    text-white
    text-[18px]
    font-semibold
    transition-transform duration-200
    hover:scale-105
    hover:shadow-[0_4px_10px_0_#06B6D480]
  ">
                                Explore Clubs
                            </button>

                            {/* Вторичная кнопка */}
                            <button className="
    w-[160px]
    h-[44px]
    rounded-[6px]
    border border-[#06B6D480]
    bg-[#020817]
    text-[#22D3EE]
    text-[18px]
    font-semibold
    transition-colors duration-200
    hover:bg-[#0a0e27]
    hover:text-white
  ">
                                Learn More
                            </button>
                        </div>

                    </div>
                </section>
    )
}