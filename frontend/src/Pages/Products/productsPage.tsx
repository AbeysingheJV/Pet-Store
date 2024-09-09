import axios from "axios";
import { IProduct } from "../../Types/globalTypes";
import "./productsPage.scss";
import { useState, useEffect } from "react";
import { baseUrl } from "../../Constants/urlConstants";
import { Button } from "@mui/material";
import { Edit, Delete } from "@mui/icons-material";
import moment from "moment";
import { useNavigate } from "react-router-dom";
import { red } from "@mui/material/colors";

const Products: React.FC = () => {
  const [products, setProducts] = useState<IProduct[]>([]);
  const redirect = useNavigate();

  const fetchProductsList = async () => {
    try {
      const response = await axios.get<IProduct[]>(baseUrl);
      setProducts(response.data);
    } catch (error) {
      alert("Error fetching products");
    }
  };

  useEffect(() => {
    fetchProductsList();
  }, []);

  const editButtonHandler = (id: string) => {
    redirect(`/products/edit/${id}`);
  };

  const deleteButtonHandler = (id: string) => {
    redirect(`/products/delete/${id}`);
  };

  return (
    <div className="products">
      <h1>Our Products</h1>
      <div className="table-wrapper">
        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Brand</th>
              <th>Created Time</th>
              <th>Last Updated </th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id}>
                <td>{product.title}</td>
                <td>{product.brand}</td>
                <td>{moment(product.createdAt).fromNow()}</td>
                <td>{moment(product.updatedAt).fromNow()}</td>
                <td>
                  <Button
                    variant="contained"
                    color="warning"
                    sx={{ mx: 3 }}
                    onClick={() => editButtonHandler(product.id)}
                  >
                    <Edit></Edit>
                  </Button>
                  <Button
                    variant="contained"
                    color="error"
                    onClick={() => deleteButtonHandler(product.id)}
                  >
                    <Delete></Delete>
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Products;
