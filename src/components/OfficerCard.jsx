import { Card, CardFooter, Image } from "@nextui-org/react";

export default function OfficerCard({position, name, image}) {
    return (
        <Card
            isFooterBlurred
            radius="lg"
            className="border-none !h-[300px] dark"
        >
            <Image
                alt="OfficerImage"
                className="object-cover gradientBgOfficerCard"
                height={200}
                src={image}
                width={200}
            />
            <CardFooter className="lightBg flex-col gap-1 justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-2 mx-5 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
                <p className="text-center text-[#C0A2FE] font-bold">{position}</p>
                <p className="text-center text-sm text-white font-medium">{name}</p>
            </CardFooter>
        </Card>
    );
}