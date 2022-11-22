import React from 'react'
import Image from 'next/image'
import styles from '../styles/Visual.module.scss'
import Nav from '../components/Nav'
import place from '../public/img/place_holder.PNG'
import one from '../public/img/DSCF4150.jpg'
import two from '../public/img/DSCF4435.jpg'
import three from '../public/img/DSCF4495.jpg'
import four from '../public/img/DSCF4500.jpg'
import five from '../public/img/DSCF4537.jpg'
import six from '../public/img/DSCF4563.jpg'
import seven from '../public/img/DSCF4584.jpg'
import eight from '../public/img/DSCF4615.jpg'
import nine from '../public/img/DSCF4659.jpg'

const visual = () => {
  return (
    <>
        <Nav />
        <div className={styles.container}>
          <div className={styles.img__holder}>
          <Image className={styles.img} src={five} />

            <Image className={styles.img} src={two} />
            <Image className={styles.img} src={three} />
            <Image className={styles.img} src={four} />
            <Image className={styles.img} src={one} />
            <Image className={styles.img} src={six} />
            <Image className={styles.img} src={seven} />
            <Image className={styles.img} src={eight} />
            <Image className={styles.img} src={nine} />
          </div>
          {/* <div className={styles.txt__holder}>
            <p>i was expecting there to be more photographs here. you too? yeah same, weird. hmmmm, are you sure you looked hard enough? or maybe you aren’t looking closely enough? yeah that could be it, try that. no? damn. how about closing your eyes and thinking really hard. close your eyes as hard as you can until it feels as though they are going to burst out of your skull. think about the most important things there have ever been to you. and organize them in nice tidy boxes somewhere in your head. the most important ones. and don’t forget to keep squeezing your eyes shut. think about the things you have wanted the most. not like expensive sneakers and very fast sports cars, no like things you really want to be. or maybe things you really don’t want to be. and this whole time your eyes should be getting tighter and tighter and you should be shaking and your temperate should be rising. or maybe your temperature should be declining. yeah declining. and you’re getting deeper and deeper. have you read about the divers that try and raise their friends from the dead? but the bodies are too heavy and the body bags are too wicked and will lash at the divers trying to rescue the bodies. and the water will say “no this is mine, and soon you will be mine too.” and then there are more bodies at the bottom. maybe that’s what you and your squeezing eyes and your thoughts are all like right now. and you’re deciding if you have the courage to gather them all up from the bottom of the water or if you have the peace of mind to let them rest forever until one day you get to rest with them too. oh yeah the photographs you were looking for! i totally forgot about them. hopefully they will be up soon...</p>
          </div> */}
        </div>
    </>
  )
}

export default visual