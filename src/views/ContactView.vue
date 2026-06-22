<script setup>
import { reactive, ref, onMounted, onUnmounted, nextTick } from 'vue'
import emailjs from '@emailjs/browser'
import Swal from 'sweetalert2'
import resumeUrl from '@/assets/resume/Hew_Chin_Xin-Software_Developer-Resume.pdf'

const LINKEDIN_BADGE_SCRIPT = 'https://platform.linkedin.com/badges/js/profile.js'
const LINKEDIN_BADGE_LOAD_TIMEOUT_MS = 8000

const linkedInBadgeRef = ref(null)
const badgeFailed = ref(false)
let badgeLoadTimeoutId = null
let badgeObserver = null

const clearBadgeLoadTimeout = () => {
  if (badgeLoadTimeoutId !== null) {
    window.clearTimeout(badgeLoadTimeoutId)
    badgeLoadTimeoutId = null
  }
}

const disconnectBadgeObserver = () => {
  badgeObserver?.disconnect()
  badgeObserver = null
}

const watchForBadgeIframe = () => {
  const badgeRoot = linkedInBadgeRef.value
  if (!badgeRoot) return

  disconnectBadgeObserver()
  badgeObserver = new MutationObserver(() => {
    if (badgeRoot.querySelector('iframe')) {
      badgeFailed.value = false
      clearBadgeLoadTimeout()
      disconnectBadgeObserver()
    }
  })
  badgeObserver.observe(badgeRoot, { childList: true, subtree: true })
}

const scheduleBadgeFailureCheck = () => {
  clearBadgeLoadTimeout()
  badgeLoadTimeoutId = window.setTimeout(() => {
    const badgeRoot = linkedInBadgeRef.value
    badgeFailed.value = !badgeRoot?.querySelector('iframe')
  }, LINKEDIN_BADGE_LOAD_TIMEOUT_MS)
}

const loadLinkedInBadge = () => {
  const badgeRoot = linkedInBadgeRef.value
  if (!badgeRoot) return

  badgeFailed.value = false

  if (badgeRoot.querySelector('iframe')) {
    return
  }

  document
    .querySelectorAll(`script[src="${LINKEDIN_BADGE_SCRIPT}"]`)
    .forEach((script) => script.remove())

  const script = document.createElement('script')
  script.src = LINKEDIN_BADGE_SCRIPT
  script.async = true
  script.defer = true
  script.onload = scheduleBadgeFailureCheck
  script.onerror = () => {
    badgeFailed.value = true
  }
  document.body.appendChild(script)

  watchForBadgeIframe()
  scheduleBadgeFailureCheck()
}

onMounted(async () => {
  await nextTick()
  loadLinkedInBadge()
})

onUnmounted(() => {
  clearBadgeLoadTimeout()
  disconnectBadgeObserver()
})

const formData = reactive({
  name: '',
  email: '',
  subject: '',
  message: '<p></p>'
})

const validateForm = () => {
  const isNameValid = nameValidation()
  const isEmailValid = emailValidation()
  const isSubjectValid = subjectValidation()
  const isMessageValid = messageValidation()

  const templateParams = {
    from_name: formData.name,
    email: formData.email,
    subject: formData.subject,
    message: formData.message
  }


  if (isNameValid && isEmailValid && isSubjectValid && isMessageValid) {
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

    if (!serviceId || !templateId || !publicKey) {
      Swal.fire({
        title: 'Configuration Error',
        text: 'The contact form is not configured. Please try again later or reach out on LinkedIn.',
        icon: 'error',
        confirmButtonText: 'Ok',
        timer: 5000
      })
      return
    }

    emailjs
      .send(serviceId, templateId, templateParams, {
        publicKey
      })
      .then(
        (response) => {
          Swal.fire({
            title: 'Message Sent!',
            text: 'Thanks for reaching out! Your message has been received.',
            icon: 'success',
            confirmButtonText: 'Ok',
            timer: 3000
          })
          formData.name = ''
          formData.email = ''
          formData.subject = ''
          formData.message = '<p></p>'
        },
        (err) => {
          Swal.fire({
            title: 'Message Send Failed.',
            text: 'Please try again or drop me a message on LinkedIn.',
            icon: 'error',
            confirmButtonText: 'Ok',
            timer: 3000
          })

        }
      )
  }
}

const nameValidation = () => {
  if (!formData.name.trim()) {
    document.getElementById('error-message-name').style.display = 'block'
    document.getElementById('error-message-name').textContent = 'Name is required'
    return false
  }

  document.getElementById('error-message-name').style.display = 'none'
  return true
}

const emailValidation = () => {
  if (!formData.email.trim()) {
    document.getElementById('error-message-email').style.display = 'block'
    document.getElementById('error-message-email').textContent = 'Email is required'
    return false
  }
  const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i
  if (!regex.test(formData.email)) {
    document.getElementById('error-message-email').style.display = 'block'
    document.getElementById('error-message-email').textContent = 'Invalid email address format'
    return false
  }

  document.getElementById('error-message-email').style.display = 'none'
  return true
}

