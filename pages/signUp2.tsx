import React from 'react';
import styles from '@/styles/Home.module.css'
import Image from 'next/image';

function RegisterFrom2 () {
  return (

    <div className='box_setting'  >
      <div>
          <div>
          <label htmlFor="" className=''><h1>สมัครสมาชิก</h1></label>
            <br></br><br></br>
            <Image className="img-fluid" src="/regis_img.png" width={120} height={"500"} alt="img1" ></Image>
            <br></br><br></br>
            <input type="text" placeholder="เบอร์โทรศัพท์" name="email" id="email" required minLength={4} maxLength={10} size={20} pattern="[0]{1}[689]{1}[0-9]{8}" />
            <br></br>
            <br></br>
            <input type="text" placeholder="บัญชีธนาคาร" name="email" id="email" maxLength={5} required pattern="[0-9]{12}"  size={20} />
            <br></br><br></br>
            <select id="bank" className='select_bank' >
              <option >--เลือกธนาคาร--</option>
              <option value="">กสิกร</option>
              <option value="saab">กรุงไทย</option>
              <option value="opel">ไทยพาณิช</option>
              <option value="audi">Truewallet</option>
            </select>

            <br></br><br></br>
            <input type="password" placeholder="รหัสผ่าน" name="psw" id="psw" required minLength={4} maxLength={20} size={20} />
            <br></br><br></br>
            <input type="password" placeholder="ยืนยันรหัสผ่าน" name="psw-repeat" id="psw-repeat" required minLength={4} maxLength={20} size={20} />
            <br></br>
            <br></br>

            <select id="reviewer">
              <option >--รู้จักเว็บเราจากที่ใด--</option>
              <option value="volvo">Facebook</option>
              <option value="audi">Google</option>
              <option value="saab">Line</option>
              <option value="opel">Messenger </option>
              <option value="audi">TikTok</option>
              <option value="audi">Youtube</option>
              <option value="audi">เว็บไซต์อื่นๆ </option>
              <option value="audi">เพื่อนชวน</option>
            </select>
            <hr />
            <button type="submit" className={styles.conferm_btn}>ยืนยันสมัครสมาชิก</button>
            <br></br>
            <p><a href="#"> </a></p>
          </div>
        </div>
      </div>
  );
};

export default RegisterFrom2;