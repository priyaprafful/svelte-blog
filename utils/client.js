
import {createClient,getEndpoint} from "@prismicio/client";


// Create a client
const endpoint = getEndpoint("svelte-blog");
const Client = (fetch) =>createClient(endpoint, {fetch});
export default Client;

