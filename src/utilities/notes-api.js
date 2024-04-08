import sendRequest from "./send-request";

const BASE_URL = "/api/notes";

export async function index(){
    return sendRequest(BASE_URL)
}

export async function create(note){
    console.log(note)
    return sendRequest(`${BASE_URL}/new`, 'POST', note)
}