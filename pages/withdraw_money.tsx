/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from '@/styles/Home.module.css'
function Withdraw_money() {
    return (
        <>
            <div className='box_setting' >
                <label htmlFor="" className=''><h1>ถอนเงิน</h1></label>
                <div className={styles.game}>
                    <div className={styles.gamebock}>
                        <div className='row '>
                      
                                <Link href="" > <img className="truewallet_zoom img-fluid" src="/truewallet.png" alt="img1" ></img> </Link>
                      
                        </div>
                    </div>
                </div>
            
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