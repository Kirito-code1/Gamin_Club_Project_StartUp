export default function CardTop() {
    return (
        <div className="
            flex flex-col justify-between
            card-top
            w-[330px] h-[400px]
            rounded-[12px]
            relative
            overflow-hidden
        ">
            
            {/* Фото на всю карточку */}
            <img 
                src="/images/person.svg" 
                alt="Gaming Arena" 
                className="absolute inset-0 w-full h-full object-cover"
            />

            {/* Градиент сверху/снизу */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0A0E27B2] to-[#0A0E27CC]"></div>

            {/* Твой контент поверх градиента */}
            <div className="
                yellow-circle
                bg-gradient-to-br from-[#FACC15] to-[#F97316]
                w-[48px] h-[48px]
                rounded-full
                flex justify-center items-center
                shadow-[5px_10px_15px_0_#EAB30880]
                relative z-10
            ">
                <p className="text-white text-[20px]">#1</p>
            </div>
            
            <div className="info-card flex flex-col gap-[10px] relative z-10">
                <p className="text-white text-[24px]">Flux Gaming Arena</p>
                <div className="stars-group flex gap-[10px] items-center">
                    <div className="stars">
                        <i className="fa-solid fa-star text-yellow-300"></i>
                        <i className="fa-solid fa-star text-yellow-300"></i>
                        <i className="fa-solid fa-star text-yellow-300"></i>
                        <i className="fa-solid fa-star text-yellow-300"></i>
                        <i className="fa-solid fa-star text-gray-400"></i>
                    </div>
                    <p className="text-white text-[16px]">4.8</p>
                    <p className="text-[#D1D5DB] text-[14px]">(378)</p>
                </div>
                <p className="text-[#D1D5DB] text-[14px]">
                    High-energy gaming spot with DJ nights, themed events, and top-tier…
                </p>
                <div className="flex gap-[10px]">
                    <div className="flex items-center justify-center w-[63px] h-[26px] rounded-[8px] border border-[#22C55E80] bg-[#22C55E80] text-[15px] text-[#4ADE80]">$13/hr</div>
                    <div className="flex items-center justify-center w-[63px] h-[26px] rounded-[8px] border border-[#A855F780] bg-[#A855F733] text-[15px] text-[#C084FC]">24/7</div>
                </div>
            </div>
        </div>
    )
}
