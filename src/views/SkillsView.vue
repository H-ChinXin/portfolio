<template>
  <div>
    <div class="skills">
      <section id="technologies" class="technologies">
        <div class="section-heading">
          <h2 class="mb-3 px-2">Technologies</h2>
        </div>
        <div class="tech-cards d-flex gap-2 flex-wrap justify-content-lg-start justify-content-center">
          <div id="html5" class="card tech-card">
            <div class="row align-items-center">
              <div class="col-2">
                <font-awesome-icon icon="fa-brands fa-html5" size="2xl" style="color: #f16529" />
              </div>
              <div class="col-10 d-flex flex-column skill-level">
                <span class="tech-name">HTML5</span>
                <div class="progress">
                  <div class="progress-bar" role="progressbar" style="width: 88%" aria-valuenow="25" aria-valuemin="0"
                    aria-valuemax="100">
                    Proficient
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div id="css3" class="card tech-card">
            <div class="row align-items-center">
              <div class="col-2">
                <font-awesome-icon icon="fa-brands fa-css3-alt" size="2xl" style="color: #2965f1" />
              </div>
              <div class="col-10 d-flex flex-column skill-level">
                <span class="tech-name">CSS3</span>
                <div class="progress">
                  <div class="progress-bar" role="progressbar" style="width: 88%" aria-valuenow="25" aria-valuemin="0"
                    aria-valuemax="100">
                    Proficient
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div id="js" class="card tech-card">
            <div class="row align-items-center">
              <div class="col-2">
                <font-awesome-icon icon="fa-brands fa-js" size="2xl" style="color: #ffd43b" />
              </div>
              <div class="col-10 d-flex flex-column skill-level">
                <span class="tech-name">JavaScript</span>
                <div class="progress">
                  <div class="progress-bar" role="progressbar" style="width: 88%" aria-valuenow="25" aria-valuemin="0"
                    aria-valuemax="100">
                    Proficient
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div id="git" class="card tech-card">
            <div class="row align-items-center">
              <div class="col-2">
                <font-awesome-icon icon="fa-brands fa-git-alt" size="2xl" style="color: #f05133" />
              </div>
              <div class="col-10 d-flex flex-column skill-level">
                <span class="tech-name">Git</span>
                <div class="progress">
                  <div class="progress-bar" role="progressbar" style="width: 88%" aria-valuenow="25" aria-valuemin="0"
                    aria-valuemax="100">
                    Proficient
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div id="php" class="card tech-card">
            <div class="row align-items-center">
              <div class="col-auto tech-logo">
                <font-awesome-icon icon="fa-brands fa-php" size="2xl" style="color: #777bb3" />
              </div>
              <div class="col-auto d-flex flex-column skill-level">
                <span class="tech-name">PHP</span>
                <div class="progress">
                  <div class="progress-bar" role="progressbar" style="width: 50%" aria-valuenow="50" aria-valuemin="0"
                    aria-valuemax="100">
                    Intermediate
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div id="mongodb" class="card tech-card">
            <div class="row align-items-center">
              <div class="col-auto tech-logo">
                <img :src="require('@/assets/images/logos/mongodb.png')" alt="MongoDB's Logo" width="28" />
              </div>
              <div class="col-auto d-flex flex-column skill-level">
                <span class="tech-name">MongoDB</span>
                <div class="progress">
                  <div class="progress-bar" role="progressbar" style="width: 65%" aria-valuenow="65" aria-valuemin="0"
                    aria-valuemax="100">
                    Intermediate
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div id="csharp" class="card tech-card">
            <div class="row align-items-center">
              <div class="col-auto tech-logo">
                <img :src="require('@/assets/images/logos/csharp.webp')" alt="CSharp's Logo" width="28" />
              </div>
              <div class="col-auto d-flex flex-column skill-level">
                <span class="tech-name">C#</span>
                <div class="progress">
                  <div class="progress-bar" role="progressbar" style="width: 65%" aria-valuenow="65" aria-valuemin="0"
                    aria-valuemax="100">
                    Proficient
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div id="jquery" class="card tech-card">
            <div class="row align-items-center">
              <div class="col-auto tech-logo">
                <img :src="require('@/assets/images/logos/jquery.webp')" alt="jQuery's Logo" width="28" />
              </div>
              <div class="col-auto d-flex flex-column skill-level">
                <span class="tech-name">jQuery</span>
                <div class="progress">
                  <div class="progress-bar" role="progressbar" style="width: 75%" aria-valuenow="75" aria-valuemin="0"
                    aria-valuemax="100">
                    Proficient
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="frameworks" class="frameworks mt-3">
        <div class="section-heading">
          <h2 class="mb-3 px-2">Frameworks</h2>
        </div>
        <div class="tech-cards d-flex gap-2 flex-wrap justify-content-lg-start justify-content-center">
          <div id="vue" class="card tech-card">
            <div class="row align-items-center">
              <div class="col-2">
                <font-awesome-icon icon="fa-brands fa-vuejs" size="2xl" style="color: #41b883" />
              </div>
              <div class="col-10 d-flex flex-column skill-level">
                <span class="tech-name">Vue.js</span>
                <div class="progress">
                  <div class="progress-bar" role="progressbar" style="width: 70%" aria-valuenow="70" aria-valuemin="0"
                    aria-valuemax="100">
                    Intermediate
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div id="laravel" class="card tech-card">
            <div class="row align-items-center">
              <div class="col-2">
                <font-awesome-icon icon="fa-brands fa-laravel" size="2xl" style="color: #ff2d20" />
              </div>
              <div class="col-10 d-flex flex-column skill-level">
                <span class="tech-name">Laravel</span>
                <div class="progress">
                  <div class="progress-bar" role="progressbar" style="width: 50%" aria-valuenow="50" aria-valuemin="0"
                    aria-valuemax="100">
                    Intermediate
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="tools" class="tools mt-3">
        <div class="section-heading">
          <h2 class="mb-3 px-2">Tools</h2>
        </div>
        <div class="tech-cards d-flex gap-2 flex-wrap justify-content-lg-start justify-content-center">
          <div id="trello" class="card tech-card">
            <div class="row align-items-center">
              <div class="col-2">
                <font-awesome-icon icon="fa-brands fa-trello" size="2xl" style="color: #007ac3" />
              </div>
              <div class="col-10 d-flex flex-column skill-level">
                <span class="tech-name">Trello</span>
                <div class="progress">
                  <div class="progress-bar" role="progressbar" style="width: 80%" aria-valuenow="80" aria-valuemin="0"
                    aria-valuemax="100">
                    Proficient
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div id="adobe-pr" class="card tech-card">
            <div class="row align-items-center">
              <div class="col-2">
                <img :src="require('@/assets/images/logos/adobe-pr.webp')" alt="Adobe Premiere Pro's Logo" width="28" />
              </div>
              <div class="col-10 d-flex flex-column skill-level">
                <span class="tech-name">Adobe Premiere Pro</span>
                <div class="progress">
                  <div class="progress-bar" role="progressbar" style="width: 65%" aria-valuenow="65" aria-valuemin="0"
                    aria-valuemax="100">
                    Intermediate
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div id="adobe-ps" class="card tech-card">
            <div class="row align-items-center">
              <div class="col-2">
                <img :src="require('@/assets/images/logos/adobe-ps.webp')" alt="Adobe Photoshop's Logo" width="28" />
              </div>
              <div class="col-10 d-flex flex-column skill-level">
                <span class="tech-name">Adobe Photoshop</span>
                <div class="progress">
                  <div class="progress-bar" role="progressbar" style="width: 30%" aria-valuenow="30" aria-valuemin="0"
                    aria-valuemax="100">
                    Beginner
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    <div class="skills-footer p-2 text-center">
      <p class="copyright m-0">Copyright &copy; 2024 Hew Chin Xin. All Rights Reserved</p>
    </div>
  </div>
</template>