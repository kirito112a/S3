import { profile } from 'console';
import Image from 'next/image';
import Table from 'react-bootstrap/Table';
import Link from 'next/link';
import styles from '@/styles/Home.module.css'

function Friend() {
    return (
        <>
            <div className='drop_data'>
                <label htmlFor="" className=''><h1>การเชิญเพื่อน</h1>  </label>
                <label htmlFor="" className=''><a>รับทันที 5% เมื่อเพื่อนของคุณสมัครผ่านลิ้งนี้ มียอดฝากขั้นต่ำ 300 บาทขึ้นไป</a> </label>
                <br></br>   <br></br>
                <hr></hr>
                <label htmlFor="" className=''><a>
                    ลิ้งเชิญเพื่อน: https://www.autovip99.com/ref/1a4efc6a-e8fe-4e85-86b9-6be04e4c60a6  <Link href="/"> <b>[ คัดลอก ]</b></Link> </a> </label>
                <br></br>      <br></br>
                <hr></hr>
                <label htmlFor="" className=''> <h4>ประวัติการชวน</h4></label>
                <hr></hr>

                        <div className={styles.table_show}>
                            <Table striped bordered hover responsive>
                                <thead>
                                    <tr>
                                        <th>ผู้ใช้</th>
                                        <th>สมัครเมื่อ</th>
                                        <th>รับจำนวน</th>
                                        <th>รับเมื่อ</th>
                                        <th>สถานะ</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>ux1568423</td>
                                        <td>3/10/23</td>
                                        <td>250</td>
                                        <td>1/10/23</td>
                                        <td>Online</td>
                                    </tr>
                                    <tr>
                                        <td>fr25461485</td>
                                        <td>3/10/23</td>
                                        <td>170</td>
                                        <td>3/10/23</td>
                                        <td>Online</td>
                                    </tr>
                                    <tr>
                                        <td>pa3568721</td>
                                        <td>3/10/23</td>
                                        <td>1000</td>
                                        <td>4/10/23</td>
                                        <td>Ofline</td>
                                    </tr>
                                </tbody>
                            </Table>
                        </div>
                    </div>
                </>
                );
}
                export default Friend