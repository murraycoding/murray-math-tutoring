export default function Testimonial({ name, review, important }) {
  return (
    <>
      <h2 className="sectionTitle">{ name }</h2>
      <p className="bold">{ important }</p>
      <p className="quote"> { review }</p>
      <hr className="sectionDivider" />
    </>
  )
}