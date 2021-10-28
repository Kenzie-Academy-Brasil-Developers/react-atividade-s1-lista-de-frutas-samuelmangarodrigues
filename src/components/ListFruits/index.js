import "./style.css";

const ListFruits = ({ fruits, totalPrice }) => {
  return (
    <>
      <div>
        <h3 className="Title">Preço total: {totalPrice}</h3>
        {fruits.map((fruit) => {
          return (
            <ul className="listFruits" key={fruits.id}>
              <li>Nome da Fruta: {fruit.name}</li>
            </ul>
          );
        })}
      </div>
    </>
  );
};
export default ListFruits;
