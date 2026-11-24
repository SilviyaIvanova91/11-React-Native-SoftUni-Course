import { api, storage } from "./api"

export const getAll = async () => {
    const result = await api.get("/places");

    return result.data;
}

export const getOne = async (placeId) => {
    const result = await api.get("/places", {
        params: { id: `eq.${placeId}` },
    });

    return result.data[0] ?? null;
}

export const create = async (place) => {
    const result = await api.post("/places", place)

    return result.data;
}

export const update = async (placeId, place) => {
    const result = await api.put("/places", place, {
        params: { id: `eq.${placeId}` },
    });

    return result.data;
}

export const getById = async (placeId) => {
    const result = await api.get("/places", {
        params: { id: `eq.${placeId}` },
    });

    return result.data[0] ?? null;
}

export const remove = async (placeId) => {
    const result = await api.delete("/places", {
        params: { id: `eq.${placeId}` },
    });

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
