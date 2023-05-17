import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from '@/styles/Home.module.css'
function Withdraw_money() {
    return (
        <>
          <div className='box_setting' >
            <label htmlFor="" className=''><h1>ถอนเงิน</h1></label>

            <Link href="" className="img_truewallet"> <Image className="img_truewallet_hover img-fluid " src="/truewallet.png" width={150} height={30} alt="img1" ></Image></Link>
            <br></br>
            <Image className="img-fluid" src="/scblogo.png" width={50} height={30} alt="img1" ></Image>
            <br></br>
            <div className="bankname_account">
                <label htmlFor="" ><a>เมธี หีบหงส์</a></label>
                <label htmlFor="" className='enter_line'><a>797 72 0642</a></label>
            </div>
            <label htmlFor="" className='enter_line'><a>จำนวนเงินที่ต้องการถอน ถอนขั้นต่ำ 50 บาท</a></label>
            <input className='enter_line' type="text" placeholder="บัญชีธนาคาร" name="email" id="email" maxLength={12} required pattern="[0-9]{12}" size={20} />
            <hr></hr>
            <button type="submit" className={styles.conferm_btn}>ยืนยันการถอนเงิน</button>
            <br></br> <br></br>
            </div>
        </>
    );
}
export default Withdraw_money