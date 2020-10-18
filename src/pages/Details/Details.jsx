import React, { Component } from 'react'
import { get } from 'lodash'

import BackButton from '../../components/BackButton'
import Card from '../../components/Card'
import Loading from '../../components/Loading'
import WeatherForecast from '../../components/WeatherForecast'

const url = 'https://www.metaweather.com/api/location/'

class CityWeatherDetails extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoading: true,
      cityWeather: {},
      fiveDayForecast: [],
    }
  }

  componentDidMount() {
    this.handleFetchCityWeatherForecast()
  }

  handleFetchCityWeatherForecast = async () => {

    const woeid = get(this.props, ['location', 'item', 'data', 'woeid'])

    const urlWithQuery = `https://cors-anywhere.herokuapp.com/${url}${woeid}`
    try {
      const response = await fetch(urlWithQuery)
      if (response.ok) {
        const jsonResponse = await response.json()
        this.setState({
          isLoading: true,
          cityWeather: jsonResponse,
          fiveDayForecast: this.getFiveDayForecast(jsonResponse),
        })
      } else {
        this.setState({ fetchError: true })
      }
      this.setState({ isLoading: false })
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log(error)
    }
  }

  getFiveDayForecast = data => {
    const consolidatedWeather = get(data, ['consolidated_weather'])

    return consolidatedWeather.slice(0, 5)
  }

  render() {
    const { isLoading, cityWeather, fiveDayForecast, fetchError } = this.state

    return (
      <div className="container">
        <Card leftButton={<BackButton />}>
          {isLoading ? (
            <div className="row center-xs center-md center-lg">
              <div className="col-xs-1 col-md-1 col-lg-1 space-up">
                <Loading />
                <p>Данные загружаются...</p>
              </div>
            </div>
          ) : (
            <div>
              <h2 className="title">Weather app</h2>
              <hr />
              <h4 className="description">
                {`5 дневный прогноз для города ${get(cityWeather, ['title'])}`}
              </h4>
              <WeatherForecast data={fiveDayForecast} />
              {fetchError ? (
                <p>Во время загрузки что-то пошло не так. Попробуйте еще раз.</p>
              ) : null}
            </div>
          )}
        </Card>
      </div>
    )
  }
}

export default CityWeatherDetails
