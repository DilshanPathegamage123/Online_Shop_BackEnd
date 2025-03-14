import { Request, Response } from "express";
import { getAllProductsSer, getProductByIdSer , createProductSer, deleteProductSer, updateProductSer } from "../Services/product_service";

//Get All Products
export const getAllProducts = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const products = await getAllProductsSer();
    res.status(200).json(products);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

//Get Single Product
export const getProductById = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const singleProduct = await getProductByIdSer(req.params.id);
    res.status(200).json(singleProduct);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

//Create new prouduct
export const createProduct = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const newProduct = await createProductSer(req.body);
    res.status(201).json(newProduct);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

//Delete product
export const deleteProduct = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const deleteProduct = await deleteProductSer(req.params.id);
    res.status(200).json(deleteProduct);
  } catch (error: any) {
    if (error.message.includes("not found")) {
      res.status(404).json({ message: error.message });
    } else {
      res.status(500).json({ message: error.message });
    }
  }
};

//Update product
export const updateProduct = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const updateProduct = await updateProductSer(
      req.params.id,
      req.body,
     
    );
    res.status(200).json(updateProduct);
  } catch (error: any) {
    if (error.message.includes("not found")) {
      res.status(404).json({ message: error.message });
    } else {
      res.status(500).json({ message: error.message });
    }
  }
};
