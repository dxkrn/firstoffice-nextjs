import Image from "next/image";

export default function OfficeFeatures() {
    return (
        <div className="grid grid-cols-3 gap-x-5 gap-y-[30px]">
            <div className="flex items-center gap-4">
                <Image
                    width={34}
                    height={34}
                    src="/assets/images/icons/security-user.svg"
                    className="w-[34px] h-[34px]"
                    alt="icon"
                />
                <div className="flex flex-col gap-[2px]">
                    <p className="font-bold text-lg leading-[24px]">Privacy</p>
                    <p className="text-sm leading-[21px]">For Yourself</p>
                </div>
            </div>
            {/* <div className="flex items-center gap-4">
                <Image
                    width={34}
                    height={34}
                    src="/assets/images/icons/cup.svg"
                    className="w-[34px] h-[34px]"
                    alt="icon"
                />
                <div className="flex flex-col gap-[2px]">
                    <p className="font-bold text-lg leading-[24px]">Global Event</p>
                    <p className="text-sm leading-[21px]">Startup Contest</p>
                </div>
            </div>
            <div className="flex items-center gap-4">
                <Image
                    width={34}
                    height={34}
                    src="/assets/images/icons/home-trend-up.svg"
                    className="w-[34px] h-[34px]"
                    alt="icon"
                />
                <div className="flex flex-col gap-[2px]">
                    <p className="font-bold text-lg leading-[24px]">Sustainbility</p>
                    <p className="text-sm leading-[21px]">Long-term Goals</p>
                </div>
            </div>
            <div className="flex items-center gap-4">
                <Image
                    width={34}
                    height={34}
                    src="/assets/images/icons/coffee.svg"
                    className="w-[34px] h-[34px]"
                    alt="icon"
                />
                <div className="flex flex-col gap-[2px]">
                    <p className="font-bold text-lg leading-[24px]">Extra Snacks</p>
                    <p className="text-sm leading-[21px]">Work-Life Balance</p>
                </div>
            </div>
            <div className="flex items-center gap-4">
                <Image
                    width={34}
                    height={34}
                    src="/assets/images/icons/3dcube.svg"
                    className="w-[34px] h-[34px]"
                    alt="icon"
                />
                <div className="flex flex-col gap-[2px]">
                    <p className="font-bold text-lg leading-[24px]">Compact</p>
                    <p className="text-sm leading-[21px]">Good for Focus</p>
                </div>
            </div>
            <div className="flex items-center gap-4">
                <Image
                    width={34}
                    height={34}
                    src="/assets/images/icons/group.svg"
                    className="w-[34px] h-[34px]"
                    alt="icon"
                />
                <div className="flex flex-col gap-[2px]">
                    <p className="font-bold text-lg leading-[24px]">Free Move</p>
                    <p className="text-sm leading-[21px]">Anytime 24/7</p>
                </div>
            </div> */}
        </div>
    );
}