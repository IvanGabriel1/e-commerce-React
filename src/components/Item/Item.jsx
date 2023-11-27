import "./item.css";

const Item = ({ id, name, img, price, stock }) => {
  return (
    <article className="CardItem">
      <header className="Header">
        <h3 className="ItemHeader">{name}</h3>
      </header>

      <picture className="ImgContainer">
        <img src={img} alt={name} className="ItemImg" />
      </picture>

      <section>
        <p className="Info"> Price: ${price}</p>
        <p className="Info"> Stock Disponible: {stock}</p>
      </section>

      <footer className="ItemFooter">
        <button className="Option">Ver Detalles</button>
      </footer>
    </article>
  );
};

export default Item;
