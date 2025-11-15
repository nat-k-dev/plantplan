import DrawerAppBar from "@/components/DrawerAppBar";
import PlantsList from "@/components/PlantsList";


export default function Home() {
  return (
    <div className="grid gap-10">
      <DrawerAppBar />
      <div className="px-4 sm:px-10">
        <PlantsList />
      </div>
    </div>
  );
}
