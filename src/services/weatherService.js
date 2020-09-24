import {lat, lon, id} from '../api-config/apiConfig.json'

export default class weatherService {

    async getResource() {
        const seven = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=metric&exclude=minutely,hourly&appid=${id}`
        const result = await fetch(seven)
        
        if (!result.ok) {
            throw new Error(`Could not fetch ${seven}` +
            `, received ${result.status}`)
        }
        
        return await result.json()
    }

    async getWeather () {
        const res = await this.getResource()
        return res.daily.map(item => this._transformWeather(item.temp))
    }    

    async getDates () {
        const res = await this.getResource()
        return res.daily.map(item => item.dt)
    }

    _transformWeather ({morn, day, night}) {
        return {
            morn,
            day,
            night
        }
    }
}