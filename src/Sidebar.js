import './Sidebar.css'
import SideBarOption from './SideBarOption'
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic';

function Sidebar() {
    return (
        <div className='sidebar'>
            <img className='sidebar_logo'
                src='https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg' alt='' />
            <SideBarOption Icon={HomeIcon} title='Home' />
            <SideBarOption Icon={SearchIcon} title='Search' />
            <SideBarOption Icon={LibraryMusicIcon} title='Your Library' />
            <strong className='sidebar_title'>PLAYLISTS</strong>
            <hr />
        </div>
    )
}
export default Sidebar