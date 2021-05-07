import './Sidebar.css'
import SideBarOption from './SideBarOption'
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic';
import { useDataLayerValue } from './DataLayer'

function Sidebar() {
    const [{ playlists }, dispatch] = useDataLayerValue()
    console.log("🚀 ~ file: Sidebar.js ~ line 11 ~ Sidebar ~ playlists", playlists)
    return (
        <div className='sidebar'>
            <img className='sidebar_logo'
                src='https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg' alt='' />
            <SideBarOption Icon={HomeIcon} title='Home' />
            <SideBarOption Icon={SearchIcon} title='Search' />
            <SideBarOption Icon={LibraryMusicIcon} title='Your Library' />
            <br />
            <strong className='sidebar_title'>PLAYLISTS</strong>
            <hr />
            {playlists?.items?.map(playlist => <SideBarOption title={playlist.name} />)}


        </div >
    )
}
export default Sidebar