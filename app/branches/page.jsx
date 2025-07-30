// Directory: app/branches/page.jsx
export default function Branches() {
  return (
    <div className="max-w-3xl mx-auto py-8">
      <h2 className="text-2xl font-bold mb-4">Our Branches</h2>
      <ul className="list-disc pl-6">
        <li>Mandaveli</li>
        <li>Mylapore</li>
        <li>Adyar</li>
        <li>Teynampet</li>
      </ul>
      <div className="mt-6">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15556.26454448996!2d80.25731275!3d13.03009725!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52674a655c35e7%3A0x7811e60716b4a9c3!2sMandaveli%2C%20Chennai!5e0!3m2!1sen!2sin!4v1690534388284!5m2!1sen!2sin"
          width="100%"
          height="300"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
}
