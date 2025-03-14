export interface OfficeLocation {
   city: string;
   address: string;
   zipCode: string;
}

export const officeLocations: OfficeLocation[] = [
   { city: "Białystok", address: "ul. Ciołkowskiego 2/3 lok. 39-41", zipCode: "15-264" },
   { city: "Kraków", address: "ul. Zamknięta 10", zipCode: "30-554" },
   { city: "Wrocław", address: "ul. Stanisławowska 47", zipCode: "54-611" }
]