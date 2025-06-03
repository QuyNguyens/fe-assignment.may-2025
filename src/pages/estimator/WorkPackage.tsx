import TextBorderBottom from "../../components/TextBorderBottom";
import SummaryIcon from '../../assets/sumary-icon-blue.svg';
import SearchIcon from '../../assets/search-icon.svg';
import ArrowRight from '../../assets/arrow-right-1-icon.svg';
import WorkPackageItems, {type WorkPackageItemData } from "./WorkPackageItems";
import { workPackages } from "../../data/workPackages";
import { useEffect, useState } from "react";

const items = [
    "All Work Packages",
    "Architectural WPs",
    "Development WPs",
    "Operation WPs",
    "Basic",
    "Comprehensive",
    "Advanced",
];

const WorkPackage = () => {
    const [workPackageInput, setWorkPackageInput] = useState<string>('');
    const [packageItems, setPackageItems] = useState<WorkPackageItemData[]>([]);
    const [debouncedValue, setDebouncedValue] = useState(workPackageInput);
    const [selected, setSelected] = useState<string>('All Work Packages');
    const [activeTab, setActiveTab] = useState("rfx");

    const renderContent = () => {
        switch (selected) {
            case 'All Work Packages':
                return <WorkPackageItems items={packageItems}/>
            case 'Architectural WPs':
                return <div className="text-center">Architectural WPs UI</div>;
            case 'Development WPs':
                return <div className="text-center">Development WPs UI</div>;
            case 'Operation WPs':
                return <div className="text-center">Operation WPs UI</div>;
            case 'Basic':
                return <div className="text-center">Basic UI</div>;
            case 'Comprehensive':
                return <div className="text-center">Comprehensive UI</div>;
            case 'Advanced':
                return <div className="text-center">Advanced UI</div>;
            default:
                return <div className="text-center">Default UI</div>
        }
  };

    useEffect(() => {
        const handler = setTimeout(() => {
            setDebouncedValue(workPackageInput);
        }, 500);

        return () => {
            clearTimeout(handler);
        };
    }, [workPackageInput]);

    useEffect(() => {
        const newItems = workPackages.filter(item => item.title.toLowerCase().includes(workPackageInput?.toLowerCase()));
        setPackageItems(newItems);
    }, [debouncedValue]);

    const handleSearch = (e: any) =>{
        setWorkPackageInput(e.target.value);
    }

  return (
    <div className="ml-12 mr-20 mt-4 flex-1 flex flex-col">
        <h2 className="text-xl text-gray-800">Work Packages (WP)</h2>
        <div className="mt-5 flex flex-1 gap-5">
            <div className="w-[200px] flex flex-col justify-between">
                <div className="flex flex-col gap-4">
                    <div className="w-fit px-1 py-[3px] inline-block border border-gray-200 rounded">
                        <span
                            onClick={() => setActiveTab("rfx")}
                            className={`text-sm font-normal px-3 rounded cursor-pointer ${
                            activeTab === "rfx"
                                ? "text-primary bg-blue-50"
                                : "text-gray-600 bg-transparent"
                            }`}
                        >
                            RFX WPs
                        </span>

                        <span
                            onClick={() => setActiveTab("custom")}
                            className={`text-sm font-normal px-3 rounded cursor-pointer ${
                            activeTab === "custom"
                                ? "text-primary bg-blue-50"
                                : "text-gray-600 bg-transparent"
                            }`}
                        >
                            Custom WPs
                        </span>
                    </div>
                    <h3 className="text-[18px] font-medium text-gray-800">Categories</h3>
                    <div className="mt-2 flex flex-col gap-1">
                        {activeTab === 'rfx' ? items.map((item) => (
                            <TextBorderBottom
                                key={item}
                                text={item}
                                isColor={selected === item}
                                onClick={() => setSelected(item)}
                            />
                        )) : <div className='w-[188px] p-1 pl-0 border-b border-gray-400'>
                                <span className="text-primary text-sm font-normal">Custom item</span>
                            </div>}
                    </div>
                </div>
                <div className="flex items-center gap-2 px-[5px] py-[6px] pb-3">
                    <img className="w-3 h-3" src={SummaryIcon} alt="" />
                    <span className="text-sm text-primary font-medium">How to add custom WPs</span>
                </div>
            </div>
            <div className="flex flex-1 flex-col justify-between">
                <div className="flex flex-col gap-4">
                    <div className="relative w-auto border border-gray-200 rounded py-[3px] px-3">
                        <img
                            className="w-[14px] h-[14px] absolute left-3 top-1/2 transform -translate-y-1/2"
                            src={SearchIcon}
                            alt="Search"
                        />
                        <input
                            type="text"
                            className="pl-6 pr-2 text-sm text-gray-700 outline-none bg-transparent w-full"
                            onChange={handleSearch}
                        />
                    </div>
                    {activeTab ==='rfx' ? renderContent(): <div className="text-center">Custom UI</div>}
                </div>

                <div className="flex justify-end items-center mt-24 pb-3">
                    <div className="flex items-center gap-2 px-2 py-1 border border-primary rounded-lg group hover:bg-primary duration-500">
                        <span className="text-base16 text-primary font-normal group-hover:text-white">Next</span>
                        <img className="w-4 h-4" src={ArrowRight} alt="" />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default WorkPackage