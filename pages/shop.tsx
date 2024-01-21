import styles from "@/styles/Home.module.css";
import Image from "next/image";
import Link from "next/link";
import { BsCart } from "react-icons/bs";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa6";
import { IoIosArrowDown, IoIosArrowForward, IoIosHeartEmpty } from "react-icons/io";
import { IoPersonOutline, IoSearchOutline } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";
import { RiStarLine, RiStarSFill } from "react-icons/ri";
import { IoEyeSharp } from "react-icons/io5";




export default function Samplenew () {
    return (
<div>
<nav>
          <div
            className={`${styles.topnav} d-flex justify-content-between align-items-center`}
          >
            <div className="d-flex align-items-center">
              <div className="d-flex align-items-center">
                <Image
                  src="/call.png"
                  width={15}
                  height={15}
                  alt="logo"
                  className="mx-2"
                />
                <p className={styles.navcontact}>(225) 555-0118</p>
              </div>
              <div className="d-flex">
                <MdOutlineEmail className={styles.emailicon} />
                <p className={styles.navcontact}>michelle.rivera@example.com</p>
              </div>
            </div>
            <div>
              <p className={styles.navcontact}>
                Follow Us and get a chance to win 80% off
              </p>
            </div>
            <div className="d-flex align-items-center">
              <p className={styles.navcontact}>Follow Us :</p>
              <div className="d-flex align-items-center">
                <Image src="/instagram.png" width={20} height={20} alt="logo" />
                <Image
                  src="/youtube.png"
                  width={20}
                  height={20}
                  alt="logo"
                  className={styles.logo}
                />
                <Image src="/facebook.png" width={20} height={20} alt="logo" />
                <Image src="/twitter.png" width={20} height={20} alt="logo" />
              </div>
            </div>
          </div>
          <div>
            <div className="d-flex justify-content-between align-items-ceneter">
              <div>
                <div className={styles.leftnav}>
                  <div>
                    <Image src="/logo.png" width={100} height={50} alt="logo" />
                  </div>
                  <div>
                    <Link href="#" className={styles.menulink}>
                      Home
                    </Link>
                    <Link href="#" className={styles.menulink}>
                      Shop <IoIosArrowDown />
                    </Link>
                    <Link href="#" className={styles.menulink}>
                      About
                    </Link>
                    <Link href="#" className={styles.menulink}>
                      Blog
                    </Link>
                    <Link href="#" className={styles.menulink}>
                      Contact
                    </Link>
                    <Link href="#" className={styles.menulink}>
                      Pages
                    </Link>
                  </div>
                </div>
              </div>
              <div className={styles.rightnav}>
                <IoPersonOutline className={styles.personicon} />
                <Link href="#" className={styles.logs}>
                  Login /
                </Link>
                <Link href="#" className={styles.logs}>
                  Logout
                </Link>
                <div className="d-flex">
                  <IoSearchOutline className={styles.space} />
                  <div className={styles.iconContainer}>
                    <sup className={styles.sup}>1</sup>
                    <BsCart className={styles.space} />
                  </div>
                  <div className={styles.iconContainer}>
                    <sup className={styles.sup}>1</sup>
                    <IoIosHeartEmpty className={styles.space} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
        {/* SECTION ONE  */}
        <div>
            <div className={`${styles.imgcontainer} row align-items-center`}>
                <div className={`${styles.featuredimg} col-12 col-lg-6`}>
                  <div>
                  <div className={styles.pages}>
                <Link href="#" className={styles.pagelink}>Home</Link> 
                <h6 className={styles.arrowright}> <IoIosArrowForward className="d-flex align-items-center"/> Shop</h6>
            </div>
                <Image src="/main.png" width={500} height={400} alt="featured" />
                <div className="my-3">
                <Image src="/maintwo.jpg" width={100} height={100} alt="featuredtwo" />
                <Image src="/mainone.png" width={100} height={100} alt="featuredone" className="mx-3"/>
                </div>
                </div> 
                </div>
                <div className={`${styles.featuredimg} col-12 col-lg-6`}>
                <div>
                    <h4 className={styles.pname}>Floating Phone</h4>
                    <div className='d-flex  my-3'>
              <RiStarSFill className={`${styles.star}`}/>
              <RiStarSFill className={styles.star}/>
              <RiStarSFill className={styles.star}/>
              <RiStarSFill className={styles.star}/>
              <RiStarLine className={styles.emptystar}/>
              <h6 className={styles.review}>10 Reviews</h6>
              </div>
                    <h3 className={`${styles.price} my-2`}>$1,139.33</h3>
                    <div className="d-flex align-items-center my-3">
                        <h6 className={styles.priceone}>Availability:</h6>
                        <h6 className={styles.name}>In stock</h6>
                    </div>
                    <div className={styles.straight}></div>
                    <div className="d-flex my-4">
                        <div className={styles.ball}></div>
                        <div className={styles.balls}></div>
                        <div className={styles.ballz}></div>
                        <div className={styles.baller}></div>
                    </div>
                    <div className="d-flex align-items-center mt-5">
                        <button className={styles.optionbtn}>Select Options</button>
                        <div className="d-flex mx-3">
                        <IoIosHeartEmpty className={styles.iconly}/>
                        <BsCart className={styles.iconly} />
                        <IoEyeSharp className={styles.iconly}/>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
        {/* SECTION TWO */}
        <div>
        <div className={styles.descrptnheader}>
          <div className="py-4">
          <Link href="#" className={styles.description}>Description</Link>
          <Link href="#" className={styles.descriptions}>Additional Information</Link>
          <Link href="#" className={`${styles.descriptions}`}>Reviews (<span className={styles.chart}>0</span>)</Link>
          </div>
          <div className={styles.desctnline}></div>
        </div>
        <div className="row">
        <div className="col-12 col-lg-6 d-flex justify-content-center my-3">
        <div>
          <h3 className={styles.revheader}>the quick fox jumps over </h3>
          <div>
            <p className={styles.revparagrapgh}>Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.</p>
            <p className={styles.revparagrapghs}>Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.</p>
            <p className={styles.revparagrapgh}>Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.</p>
          </div>
        </div>
        </div>
        <div className="col-12 col-lg-6 text-center my-3">
        <Image src="/dinning.png" width={400} height={400} alt="logo" />
        </div>
        </div>
        </div>

        {/* THIRD SECTION */}

        <div className={`${styles.thirdbg} d-flex justify-content-center`}>
        <div>
          <div className="d-flex my-5">
            <div className="my-4">
            <h3 className={`${styles.bestseller} mb-5`}>BESTSELLER PRODUCTS</h3>
            <div className={styles.desctnline}></div>

            </div>
            
          </div>
          <div className={styles.productgrids}>
            <div className={styles.eachproduct}>
            <Image
              src="/four.png"
              width={200}
              height={200}
              alt="banner"
              className={styles.productimgs}
            />
             <div className="px-4 py-4">
            <h5 className={styles.producttitle}>Graphic Design</h5>
            <Link href='#' className={styles.subtitle}>English Department</Link>
            <div className="d-flex my-2">
              <h5 className={styles.priceone}>$16.48</h5>
              <h5 className={styles.pricetwo}>$6.48</h5>
            </div>
            </div>
            </div>
            <div className={styles.eachproduct}>
              <Image src='/chair.png' width={200} height={200} alt="chair" className={styles.productimgs} />
              <div className="px-4 py-4">
            <h5 className={styles.producttitle}>Graphic Design</h5>
            <Link href='#' className={styles.subtitle}>English Department</Link>
            <div className="d-flex my-2">
              <h5 className={styles.priceone}>$16.48</h5>
              <h5 className={styles.pricetwo}>$6.48</h5>
            </div>
            </div>
            </div>
            <div className={styles.eachproduct}>
            <Image src='/chair.png' width={200} height={200} alt="chair" className={styles.productimgs}/>
            <div className="px-4 py-4">
            <h5 className={styles.producttitle}>Graphic Design</h5>
            <Link href='#' className={styles.subtitle}>English Department</Link>
            <div className="d-flex my-2">
              <h5 className={styles.priceone}>$16.48</h5>
              <h5 className={styles.pricetwo}>$6.48</h5>
            </div>
            </div>
            </div>
            
            <div className={styles.eachproduct}>
            <Image src='/chair.png' width={200} height={200} alt="chair" className={styles.productimgs} />
            <div className="px-4 py-4">
            <h5 className={styles.producttitle}>Graphic Design</h5>
            <Link href='#' className={styles.subtitle}>English Department</Link>
            <div className="d-flex my-2">
              <h5 className={styles.priceone}>$16.48</h5>
              <h5 className={styles.pricetwo}>$6.48</h5>
            </div>
            </div>
            </div>
            <div className={styles.eachproduct}>
            <Image src='/chair.png' width={200} height={200} alt="chair" className={styles.productimgs} />
            <div className="px-4 py-4">
            <h5 className={styles.producttitle}>Graphic Design</h5>
            <Link href='#' className={styles.subtitle}>English Department</Link>
            <div className="d-flex my-2">
              <h5 className={styles.priceone}>$16.48</h5>
              <h5 className={styles.pricetwo}>$6.48</h5>
            </div>
            </div>
            </div>
            <div className={styles.eachproduct}>
            <Image src='/chair.png' width={200} height={200} alt="chair" className={styles.productimgs} />
            <div className="px-4 py-4">
            <h5 className={styles.producttitle}>Graphic Design</h5>
            <Link href='#' className={styles.subtitle}>English Department</Link>
            <div className="d-flex my-2">
              <h5 className={styles.priceone}>$16.48</h5>
              <h5 className={styles.pricetwo}>$6.48</h5>
            </div>
            </div>
            </div>
            <div className={styles.eachproduct}>
            <Image src='/chair.png' width={200} height={200} alt="chair" className={styles.productimgs} />
            <div className="px-4 py-4">
            <h5 className={styles.producttitle}>Graphic Design</h5>
            <Link href='#' className={styles.subtitle}>English Department</Link>
            <div className="d-flex my-2">
              <h5 className={styles.priceone}>$16.48</h5>
              <h5 className={styles.pricetwo}>$6.48</h5>
            </div>
            </div>
            </div>
            <div className={styles.eachproduct}>
            <Image src='/chair.png' width={200} height={200} alt="chair" className={styles.productimgs} />
            <div className="px-4 py-4">
            <h5 className={styles.producttitle}>Graphic Design</h5>
            <Link href='#' className={styles.subtitle}>English Department</Link>
            <div className="d-flex my-2">
              <h5 className={styles.priceone}>$16.48</h5>
              <h5 className={styles.pricetwo}>$6.48</h5>
            </div>
            </div>
            </div>
          </div>
          <div className={styles.logocontainer}>
          <Image src='/logo1.png' width={150} height={50} alt="chair"  />
          <Image src='/logo2.png' width={150} height={50} alt="chair"  />
          <Image src='/logo3.png' width={150} height={50} alt="chair"  />
          <Image src='/logo4.png' width={150} height={50} alt="chair"  />
          <Image src='/logo5.png' width={150} height={50} alt="chair"  />
          <Image src='/logo6.png' width={150} height={50} alt="chair"  />
          </div>
        </div>
        </div>
        
        {/* FOOTER SECTION */}
        <div className={`${styles.topfooter} d-flex justify-content-between`}>
          <div>
            <div className={styles.bandage}>Bandage</div>
          </div>
          <div className={styles.footersocials}>
            <FaFacebook className={styles.socials} />
            <FaInstagram className={`${styles.socials} mx-3`} />
            <FaTwitter className={styles.socials} />
          </div>
        </div>
        <div className={styles.footergrid}>
          <div>
            <h6 className={styles.footertitle}>Company Info</h6>
            <Link href="#" className={styles.footerlink}>
              About Us
            </Link>
            <Link href="#" className={styles.footerlink}>
              Carrier
            </Link>
            <Link href="#" className={styles.footerlink}>
              We are Hiring
            </Link>
            <Link href="#" className={styles.footerlink}>
              Blog
            </Link>
          </div>
          <div>
            <h6 className={styles.footertitle}>Legal</h6>
            <Link href="#" className={styles.footerlink}>
              About Us
            </Link>
            <Link href="#" className={styles.footerlink}>
              Carrier
            </Link>
            <Link href="#" className={styles.footerlink}>
              We are Hiring
            </Link>
            <Link href="#" className={styles.footerlink}>
              Blog
            </Link>
          </div>
          <div>
            <h6 className={styles.footertitle}>Features</h6>
            <Link href="#" className={styles.footerlink}>
              Business Marketing
            </Link>
            <Link href="#" className={styles.footerlink}>
              User Analytic
            </Link>
            <Link href="#" className={styles.footerlink}>
              Live Chat
            </Link>
            <Link href="#" className={styles.footerlink}>
              Unlimited Support
            </Link>
          </div>
          <div>
            <h6 className={styles.footertitle}>Resources</h6>
            <Link href="#" className={styles.footerlink}>
              IOS & Android
            </Link>
            <Link href="#" className={styles.footerlink}>
              Watch a Demo
            </Link>
            <Link href="#" className={styles.footerlink}>
              Customers
            </Link>
            <Link href="#" className={styles.footerlink}>
              API
            </Link>
          </div>
          <div>
            <h6 className={styles.footertitle}>Get in Touch</h6>
            <div className="d-flex">
              <input
                placeholder="Your email"
                name="search"
                type="text"
                className={styles.footerinput}
              />
              <button className={styles.subscribe}>Subscribe</button>
            </div>
            <p className={styles.footertext}>Lore imp sum dolor Amit</p>
          </div>
        </div>
        <div className={styles.lowerfooter}>
          <p className={styles.copyright}>
            Made With Love By Finland All Right Reserved{" "}
          </p>
        </div>
      </div>
    )
}
