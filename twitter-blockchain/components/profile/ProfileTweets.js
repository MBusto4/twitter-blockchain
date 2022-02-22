import { useEffect, useContext, useState } from 'react'
// import { TwitterContext } from '../../context/TwitterContext'
import Post from '../Post'

const style = {
    wrapper: `no-scrollbar`,
    header: `sticky top-0 bg-[#15202b] z-10 p-4 flex justify-between items-center`,
    headerTitle: `text-xl font-bold`,
}

const ProfileTweets = () => {
    return (
        <div className={style.wrapper}>
            {/* {tweets?.map((tweet, index) => (
                <Post
                    key={index}
                    displayName={
                        author.name === 'Unnamed'
                            ? `${author.walletAddress.slice(
                                0,
                                4,
                            )}...${author.walletAddress.slice(41)}`
                            : author.name
                    }
                    userName={`${author.walletAddress.slice(
                        0,
                        4,
                    )}...${author.walletAddress.slice(41)}`}
                    text={tweet.tweet}
                    avatar={author.profileImage}
                    timestamp={tweet.timestamp}
                    isProfileImageNft={author.isProfileImageNft}
                />
            ))} */}
        </div>
    )
}

export default ProfileTweets