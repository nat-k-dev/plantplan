'use client'

import { PlantData } from "@/app/models/Plant.model";
import PlantCard from "./PlantCard";


const PLANTS: PlantData[] = [
    {
        name: 'peperonia',
        img: '/1.avif',
        lastWateringDate: new Date(2025, 10, 15),
        daysBetweenWatering: 14,
        typeOfWater: 'tap'
    },
    {
        name: 'succulent',
        img: '/2.jpg',
        lastWateringDate: new Date(2025, 9, 15),
        daysBetweenWatering: 21,
        typeOfWater: 'tap'
    },
    {
        name: 'aloe',
        img: '/3.avif',
        lastWateringDate: new Date(2025, 10, 9),
        daysBetweenWatering: 7,
        typeOfWater: 'tap'
    }
];

const PlantsList = () => {
    return (
        <div className="grid gap-4 grid-cols-[repeat(auto-fit,minmax(min(320px,100%),1fr))]">
            {PLANTS.map((plant) =>
                <PlantCard key={plant.name} plant={plant} />
            )}

        </div>
    );
}

export default PlantsList