import axios from "axios";

const base = axios.create({
  baseURL: "https://xtfmvfwdsebsyypjegou.supabase.co",
  headers: {
    apikey: "sb_publishable_btMRjyXcivCW5oVGQvEMzg_Amy4ebF4",
    "Content-Type": "application/json",
  },
});

const api = axios.create({
  ...base.defaults,
  baseURL: `${base.defaults.baseURL}/rest/v1`,
});

export default api;
