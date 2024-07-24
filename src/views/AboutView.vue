<template>
  <div class="d-flex flex-column">
    <div class="row flex-column flex-md-row about">
      <div id="left-content" class="col-md-4 col-sm-12 left-content">
        <div class="single-about-img">
          <img class="rounded"  alt="Cx's LinkedIn Profile Picture" :src="require('@/assets/images/portfolio/cx-potrait.webp')" width="200" />
        </div>
        <div class="d-flex justify-content-center mb-3">
          <div class="title text-md-start">
            <h5 class="mb-1">Hew Chin Xin</h5>
            <h6 class="mb-1">Full Stack Developer</h6>
            <div>
              <a href="https://www.linkedin.com/in/chin-xin-hew-a48601197/" target="_blank">
                <font-awesome-icon icon="fa-brands fa-linkedin" class="text-black" size="xl" />
              </a>
              <a href="#">
                <font-awesome-icon icon="fa-brands fa-github-square" class="text-black" size="xl" />
              </a>
              <a href="mailto:hewchinxin@gmail.com">
                <font-awesome-icon icon="fa-solid fa-envelope" class="text-black" size="xl" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div id="right-content" class="col-md-8 col-sm-12 right-content">
        <section class="aboutMe">
          <div class="section-heading">
            <h2 class="px-2">about me</h2>
          </div>
          <div class="aboutMe-txt px-2">
            <p class="mb-4">
              Hey, it's great to meet you! I'm a full stack developer with over 1 year of hands on
              experience in web application development. I collaborate effectively with
              cross-functional teams, providing feedback on the feasibility of ideas, offering better
              solutions to ensure the delivery of top-notch software products, and tackling complex
              problems with more effect approaches.
              <br /><br />
              When I'm not immersed in code, I'm savoring a good cup of matcha, finding inspiration in
              its simplicity and warmth. I also love capturing the world's beauty through my camera,
              transforming everyday moments into compelling visual stories. I'm passionate about
              innovation, continuous learning, and building dynamic web applications through a blend
              of technology and creativity.
            </p>
          </div>
        </section>
        <section class="experience mb-3" id="experience">
          <div class="section-heading">
            <h2 class="mb-3 px-2">experience</h2>
          </div>
          <div class="px-2 d-flex flex-column gap-3">
            <div id="accenture" class="card experience-card">
              <div class="card-body">
                <div class="card-title mb-0">
                  <img :src="require('@/assets/images/logos/accenture.webp')" alt="Accenture's Logo" width="118" />
                </div>
                <span class="card-subtitle text-muted off-loc">Kelana Jaya</span>
                <div class="card-text d-flex flex-column mt-2 pt-2">
                  <span class="job-title">Business Architecture Analyst</span>
                  <span class="job-date">March 2024 — May 2024</span>
                  <p class="job-desc m-0 my-2">
                    &blacktriangleright; Identified, diagnosed, and fixed web-based distribution
                    management system bugs, improving functionality and user experience.
                    <br />
                    &blacktriangleright; Provided L1-L3 customer support, addressing various technical
                    issues and ensuring timely resolution to maintain customer satisfaction.
                  </p>
                </div>
              </div>
            </div>
            <div id="nextale" class="card experience-card">
              <div class="card-body">
                <div class="card-title mb-0">
                  <img :src="require('@/assets/images/logos/nextale.jpg')" alt="Nextale's Logo" width="120" />
                </div>
                <span class="card-subtitle text-muted off-loc">Petaling Jaya</span>
                <div class="card-text d-flex flex-column mt-2 pt-2">
                  <span class="job-title">Full Stack Developer (Part-Time)</span>
                  <span class="job-date">October 2023 — December 2023</span>
                  <p class="job-desc m-0 my-2">
                    &hybull; Developed an event seating arrangement module for RSVP Web Application,
                    using technologies like Laravel for backend development and Vue.js for frontend
                    development.
                    <br />
                    &hybull; Integrated third-party npm libraries to streamline development and add
                    additional functionalities.
                    <br />
                    &hybull; Identified and resolved performance issues, enhancing application
                    efficiency and user experience.
                  </p>
                </div>
              </div>
            </div>
            <div id="fusionex" class="card experience-card">
              <div class="card-body">
                <div class="card-title mb-0">
                  <img :src="require('@/assets/images/logos/fusionex.jpg')" alt="Fusionex's Logo" width="140" />
                </div>
                <span class="card-subtitle text-muted off-loc">Petaling Jaya</span>
                <div class="card-text d-flex flex-column mt-2 pt-2">
                  <span class="job-title">Consultant, Solutions Development</span>
                  <span class="job-date">July 2024 — Feb 2024</span>
                  <p class="job-desc m-0 my-2">
                    &bull; Designed and implemented frontend and backend functionality for data
                    visualization software, using technologies such as ASP.NET MVC, ASP.NET Core, and
                    Knockout.js.
                    <br />
                    &bull; Collaborate with cross-functional teams to gather requirements, design
                    solutions, and deliver high-quality software solutions.
                    <br />
                    &bull; Developed a forecasting module for estimating construction project fees,
                    resulting in a 20% reduction in human effort and errors associated with manual fee
                    calculations.
                    <br />
                    &bull; Mentored and guided two interns throughout their 3-6 months industrial
                    training period, facilitating their growth and development within the team.
                  </p>
                </div>
                <div class="card-text d-flex flex-column mt-2 pt-2">
                  <span class="job-title">Web Developer (Internship)</span>
                  <span class="job-date">January 2022 — June 2022</span>
                  <p class="job-desc m-0 my-2">
                    &bull; Update the web designs to a more minimalist design provided by UI
                    designers.
                    <br />
                    &bull; Collaborated with senior developers to implement frontend functionality and
                    ensure smooth user experience.
                    <br />
                    &bull; Participated in testing and debugging of web applications to ensure optimal
                    performance.
                  </p>
                </div>
                <div class="card-text d-flex flex-column mt-2 pt-2">
                  <span class="job-title">Software Tester (Internship)</span>
                  <span class="job-date">February 2020 — May 2020</span>
                  <p class="job-desc m-0 my-2">
                    &bull; Analyzed requirements and designed test cases to ensure complete test
                    coverage
                    <br />
                    &bull; Detected and reported software defects and provided detailed bug reports to
                    developers
                    <br />
                    &bull; Developed automated test scripts that reduced manual testing time by 30%
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="education" class="education">
          <div class="section-heading">
            <h2 class="mb-3 px-2">education</h2>
          </div>
          <div class="px-2 d-flex flex-column gap-3">
            <div id="tarumt" class="card education-card">
              <div class="card-body">
                <h5 class="card-title">Tunku Abdul Rahman University of Management and Technology</h5>
                <div class="edu-detail d-flex flex-column pb-2">
                  <span class="edu-title">Bachelor Of Information Technology (Honours) In Internet Technology</span>
                  <span class="edu-desc text-muted">June 2020 — July 2022 | CGPA: 3.68</span>
                </div>
                <div class="edu-detail d-flex flex-column pb-2">
                  <span class="edu-title">Diploma in Science (Internet Technology)</span>
                  <span class="edu-desc text-muted">May 2018 — May 2020 | CGPA: 3.61</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
    <div class="about-footer p-2 text-center">
      <p class="copyright m-0">Copyright &copy; 2024 Hew Chin Xin. All Rights Reserved</p>
    </div>
  </div>
</template>