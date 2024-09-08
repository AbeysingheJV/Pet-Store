import axios from "axios";
import { IProduct } from "../../Types/globalTypes";
import "./productsPage.scss";
import { useState, useEffect } from "react";
import { baseUrl } from "../../Constants/urlConstants";
import {Button} from '@mui/material';
import {Edit, Delete} from '@mui/icons-material'
import moment, {Moment} from 'moment'

const Products: React.FC = () => {
  const [products, setProducts] = useState<IProduct[]>([]);

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
              <th>Operations</th>
            </tr>
          </thead>
          <tbody>
            {
              products.map((product) => (
                <tr key={product.id}>
                  <td>{product.title}</td>
                  <td>{product.brand}</td>
                  <td>{moment(product.createdAt).fromNow()}</td>
                  <td>{moment(product.updatedAt).fromNow()}</td>
                  <td>
                    <Button variant="contained" color="warning" sx={{mx:3}}><Edit></Edit></Button>
                    <Button variant="contained" color="error"><Delete></Delete></Button>
                  </td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Products;
