<script setup>
import { reactive } from 'vue'
import emailjs from '@emailjs/browser'
import Swal from 'sweetalert2'
import resumeUrl from '@/assets/resume/Hew_Chin_Xin-CV.pdf'
import PageLayout from '@/components/PageLayout.vue'
import LinkedInProfileCard from '@/components/LinkedInProfileCard.vue'
import { useTheme } from '@/composables/useTheme'

const { theme } = useTheme()

const formData = reactive({
  name: '',
  email: '',
  subject: '',
  message: '<p></p>'
})

const errors = reactive({
  name: '',
  email: '',
  subject: '',
  message: ''
})

const swalOptions = () => {
  const isDark = theme.value === 'dark'
  return isDark ? { background: '#222222', color: '#ffffff' } : {}
}

const validateName = () => {
  if (!formData.name.trim()) {
    errors.name = 'Name is required'
    return false
  }
  errors.name = ''
  return true
}

const validateEmail = () => {
  if (!formData.email.trim()) {
    errors.email = 'Email is required'
    return false
  }
  const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i
  if (!regex.test(formData.email)) {
    errors.email = 'Invalid email address format'
    return false
  }
  errors.email = ''
  return true
}

const validateSubject = () => {
  if (!formData.subject.trim()) {
    errors.subject = 'Subject is required'
    return false
  }
  errors.subject = ''
  return true
}

const validateMessage = () => {
  const formattedMessage = formData.message.replace(/<(.|\n)*?>/gim, '').trim()
  if (!formattedMessage) {
    errors.message = 'Message is required'
    return false
  }
  errors.message = ''
  return true
}

const validateForm = () => {
  const isNameValid = validateName()
  const isEmailValid = validateEmail()
  const isSubjectValid = validateSubject()
  const isMessageValid = validateMessage()

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
        timer: 5000,
        ...swalOptions()
      })
      return
    }

    emailjs
      .send(serviceId, templateId, templateParams, {
        publicKey
      })
      .then(
        () => {
          Swal.fire({
            title: 'Message Sent!',
            text: 'Thanks for reaching out! Your message has been received.',
            icon: 'success',
            confirmButtonText: 'Ok',
            timer: 3000,
            ...swalOptions()
          })
          formData.name = ''
          formData.email = ''
          formData.subject = ''
          formData.message = '<p></p>'
        },
        () => {
          Swal.fire({
            title: 'Message Send Failed.',
            text: 'Please try again or drop me a message on LinkedIn.',
            icon: 'error',
            confirmButtonText: 'Ok',
            timer: 3000,
            ...swalOptions()
          })
        }
      )
  }
}
</script>

<template>
  <PageLayout
    title="Get in touch"
    subtitle="Whether you have questions, want to collaborate, or just want to say hi — feel free to reach out."
  >
    <div class="contact-page">
      <p class="contact-intro">
        You can also download my
        <a id="resume" :href="resumeUrl" type="application/pdf" target="_blank"
          download="Hew_Chin_Xin-CV.pdf">
          <font-awesome-icon icon="fa-solid fa-file-arrow-down" /> resume
        </a>.
      </p>
      <div class="contact-grid">
        <section class="contact-panel">
          <h6 class="contact-panel__title">Connect with me on LinkedIn</h6>
          <div class="contact-panel__card card">
            <div class="card-body">
              <LinkedInProfileCard />
            </div>
          </div>
        </section>

        <div class="contact-divider" aria-hidden="true">
          <span class="contact-divider__line"></span>
          <span class="contact-divider__label">or</span>
          <span class="contact-divider__line"></span>
        </div>

        <section class="contact-panel">
          <h6 class="contact-panel__title">Drop me a message</h6>
          <div class="contact-panel__card card contact-form-card">
            <form id="contact-form" class="card-body" @submit.prevent="validateForm">
              <div class="form-field">
                <label for="name">Name</label>
                <input
                  id="name"
                  v-model="formData.name"
                  type="text"
                  class="form-input"
                  placeholder="May I have your name?"
                  aria-describedby="error-name"
                />
                <span v-if="errors.name" id="error-name" class="form-error" role="alert">{{ errors.name }}</span>
              </div>
              <div class="form-field">
                <label for="email">Email</label>
                <input
                  id="email"
                  v-model="formData.email"
                  type="email"
                  class="form-input"
                  placeholder="Can I have your email address?"
                  aria-describedby="error-email"
                />
                <span v-if="errors.email" id="error-email" class="form-error" role="alert">{{ errors.email }}</span>
              </div>
              <div class="form-field">
                <label for="subject">Subject</label>
                <input
                  id="subject"
                  v-model="formData.subject"
                  type="text"
                  class="form-input"
                  placeholder="What's the message about?"
                  aria-describedby="error-subject"
                />
                <span v-if="errors.subject" id="error-subject" class="form-error" role="alert">{{ errors.subject }}</span>
              </div>
              <div class="form-field">
                <label for="message">Message</label>
                <QuillEditor
                  id="message"
                  theme="snow"
                  toolbar="essential"
                  v-model:content="formData.message"
                  contentType="html"
                  placeholder="Leave a message here..."
                />
                <span v-if="errors.message" id="error-message" class="form-error" role="alert">{{ errors.message }}</span>
              </div>
              <button type="submit" class="btn-primary-custom w-100 mt-2">
                Send <font-awesome-icon icon="fa-regular fa-paper-plane" />
              </button>
            </form>
          </div>
        </section>
      </div>
    </div>
  </PageLayout>
</template>
