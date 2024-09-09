import React from 'react'
import './DeleteProductPage.scss'
import { IProduct } from "../../Types/globalTypes";
import { useNavigate, useParams } from "react-router-dom";
import { TextField, Button } from "@mui/material";
import axios from "axios";
import { baseUrl } from "../../Constants/urlConstants";

const DeleteProduct = () => {

   const redirect = useNavigate();
   const { id } = useParams();

   const handleDeleteBtnClick = () => {
      axios
         .delete(`${baseUrl}/${id}`)
         .then((resposne) => redirect("/products"))
         .catch((error) => alert("Error"));
   };

   const handleBackBtnClick = () => {
      redirect("/products");
   };

   return (
      <div className="deleteProduct">
         <h2>Are you sure you want to Delete Product?</h2>
        
         <div>
            <Button variant="outlined" color="error" onClick={handleDeleteBtnClick} sx={{mx:3}}>
               Delete
            </Button>
            <Button variant="outlined" color="secondary" onClick={handleBackBtnClick}>
               Back
            </Button>
         </div>
      </div>
   );
}

export default DeleteProduct