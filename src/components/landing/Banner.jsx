import Image from "next/image"

const Banner = () => {
  return (
    <div className="w-full h-auto">
        <Image
          src="/slider/slider.jpg"
          alt="banner"
          width={500}
          height={500}
          className="w-full h-full object-cover"
        >
        </Image>
    </div>
  )
}

export default Banner