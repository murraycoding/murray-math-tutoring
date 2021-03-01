import Image from 'next/image';
import ContentBodyStyles from '../styles/ContentBody.module.scss'

export default function ContentBody({ children }) {
  return(
    <div className={ContentBodyStyles.wrapper}>
      { children }
      <div className={ContentBodyStyles.backgroundimage}>
        <Image
          src="/Paper.jpg"
          alt=""
          width={2000}
          height={1500}
          quality={25}
          layout="fixed"
          objectPosition="left top"
        />
      </div>
    </div>
  )
}