import React from 'react'
// desech studio - start import block
import { Link } from 'react-router-dom'
// desech studio - end import block

export default class Index extends React.Component {
  render() {
    // desech studio - start render block
    const render = (
      <main className="block e0bwq7pa">
          <header className="block e0j0zvn6">
            <p className="e0je63jw">M</p>
            <nav className="block e0vetzbl">
              <Link to="#home">Home</Link>
              <a href="#home">About</a>
              <a href="#skills">Skills</a>
              <a>Services</a>
              <a>Portfolio</a>
              <a>Testimonials</a>
              <a href="#contact" rel="nofollow">Contact</a>
            </nav>
          </header>
          <article className="block">
            <section className="block e0l773e8">
              <div className="block e0wwt85q">
                <img srcSet="asset/image/image.jpg 1x" />
              </div>
            </section>
          </article>
        </main>
    )
    // desech studio - end render block
    return render
  }
}
