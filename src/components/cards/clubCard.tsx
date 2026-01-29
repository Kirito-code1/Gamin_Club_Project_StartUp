export default function ClubCard() {
  return (
      <div className="
      club-card
      w-full sm:w-[320px] md:w-[380px] lg:w-[440px] xl:w-[480px]  // Адаптивные размеры для разных экранов
      h-auto sm:h-[450px] md:h-[500px] lg:h-[440px]  // Адаптивная высота
      rounded-[12px]
      border border-[#06B6D44D]
      overflow-hidden
      flex flex-col
    ">
        {/* Верхняя часть с фото */}
        <div className="top-side-club relative w-full h-[50%]">
          <img
              src="/images/CyberArena Nexus.svg"
              alt="CyberArena Nexus"
              className="absolute inset-0 w-full h-full object-cover"
          />
          {/* Градиент для читаемости */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0A0E27B2] to-[#0A0E27CC]"></div>
        </div>

        {/* Нижняя часть с контентом */}
        <div className="bottom-side-club flex flex-col justify-between p-4">
          <p className="text-white text-[20px] sm:text-[22px] md:text-[24px]">Flux Gaming Arena</p>

          <div className="stars-group flex gap-[10px] items-center">
            <div className="stars flex gap-[2px]">
              <i className="fa-solid fa-star text-yellow-300"></i>
              <i className="fa-solid fa-star text-yellow-300"></i>
              <i className="fa-solid fa-star text-yellow-300"></i>
              <i className="fa-solid fa-star text-yellow-300"></i>
              <i className="fa-solid fa-star text-gray-400"></i>
            </div>
            <p className="text-white text-[16px]">4.8</p>
            <p className="text-[#D1D5DB] text-[14px]">(378)</p>
          </div>

          <div className="text-[#D1D5DB] text-[14px] flex gap-[10px] items-center">
            <i className="fa-solid fa-dollar-sign text-[#4ADE80]"></i> <p className="text-[#4ADE80]">10/hr</p>
          </div>
          <div className="text-[#D1D5DB] text-[14px] flex gap-[10px] items-center">
            <i className="fa-regular fa-clock text-[#C084FC]"></i> <p className="text-[#D1D5DB]">10:00 - 22:00</p>
          </div>
          <div className="text-[#D1D5DB] text-[14px] flex gap-[10px] items-center">
            <i className="fa-solid fa-location-dot text-[#22D3EE]"></i> <p className="text-[#D1D5DB]">23 Matrix Lane, East Side</p>
          </div>

          <div className="flex flex-col sm:flex-row gap-[10px]">
            <button className="
            w-full sm:w-[200px] md:w-[250px] lg:w-[350px] xl:w-[350px] // Адаптивная ширина кнопки
            h-[40px]
            bg-gradient-to-br from-[#06B6D4] to-[#9333EA]
            rounded-[6px]
            text-white
            hover:scale-105 transition-transform duration-200
          ">
              View Details
            </button>

            <button className="
            w-full sm:w-[40px] md:w-[50px] lg:w-[60px] xl:w-[60px] // Адаптивная ширина кнопки
            h-[40px]
            rounded-[6px]
            bg-[#020817]
            border
            border-[#06B6D480]
            text-[#22D3EE]
            hover:scale-105 transition-transform duration-200
          ">
              <i className="fa-solid fa-location-arrow"></i>
            </button>
          </div>
        </div>
      </div>
  )
}
