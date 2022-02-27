import React from 'react'
import Navigation from './Navigation';
import './courses.css'
function About() {
    return (
        <div className='about' id='about'>
            <Navigation />
            <section className="course">
                <h1>courses we offer</h1>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga at vitae tenetur obcaecati laborum ratione
                    quia esse sequi voluptates? Eos, voluptas qui. Ut accusantium quia soluta, quo laudantium praesentium rerum.
                    Rerum numquam in eum incidunt earum libero ex at blanditiis,
                    asperiores inventore molestias optio quaerat quibusdam, eos hic nam fuga. Error, non!</p>
                <div className="row">
                    <div className="course-col">
                        <h3>Formalite douaniere</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia laboriosam quam saepe magnam
                            repellat cupiditate debitis nostrum labore delectus earum? Molestias corrupti architecto accusantium
                            voluptatibus corporis ad dolore, molestiae nobis inventore culpa est unde repudiandae
                            exercitationem. Provident labore voluptatum repellendus fugit facere totam nesciunt aliquid odit
                            voluptas aspernatur, placeat excepturi?</p>
                    </div>
                    <div className="course-col">
                        <h3>Info de Gestion</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia laboriosam quam saepe magnam
                            repellat cupiditate debitis nostrum labore delectus earum? Molestias corrupti architecto accusantium
                            voluptatibus corporis ad dolore, molestiae nobis inventore culpa est unde repudiandae
                            exercitationem. Provident labore voluptatum repellendus fugit facere totam nesciunt aliquid odit
                            voluptas aspernatur, placeat excepturi?</p>
                    </div>
                    <div className="course-col">
                        <h3>Reception</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia laboriosam quam saepe magnam
                            repellat cupiditate debitis nostrum labore delectus earum? Molestias corrupti architecto accusantium
                            voluptatibus corporis ad dolore, molestiae nobis inventore culpa est unde repudiandae
                            exercitationem. Provident labore voluptatum repellendus fugit facere totam nesciunt aliquid odit
                            voluptas aspernatur, placeat excepturi?</p>
                    </div>


                </div>
            </section>



            <section className="test">
                <h1>what our student says</h1>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos, placeat!</p>
                <div className="row">
                    <div className="test-col">
                        <img
                            src="https://th.bing.com/th/id/R.e80159dab5b98e343c51e5b9251ae9c5?rik=X3K%2bCluI4OG9kw&pid=ImgRaw&r=0" />
                        <div>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id officiis consequuntur quisquam velit
                                doloremque labore quasi consectetur! Enim, voluptate temporibus! Tempora, velit. Ipsa laboriosam
                                culpa mollitia eligendi voluptas numquam amet.</p>
                            <h3>safa</h3>
                        </div>
                    </div>

                    <div className="test-col">
                        <img
                            src="https://th.bing.com/th/id/R.e80159dab5b98e343c51e5b9251ae9c5?rik=X3K%2bCluI4OG9kw&pid=ImgRaw&r=0" />
                        <div>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id officiis consequuntur quisquam velit
                                doloremque labore quasi consectetur! Enim, voluptate temporibus! Tempora, velit. Ipsa laboriosam
                                culpa mollitia eligendi voluptas numquam amet.</p>
                            <h3>Rania</h3>
                        </div>
                    </div>


                </div>
            </section>









        </div>
    )
}

export default About
