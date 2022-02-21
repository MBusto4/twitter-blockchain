import { useState, useContext } from 'react'
import { useRouter } from 'next/router'
// import { TwitterContext } from '../context/TwitterContext'
import SideBarOption from './SidebarOption'
import { RiHome7Line, RiHome7Fill, RiFileList2Fill } from 'react-icons/ri'
import { BiHash } from 'react-icons/bi'
import { FiBell, FiMoreHorizontal } from 'react-icons/fi'
import { HiOutlineMail, HiMail } from 'react-icons/hi'
import { FaRegListAlt, FaHashtag, FaBell } from 'react-icons/fa'
import { CgMoreO } from 'react-icons/cg'
import { VscTwitter } from 'react-icons/vsc'
// import Modal from 'react-modal'
// import { customStyles } from '../lib/constants'
// import ProfileImageMinter from './profile/mintingModal/ProfileImageMinter'
import {
    BsBookmark,
    BsBookmarkFill,
    BsPerson,
    BsPersonFill,
} from 'react-icons/bs'

const style = {
    wrapper: `flex-[0.7] px-8 flex flex-col`,
    twitterIconContainer: `text-3xl m-4`,
    tweetButton: `bg-[#1d9bf0] hover:bg-[#1b8cd8] flex items-center justify-center font-bold rounded-3xl h-[50px] mt-[20px] cursor-pointer`,
    navContainer: `flex-1`,
    profileButton: `flex items-center mb-6 cursor-pointer hover:bg-[#333c45] rounded-[100px] p-2`,
    profileLeft: `flex item-center justify-center mr-4`,
    profileImage: `height-12 w-12 rounded-full`,
    profileRight: `flex-1 flex`,
    details: `flex-1`,
    name: `text-lg`,
    handle: `text-[#8899a6]`,
    moreContainer: `flex items-center mr-2`,
}

const SideBar = (initialSelectedIcon = 'Home') => {

    const [selected, setSelected] = useState(initialSelectedIcon)
    // const { currentAccount, currentUser } = useContext(TwitterContext)
    const router = useRouter()

    return (
        <div className={style.wrapper}>
            <div className={style.twitterIconContainer}>
                <VscTwitter />
            </div>
            <div className={style.navContainer}>
                <SideBarOption
                    Icon={selected === 'Home' ? RiHome7Fill : RiHome7Line}
                    text='Home'
                    isActive={Boolean(selected === 'Home')}
                    setSelected={setSelected}
                    redirect={'/'}
                />
                <SideBarOption
                    Icon={selected === 'Explore' ? FaHashtag : BiHash}
                    text='Explore'
                    isActive={Boolean(selected === 'Explore')}
                    setSelected={setSelected}
                />
                <SideBarOption
                    Icon={selected === 'Notifications' ? FaBell : FiBell}
                    text='Notifications'
                    isActive={Boolean(selected === 'Notifications')}
                    setSelected={setSelected}
                />
                <SideBarOption
                    Icon={selected === 'Messages' ? HiMail : HiOutlineMail}
                    text='Messages'
                    isActive={Boolean(selected === 'Messages')}
                    setSelected={setSelected}
                />
                <SideBarOption
                    Icon={selected === 'Bookmarks' ? BsBookmarkFill : BsBookmark}
                    text='Bookmarks'
                    isActive={Boolean(selected === 'Bookmarks')}
                    setSelected={setSelected}
                />
                <SideBarOption
                    Icon={selected === 'Lists' ? RiFileList2Fill : FaRegListAlt}
                    text='Lists'
                    isActive={Boolean(selected === 'Lists')}
                    setSelected={setSelected}
                />
                <SideBarOption
                    Icon={selected === 'Profile' ? BsPersonFill : BsPerson}
                    text='Profile'
                    isActive={Boolean(selected === 'Profile')}
                    setSelected={setSelected}
                    redirect={'/profile'}
                />
                <SideBarOption
                    Icon={CgMoreO}
                    text='More'
                    setSelected={setSelected}
                />
                <div className={style.tweetButton}>Mint</div>
            </div>
            <div className={style.profileButton}>
                <div className={style.profileLeft}></div>
                <div className={style.profileRight}>
                    <div className={style.details}>
                        <div className={style.name}>MBusto4</div>
                        <div className={style.handle}>@0x3fd ... gvfdsd</div>
                    </div>
                    <div className={style.moreContainer}>
                        <FiMoreHorizontal />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default SideBar