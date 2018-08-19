import config from "../../../config";
import { get } from "../../utilities/api";

// Get all movies for the given query.
class MovieSearchService {
    conductorUrl = config.ASSETS_URL || '';
    getAll = (query) => {
        console.log("22222222222", `${this.conductorUrl}?api_key=${config.apiKey}&query=${query}`)
        return get(`${this.conductorUrl}?api_key=${config.apiKey}&query=${query}`);
    };
}
export default new MovieSearchService();
