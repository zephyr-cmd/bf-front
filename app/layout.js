"use client"
import { Cagliostro, Inter } from 'next/font/google'
import { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import './globals.css'
import { Providers } from "./GlobalRedux/provider";
import { io } from 'socket.io-client';
const inter = Inter({ subsets: ['latin'] });
import { baseUrl } from '@/utils/commonUrl';
import { toast } from 'react-toastify';
const socket = io(baseUrl)
// const audio = "https://file-examples.com/storage/fed001dfc36547d0292f8e5/2017/11/file_example_MP3_700KB.mp3"
// const notificationSound = require('../public/sounds/')
// export const metadata = {
//   title: 'FOOD',
//   description: 'site for bachelors food',
// }

import 
audio from "./orderNotify.mp3"
export default function RootLayout({ children }) {

  useEffect(() => {
    // console.log("fasdljlfadsjlfsda", audio);
    // let sound = new Audio(audio);
    // sound.play();
    // let user;
    // const getUserRole = () => {
    //   return user;
    // }
    // getUserRole();
    // (async () => await getUserRole())()
    let user = localStorage.getItem("userRole");
    console.log("L-28, user--> ", user);

    async function soundPlay() {
      let sound = new Audio(audio);
      sound.play();
    }



    if (socket && user == "admin") {
      socket.on("order_recieved", (data) => {
        console.log("L-28, data in socket received: ", data);
        console.log("data in socket received: " + JSON.stringify(data));
        // alert(`new order received :: ${JSON.stringify(data)}`)
        soundPlay();
        toast.success('new order received Successfully', {
          position: 'bottom-right', // Set the position of the toast
          autoClose: 2000, // Close the toast after 3000ms (3 seconds)
          hideProgressBar: false, // Show or hide the progress bar
          closeOnClick: true, // Close the toast when clicked
          pauseOnHover: true, // Pause the toast when hovering over it
          draggable: true, // Allow dragging the toastS
        });

      })
    }
  }, [])
  return (
    <html lang="en">

      <body className={inter.className}><Providers>{children}</Providers>
      </body>
    </html>
  )
}
