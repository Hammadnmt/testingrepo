// /* eslint-disable no-unused-vars */
// import { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import { useSelector, useDispatch } from "react-redux";
// import { useDeleteProductMutation } from "../../features/product/productSlice";
// import Button from "../Button";
// import Loader from "../Loading";
// import "../../App.css";
// const DeleteProduct = () => {
//   const [id, setId] = useState("");
//   const [deleteProduct,{isError,isSuccess,isLoading,error,}]=useDeleteProductMutation();  

//   const validateForm = () => {
//     let isValid = true;
//     if (!id) {
//       setIDError("Enter id");
//       isValid = false;
//     }
//     return isValid;
//   };
//   useEffect(() => {
//     if (isSuccess) {
//       navigate("/product");
//       // dispatch(reset());
//     }
//   }, [isSuccess, navigate, dispatch]);
//   const onButtonClick = async (e) => {
//     e.preventDefault();

//     if (validateForm()) {
//       // dispatch(deleteProduct(id));
//     }
//   };

// //   // Simplified and reusable validation function
// //   const validateForm = () => {
// //     let isValid = true;
// //     if (!id) {
// //       setIDError("Enter id");
// //       isValid = false;
// //     }
// //     return isValid;
// //   };
// //   useEffect(() => {
// //     if (isSuccess) {
// //       navigate("/product");
// //       dispatch(reset());
// //     }
// //   }, [isSuccess, navigate, dispatch]);
// //   const onButtonClick = async (e) => {
// //     e.preventDefault();

// //     if (validateForm()) {
// //       dispatch(deleteProduct(id));
// //     }
// //   };

// //   return isLoading ? (
// //     <Loader />
// //   ) : (
// //     <div className={"mainContainer"}>
// //       <div className={"titleContainer"}>
// //         <div>Delete Product</div>
// //       </div>
// //       <br />
// //       <div className={"inputContainer"}>
// //         <input
// //           name="id"
// //           placeholder="Enter product id here"
// //           value={id}
// //           onChange={(e) => {
// //             setId(e.target.value);
// //             setIDError(""); // Clear error on input change
// //           }}
// //           className={"inputBox"}
// //         />
// //         <label className="errorLabel">{idErrror}</label>
// //       </div>
// //       <br />
// //       <div className={"inputContainer"}>
// //         <Button onClick={onButtonClick} desc={"Delete"} />
// //         {isError && <div className="errorLabel">{message}</div>}
// //       </div>
// //       <br />
// //     </div>
// //   );
// // };

// // export default DeleteProduct;
