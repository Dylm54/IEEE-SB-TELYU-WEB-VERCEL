import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import OfficerCard from "./OfficerCard";

function SampleNextArrow(props) {
    const { style, onClick } = props;
    return (
        <div
            style={{ ...style, display: "block", color: "white", cursor: "pointer" }}
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
            style={{ ...style, display: "block", color: "white", cursor: "pointer" }}
            onClick={onClick}
        >
            <IoIosArrowBack size={30} />
        </div>
    );
}

export const CarouselForDepartmentsOfficers = ({ photos }) => {
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
        <div className="slider-container max-w-[1024px] mx-auto px-[2em] mb-[80px] darkSlick">
            <Slider {...settings} className="">
                {photos?.map((photo, i) => {
                    return (
                        <OfficerCard key={i} name={photo.name} image={photo.image} position={photo.position} />
                    )
                })}
            </Slider>
        </div>
    );
}