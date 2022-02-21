
import Head from 'next/head'
import Image from 'next/image'
import SideBar from '../components/SideBar'

const style = {
  wrapper: `flex justify-center h-screen w-screen select-none bg-[#15202b] text-white`,
  content: `max-w-[1400px] w-2/3 flex justify-between`,
  loginContainer: `w-full h-full flex flex-col justify-center items-center pb-48`,
  walletConnectButton: `text-2xl text-black bg-white font-bold mb-[-3rem] mt-[3rem] px-6 py-4 rounded-full cursor-pointer hover:bg-[#d7dbdc]`,
  loginContent: `text-3xl font-bold text-center mt-24`,
}

const Home = () => {
  return (
    <div className={style.wrapper}>
      <div className={style.content}>
        {/* Side Bar */}
        <SideBar />
        {/* Feed */}
        <h2>Feed</h2>
        {/* Widgets */}
        <h2>Widgets</h2>
      </div>
    </div>
  )
}

export default Home
