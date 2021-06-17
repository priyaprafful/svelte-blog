import fetch from 'isomorphic-unfetch'

import {createClient,getEndpoint} from "@prismicio/client";


// Create a client
const endpoint = getEndpoint("svelte-blog");
const Client = createClient(endpoint, {fetch});
export default Client;

