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
    <div className="grid xl:grid-cols-3 lg:grid-cols-2 grid-cols-1 gap-x-9 gap-y-6">
        {
            items.map((item, index) =>{
                return <WorkPackageItem key={index} title={item.title} desc={item.desc}/>
            })
        }
    </div>
  )
}

export default WorkPackageItems