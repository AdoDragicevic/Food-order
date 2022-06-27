import css from "./HeaderAbout.module.css";

const HeaderAbout = () => (
  <article className={css["header-about"]}>
    <h2>Delicious food deliveder to you</h2>
    <p>
      Choose your favorite meal from our broad selection of meals and enjoy
      a delicious lunch or dinner at home.
    </p>
    <p>
      All of our meals are cooked with high-quality ingredients, just in-time
      and of course by experienced chefs!
    </p>
  </article>
)

export default HeaderAbout;