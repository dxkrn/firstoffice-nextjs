import { officeSpaces } from "@/features/offices/data/officeSpaces.mock";
import { City } from "../types/city.types";

const CityNames = [
    "Jakarta Pusat",
    "Jakarta Selatan",
    "Bogor",
    "Depok",
    "Tangerang",
    "Bekasi",
    "Bandung",
    "Yogyakarta",
    "Denpasar",
    "Semarang",
    "Surabaya",
    "Malang",
];


export const cities: City[] = CityNames.map((name, i) => {
    const officeCount = officeSpaces.filter((space) => space.location === name).length;

    return {
        id: i + 1,
        name,
        officeCount: officeCount,
        image: `/assets/images/thumbnails/thumbnails-${(i % 3) + 1}.png`,
        slug: name.toLowerCase().replace(/ /g, "-"),
    };
});