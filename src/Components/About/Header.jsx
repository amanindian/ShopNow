import React from "react";
import HeaderImage from "../../Image/about/Aman Kumar Background.jpg";

export default function Header() {
  return (
    <section id="about-head">
      <img src={HeaderImage} alt="Aman Kumar Background AmanIndian" />
      <div>
        <h1>Who We Are?</h1>
        <p>
          Welcome to ShopNow, your ultimate destination for online shopping! ShopNow is a cutting-edge web application designed with the latest technologies including HTML, CSS, JavaScript, and React JS. Our platform provides customers with a seamless experience to browse and purchase a variety of products, ranging from trendy clothing to essential accessories.

          Behind ShopNow is the dedicated work of <a title="Click Here" target="_blank" rel="noopener noreferrer" href="https://amanindian.netlify.app/"> Aman Kumar (amanindian)</a>, a talented individual hailing from Siwan, Bihar. Aman is currently pursuing his Bachelor of Computer Application from Indira Gandhi National Open University. With a passion for Web Development, Aman honed his skills through Online Toturial and brings his expertise to every aspect of ShopNow.

          <a title="Click Here" target="_blank" rel="noopener noreferrer" href="https://amanindian.netlify.app/"> Aman</a> is not just a skilled Web Developer he is characterized by his honesty, hardworking nature, self-motivation, and quick learning abilities. His short-term goal is to secure a position in a reputed company where he can further enhance his skills and knowledge. Looking ahead, Aman's long-term ambition is to become a responsible and knowledgeable professional, striving for excellence in every endeavor.

          At ShopNow, we are committed to providing you with a clean and user-friendly interface, ensuring a delightful shopping experience every time you visit. Whether you're looking for the latest fashion trends or essential items, ShopNow has you covered.
        </p>
        <abbr title="">
            For any queries please contact with <a title="Click Here" target="_blank" rel="noopener noreferrer" href="https://amanindian.netlify.app/"> Aman Kumar</a>
        </abbr>
        {
          // eslint-disable-next-line
          <marquee bgcolor="#ccc" scrollamount={5} loop={-1}>
            Aman Kumar from Siwan, Bihar, a diligent student pursuing Bachelor of Computer Application. Skilled Web Developer with a passion for learning, aiming for growth and excellence in the tech industry.
          </marquee>
        }
      </div>
    </section>
  );
}
