import React from "react";
import HeaderImage from "../../Image/about/a6.jpg";

export default function Header() {
  return (
    <section id="about-head">
      <img src={HeaderImage} alt="This is header Pic" />
      <div>
        <h1>Who We Are?</h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio
          maiores vitae incidunt, sequi nulla esse omnis. Nam optio, sed nisi
          iusto temporibus suscipit accusamus labore sit at porro sint?
          Temporibus, voluptatum ad. Neque, libero repellendus adipisci
          dignissimos accusantium officia accusamus possimus non nostrum sunt
          vitae, quisquam provident? Optio doloremque eos magni quidem alias?
          Vel, deserunt vero dicta enim excepturi reiciendis ipsum, ducimus
          deleniti quaerat, repellat consequatur dignissimos cupiditate pariatur
          exercitationem fuga atque. Ducimus necessitatibus quidem corporis
          dolorem consequuntur, a quae.
        </p>
        <abbr title="">
          Create stunning images with a much or as little control as you like
          thanks to choice of Basic and Creative modes.
        </abbr>
        {
          // eslint-disable-next-line
          <marquee bgcolor="#ccc" scrollamount={5} loop={-1}>
            Create stunning images with a much or as little control as you like
            thanks to choice of Basic and Creative modes.
          </marquee>
        }
      </div>
    </section>
  );
}
