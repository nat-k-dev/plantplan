'use client'

import { Button, Card, CardActions, CardContent, Typography } from "@mui/material";
import Image from "next/image";
import { PlantData } from "@/app/models/Plant.model";
import CheckIcon from "@mui/icons-material/Check";


const PlantCard = ({ plant }: { plant: PlantData }) => {

    function calculateDistance() {
        const now = new Date(); // current date
        const nextWatering = new Date(plant.lastWateringDate);
        nextWatering.setDate(nextWatering.getDate() + plant.daysBetweenWatering);

        // Calculate difference in milliseconds
        const diffMs: number = nextWatering.getTime() - now.getTime();

        // Convert to full days (round down)
        const diffDays = Math.ceil(diffMs / (1000 * 60 * 60 * 24));

        return diffDays;
    };

    const distance = calculateDistance();

    return (
        <Card className="px-4 sm:px-6 py-8 flex flex-col items-center gap-4 md:gap-6" sx={{ backgroundColor: 'background.paper' }}>
            <div className="h-40">
                <Image className="!static object-cover rounded-3xl" src={plant.img} alt={plant.name} fill />
            </div>
            <Typography sx={{ fontSize: '24px', fontWeight: 'semi-bold' }} color="primary.dark">{plant.name}</Typography>
            {distance > 0 && <Typography color="primary" className="rounded-3xl px-4 py-1 border border-[#2C8C6D]">Need to water in {distance} days</Typography>}
            {distance === 0 && <Typography sx={{ fontWeight: 'bold' }} className="border border-amber-600 rounded-3xl px-4 py-1 text-amber-600">Water today</Typography>}
            {distance < 0 && <Typography sx={{ fontWeight: 'bold' }} className="border border-red-700 rounded-3xl px-4 py-1 text-red-700">Water now</Typography>}

            <Typography color="primary">Last watering: {plant.lastWateringDate.toLocaleDateString("en-GB", {
                day: "numeric",
                month: "short",
                year: "numeric",
            })}</Typography>
            <Typography color="primary">Days between watering: {plant.daysBetweenWatering}</Typography>
            <CardActions>
                <Button variant="contained" disabled={distance > 0}
                    className="flex gap-2 items-center"
                    sx={{
                        fontSize: '18px',
                        backgroundColor: '#69A88D',  // custom color
                        color: 'white',              // text color
                        '&:hover': {
                            backgroundColor: '#4D8A71', // darker on hover
                        },
                    }}>
                        Water is given
                        <CheckIcon />
                </Button>
            </CardActions>

        </Card>
    );
}

export default PlantCard