import {StaticImageData} from "next/image";

import photo1 from "./photos/31998971229-1200-3879017033.jpg";
import photo2 from "./photos/Afrobeat-No-Go-Die-cover-440126631.jpg";
import photo3 from "./photos/Billboard-AfroBeat-Hits-Vol-1_Cover-Art-1229291445.jpg";
import photo4 from "./photos/afrobeat_header_image.original-3123972698.jpg";

export type WonderImage = {
    id: string;
    name: string;
    src: StaticImageData;
    photographer: string;
    location: string;
}

const wondersImages: WonderImage[] = [
    {
        id: "1",
    name: "Gredf.kj ",
    src: photo1,
    photographer: "by biad",
    location: "abidjan",
    },
    {
        id: "2",
    name: "Petra.kj ",
    src: photo2,
    photographer: "by boli",
    location: "abudja",
    },
    {
        id: "3",
    name: "doge.kj ",
    src: photo3,
    photographer: "by bah",
    location: "abidjan",
    },
    {
        id: "4",
    name: "Christ.kj",
    src: photo4,
    photographer: "by faizan",
    location: "abidjan",
    },
];

export default wondersImages