export default class SwapiService {

    _apiBase = 'https://swapi.co/api/';
    _imageBase = 'https://starwars-visualguide.com/assets/img/';

    _extractId = url => {
        const idRegExp = /\/([0-9]*)\/$/;
        return +url.match(idRegExp)[1];
    }

    getResource = async url => {
        const res = await fetch(this._apiBase + url);
        if (!res.ok) throw new Error(`Could not fetch ${url}, recived ${res.status}`);
        const body = await res.json();
        return body;
    }

    getAllPeople = async () => {
        const res = await this.getResource("people");
        return res.results.map(person => this._transformPerson(person));
    }

    getPerson = async id => {
        const person = await this.getResource("people/" + id);
        return this._transformPerson({ id, ...person });
    }

    getPersonImage = id => {
        return `${this._imageBase}characters/${id}.jpg`
    }

    _transformPerson = ({ id, url, name, gender, birth_year, eye_color }) => {

        if (!id) id = this._extractId(url);

        return {
            id,
            name,
            gender,
            birthYear: birth_year,
            eyeColor: eye_color
        }
    }

    getAllPlanets = async () => {
        const res = await this.getResource("planets");
        return res.results.map(planet => this._transformPlanet(planet));
    }

    getPlanet = async id => {
        const planet = await this.getResource("planets/" + id);
        return this._transformPlanet({ id, ...planet });
    }

    getPlanetImage = id => {
        return `${this._imageBase}planets/${id}.jpg`
    }

    _transformPlanet = ({ id, url, name, population, rotation_period, diameter }) => {
        if (!id) id = this._extractId(url);
        return {
            id,
            name,
            population,
            rotationPeriod: rotation_period,
            diameter
        }
    }

    getAllStarships = async () => {
        const res = await this.getResource("starships");
        console.log('привет');
        return res.results.map(starship => this._transformStarship(starship));
    }

    getStarship = async (id) => {
        const starship = await this.getResource("starships/" + id);
        return this._transformStarship({ id, ...starship });
    }

    getStarshipImage = id => {
        return `${this._imageBase}starships/${id}.jpg`
    }

    _transformStarship = ({
        id,
        url,
        name,
        model,
        manufacturer,
        constInCredit,
        length,
        crew,
        passengers,
        cargoCapacity
    }) => {
        if (!id) id = this._extractId(url);
        return {
            id,
            name,
            model,
            manufacturer,
            constInCredit,
            length,
            crew,
            passengers,
            cargoCapacity
        }
    }
}