export type PlantData = {
    name: string;
    img: string;
    lastWateringDate: Date;
    daysBetweenWatering: number;
    typeOfWater: 'tap' | 'can';
}