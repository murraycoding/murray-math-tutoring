import Image from 'next/image'
import Link from 'next/link'

// style imports
import ImageSectionStyles from '../styles/ImageSection.module.scss'

export default function ImageSection({ src, alt, title, content, link, btnText}) {
  return (
    <div className={ImageSectionStyles.imageSectionWrapper}>
      {/* <Image
        src={src}
        height={200}
        width={200}
        alt={alt}
      /> */}
      <p>Image here: {src}</p>
      <div className={ImageSectionStyles.textWrapper}>
        <h2>{title}</h2>
        <p>{content}</p>
        <button className="button"><Link href={`/${link}`}>{btnText}</Link></button>
      </div>
    </div>
  )
}