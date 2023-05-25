export default function TestAdmin() {
    const Authorization = localStorage.getItem("Authorization");
    const headers = { Authorization: `${Authorization}` };
    return headers;
};
