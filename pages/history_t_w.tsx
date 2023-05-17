import { profile } from 'console';
import Image from 'next/image';
import Table from 'react-bootstrap/Table';
import Link from 'next/link';
import styles from '@/styles/Home.module.css'

function History_t_y() {
    return (
        <>     
        <div className='drop_data'>
                <label htmlFor="" className=''><h1>คืนยอดเสีย</h1>  </label>
                <label htmlFor="" className=''><a>เงินคืนยอดเสีย 5% ที่ได้คือ 0 เครดิต (ต่อ/วัน)</a> </label>
                <label htmlFor="" className=''> <Link href="/"> <b>รับเครดิตคืนยอดเสีย</b></Link></label>
                <br></br>   <br></br>
                <hr></hr>
                <label htmlFor="" className=''> <h4>ประวัติฝาก-ถอน</h4></label>
                <div className={styles.table_show}>
                    <Table striped bordered hover responsive>
                        <thead>
                            <tr>
                                <th>รายการ</th>
                                <th>จำนวน</th>
                                <th>โบนัส</th>
                                <th>เวลา</th>
                                <th>สถานะ</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>ฝาก</td>
                                <td>100</td>
                                <td>0</td>
                                <td><a>1/10/23</a>, <a>23:28:54</a></td>
                                <td>สำเร็จ</td>
                            </tr>
                            <tr>
                                <td>รับเครดิตคืนยอดเสีย</td>
                                <td>5</td>
                                <td>0</td>
                                <td><a>2/10/23</a>, <a>18:21:41</a></td>
                                <td>สำเร็จ</td>
                            </tr>
                            <tr>
                                <td>ฝาก</td>
                                <td>100</td>
                                <td>0</td>
                                <td><a>4/10/23</a>, <a>20:45:23</a></td>
                                <td>สำเร็จ</td>
                            </tr>
                            
                        </tbody>
                    </Table>
                </div>
            </div>
        </>
    );
}
export default History_t_y