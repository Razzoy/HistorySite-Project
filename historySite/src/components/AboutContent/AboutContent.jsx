import style from '../Timeline/Timeline.module.scss'

export function AboutContent({ theme, action }) {
    return (
        <article className={theme ? style.aboutDark : style.aboutArticle}>
            <div className={theme ? style.splitterDark : style.splitter}></div>
            <img onClick={action} src="../src/assets/Light.svg" alt="light" />

            <h2>About Us – The Time Traveler’s Almanac</h2>
            <p>Welcome to The Time Traveler’s Almanac! Ever wanted to be a time traveler, but, you know, without all the messy paradoxes, flux capacitors, and accidentally erasing your own existence? Well, you’re in luck! We’re your one-stop-shop for hopping through history — no DeLorean required.</p>
            <h3>What We Do</h3>
            <p>Imagine this: It’s today, but a hundred years ago. Or maybe 500 years ago. Did someone invent pizza? Did a king lose his crown (and maybe his head)? Who was born today and went on to be a rockstar… or maybe a medieval goat herder? If you’ve ever wondered what went down on this very day in the past, we’ve got you covered!</p>
            <p>At The Time Traveler’s Almanac, we dig up the weird, wild, and wonderful events that happened throughout history on any given day. Births, deaths, explosions, mysterious disappearances, heroic dogs — if it happened, we know about it. Well, at least the important stuff, like when ice cream was invented (that’s VERY important).
            </p>
            <h3>Why We Exist</h3>
            <p>Why do we exist? Well, someone has to keep history fun! And because no one asked us to be astronauts. We’re here to remind you that every day has a backstory — and some of those stories are downright bananas. Sure, maybe today feels like an average Tuesday to you, but 300 years ago, it could’ve been the day someone invented roller skates. Or declared war. Or invented roller skates during a war. You get the idea.</p>
            <p>We exist to bring history’s greatest hits (and most amusing bloopers) right to your screen. Whether you're looking for major events or just want to know what historical figure shares your birthday (spoiler: it’s probably some cool Viking you’ve never heard of), we’ve got it all.</p>
            <h3>How It Works</h3>
            <p>It’s simple: you tell us the day, and we’ll dish out the history. Want to know what happened today? Tomorrow? Your birthday? That one day in July when you got sunburned? We’ve got the goods. We’ll give you the highlights — the triumphs, the tragedies, and everything in between.</p>
            <p>Think of it like speed-dating… but with dead people. (Too much? Maybe.)</p>
            <p>From iconic inventions (thanks for the pizza, Italy!) to historical firsts (someone had to be the first person to slip on a banana peel), we’ve got the dirt on every day’s adventures. And trust us — some days in history were WAY more eventful than others. Like the day Julius Caesar found out “Et tu, Brute” wasn’t just a trendy phrase, or the time when Napoleon tried to conquer Russia... and got an unexpected cold shoulder (literally).</p>
            <h3>Our Mission</h3>
            <p>Our mission is to make history fun again — because let’s face it, history books are yawn and full of dates you’ll forget before you can say “Renaissance.” We want you to walk away with facts you’ll actually want to tell your friends. And maybe some you probably shouldn’t (did you know Cleopatra invented eyeliner? No? Well… that’s because she didn’t).</p>
            <p>We believe history is full of epic stories, random facts, and hilarious mishaps that shaped the world. So why not share the best bits? We’re here to make sure you never look at a random Wednesday the same way again.</p>
            <h3>Ready to Time Travel?</h3>
            <p>So, buckle up, grab your historical seatbelt, and let’s time travel together! We’ve got all the dates — literally. Every single one. Need a conversation starter? We’ve got decades of material. Looking for a reason to celebrate today? Trust us, someone, somewhere in history did something amazing.</p>
            <p>Let’s make history fun again, one totally random fact at a time. Oh, and if you invent a time machine while you’re here… call us first.</p>
            <img src='../src/assets/Upward Arrow.svg' className={theme? style.backToDark : style.backToTop} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                </img>
        </article>
    )
}