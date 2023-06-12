import {MdDashboard} from "react-icons/md"
export default function DashBoardTab(){
    return <div className="flex flex-row items-center">
            <MdDashboard size={50}/>
            <span className="pl-2 pr-2">
                Dashboard
            </span>
        </div>
}
