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
          <p className="e0je63jw subtle-shadow">M</p>
          <nav className="block e0vetzbl">
            <Link to="#home">Home</Link>
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#services">Services</a>
            <a href="#portfolio" hidden>Portfolio</a>
            <a href="#testimonials" hidden>Testimonials</a>
            <a href="#contact" rel="nofollow">Contact</a>
          </nav>
        </header>
        <article className="block">
          <section className="block e0l773e8" id="home">
            <div className="block e0wwt85q">
              <h1 className="e0ayu7xk"><em className="e0o0mj6m">Hey,</em><br /><em className="e0c0js8n">I'm Marc<br /></em>A Programmer</h1><a className="block subtle-shadow button" href="mailto:marcdevclient@gmail.com"><svg className="e0gl9kat" viewBox="0 0 24 24">
                  <path xmlns="http://www.w3.org/2000/svg" d="M0 0h24v24H0z" fill="none"></path>
                  <title xmlns="http://www.w3.org/2000/svg">ic_recommend_24px</title>
                  <path xmlns="http://www.w3.org/2000/svg" d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm6 9.8a.9.9 0 0 1-.1.5l-2.1 4.9a1.34 1.34 0 0 1-1.3.8H9a2 2 0 0 1-2-2v-5a1.28 1.28 0 0 1 .4-1L12 5l.69.69a1.08 1.08 0 0 1 .3.7v.2L12.41 10H17a1 1 0 0 1 1 1z"></path>
                </svg>
                <p>Contact me</p>
              </a>
            </div>
            <img className="e0bbe0oo" srcSet="asset/image/myself-top.jpg 1x, asset/image/myself-top@2x.jpg 2x, asset/image/myself-top@3x.jpg 3x" alt="Marc" />
          </section>
          <section className="block e091v9mz" id="about"><img srcSet="asset/image/myself-about.jpg 1x, asset/image/myself-about@2x.jpg 2x, asset/image/myself-about@3x.jpg 3x" alt="Marc" />
            <div className="block">
              <p className="e0zxjtk2">Marc</p>
              <p className="e0gkn73f">I'm Marc, a programmer and designer, and I have been developing all types of products for the last years. I really enjoy making them as well as helping anyone who uses them. My main field is programming, but I also feel comfortable with designing, arts and making assets!</p>
            </div>
          </section>
          <section className="block section-middle" id="skills">
            <div className="block section-header">
              <h3 className="section-header-title">My <em>Skills</em></h3>
              <hr className="block section-header-rule">
              <p className="section-header-description">During these years I've learnt a lot. Here are the main things I know:</p>
            </div>
            <div className="block e0rk6waw">
              <div className="block">
                <div className="block skill-block-header">
                  <p className="skill-block-title">Web Design</p>
                  <p className="skill-block-rating">8/10</p>
                </div><progress className="skill-block-level" value="8" max="10"></progress>
              </div>
              <div className="block">
                <div className="block skill-block-header">
                  <p className="skill-block-title">Software Design</p>
                  <p className="skill-block-rating">7/10</p>
                </div><progress className="skill-block-level" value="7" max="10"></progress>
              </div>
              <div className="block">
                <div className="block skill-block-header">
                  <p className="skill-block-title">Game Design</p>
                  <p className="skill-block-rating">8/10</p>
                </div><progress className="skill-block-level" value="8" max="10"></progress>
              </div>
              <div className="block">
                <div className="block skill-block-header">
                  <p className="skill-block-title">Asset Making</p>
                  <p className="skill-block-rating">8/10</p>
                </div><progress className="skill-block-level" value="8" max="10"></progress>
              </div>
              <div className="block">
                <div className="block skill-block-header">
                  <p className="skill-block-title">Python</p>
                  <p className="skill-block-rating">9/10</p>
                </div><progress className="skill-block-level" value="9" max="10"></progress>
              </div>
              <div className="block">
                <div className="block skill-block-header">
                  <p className="skill-block-title">Machine Learning</p>
                  <p className="skill-block-rating">7/10</p>
                </div><progress className="skill-block-level" value="7" max="10"></progress>
              </div>
            </div>
          </section>
          <section className="block section-middle" id="services">
            <div className="block section-header">
              <h3 className="section-header-title">My <em>Services</em></h3>
              <hr className="block e0s45sn3 section-header-rule">
              <p className="section-header-description">I offer different services, accessible to anyone. Contact me for more information.</p>
            </div>
            <div className="block e0pv7c4w">
              <div className="block service-block subtle-shadow">
                <div className="block service-block-header"><svg className="service-block-icon" viewBox="0 0 24 24">
                    <path xmlns="http://www.w3.org/2000/svg" d="M0 0h24v24H0z" fill="none"></path>
                    <path xmlns="http://www.w3.org/2000/svg" d="M7 14c-1.66 0-3 1.34-3 3 0 1.31-1.16 2-2 2 .92 1.22 2.49 2 4 2 2.21 0 4-1.79 4-4 0-1.66-1.34-3-3-3zm13.71-9.37l-1.34-1.34c-.39-.39-1.02-.39-1.41 0L9 12.25 11.75 15l8.96-8.96c.39-.39.39-1.02 0-1.41z"></path>
                  </svg>
                  <h6 className="e038dfxv service-block-title">assets</h6>
                </div>
                <p className="e04vnjzc">I make assets and publish them to the Unity Asset Store. You can see them by clicking <a className="e0pw6k0k" href="https://assetstore.unity.com/publishers/55437?preview=1" target="_blank">here</a>.</p>
              </div>
              <div className="block service-block subtle-shadow">
                <div className="block service-block-header"><svg className="service-block-icon" viewBox="0 0 24 24">
                    <path xmlns="http://www.w3.org/2000/svg" d="M0 0h24v24H0z" fill="none"></path>
                    <path xmlns="http://www.w3.org/2000/svg" d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm6.93 6h-2.95c-.32-1.25-.78-2.45-1.38-3.56 1.84.63 3.37 1.91 4.33 3.56zM12 4.04c.83 1.2 1.48 2.53 1.91 3.96h-3.82c.43-1.43 1.08-2.76 1.91-3.96zM4.26 14C4.1 13.36 4 12.69 4 12s.1-1.36.26-2h3.38c-.08.66-.14 1.32-.14 2 0 .68.06 1.34.14 2H4.26zm.82 2h2.95c.32 1.25.78 2.45 1.38 3.56-1.84-.63-3.37-1.9-4.33-3.56zm2.95-8H5.08c.96-1.66 2.49-2.93 4.33-3.56C8.81 5.55 8.35 6.75 8.03 8zM12 19.96c-.83-1.2-1.48-2.53-1.91-3.96h3.82c-.43 1.43-1.08 2.76-1.91 3.96zM14.34 14H9.66c-.09-.66-.16-1.32-.16-2 0-.68.07-1.35.16-2h4.68c.09.65.16 1.32.16 2 0 .68-.07 1.34-.16 2zm.25 5.56c.6-1.11 1.06-2.31 1.38-3.56h2.95c-.96 1.65-2.49 2.93-4.33 3.56zM16.36 14c.08-.66.14-1.32.14-2 0-.68-.06-1.34-.14-2h3.38c.16.64.26 1.31.26 2s-.1 1.36-.26 2h-3.38z"></path>
                  </svg>
                  <h6 className="e0jo6g9a service-block-title">webpages</h6>
                </div>
                <p className="e0zvt2io">Everyone should have a webpage. You're nobody if you don't have one. Contact me and I'll make you a very cool, easy to modify and attractive website, I can upload on the Internet for you.</p>
              </div>
              <div className="block service-block subtle-shadow">
                <div className="block service-block-header"><svg className="e0sj9wfv service-block-icon" viewBox="0 0 24 24">
                    <g xmlns="http://www.w3.org/2000/svg">
                      <rect fill="none" height="24" width="24"></rect>
                    </g>
                    <g xmlns="http://www.w3.org/2000/svg">
                      <g>
                        <path d="M20,3H4C2.9,3,2,3.9,2,5v14c0,1.1,0.9,2,2,2h16c1.1,0,2-0.9,2-2V5 C22,3.9,21.1,3,20,3z M20,19H4V5h16V19z" fill-rule="evenodd"></path>
                        <polygon fill-rule="evenodd" points="19.41,10.42 17.99,9 14.82,12.17 13.41,10.75 12,12.16 14.82,15"></polygon>
                        <rect fill-rule="evenodd" height="2" width="5" x="5" y="7"></rect>
                        <rect fill-rule="evenodd" height="2" width="5" x="5" y="11"></rect>
                        <rect fill-rule="evenodd" height="2" width="5" x="5" y="15"></rect>
                      </g>
                    </g>
                  </svg>
                  <h6 className="e002uicw service-block-title">software</h6>
                </div>
                <p className="e0zj0eij">I also make software adapted to your necessities. Just contact me and we'll talk about it.</p>
              </div>
            </div>
          </section>
          <section className="block e0gsvnnu section-middle" id="portfolio" hidden>
            <div className="block section-header">
              <h3 className="section-header-title">My <font color="#9d30f4">portfolio</font>
              </h3>
              <hr className="block e04patki section-header-rule">
              <p className="section-header-description">212</p>
            </div>
            <div className="block e087rz6x"><a className="block" href="/"><img srcSet="asset/image/image.jpg 1x" /></a><a className="block" href="/"><img srcSet="asset/image/image.jpg 1x" /></a></div>
          </section>
          <section className="block section-middle" id="testimonials" hidden>
            <div className="block section-header">
              <h3 className="section-header-title">What <em>Clients&nbsp;</em>say</h3>
              <hr className="block e0puosbv section-header-rule">
              <p className="section-header-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris a diam fringilla, interdum orci nec, accumsan est.</p>
            </div>
            <div className="block e0qbrvoc">
              <div className="block testimonial-block">
                <div className="block testimonial-content"><svg className="testimonial-quote" viewBox="0 0 24 24">
                    <path xmlns="http://www.w3.org/2000/svg" d="M0 0h24v24H0z" fill="none"></path>
                    <path xmlns="http://www.w3.org/2000/svg" d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z"></path>
                  </svg>
                  <blockquote>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris a diam fringilla, interdum orci nec, accumsan est.</blockquote>
                </div>
                <div className="block testimonial-footer"><img className="testimonial-avatar" srcSet="asset/image/author1.jpg 1x, asset/image/author1@2x.jpg 2x, asset/image/author1@3x.jpg 3x" alt="George Smith" />
                  <div className="block testimonial-author">
                    <p>Diana Armero</p>
                    <p className="testimonial-job">Product Manager</p>
                  </div>
                </div>
              </div>
              <div className="block testimonial-block">
                <div className="block testimonial-content"><svg className="testimonial-quote" viewBox="0 0 24 24">
                    <path xmlns="http://www.w3.org/2000/svg" d="M0 0h24v24H0z" fill="none"></path>
                    <path xmlns="http://www.w3.org/2000/svg" d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z"></path>
                  </svg>
                  <blockquote>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris a diam fringilla, interdum orci nec, accumsan est.</blockquote>
                </div>
                <div className="block testimonial-footer"><img className="testimonial-avatar" srcSet="asset/image/author1.jpg 1x, asset/image/author1@2x.jpg 2x, asset/image/author1@3x.jpg 3x" alt="George Smith" />
                  <div className="block testimonial-author">
                    <p>Dèlia Colldeforns</p>
                    <p className="testimonial-job">Product Manager</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </article>
        <footer className="block e0vucvs5" id="contact">
          <p className="e0mltdw8">M</p><a className="block e0ru0zgg" href="mailto:marcdevclient@gmail.com"><svg className="e00ypsbc" viewBox="0 0 24 24">
              <path xmlns="http://www.w3.org/2000/svg" d="M0 0h24v24H0z" fill="none"></path>
              <path xmlns="http://www.w3.org/2000/svg" d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V8l8 5 8-5v10zm-8-7L4 6h16l-8 5z"></path>
            </svg>
            <p>Email me</p>
          </a>
          <p className="e0h5yq9n">© 2021 Marc</p>
        </footer>
      </main>
    )
    // desech studio - end render block
    return render
  }
}
