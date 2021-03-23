import Image from 'next/image';
import ContentBodyStyles from '../styles/ContentBody.module.scss'

export default function ContentBody({ children }) {
  return(
    <div className={ContentBodyStyles.newBackground}>
      { children }
    </div>
  )
}