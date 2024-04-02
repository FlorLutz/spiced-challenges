import { getAllProducts } from "@/services/productServices";

export default function handler(req, resp) {
  resp.status(200).json(getAllProducts());
}
