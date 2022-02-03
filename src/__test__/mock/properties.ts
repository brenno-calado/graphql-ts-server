import { Property, Status } from "@shared/interfaces"

export const properties: Property[] = [
  {
    id: "a2e4f91c-0bb4-41d3-8d4e-6c55a7d4849c",
    status: Status.active,
    image:
      "https://resizedimgs.zapimoveis.com.br/crop/420x236/vr.images.sp/17fced489caae45fa6ada50768f4383d.jpg",
    address: "R. Dois de Julho, 251 - Santo Amaro, Recife - PE",
    price: 380000,
    numOfBedrooms: 2,
    numOfBathrooms: 2,
    area: 57,
    parkingSpaces: 1,
    rating: 4,
    location: {
      lat: -8.0505934,
      long: -34.8764057
    }
  },
  {
    id: "7eddc102-3b1a-4031-a293-376c86a56751",
    status: Status.active,
    image:
      "https://resizedimgs.zapimoveis.com.br/fit-in/800x360/vr.images.sp/35d9fea04ac80519c5090b7ab01701e1.jpg",
    address: "R. Durval Guimarães, 356 - Ponta Verde, Maceió - AL",
    price: 295000,
    numOfBedrooms: 1,
    numOfBathrooms: 2,
    area: 52,
    parkingSpaces: 1,
    rating: 4,
    location: {
      lat: -9.661358,
      long: -35.705792
    }
  },
  {
    id: "7499dc8e-015c-45af-aae2-3bb3aac25cd7",
    status: Status.active,
    image:
      "https://resizedimgs.zapimoveis.com.br/fit-in/800x360/vr.images.sp/147dbdd9177ae32607dee4367e27a11b.jpg",
    address: "Avenida Engenheiro José Estelita, 2443 - Centro, Recife - PE",
    price: 39900,
    numOfBedrooms: 1,
    numOfBathrooms: 1,
    area: 35,
    parkingSpaces: 1,
    rating: 5,
    location: {
      lat: -8.073167,
      long: -34.881534
    }
  }
]
