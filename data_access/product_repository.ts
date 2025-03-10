import Product, { IProduct } from "../models/product";


  //Get all products
  export async function findAllProducts(): Promise<IProduct[]> {
    return await Product.find();
  }

  //Get Single Product by id
  export async function findProductById(id: string): Promise<IProduct | null> {
    return await Product.findById(id);
  }

  //Create new prouduct
  export async function createNewProduct(productData: any): Promise<IProduct> {
    const new_product = new Product(productData);
    return await new_product.save();
  }

  // Update product
  export async function update(id: string, productData: any): Promise<IProduct | null> {
    return await Product.findByIdAndUpdate(id, productData, { new: true });
  }

  // Delete product
  export async function deleteProductByID(id: string): Promise<IProduct | null> {
    return await Product.findByIdAndDelete(id);
  }

