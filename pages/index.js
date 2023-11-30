import figlet from 'figlet'
import { Nunito } from 'next/font/google'
import localFont from 'next/font/local'
import { useState } from 'react'
import dynamic from 'next/dynamic'
import path from 'path'
import fs from 'fs'
import tileset from '@/public/main.png'
import PhotoGallery from '@/components/PhotoGallery'
import Zork from '@/components/Zork'
import Satellites from '@/components/Satellites'
import Register from '@/components/Register'
import Image from 'next/image'
import console from '@/public/console.png'
import gameboy from '@/public/gameboy.png'
import About from '@/components/About'
import Footer from '@/components/Footer'
import Navbar from '@/components/Nav'

const nunito = Nunito({
  weight: ['400', '500', '700'],
  subsets: ['latin']
})

const pokemon = localFont({ src: '../public/fonts/Pokemon.ttf' })

const Rpg = dynamic(() => import('@/components/Rpg'), {
  ssr: false
})

export default function Index({
  map,
  about,
  faq,
  signUp,
  team,
  prizes,
  schedule
}) {
  let keys = {}
  const [modal, setModal] = useState(false)
  const [start, setStart] = useState(false)

  return (
    <div className={nunito.className}>

      <Navbar />

      <div className=''>
        <div className='flex justify-around items-center'>
          <div className='flex-col flex gap-24'>
            <div className='flex flex-col gap-5'>
              <Image src="/name.png" width={525} height={525} />
              <Image src="/DCE.png" width={525} height={525} />
              <div className='flex flex-col gap-6'>
                <p className='text-lg text-slate-500 font-semibold select-none'>First Student-Run Hackathon by ABES Institute of Technology</p>
                <p className='text-lg text-white font-semibold select-none outline outline-1 outline-purple-800 w-fit py-1 px-2 rounded-full bg-[#8A79F3] shadow-md shadow-[#8A79F3]'>
                  ABESIT @ 16 December 2023
                </p>
              </div>
            </div>

            <div className='flex flex-col gap-4'>
              <Image src="/organisedBy.png" width={240} height={240} />
              <Image src="/GDSC.png" width={350} height={350} />
            </div>
          </div>
          <div>
            <Image src="/heroLogo.png" className='heroLogo' width={525} height={525} />
          </div>
        </div>
      </div>
      {modal === false && <Satellites />}

      <About />

      <section className="skip">
        <PhotoGallery />
      </section>

     

      <section className="hidden">
        <pre className="heading">{schedule}</pre>
        <div className="prose">
          <p>
            We'll be updating this schedule as we get closer to the event, but
            here's a rough idea of what to expect on 16th December.
          </p>
          <ul style={{ listStyle: 'none', fontSize: '1.2rem' }}>
            <li>
              {' '}
              👋 <strong>9:00 AM</strong> - Doors open, registration, and meet
              fun people
            </li>
            <li>
              {' '}
              👐 <strong>10:00 AM</strong> - Opening ceremony
            </li>
            <li>
              {' '}
              🔨 <strong>10:30 PM</strong> - 1st WorkShop
            </li>
            <li>
              {' '}
              🤖 <strong>11:00 AM</strong> - Hacking starts
            </li>

            <li>
              {' '}
              🔨 <strong>1:00 PM</strong> - 2nd WorkShop
            </li>

            <li>
              {' '}
              🌸 <strong>2:30 PM</strong> - Mentor Round
            </li>
            <li>
              {' '}
              👐 <strong>4:30 PM</strong> - Judging Round Starts! Time to showcase your work.
            </li>
            <li>
              {' '}
              🛑 <strong>5:30 PM</strong> - Winner announcement and Closing Ceremony
            </li>
            <li>
              {' '}
              💔 <strong>6:00 PM</strong> - Goodbye :){' '}
            </li>
          </ul>
        </div>
      </section>
      <section className="hidden">
        <pre className="heading">{team}</pre>
        <div className="prose">
          <p>
            Meet our very, very cool team of slightly suspicious people who put DevScript together!
             
          </p>
          <div className="team">
            <div className="member">
              <h3>Ishaan</h3>
              <p>Moye Moye?</p>
            </div>
            <div className="member">
              <h3>Keshav Malik</h3>
              <p>Sher!</p>
            </div>
            <div className="member">
              <h3>Pranav Tripathi</h3>
              <p>2037 my year</p>
            </div>
            <div className="member">
              <h3>Harsh Pal</h3>
              <p>Digital Paintbrushs</p>
            </div>
            <div className="member">
              <h3>Harsh Tyagi</h3>
              <p>Rawr</p>
            </div>
            <div className="member">
              <h3>Ishita Malik</h3>
              <p>Seriously Sleeping</p>
            </div>
            <div className="member">
              <h3>Arjun Dhawan</h3>
              <p>Rawr</p>
            </div>
            <div className="member">
              <h3>Prateek Tiwari</h3>
              <p>Rawr (Logistics)</p>
            </div>
            <div className="member">
              <h3>Aditya Srivastava</h3>
              <p>Satisfactory</p>
            </div>
            <div className="member">
              <h3>Himanshu Chhatwal</h3>
              <p>Jim day 1001</p>
            </div>
            <div className="member">
              <h3>Kumar Kartikeya</h3>
              <p>Rawr</p>
            </div>
            <div className="member">
              <h3>Chirag Ramesh Chandra</h3>
              <p>Meme Lead</p>
            </div>

          </div>
        </div>
      </section>
      <div id="background">
        <section>
          <pre className="heading">{faq}</pre>
          <Zork />
        </section>
        <section>
          {/* <pre className="heading">{signUp}</pre> */}
          <div className="footer">
            <p>
              Wohoo! You made it this far. Now, let's get you  
              <a href="" className="link"

              > 
                  signed up
              </a><i> (wink wink)</i>
            </p>
          </div>
        </section>

        <Footer />
      </div>
    </div >
  )
}

export async function getStaticProps() {
  const readFile = location =>
    new Promise((resolve, reject) =>
      fs.readFile(location, 'utf-8', (err, data) => {
        if (err) return reject(err)
        return resolve(data)
      })
    )

  return {
    props: {
      map: JSON.parse(
        await readFile(path.join(process.cwd(), 'public/main.json'))
      ),
      about: figlet.textSync("What's this?", {
        font: 'Epic'
      }),
      faq: figlet.textSync('Questions!', {
        font: 'Epic'
      }),
      signUp: figlet.textSync('Sign up!', {
        font: 'Epic'
      }),
      team: figlet.textSync('Team', {
        font: 'Epic'
      }),
      prizes: figlet.textSync('Prizes!', {
        font: 'Epic'
      }),
      schedule: figlet.textSync('Schedule!', {
        font: 'Epic'
      })
    }
  }
}
