import { findAllProducts, findProductById, createNewProduct, update, deleteProductByID} from "../data_access/product_repository";
import { IProduct } from "../models/product";


 

  //Get all products
  export async function getAllProductsSer(): Promise<IProduct[]> {
    try {
      return await findAllProducts();
    } catch (error: any) {
      throw new Error("Error fetching products: ${error}");
    }
  }

  //Get Single Product by id
  export async function getProductByIdSer(id: string): Promise<IProduct | null> {
    try {
      const product = await findProductById(id);
      if (!product) {
        throw new Error(`Product with ID ${id} not found`);
      }
      return product;
    } catch (error: any) {
      throw new Error("Error fetching product by id: ${error}");
    }
  }

  //Create new prouduct
  export async function createProductSer(productData: any): Promise<IProduct> {
    try {
      return await createNewProduct(productData);
    } catch (error) {
      throw new Error(`Error creating product: ${error}`);
    }
  }

  // Update product
  export async function updateProductSer(id: string, productData: any): Promise<IProduct | null> {
    try {
      const updatedProduct = await update(id, productData);
      if (!updatedProduct) {
        throw new Error(`Product with ID ${id} not found`);
      }
      return updatedProduct;
    } catch (error) {
      throw new Error(`Error updating product: ${error}`);
    }
  }

  // Delete product
  export async function deleteProductSer(id: string): Promise<IProduct | null> {
    try {
      const deletedProduct = await deleteProductByID(id);
      if (!deletedProduct) {
        throw new Error(`Product with ID ${id} not found`);
      }
      return deletedProduct;
    } catch (error) {
      throw new Error(`Error deleting product: ${error}`);
    }
  }

