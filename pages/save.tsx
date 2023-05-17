import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import ProfileMe from "@/pages/profile";
import Friend from "@/pages/friend";
import History_t_y from "@/pages/history_t_w";

function navbar({ handleLoginClick }: { handleLoginClick: any }) {

  return (<>
    <nav>
      <div className="logoIMG" > <Image className="img-fluid" src="/Logo.png" width={200} height={"75"} alt="logo"></Image>
      </div>
      <Link href="/">     <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} fill="currentColor" className="homeicon bi bi-house-door-fill" viewBox="0 0 16 16">
        <path d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5Z" />
      </svg>

        หน้าแรก </Link>
      <Link href="/"> โอนย้ายสมาชิก</Link>
      <Link href="/"> ลืมรหัสผ่าน</Link>
      <input type="text" id="username" name="username"></input>
      <input type="password" id="password" name="password"></input>
      <input type="submit" value="เข้าสู่ระบบ"></input>

      <div className="navfooterbar">
        <div className="container">

          <div className="row">
            <ul>
              <li><a className="active col-12" href="#home">หน้าแรก</a></li>
              <li><a className="col-12" href="#news">สมัครสมาชิก</a></li>
              <li><a className="col-12" href="#contact">เข้าสู่ระบบ </a></li>
              <li><a className="col-12" href="#news">โอนย้ายสมาชิก</a></li>
              <li><a className="col-12" href="#about">ลืมรหัสผ่าน</a></li>
            </ul>
          </div>
        </div>
     </div>
    </nav>

  </>)

}

function Navbaruser() {

  const [show_w_t, setShow_w_t] = useState(false)
  const [show_friend, setShow_friend] = useState(false);
  const [show_profile,  setShow_profile] = useState(false);

  const closeModal_w_t = () => setShow_w_t(false);
  const openModal_w_t = () => setShow_w_t(true);

  const closeModal_friend = () => setShow_friend(false);
  const openModal_friend = () => setShow_friend(true);

  const closeModal_profile = () => setShow_profile(false);
  const openModal_profile = () => setShow_profile(true);
  
  return (<>
    <nav>

      <div className="logoIMG" > <Image className="img-fluid" src="/Logo.png" width={200} height={"75"} alt="logo"></Image>
      </div>

      <div className="show_index_usere">
        <p><b> 0930041321</b></p>
        <p className="amount_money_index"> <b> 189.20</b></p>
        <p className="login_time">4/8/2023, t08.28 PM</p>
      </div>

      <Link href="/">
                <span
                >
                <div id="root"></div>
                ประวัติฝาก-ถอน
              </span>
           
         </Link>

      <Link href="/"> 
            ชวนเพื่อน
    </Link>

      <Link href="/">
            ข้อมูลส่วนตัว
     </Link>

      <input type="submit" value="ออกจากระบบ"></input>

      <div className="navfooterbar">
        <div className="container">

          <div className="row">
            <ul>
              <li><a className="active col-12" href="#home">ฝาก-ถอน</a></li>
              <li><a className="col-12" href="#news">ข้อมูลส่วนตัว</a></li>
              <li><a className="col-12" href="#contact">เชิญชวน </a></li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  </>)



}







export default Navbaruser



