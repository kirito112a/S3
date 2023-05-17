import React from 'react';
import styles from '@/styles/Home.module.css'
import Image from 'next/image';
import Link from 'next/link'

function SignInFrom () {
  return (

    <div className='box_setting' >
      <div>
          <div>
          <label htmlFor="" className=''><h1>เข้าสู่ระบบ</h1></label>
            <br></br><br></br>
            <label htmlFor="uname"><b>Username</b></label>
            <input type="text" placeholder="Enter Username" name="uname" required />
            <label htmlFor="psw"><b>Password</b></label>
            <input type="password" placeholder="Enter Password" name="psw" required />
            <hr></hr>
            <button type="submit" className={styles.conferm_btn}  >
            <Link href={'indexPlay'} >เข้าสู่ระบบ</Link>
            </button>
        </div>
      </div>  
      </div>
  );
};

export default SignInFrom;