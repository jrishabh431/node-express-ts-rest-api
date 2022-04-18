import jwt from 'jsonwebtoken'
import config from 'config'


const jwtSecret = config.get<string>('jwtSecret')


export function signJwt(object: Object, options?: jwt.SignOptions | undefined) {
    return jwt.sign(object, jwtSecret, {
        ...(options && options),
    })
}

export function verifyJwt(token: string){
    try {
        const decoded = jwt.verify(token, jwtSecret)
        return {
            valid: true,
            expired: false,
            decoded
        }
    } catch (e: any) {
        return {
            valid: false,
            expired: e.message === 'jwt expired',
            decoded: null
        }
    }

}