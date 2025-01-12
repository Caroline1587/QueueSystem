import request from "@/utils/request";
import type { IUserInfo } from "@/types";

export function fetchMeData() {
  return { id: 111, username: "ads", password: "hello" };
  // request.get("me-info")
}
