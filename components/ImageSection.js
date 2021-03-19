import Image from 'next/image'
import Link from 'next/link'

// style imports
import ImageSectionStyles from '../styles/ImageSection.module.scss'

export default function ImageSection({ src, alt, height, width, title, content, type, link, btnText}) {
  // determines the type of button which will be used, if any

  return (
    <div className={ImageSectionStyles.imageSectionWrapper}>
      <div className={ImageSectionStyles.imageWrapper}>
        <Image
          src={src}
          layout="fixed"
          height={height}
          width={width}
          alt={alt}
        />
      </div>
      <div className={ImageSectionStyles.textWrapper}>
        <h2>{title}</h2>
        <p>{content}</p>
        { type == "external" && 
          <button className="button"><a href={link} target="_blank">{btnText}</a></button>
        }
        { type == "internal" &&  
          <button className="button"><Link href={`/${link}`}>{btnText}</Link></button>
        }
      </div>
    </div>
  )
}