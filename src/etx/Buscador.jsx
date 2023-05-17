import { useRef } from "react";
import { useSearchParams } from "react-router-dom";

const Buscador = () => {
  const [, setSearchParams] = useSearchParams();

  const inputRef = useRef();

  const handleSubmit = (e) => {
    console.log(e);
    e.preventDefault();

    const value = inputRef.current.value;

    setSearchParams({
      search: value,
    });
  };

  return (
    <form className="buscadorContainer" onSubmit={handleSubmit}>
      <input
        ref={inputRef}
        type="text"
        className="form-control"
        style={{ maxWidth: "150px" }}
      />
      <button
        type="submit"
        className="btn btn-primary"
        style={{ maxWidth: "700px"}}
      >
        Buscar
      </button>
    </form>
  );
};

export default Buscador;
