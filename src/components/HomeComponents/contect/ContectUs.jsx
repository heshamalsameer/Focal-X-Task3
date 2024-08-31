import styles from "./ContectUs.module.css";
import SectionTitle from "../SectionTitle/SectionTitle";
const ContectUs = () => {
  return (
    <div className={styles.cont}>
      <div className={styles.backimg}>
        <img src="/images/contact-bg.jpg" />
      </div>
      <div className={styles.head}>
        <SectionTitle title="CONTACT US" />
        <h1>Get In Touch With Our Agents</h1>
      </div>
      <div className={styles.maincontact}>
        <div className={styles.section}>
          <div>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11662.9823862156!2d-80.11417883366248!3d25.936737059558723!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9acfee073549d%3A0xf4e74db7a5da487a!2z2LXZhtmKINii2YrZhNiyINio2YrYqti02Iwg2YHZhNmI2LHZitiv2KcgMzMxNjDYjCDYp9mE2YjZhNin2YrYp9iqINin2YTZhdiq2K3Yr9ip!5e1!3m2!1sar!2snl!4v1724217821361!5m2!1sar!2snl"></iframe>
          </div>
          <div className={styles.phonecards}>
            <div className={styles.phone}>
              <img src="/images/phone-icon.png" alt="" />
              <div className={styles.phonnumber}>
                <h3>010-020-0340</h3>
                <p>Phone Number</p>
              </div>
            </div>
            <div className={styles.phone}>
              <img src="/images/email-icon.png" alt="" />
              <div className={styles.phonnumber}>
                <h3>info@villa.co</h3>
                <p>Business Email</p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.form}>
          <form>
            <label htmlFor="name">Full Name</label>
            <input type="text" placeholder="Your Name..." />
            <label htmlFor="name">Email Adress</label>
            <input type="text" placeholder="Your Email..." />
            <label htmlFor="name">Subject</label>
            <input type="text" placeholder="Subject..." />
            <label htmlFor="name">Message</label>
            <textarea type="text" placeholder="Your Message..." />
            <button>Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
};
export default ContectUs;
