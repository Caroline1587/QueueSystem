import { ref, computed } from "vue";
import { defineStore } from "pinia";
import type { IUserInfo } from "@/types";
// import { useLocalStorage } from '@/use/useLocalStorage'
import { getAccessToken } from "@/utils/auth";

export interface IUserState {
  userInfo: IUserInfo;
  token: string;
}

const getDefaultUserInfo: () => IUserInfo = () => ({
  id: "",
  name: "",
});

export const useUserStore = defineStore("user", () => {
  const state = ref({
    userInfo: getDefaultUserInfo(),
    token: "",
  });
  const getUserInfo = computed(() => {
    if (!state.value.userInfo || !state.value.userInfo.id) {
      //   state.value.userInfo = $userInfo.value
    }
    return state.value.userInfo;
  });
  const setInfo = ({ token, userInfo }: IUserState) => {
    state.value.userInfo = userInfo;
    state.value.token = token;
  };
  const removeInfo = () => {
    state.value.userInfo = getDefaultUserInfo();
    state.value.token = "";
  };
  return {
    state,
    getUserInfo,
    setInfo,
    removeInfo,
  };
});
