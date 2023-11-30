import styles from './Zork.module.scss'
import { Azeret_Mono } from 'next/font/google'
import { useRef, useEffect } from 'react'
import { Button } from './PhotoGallery'

const FAQ = `Here's a list of commonly asked questions:

Q: How can I participate in DevScript Hackathon?
-----------
Participation is easy! Simply register on our website, form a team with fellow hackers, and join us at [Venue] on [Date]. Whether you're a developer, designer, or enthusiast, DevScript welcomes all passionate individuals ready to innovate.


Q: What are the themes for DevScript Hackathon?
---------------
DevScript encompasses a range of exciting themes, including Google Technologies for sustainable development, Web3, Education, Generative AI + AI/ML, AR/VR, and Open Innovation. Choose a theme that aligns with your interests and start scripting your innovative solution.

Q: Are there any prerequisites for participation?
---------------
DevScript is open to participants of all skill levels. Whether you're a seasoned developer or a newcomer to coding, you're welcome to join. We encourage diversity and believe that innovation thrives in a community with varied skill sets and perspectives.

Q: Is there a registration fee?
----------------------
Nothing! It's free!! Yay! We’ll have meals, snacks, and beverages onsite at the hackathon, as well as swag, prizes, and fun mini-events.

Q: How do teams and projects get judged?
---------------
A panel of experienced judges, comprising industry experts and mentors, will evaluate projects based on creativity, technical complexity, impact, and presentation. Be prepared to showcase not just your code but also the story and impact behind your project.

Q: What can I make?
------------------------------
This hackathon is for hackers of all skill levels! So bascially you can make anything awesome!

----------------
Q: What prizes are up for grabs at DevScript Hackathon?
-----------------------
DevScript is offering exciting prizes for the coolest and most impactful projects. From recognition in the tech community to cutting-edge gadgets and more, the rewards are designed to celebrate the innovative spirit of our participants. Stay tuned for announcements on the specific prizes up for grabs!
`

const azeretMono = Azeret_Mono({
  weight: ['400'],
  subsets: ['latin']
})

