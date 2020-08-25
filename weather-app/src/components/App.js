import React, {Component} from 'react';
import './App.css';
import Form from "./Form";
import Result from "./Result";

const API_KEY = 'b80af7ab94eb83330497a9ffbd5ff6fe';

class App extends Component {


    state = {
        value: '',
        date: '',
        cityName: '',
        sunrise: '',
        sunset: '',
        temp: '',
        pressure: '',
        wind: '',
        err: false,
        timeZone: '',
        descriptionWeather: '',
        iconWeather: '',
        countryShortcut:''

    };


    handleInputChange = (event) => {
        this.setState({
            value: event.target.value
        })
    };

    // handleCitySubmit = (event) => {
    //     event.preventDefault();
    //
    //     const API = `http://api.openweathermap.org/data/2.5/weather?q=${this.state.value}&APPID=${API_KEY}&units=metric`;
    //     fetch(API)
    //         .then(response =>{
    //            if(response.ok){
    //                return response
    //            }
    //            throw Error('Nie udało się')
    //         }).then(response => response.json())
    //         .then(data => {
    //             const dateTime = new Date().toLocaleString();
    //             this.setState(prevState =>({    //kiedy używamy aktulanej wartosći to używajmy funkcji to może nas uchronić przed jakimiś błędami
    //                 date: dateTime,
    //                 sunrise: data.sys.sunrise,
    //                 sunset: data.sys.sunset,
    //                 temp: data.main.temp,
    //                 pressure: data.main.pressure,
    //                 wind: data.wind.speed,
    //                 cityName: prevState.value,
    //                 err: false,
    //                 timeZone: data.timezone,
    //                 descriptionWeather: data.weather[0].description,
    //                 iconWeather: data.weather[0].icon,
    //             }))
    //         })
    //         .catch(err => {
    //             console.warn(err);
    //             this.setState(prevState => ({
    //                 err:true,
    //                 cityName: prevState.value
    //             }))
    //         })
    //
    //     // this.componentDidMount()
    //
    //
    // };


    // async componentDidMount() {
    //     const API = `http://api.openweathermap.org/data/2.5/weather?q=${this.state.value}&APPID=b80af7ab94eb83330497a9ffbd5ff6fe&units=metric`;
    //     let response;
    //     try {
    //          response = await fetch(API);
    //     } catch (e) {
    //         console.warn(e);
    //         throw Error('Nie udało się pobrać API')
    //     }
    //
    //         const isOk = response.ok;
    //         if (!isOk) {
    //             return Promise.reject("Nie udało się")
    //         }
    //         const data = await response.json();
    //         return console.log(data);
    //
    // }


    componentDidMount() {}//wykonuje się tylko raz po renderze

    componentDidUpdate(prevProps, prevState, snapshot) {//przy każdej aktualizacj, nie możemy w tym miesjscu zmieniać stanu za pomoćą this.setState() musimy zrobic ifa
        // ponieważ wchodzi do niskończonej pętli
        // (metoda componentDidUpdate wykoniuje sie po renderze )

        // console.log("poprzednia wartość: " + prevState.value);
        // console.log("Aktualna wartość: " + this.state.value);
        if ((this.state.value.length) === (0 ||1 ||2 )) return;

        if(prevState.value !== this.state.value){  //dzieki temu unikamy nieśkończonej pętli

            const API = `http://api.openweathermap.org/data/2.5/weather?q=${this.state.value}&APPID=${API_KEY}&units=metric`;
                fetch(API)
                    .then(response =>{
                       if(response.ok){
                           return response
                       }
                       throw Error('Nie udało się')
                    }).then(response => response.json())
                    .then(data => {
                        const dateTime = new Date().toLocaleString();
                        this.setState(prevState =>({    //kiedy używamy aktulanej wartosći to używajmy funkcji to może nas uchronić przed jakimiś błędami
                            date: dateTime,
                            sunrise: data.sys.sunrise,
                            sunset: data.sys.sunset,
                            temp: data.main.temp,
                            pressure: data.main.pressure,
                            wind: data.wind.speed,
                            cityName: prevState.value,
                            err: false,
                            timeZone: data.timezone,
                            descriptionWeather: data.weather[0].description,
                            iconWeather: data.weather[0].icon,
                            countryShortcut: data.sys.country
                        }))
                    })
                    .catch(err => {
                        console.warn(err);
                        this.setState(prevState => ({
                            err:true,
                            cityName: prevState.value,
                            countryShortcut: ''
                        }))
                    })


        }


    }



    render() {
        return (
            <div className="App">
                <Form
                    value={this.state.value}
                    change={this.handleInputChange}
                    countryShort = {this.state.countryShortcut}
                />
                <Result weather={this.state} name/>
            </div>
        );
    }

}

export default App;
