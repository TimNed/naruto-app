import http from "../https-common";

export function NarutoData() {
    return http.get(`character`);
};