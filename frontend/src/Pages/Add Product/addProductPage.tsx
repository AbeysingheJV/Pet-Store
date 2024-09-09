import React from "react";
import "./addProductPage.scss";
import { Button, TextField } from "@mui/material";
import { IProduct } from "../../Types/globalTypes";
import acios from 'axios';
import {useNavigate} from 'react-router-dom'
import axios from "axios";
import { baseUrl } from "../../Constants/urlConstants";
import { error } from "console";

const AddProduct = () => {
  const [product, setProduct] = React.useState<Partial<IProduct>>({
    title: "",
    brand: "",
  });

  const redirect = useNavigate();

  const savButtonHandler = async () => {
    if(product.title === '' || product.brand === '') {
      alert('Please fill all the fields');
      return;
  }

  const data: Partial<IProduct> = {
    title: product.title,
    brand: product.brand
  };

  axios.post(baseUrl, data)
  .then((response) => redirect('/products'))
  .catch((error) => alert('Error while saving the product'));
}

  const cancelButtonHandler = () => {
    redirect('/products');
  }

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  return (
    <div className="addProduct">
      <h2>Add a new Product</h2>
      <TextField
        autoComplete="off"
        label="Brand"
        name="brand"
        variant="outlined"
        value={product.brand}
        onChange={changeHandler}
      ></TextField>

      <TextField
        autoComplete="off"
        label="Title"
        name="title"
        variant="outlined"
        value={product.title}
        onChange={changeHandler}
      ></TextField>
      <div>
        <Button variant="outlined" color="primary" onClick={savButtonHandler}>
          Save
        </Button>
        <Button variant="outlined" color="secondary" onClick={cancelButtonHandler}>
          Cancel
        </Button>
      </div>
    </div>
  );
};

export default AddProduct;
