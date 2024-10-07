import RevealAlways from "./RevealAlways";
import { Button } from "@nextui-org/react";

export const DepartmentTrackElement = ({ num, dept, desc, index }) => {
    return (
        <section className="sm:h-[100vh] lg:h-[120vh] justify-center flex sm:flex-row flex-col w-full sm:gap-[100px]">
            <div className="square sm:w-[50%]">
                <div className="sm:sticky top-0 m-0 p-0">
                    <RevealAlways>
                        <p className="text-[#71777e] text-[1rem] sm:mb-[1rem] mb-[0.5rem] sm:pt-[120px] pt-[80px]">Our Department 0{num}</p>
                        <p className="2xl:text-[2vw] sm:text-[calc(24px+8*(100vw-576px)/1024)] text-[24px] leading-[1.4] font-[590] text-white sm:mb-[1rem] mb-[0.5rem]">Department of</p>
                        <h2 className="deptext 2xl:text-[3.5vw] sm:text-[calc(30px+26*(100vw-576px)/1024)] text-[30px] leading-[1.4] font-[590] overflow-hidden moving-gradient text-transparent mb-4">{dept}</h2>
                    </RevealAlways>
                </div>
            </div>
            <div className="sm:w-[50%] sm:pt-[120px]">
                {desc.map((par, i) => (
                    <RevealAlways>
                        <p key={i} className="text-white 2xl:text-[2vw] 2xl:mb-[32px] 2xl:mt-[48px] sm:mb-[calc(8px+24*(100vw-576px)/1024)] sm:mt-[calc(16px+32*(100vw-576px)/1024)] sm:text-[calc(16px+16*(100vw-576px)/1024)] mt-[16px] mb-[8px] text-[16px] leading-[1.5] font-[590]">{par}</p>
                    </RevealAlways>
                ))}
                <RevealAlways>
                    <div className="2xl:mt-[56px] sm:mt-[calc(32px+32*(100vw-576px)/1024)] mt-[32px]">
                        <a href={`#/DetailDepartments/${index}`}>
                            <Button className="min-w-max border-0 2xl:text-[1.5rem] sm:text-[calc(16px+8*(100vw-576px)/1024)] text-[16px] h-[40px] sm:h-[calc(40px+32*(100vw-576px)/1024)] 2xl:h-[72px] px-[24px] sm:px-[calc(10.5px+2.34375vw)] 2xl:px-[48px] text-white font-medium bg-[#6B0DE3]" radius="full">
                                See Detail
                            </Button>
                        </a>
                    </div>
                </RevealAlways>
            </div>
        </section>
    );
}