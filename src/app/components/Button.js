
import {MdAdd} from "react-icons/md"
export default function button({rounded=true, label, icon=null}){
    return rounded?
    <button className="pr-5 pl-5 pt-3 pb-3 bg-green rounded-lg text-lg min-w-full">
        <div className="flex flex-row items-center">
            {icon}
            <span className="pl-2 pr-2">
                {label}
            </span>
        </div>
    </button>
    :<button className="pr-5 pl-5 pt-3 pb-3 bg-white  text-lg min-w-full">
        <div className="flex flex-row items-center">
            {icon}
            <span className="pl-2 pr-2">
                {label}
            </span>
        </div>
    </button>
}
