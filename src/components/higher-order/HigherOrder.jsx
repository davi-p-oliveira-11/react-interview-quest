import React from 'react'

export default function HigherOrder(title) {
  return function HOC() {
     return (
      <div>
        <h2>{title}</h2>
      </div>
     )
  }
}
