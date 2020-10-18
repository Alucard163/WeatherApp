import React from 'react'
import { Link } from 'react-router-dom'
import { kebabCase, isEmpty } from 'lodash'

import List from '../List'
import ScrollView from '../ScrollView'

import './styles.scss'

const CitiesResultListItem = (props) => {
  return (
    <Link
      to={{
        // eslint-disable-next-line react/prop-types
        pathname: `/city/${kebabCase(props.label)}`,
        // eslint-disable-next-line react/prop-types
        id: kebabCase(props.label),
        item: props,
      }}
      params={props}
    >
      {/* eslint-disable-next-line react/prop-types */}
      {props.label}
    </Link>
  )
}

const QueryCityResults = (props) => {
  // eslint-disable-next-line react/prop-types
  const { data, error, query, noQuery } = props
  return (
    <ScrollView>
      {!isEmpty(data) && <List data={data} renderItem={CitiesResultListItem} />}
      {isEmpty(data) && error ? (
        <div>
          <h4 className="description">
            При загрузке что-то пошло не так, попробуйте еще раз
          </h4>
        </div>
      ) : (
        isEmpty(data) && (
          <div>
            <h4 className="description">
              {noQuery ? '' : `Ничего не найдено по запросу "${query}"`}
            </h4>
          </div>
        )
      )}
    </ScrollView>
  )
}

export default QueryCityResults
