// import dbConnect from "@/db/connect";
// import Product from "@/db/models/Products";

// export default async function handler(request, response) {
//   console.log("handler running");

//   await dbConnect();
//   console.log(request.method);
//   switch (request.method) {
//     case "GET":
//       const products = await Product.find();
//       return response.status(200).json(products);
//     default:
//       return response.status(405).json({ message: "Method not allowed" });
//   }
// }

import dbConnect from "@/db/connect";
import Product from "@/db/models/Products";

export default async function handler(request, response) {
  await dbConnect();
  if (request.method === "GET") {
    const products = await Product.find();
    return response.status(200).json(products);
  } else {
    return response.status(405).json({ message: "Method not allowed" });
  }
}
