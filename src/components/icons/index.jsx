import React from 'react'

import { Announce } from './announce'
import { Applause } from './applause'
import { ArrowLong } from './arrowLong'
import { World } from './world'
import { Check } from './check'
import { Sms } from './sms'

export const Icon = ({ name = "applause", size = 20, fill = "silver", onClick = () => { } }) => {
    switch (name) {
        case "announce":
            return <Announce size={size} fill={fill} onClick={onClick} />

        case "applause":
            return <Applause size={size} fill={fill} onClick={onClick} />

        case "arrow-large":
            return <ArrowLong size={size} fill={fill} onClick={onClick} />

        case "check":
            return <Check size={size} fill={fill} onClick={onClick} />

        case "sms":
            return <Sms size={size} fill={fill} onClick={onClick} />

        case "world":
            return <World size={size} fill={fill} onClick={onClick} />
    }

}