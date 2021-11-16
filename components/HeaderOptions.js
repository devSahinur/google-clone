import HeaderOption from "./HeaderOption"
import { 
    PlayIcon,
    MapIcon,
    DotsVerticalIcon,
    NewspaperIcon,
    PhotographIcon,
    SearchIcon 
} from "@heroicons/react/outline"

function HeaderOptions() {
    return (
        <div>
            {/* Left */}
            <div className="flex space-x-6">
                <HeaderOption Icon={SearchIcon} title="All"  selected/>
                <HeaderOption Icon={PhotographIcon} title="Images"  />
                <HeaderOption Icon={PlayIcon} title="Videos"  />
                <HeaderOption Icon={NewspaperIcon} title="News"  />
                <HeaderOption Icon={MapIcon} title="Maps"  />
                <HeaderOption Icon={DotsVerticalIcon} title="More"  />
            </div>
            {/* Right */}
            <div className='flex space-x-4'>
                <p className='link'>Setting</p>
                <p className='link'>Tools</p>
            </div>
        </div>
    )
}

export default HeaderOptions
