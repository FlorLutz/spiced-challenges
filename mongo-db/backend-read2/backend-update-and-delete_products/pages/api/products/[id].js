import dbConnect from "../../../db/connect";
import Product from "../../../db/models/Product";

export default async function handler(request, response) {
  await dbConnect();
  const { id } = request.query;

  if (request.method === "GET") {
    const product = await Product.findById(id).populate("reviews");

    if (!product) {
      return response.status(404).json({ status: "Not Found" });
    }

    response.status(200).json(product);
  }

  if (request.method === "PUT") {
    const updatedProduct = request.body;
    await Product.findByIdAndUpdate(id, updatedProduct);
    response
      .status(200)
      .json({ status: `Product ${id} successfully updated!` });
  }

  if (request.method === "POST") {
    try {
      const productData = request.body;
      const product = new Product(productData);
      await product.save();
      return response.status(201).json({ status: "Product created." });
    } catch (error) {
      console.error(error);
      return response.status(400).json({ error: error.message });
    }
  }

  if (request.method === "DELETE") {
    try {
      await Product.findByIdAndDelete(id);
      return response
        .status(200)
        .json({ status: "Product successfully deleted." });
    } catch (error) {
      console.error(error);
      return response.status(400).json({ error: error.message });
    }
  }
}
