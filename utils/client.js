// import Prismic from '@prismicio/client';
// const apiEndpoint = 'https://svelte-blog.cdn.prismic.io/api/v2';
// const Client = Prismic.createClient(apiEndpoint);

// export default Client;
import axios from 'axios'

import {createClient,getEndpoint} from "@prismicio/client";


// Create a client
const endpoint = getEndpoint("svelte-blog");
const Client = createClient(endpoint, {axios});
export default Client;

