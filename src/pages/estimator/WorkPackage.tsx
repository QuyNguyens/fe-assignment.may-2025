import TextBorderBottom from "../../components/TextBorderBottom";
import SummaryIcon from '../../assets/sumary-icon-blue.svg';
import SearchIcon from '../../assets/search-icon.svg';
import ArrowRight from '../../assets/arrow-right-1-icon.svg';
import WorkPackageItems from "./WorkPackageItems";

const WorkPackage = () => {
  return (
    <div className="ml-12 mt-4 flex-1 flex flex-col">
        <h2 className="text-xl text-gray-800">Work Packages (WP)</h2>
        <div className="mt-5 flex flex-1 gap-5">
            <div className="w-[200px] flex flex-col justify-between">
                <div className="flex flex-col gap-4">
                    <div className="w-fit px-1 py-[3px] inline-block border border-gray-200 rounded">
                        <span className="text-sm text-primary font-normal px-3 bg-blue-50 rounded">RFX WPs</span>
                        <span className="text-sm text-gray-600 font-normal px-3">Custom WPs</span>
                    </div>
                    <h3 className="text-[18px] font-medium text-gray-800">Categories</h3>
                    <div className="mt-2 flex flex-col gap-1">
                        <TextBorderBottom text="All Work Packages" isColor/>
                        <TextBorderBottom text="Architectural WPs"/>
                        <TextBorderBottom text="Development WPs"/>
                        <TextBorderBottom text="Operation WPs"/>
                        <TextBorderBottom text="Basic"/>
                        <TextBorderBottom text="Comprehensive"/>
                        <TextBorderBottom text="Advanced"/>
                    </div>
                </div>
                <div className="flex items-center gap-2 px-[5px] py-[6px] pb-3">
                    <img className="w-3 h-3" src={SummaryIcon} alt="" />
                    <span className="text-sm text-primary font-medium">How to add custom WPs</span>
                </div>
            </div>
            <div className="flex flex-col justify-between">
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
                        />
                    </div>
                    <WorkPackageItems/>
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