import { Banner } from "@/models/banner.model";
import { httpClient } from "./https";

export const fetchBanners = async () => {
  const response = await httpClient.get<Banner[]>("/banners");

  return response.data;
};
