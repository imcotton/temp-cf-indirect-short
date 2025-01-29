import { make } from '@indirect/short/deploy/cloudflare';

export default await make({

    ttl_in_ms: 1000 * 60 * 60 * 24 * 7, // 1 week

});


