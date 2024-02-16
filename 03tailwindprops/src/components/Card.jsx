/* eslint-disable no-unused-vars */
import React from "react"
import PropTypes from 'prop-types';

function Card({ userName = 'GC', position = 'Staff Engineer', image = 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fcdn3.iconfinder.com%2Fdata%2Ficons%2Fweb-ui-3%2F128%2FSettings-3-512.png&imgrefurl=https%3A%2F%2Fwww.iconfinder.com%2Ficons%2F2190975%2Fcircle_cog_customize_gear_preferences_settings_icon&docid=ihfw_NPqzLNksM&tbnid=CwyTIUVu4qU-5M&vet=12ahUKEwjO5PTLhq6EAxV1R_EDHdrMCqkQM3oECFkQAA..i&w=512&h=512&ved=2ahUKEwjO5PTLhq6EAxV1R_EDHdrMCqkQM3oECFkQAA'}) {
    // console.log(props)
  return (
    <div>
      <figure className="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
        <img
          className="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto"
          src={image}
          alt=""
          width="384"
          height="512"
        />
        <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
          <blockquote>
            <p className="text-lg font-medium">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga, placeat!
            </p>
          </blockquote>
          <figcaption className="font-medium">
            <div className="text-sky-500 dark:text-sky-400">{userName}</div>
            <div className="text-slate-700 dark:text-slate-500">{position}</div>
          </figcaption>
        </div>
      </figure>
    </div>
  )
}

Card.propTypes = {
  props: PropTypes.object.isRequired,
  userName: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired
};

export default Card
