import Image from 'next/image'
import Link from 'next/link'

// style imports
import ImageSectionStyles from '../styles/ImageSection.module.scss'

export default function ImageSection({ src, alt, height, width, title, content, link, btnText}) {
  return (
    <div className={ImageSectionStyles.imageSectionWrapper}>
      <div className="imageWrapper">
        <Image
          src={src}
          height={height}
          width={width}
          alt={alt}
        />
      </div>
      <div className={ImageSectionStyles.textWrapper}>
        <h2>{title}</h2>
        <p>{content}</p>
        <button className="button"><Link href={`/${link}`}>{btnText}</Link></button>
      </div>
    </div>
  )
}