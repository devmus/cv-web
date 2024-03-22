import { IconCar, IconMessageCircle2 } from '@tabler/icons-react'
import React from 'react'

export const Ovrigt = () => {
  return (
    <div className="ovrigt-wrapper">
      <h2>Övriga kompetenser</h2>
      <div className="divider div-transparent-2"></div>
      <div className="komp-wrapper">
        <div className="sprak-wrapper">
          <h3>Språk</h3>
          <div className="icon-wrapper">
          <IconMessageCircle2/>
            <h4>Svenska, Engelska</h4>
          </div>
        </div>
        <div className="korkort-wrapper">
          <h3>Körkort</h3>
          <div className="icon-wrapper">
          <IconCar/>
            <h4>B-körkort</h4>
          </div>
        </div>
      </div>
    </div>
  )
}