const subjectValidation = () => {
  if (!formData.subject.trim()) {
    document.getElementById('error-message-subject').style.display = 'block'
    document.getElementById('error-message-subject').textContent = 'Subject is required'
    return false
  }

  document.getElementById('error-message-subject').style.display = 'none'
  return true
}

const messageValidation = () => {
  const formattedMessage = formData.message.replace(/<(.|\n)*?>/gim, '').trim()

  if (!formattedMessage) {
    document.getElementById('error-message-message').style.display = 'block'
    document.getElementById('error-message-message').textContent = 'Message is required'
    return false
  }

  document.getElementById('error-message-message').style.display = 'none'
  return true
}
</script>

<template>
  <div class="d-flex flex-column align-items-center">
    <div id="contact">
      <h1>Get in touch</h1>
      <div>
        Whether you have questions, want to collaborate on a project, or just-saying-hi’s, feel free
        to reach out. You can also reach me through any of of my contact information in my
        <a id="resume" :href="resumeUrl"
          type="application/pdf" target="_blank"
          download="Hew_Chin_Xin-Software_Developer-Resume.pdf"><font-awesome-icon
            icon="fa-solid fa-file-arrow-down" />resume.
        </a>
      </div>
      <div class="row pt-4 justify-content-center flex-md-nowrap">
        <div class="col-12 col-md-5 col-sm-12 ml-md-3 p-0 pl-md-4 section-LI">
          <h6>Connect with me on LinkedIn</h6>
          <div
            ref="linkedInBadgeRef"
            class="badge-base LI-profile-badge"
            data-locale="en_US"
            data-size="medium"
            data-theme="light"
            data-type="VERTICAL"
            data-vanity="chin-xin-hew-a48601197"
            data-version="v1"
          >
            <a
              class="badge-base__link LI-simple-link"
              href="https://www.linkedin.com/in/chin-xin-hew-a48601197/"
              target="_blank"
              rel="noopener noreferrer"
            >Chin Xin Hew</a>
            <p v-if="badgeFailed" class="LI-profile-badge-error" role="status">
              The LinkedIn badge could not be loaded. You can still visit my profile using the link above.
            </p>
          </div>
        </div>
        <div class="col-12 col-md-1 col-sm-12 px-0 mx-2">
          <div class="d-none d-md-flex items-center flex-column" style="height: 100%">
            <div class="vertical-divider"></div>
            <div class="my-3 text-center">or</div>
            <div class="vertical-divider"></div>
          </div>
          <div class="d-flex items-center d-md-none">
            <div class="horizontal-divider"></div>
            <div class="mx-3">or</div>
            <div class="horizontal-divider"></div>
          </div>
        </div>
        <div class="col-12 col-md-6 col-sm-12 px-3 px-md-0 section-form">
          <h6 class="">Drop me a message</h6>
          <div class="card">
            <form id="contact-form" class="card-body pt-1 pb-2">
              <div class="input-group">
                <div class="input-group-prepend">
                  <span class="input-group-text" id="input-name">Name</span>
                </div>
                <div class="d-flex flex-column form-control py-0 px-2 justify-content-center">
                  <input type="text" class="p-0" id="name" placeholder="May I have your name?" v-model="formData.name"
                    aria-label="Name" aria-describedby="input-name" />
                  <span class="error-message pb-1" id="error-message-name"></span>
                </div>
              </div>
              <div class="input-group">
                <div class="input-group-prepend">
                  <span class="input-group-text" id="input-email">Email</span>
                </div>
                <div class="d-flex flex-column form-control py-0 px-2 justify-content-center">
                  <input type="email" class="p-0" id="name" placeholder="Can I have your email address?"
                    v-model="formData.email" aria-label="Email" aria-describedby="input-email" />
                  <span class="error-message pb-1" id="error-message-email"></span>
                </div>
              </div>
              <div class="input-group">
                <div class="input-group-prepend">
                  <span class="input-group-text" id="input-email">Subject</span>
                </div>
                <div class="d-flex flex-column form-control py-0 px-2 justify-content-center">
                  <input type="text" class="p-0" id="subject" placeholder="What's the message about?"
                    v-model="formData.subject" aria-label="Subject" aria-describedby="input-subject" />
                  <span class="error-message pb-1" id="error-message-subject"></span>
                </div>
              </div>
              <div class="form-group d-flex flex-column">
                <label for="message" class="form-title">Message</label>
                <QuillEditor theme="snow" toolbar="essential" v-model:content="formData.message" contentType="html"
                  placeholder="Leave a message here..." />
                <span class="error-message py-1" id="error-message-message"></span>
              </div>
            </form>
          </div>
          <button class="mt-2 p-2 w-100 button-80" @click="validateForm">
            Send<font-awesome-icon id="paperPlane" icon="fa-regular fa-paper-plane" size="sm" />
          </button>
        </div>
      </div>
    </div>
    <div class="contact-footer p-2 text-center">
      <p class="copyright m-0">Copyright &copy; 2026 Hew Chin Xin. All Rights Reserved</p>
    </div>
  </div>
</template>
