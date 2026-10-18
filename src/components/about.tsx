import Link from "next/link";

export default function About() {
  const EmailInput = () => {
    return (
      <div className="email-container">
        <input type="email" placeholder="Email" className="email-input"/>
        <div className="email-button">&#8594;</div>
      </div>
    )
  }

  return (
    <div className="about-container">
      <h2 className="about-title">About</h2>
      <p className="about-description">Short summary describing Not Like My Nails.</p>
      <h3 className="about-message">Be the first to know when new sets come out!</h3>
      <EmailInput />
      <div className="about-links">
        <Link 
          href='https://www.instagram.com/notlikemy_nails?rpxt=cGRubHV5amZwN3Vn' 
          className=""
          target="_blank"
        >
          <img 
            src='/icons/instagram.svg'
            alt=""
            className="about-icon"
          />
        </Link>
        <Link 
          href=''
          className="">
          <img 
            src='/icons/tiktok.svg'
            alt=""
            className="about-icon"
          />
        </Link>
      </div>
    </div>
  )
}