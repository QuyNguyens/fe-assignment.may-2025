import WorkPackageItem from "./WorkPackageItem";

export interface WorkPackageItemData{
    title: string;
    desc: string;
}

interface WorkPackageItemsProps{
    items: WorkPackageItemData[]
}

const WorkPackageItems = ({items} : WorkPackageItemsProps) => {

  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5">
        {
            items.map((item, index) =>{
                return <WorkPackageItem key={index} title={item.title} desc={item.desc}/>
            })
        }
    </div>
  )
}

export default WorkPackageItems