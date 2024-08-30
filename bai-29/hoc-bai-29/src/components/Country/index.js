import { country } from "../../data/countries";
import "./Country.css";
import "./Country.scss";

function Country() {
  return (
    <>
      <ul className="country">
        {(country || []).map((item) => (
          <li className="country__item" key={item.id}>
            <span className="country__text">{item.name}</span>
            <ul className="country__sub">
              {(item.city || []).map((itemCity) => (
                <li className="country__sub-item" key={itemCity.id}>{itemCity.name}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Country;
