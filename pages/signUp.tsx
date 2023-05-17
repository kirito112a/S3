
import styles from '../styles/Home.module.css'
import { useForm } from 'react-hook-form'
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Carousel } from 'react-bootstrap';
 
export default function RegisterFrom() {

  const [phone_Num, setPhone] = useState('')

  const inputPhone = (e) => {
    console.log(e.target.value)
  }

  const SaveItem = (e) => {
    e.preventDefault()
    const itemData = {
      phone_Num: phone_Num,
    }
    console.log(itemData)


  }

  const {
    register,
    handleSubmit,
    formState: { errors, isValid }
  } = useForm({ mode: 'all' });

  const onSubmit = data => console.log(data);


  /** Group the person input fields in a component */
  const PhoneFields = () => (
    <div className='box_setting' >
      <section  >


          <Carousel fade controls={false} indicators={false} >
            <Carousel.Item >
              <Image className="img-fluid regis_promotions " src="/x1.png" width={350} height={"500"} alt="img1" ></Image>
              <Carousel.Caption>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
              <Image className="img-fluid regis_promotions" src="/x2.png" width={350} height={"500"} alt="img1" ></Image>
              <Carousel.Caption>
              </Carousel.Caption>
            </Carousel.Item>

          </Carousel>
  


        <br></br>

        
        
        <input type="text" className='' placeholder="เบอร์โทรศัพท์" name="phone_Num" id="phone_Num" required minLength={4} maxLength={10} size={20} pattern="[0]{1}[689]{1}[0-9]{8}" />
        <br></br> <br></br>
        
        <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
        <a> ยอมรับเงื่อนไขการสมัครสมาชิก </a> <Link href={"/"}> <a className={styles.read} >อ่านเพิ่มเติม</a> </Link> 
        <br></br>   <br></br>  
            <button type="button" className={styles.conferm_btn} onClick={() => { setStep(step + 1) }} disabled={!isValid} >ยืนยัน</button>
          </section>
          
          <br></br>
          <a> พบปัญหา  </a> <Link href={"/"}> <b className={styles.read} >ติดต่อฝ่ายบริการลูกค้า</b> </Link> 
        </div>

        )

  /** Group the contact input fields in a component */
  const ContactFields = () => (

        <section className={styles.inputGroup}>
          <div className='box_setting' >
            <div>
              <div>
                <br></br><br></br>
                <Image className="img-fluid" src="/regis_img.png" width={120} height={"500"} alt="img1" ></Image>
                <br></br><br></br>
                <input type="text" placeholder="ID Line" name="LineID" id="LineID" required minLength={4} maxLength={10} size={20} />
                <br></br>
                <br></br>
                <input type="text" placeholder="บัญชีธนาคาร" name="Bank" id="Bank" maxLength={12} required pattern="[0-9]{*}" size={20} />
                <br></br><br></br>
                <select id="bank" className='select_bank' >
                  <option >--เลือกธนาคาร--</option>
                  <option value="">กสิกร</option>
                  <option value="saab">กรุงไทย</option>
                  <option value="opel">ไทยพาณิช</option>
                  <option value="audi">Truewallet</option>
                </select>

                <br></br><br></br>
                <input type="password" placeholder="รหัสผ่าน" name="psw" id="psw" required minLength={4} maxLength={20} size={20} />
                <br></br><br></br>
                <input type="password" placeholder="ยืนยันรหัสผ่าน" name="psw-repeat" id="psw-repeat" required minLength={4} maxLength={20} size={20} />
                <br></br>
                <br></br>

                <select id="reviewer">
                  <option >--รู้จักเว็บเราจากที่ใด--</option>
                  <option value="volvo">Facebook</option>
                  <option value="audi">Google</option>
                  <option value="saab">Line</option>
                  <option value="opel">Messenger </option>
                  <option value="audi">TikTok</option>
                  <option value="audi">Youtube</option>
                  <option value="audi">เว็บไซต์อื่นๆ </option>
                  <option value="audi">เพื่อนชวน</option>
                </select>
         <br></br>  <br></br>
                <button type="button" className={styles.conferm_btn} onClick={() => { setStep(step + 1) }}   >ยืนยันข้อมูล</button>
                <br></br>
                <p><a href="#"> </a></p>
              </div>
            </div>
          </div>

        </section>
        )

  /** Group the address input fields in a component */
  const ConfermFields = () =>(
        <section className={styles.inputGroup}>
          <h3></h3>

        </section>
        )

        /** Nnavigation between steps */
        const rightArrow = "https://ik.imagekit.io/lrjseyuxi3m/youtube/Form/next-arrow_1pmaQTqF3.svg?updatedAt=1634410703345"
  // use ref to create our element
  const Navigation = () =>(
        <section className={styles.navigationControls}>
          {
            step === fieldGroups.length - 1 &&


            <button type="submit" className={styles.save_btn} disabled={!isValid}>
              บันทึก
            </button>  
          
          }
          
          {
            // step < fieldGroups.length-1 &&

            //   <button type="button" className={styles.nextButton} disabled={!isValid} onClick={()=>{setStep(step+1)}}>
            //     <img src={rightArrow} />
            //     NEXT
            //   </button>
          }
          {
            step > 0 &&
            <button type="button" className={styles.playBack_btn} onClick={() => { setStep(step - 1) }}>
              ย้อนกลับ
            </button>
          }
        </section>
        )

  /** Mark the input group already filled as blue or gray if not */
  const Reference = () =>(
        <footer className={styles.reference}>
          {renderMarkers()}
        </footer>
        )
        function renderMarkers(){
          let markers = []
        for(let i=0; i<fieldGroups.length; i++)
        markers.push
        return markers
  }

        const [step, setStep] = useState(0)

        const fieldGroups =[
        // eslint-disable-next-line react/jsx-key
        <PhoneFields />,
        // eslint-disable-next-line react/jsx-key
        <ContactFields />,
        // eslint-disable-next-line react/jsx-key
        <ConfermFields />
        ]

        return (
        <div>
          <main className={styles.mainContainer}>
            <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
              <h1>สมัครสมาชิก</h1>
              {fieldGroups[step]}
              <Navigation />
              <Reference />
            </form>
          </main>
        </div>
        )
}