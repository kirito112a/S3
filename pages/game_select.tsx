import { profile } from 'console';
import Image from 'next/image';
import Table from 'react-bootstrap/Table';
import Link from 'next/link';

function Game_select() {
    return (
        <>     
        <div className='drop_data'>
                <label htmlFor="" className=''><h1>เลือกเกม</h1>  </label>
                <hr></hr>

                <div className="img_truewallet">  <Link href="#"> <Image className="img_truewallet_hover img-fluid "  src="/betflix.png"  height={100} width={250} alt="img1" ></Image> 
                <p  className=''> Betflix  </p>
                </Link> </div>

                <hr></hr>
                <div className="img_truewallet">  <Link href="#"> <Image className="img_truewallet_hover img-fluid "  src="/spin.png"  height={100} width={250} alt="img1" ></Image> 
                <p  className=''> เกมกงล้อ </p>
                </Link> </div>
            </div>
        </>
    );
}
export default  Game_select