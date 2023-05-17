import React from 'react';
import styles from '@/styles/Home.module.css'
import Image from 'next/image';
import Carousel from 'react-bootstrap/Carousel';

export default function Advert1() {
    return (
        <>
            <div className='box_setting' >
                <div>
                    <div>
                  
                        <label htmlFor="" className=''><h1>  ป๊อปอัป 1</h1></label>
                        <div className={styles.imgmain2} id="promotions" >
                       พื้นที่โฆษณา 1
                        </div>
                        <hr></hr>
                    </div>

                </div>

            </div>
        </>
    );
}
