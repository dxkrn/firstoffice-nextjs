import Image from "next/image";
import { SalesContact } from "../types/officeSpace.types";

export default function ContactCard({ contact }: { contact: SalesContact }) {
    return (
        <div className="flex items-center justify-between gap-3">
            <div className="flex items-center gap-4">
                <div className="w-[60px] h-[60px] rounded-full overflow-hidden">
                    <Image
                        width={1920}
                        height={1080}
                        src="/assets/images/photos/photo-2.png"
                        className="w-full h-full object-cover"
                        alt="photo"
                    />
                </div>
                <div className="flex flex-col gap-[2px]">
                    <p className="font-bold">{contact.name}</p>
                    <p className="text-sm leading-[21px]">{contact.role}</p>
                </div>
            </div>
            <div className="flex items-center gap-3">
                <a href="#">
                    <Image
                        width={40}
                        height={40}
                        src="/assets/images/icons/call-green.svg"
                        className="w-10 h-10"
                        alt="icon"
                    />
                </a>
                <a href="#">
                    <Image
                        width={40}
                        height={40}
                        src="/assets/images/icons/chat-green.svg"
                        className="w-10 h-10"
                        alt="icon"
                    />
                </a>
            </div>
        </div>
    );
}