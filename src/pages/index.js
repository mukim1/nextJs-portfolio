import Head from 'next/head'
import Hero from '../components/2-Hero/Hero'
import About from '../components/3-About/About'
import Skills from '../components/5-Skills/Skills'
import Portfolio from '../components/6-Portfolio/Portfolio'
import Testimonial from '../components/7-Testimonial/Testimonial'
import Exparience from '../components/9-Exparience/Exparience'
import styles from '../styles/Home.module.css'
import { Button } from '@material-ui/core'
import { FiArrowDownLeft } from "react-icons/fi";

export default function Home() {
  return (
    <>
      <Head>
        <title>MUkim billah</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero />
      <About />
      <Skills />
      <Portfolio />
      <Exparience />
      <Testimonial />
      <div className={styles.sideBar}>
        <a href="#hero"><Button startIcon={<FiArrowDownLeft/>}>hero</Button></a>
        <a href="#about"><Button startIcon={<FiArrowDownLeft/>}>about</Button></a>
        <a href="#skills"><Button startIcon={<FiArrowDownLeft/>}>Skills</Button></a>
        <a href="#portfolio"><Button startIcon={<FiArrowDownLeft/>}>Portfolio</Button></a>
        <a href="#exparience"><Button startIcon={<FiArrowDownLeft/>}>Exparience</Button></a>
        <a href="#testimonial"><Button startIcon={<FiArrowDownLeft/>}>Testimonial</Button></a>
      </div>
      <footer style={{ height: '50px', backgroundColor: '#060c21' }}></footer>
    </>
  )
}
