import { api, storage } from "./api"

export const getAll = async () => {
    const result = await api.get("/places");

    return result.data;
}

export const create = async (place) => {
    const result = await api.post("/places", place)

    return result.data;
}

export const saveImage = async (file, fileName) => {
    const bytes = await file.arrayBuffer();

    const result = await storage.post(`/places/${fileName}`, bytes, {
        headers: {
            'Content-Type': 'image/jpeg',
        }
    });

    console.log(result);

    const publicUrl = `${storage.defaults.baseURL}/public/places/${fileName}`;

    return publicUrl;
}