export default function Zork() {
  // ! This is pretty forkin' dumb! I'd probably use a tree or something IRL, but this is just a demo.
  const mailbox = useRef(true)
  const indoors = useRef(false)
  const leafletTaken = useRef(false)
  const bookshelf = useRef(false)
  const opentv = useRef(false)
  const outputRef = useRef(null)

  const respond = input => {
    input = input.trim().toLowerCase()
    switch (input) {
      case 'help':
        if (mailbox.current)
          typewrite('\nHave you tried opening the mailbox yet? You can just type the command to open mailbox below.')
        else if (!indoors.current)
          typewrite('\nHave you tried going inside yet?')
        else typewrite('\nHave you checked out the bookshelf yet?')
        break
      case 'open mailbox':
        typewrite('\nOpening the small mailbox reveals a leaflet.')
        break
      case 'read leaflet':
        if (!leafletTaken.current && indoors.current)
          typewrite('\nWhat leaflet are you talking about?')
        else {
          if (!leafletTaken.current) {
            leafletTaken.current = true
            typewrite(
              '\n(Taken) \n"All the answers to your questions can be found on the bookshelf inside." Don\'t give up yet!'
            )
          } else
            typewrite(
              '\n"All the answers to your questions can be found on the bookshelf inside." Don\'t give up yet!'
            )
        }
        break
      case 'give up':
        typewrite('\nYou give up. You are eaten by a grue. Type show FAQ to skip to the end.')
        break
      case 'drop leaflet':
        if (leafletTaken.current) {
          leafletTaken.current = false
          typewrite('\nDropped.')
        } else typewrite('\nWhat leaflet are you talking about?')
        break
      case 'about':
      case 'what':
        typewrite(
          `\nNothin' much! This is a geeky reference to Zork (with a smaller scope, of course!), have you heard of it before? Try \`open zork\`.`
        )
        break
      case 'open zork':
        window.open('https://en.wikipedia.org/wiki/Zork', '_blank')
        typewrite('\nOpened a Wikipedia page on Zork!')
        break
      case 'go inside':
      case 'enter house':
        mailbox.current = false
        indoors.current = true
        typewrite(
          '\nLiving Room\nYou are in the living room. A bookshelf appears to take up the entire room, dwarfing a TV in the corner.'
        )
        break
      case 'go to bookshelf':
      case 'check out bookshelf':
      case 'bookshelf':
        if (indoors.current && !bookshelf.current) {
          bookshelf.current = true
          typewrite(
            '\nYou head over to the bookshelf. The books are covered with dust, but one sticks out to you. There is no dust on it, and it\'s titled: "DevScript FAQ"'
          )
        } else if (indoors.current && bookshelf.current)
          typewrite("\nYou're already at the bookshelf.")
        else typewrite('\nWhat bookshelf are you talking about?')
        break
      case 'show FAQ':
      case 'show faq':
        typewrite(
          `\nAlright. Fine, here's the FAQ. \n${FAQ}`
        )
        break
      case 'read book':
      case 'read the book':
      case 'read Devscript faq':
      case 'read "Devscript faq"':
      case "read 'Devscript faq'":
        if (bookshelf.current)
          typewrite(
            `\nYou pull down the book. You flip to the front page: \n${FAQ}\nYou put the book back on the shelf, as it is quite heavy.`
          )
        else typewrite('\nWhat are you talking about?')
        break
      case 'open tv':
        if (indoors.current && !opentv.current) {
          opentv.current = true
          bookshelf.current = false
          typewrite(
            '\nYou head over to the TV and open it. It looks like someone\'s been playing a game. You can vaguely make out the phrase "I ❤️ HC".'
          )
        } else if (indoors.current && opentv.current)
          typewrite(
            '\nThe TV is already open. It looks like someone\'s been playing a game. You can vaguely make out the phrase "I ❤️ HC".'
          )
        else typewrite('\nWhat TV are you talking about?')
        break
      default:
        typewrite("\nI don't understand. Try `help`.")
        break
    }
  }

  const typewrite = (content, speed = 15) => {
    if (content.length) {
      outputRef.current.innerHTML =
        outputRef.current.innerHTML +
        (content[0] === '\n' ? '<br><br>' : content[0])
      if (content[0] === '\n')
        window.scrollTo(
          0,
          outputRef.current.offsetTop + outputRef.current.scrollHeight
        )
      setTimeout(() => typewrite(content.slice(1)), speed)
    } else {
      // Wait for user input
      outputRef.current.innerHTML = outputRef.current.innerHTML + '<br><br>'
      let form = document.createElement('div')
      form.addEventListener('keydown', event => {
        if (event.key === 'Enter') {
          form.contentEditable = false
          respond(event.target.innerText.toLowerCase())
        }
      })
      form.contentEditable = true
      outputRef.current.appendChild(form)
      form.focus()
    }
  }

  useEffect(() => {
    const form = document.createElement('div')
    form.contentEditable = true
    form.addEventListener('keydown', event => {
      if (event.key === 'Enter') {
        form.contentEditable = false
        respond(event.target.innerText.toLowerCase())
      }
    })
    outputRef.current.appendChild(form)
  }, [])

  return (
    <div className="prose">
      <p>
        You'll find the answers here. Try to be a little imaginative :) 
        <button
          className="link"
          onClick={() => {
            typewrite(`\nOkay, fine. Take the easy route then.\n${FAQ}`, 1)
          }}>
          (Can you just give me the FAQ?)
        </button>
      </p>
      <div className={`${styles.terminal} ${azeretMono.className}`}>
        <div ref={outputRef} style={{ display: 'inline' }}>
          West of House
          <br />
          <br />
          You are standing in the front yard of a white house.
          <br />
          <br />
          There is a small mailbox here.
          <br />
          <br />
        </div>
      </div>
    </div>
  )
}
