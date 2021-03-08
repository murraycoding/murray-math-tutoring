export default function Testimonial({ name, review, important, last }) {
  return (
    <>
      <h2 className="sectionTitle">{ name }</h2>
      <p className="bold">{ important }</p>
      <p className="quote"> { review }</p>
      { !last && 
        <hr className="sectionDivider" />
      }
    </>
  )
}