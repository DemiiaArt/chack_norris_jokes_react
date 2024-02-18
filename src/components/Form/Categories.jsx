import React from 'react'
import './Categories.scss'

export default function Categories() {
  return (
    <ul class="jokesCategories" id="jokesCategories">
         <li>
            <label>
                <input type="radio" name="jokeCat" value="animal" />
                <span>animal</span> 
            </label>
        </li> 
    </ul>
  )
}
