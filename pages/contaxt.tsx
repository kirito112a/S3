import styles from '@/styles/Home.module.css'
import Link from "next/link"
import Carousel from 'react-bootstrap/Carousel';
import React, { useState } from "react";
import Image from 'next/image';

import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

function Contaxt() {
    return (
      <>
        <Link href="/" className={styles.line_icon}> <Image className="img-fluid" src="/line.png" width={60} height={"500"} alt="img1" ></Image>
        </Link>
        <Link href="/" className={styles.telagram_icon}> <Image className="img-fluid" src="/telagram.png" width={60} height={"500"} alt="img1" ></Image>
        </Link>
        <Link href="/" className={styles.bonus_icon}> <Image className="img-fluid" src="/bonus.jpg" width={60} height={"500"} alt="img1" ></Image>
        </Link>
     
      </>
    );
  }
  
export default Contaxt