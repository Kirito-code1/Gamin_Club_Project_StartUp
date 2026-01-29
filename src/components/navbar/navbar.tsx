export default function Navbar() {
    return (
        <nav className="
                bg-[#0a0e27f5]
                  h-[83px]
                  w-full
                  border-b border-b-[#06B6D433]
                  flex
                  justify-center
                  px-[20px]
                   ">
                    <div className="
                    w-350
                    inner-nav
                    flex 
                 items-center 
                 justify-between
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
                        <div className="center-side-nav relative w-[630px] hidden lg:block">
                            <input
                                type="text"
                                placeholder="Search..."
                                className="
      w-full
      h-[50px]
      rounded-[12px]
      border-[1px] border-[#06B6D44D]
      outline-none
      text-white
    "
                            />

                            <img
                                src="/images/лупа.svg"
                                alt="search icon"
                                className="
      absolute
      left-4
      top-1/2
      -translate-y-1/2
      w-5 h-5
    "
                            />
                        </div>


                        <div className="right-side-nav flex gap-[27px]">
                        <button className="
                        text-[#22D3EE]
                        text-[14px]

                        ">Sign In </button>
                       <button className="
  bg-gradient-to-r from-[#06B6D4] to-[#9333EA]
  w-[106px]
  h-[40px]
  rounded-[6px]
  text-white
  hover:shadow-[0_4px_10px_0_#06B6D480]
  transition-shadow duration-300
">
  Get Started
</button>

                    </div>
                    </div>
                </nav>
    )
}