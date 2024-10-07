import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { TbExternalLink } from "react-icons/tb";

function SampleNextArrow(props) {
    const { style, onClick } = props;
    return (
        <div
            style={{ ...style, display: "block", color: "black", cursor: "pointer" }}
            onClick={onClick}
        >
            <IoIosArrowForward size={30} />
        </div>
    );
}

function SamplePrevArrow(props) {
    const { style, onClick } = props;
    return (
        <div
            style={{ ...style, display: "block", color: "black", cursor: "pointer" }}
            onClick={onClick}
        >
            <IoIosArrowBack size={30} />
        </div>
    );
}

export const CarouselAch = ({ achData }) => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        autoplay: true,
        autoplaySpeed: 5000,
        pauseOnHover: true,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <div className="slider-container max-w-[1080px] mx-auto px-[2em] mb-[100px]">
            <Slider {...settings} className="">
                {achData.map((ach) => {
                    return (
                        <div key={ach.id} className="flex flex-col justify-center items-center text-center mb-7 achDiv">
                            <img src={`${import.meta.env.VITE_API_URL}/uploads/${ach.foto}`} height="300" width="300" alt="vice" />
                            <p className="font-[590] 2xl:text-[1.5vw] sm:text-[calc(16px+8*(100vw-576px)/1024)] text-[16px]">{ach.nama}</p>
                            <a href={ach.link} className="text-[#4E2D96] no-underline flex flex-col justify-center items-center lg:flex-row lg:justify-normal lg:items-start gap-1 hover:underline ">{ach.pencapaian} <span><TbExternalLink /></span></a>
                        </div>
                    )
                })}
            </Slider>
        </div>
    );
}