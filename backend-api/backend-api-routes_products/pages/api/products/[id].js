import { getProductById } from "@/services/productServices";

export default function handler(req, resp) {
  const { id } = req.query;
  resp.status(200).json(getProductById(id));
}
