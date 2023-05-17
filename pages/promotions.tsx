import React from 'react';
import styles from '@/styles/Home.module.css'
import Image from 'next/image';
import Carousel from 'react-bootstrap/Carousel';

function Promotions() {
    return (
        <>
            <div className='box_setting' >
                <div>
                    <div>
                        <label htmlFor="" className=''><h1>โปรโมชัน</h1></label>
                        <div className={styles.imgmain2} id="promotions" >
                            <Carousel fade>
                                <Carousel.Item>
                                    <Image className="img-fluid" src="/freecrdit.png" width={700} height={"500"} alt="img1" ></Image>
                                    <hr></hr>
                                    <label htmlFor="" className=''><p>รับโบนัส 100% ฝากเริ่มต้นเพียง 100 บาท ทำยอดเพียง 1 เทิร์น ถอนได้ 2 เท่าของยอดฝาก รับโบนัสได้ทุกวัน โบนัสสูงสุด 500 บาท</p></label>
                                    <button type="submit">รับโปรโมชัน คลิก</button>    
                                    <Carousel.Caption>
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <Image className="img-fluid" src="/pro2.png" width={700} height={"500"} alt="img1" ></Image>
                                    <hr></hr>
                                    <label htmlFor="" className=''><p>รับโบนัส 100% ฝากเริ่มต้นเพียง 50 บาท ทำยอดเพียง 4 เทิร์น ถอนได้ 5 เท่าของยอดฝาก </p></label>
                                    <button type="submit">รับโปรโมชัน คลิก</button> 
                                    <Carousel.Caption>
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <Image className="img-fluid" src="/pro3.png" width={700} height={"500"} alt="img1" ></Image>
                                    <hr></hr>
                                    <label htmlFor="" className=''><p>29 รับ 100 ทำยอด 500 ถอนได้ 250</p></label>
                                    <button type="submit">รับโปรโมชัน คลิก</button>  
                                    <Carousel.Caption>
                                    </Carousel.Caption>
                                    
                                </Carousel.Item>
                            </Carousel>
                        </div>
                        <hr></hr>
                    </div>

                </div>

            </div>
        </>
    );
}
export default Promotions