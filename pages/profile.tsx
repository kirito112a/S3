import { profile } from 'console';
import Image from 'next/image';
import Link from 'next/link';


function ProfileMe() {
    return (
        <>
        
        <div className='drop_data'>
                <label htmlFor="" className=''><h1>ข้อมูลส่วนตัว</h1></label>
                <div className="img_truewallet"> <Image className="img_truewallet_hover img-fluid "  src="/profile.png" width={100} height={30} alt="img1" ></Image></div>
                <br></br> 
                <label htmlFor="" className=''><a>Username </a> <b>0620630585</b> </label>
                <label htmlFor="" className=''><a>เปลี่ยนรหัสผ่าน </a><a>|</a><a> ออกจากระบบ</a> </label>
                <br></br> <br></br>
                <label htmlFor="" className=''><a>ข้อมูลบัญชี AUTOVIP99 สล็อตออนไลน์มือถือ โปรสมาชิกใหม่100% คาสิโนออนไลน์ เล่นง่ายได้เงินจริง</a> </label>
             
                <hr></hr>
                <label htmlFor="" className=''><b>ข้อมูลบัญชี</b> </label>
        
                <Image className="img-fluid" src="/scblogo.png" width={50} height={30} alt="img1" >
                    
                </Image>
                <br></br>
                <div className="bankname_account">  
                <label htmlFor="" ><a>เมธี หีบหงส์ </a><a> 797720642</a></label>
                </div>
                <hr></hr>
                <label htmlFor="" ><a>*ต้องการเปลี่ยนบัญชี กรุณาติดต่อ <Link href="/"> <b>ฝ่ายบริการลูกค้า</b></Link></a> </label>
                <br></br> <br></br>

            </div>
        </>
    );
}

export default ProfileMe