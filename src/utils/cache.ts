const cache = {
    key: 'hbh5_',
    //获取当前时间
    time() {
        return Math.round(new Date().getTime() / 1000)
    },
    getKey(key: string) {
        return this.key + key
    },
    set(key: string, value: any, expire?: string) {
        key = this.getKey(key)
        let data: any = {
            expire: expire ? this.time() + expire : '',
            value
        }
        if (typeof data === 'object') {
            data = JSON.stringify(data)
        }
        try {
            window.localStorage.setItem(key, data)
        } catch (e) {
            return null
        }
    },
    get(key: string) {
        key = this.getKey(key)
        try {
            const data = window.localStorage.getItem(key)
            if (!data)    return null
            const { value, expire } = JSON.parse(data)
            if (expire && expire < this.time()) {
                this.remove(key)
                return null
            }
            return value
        } catch (e) {
            return null
        }
    },
    remove(key: string) {
        key = this.getKey(key)
        window.localStorage.removeItem(key)
    },
}

export default cache