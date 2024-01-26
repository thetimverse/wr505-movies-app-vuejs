import { useSession } from '../stores/session.js'

export const BASE_URL = 'http://127.0.0.1:8000'

export async function api (url, params = {}) {
    const session = useSession()

    params = Object.assign({
        mode: 'cors',
        cache: 'no-cache',
    }, params)

    if (session.token) {
        params.headers = Object.assign({
            Authorization: `Bearer ${session.token}`,
        }, params.headers)
    }

    params.headers = Object.assign({
        'Content-Type': 'application/json'
    }, params.headers)

    let response = await fetch(BASE_URL + url, params)
    let json = await response.json() || {}
    if (!response.ok){
        let errorMessage = json.error || response.status
        throw new Error(errorMessage)
    }
    return json
}
