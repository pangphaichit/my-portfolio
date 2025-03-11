<template>
  <div class="contact-and-footer-container">
    <div class="contact-container">
      <div class="contact-form">
        <h2>Contact Me</h2>
        <form @submit.prevent="handleSubmit">
          <div>
            <label for="name">
              <div class="name-and-error-container">
                <p>Name</p>
                <p v-if="!isNameValid && form.name" class="error">
                  Name must be at least 5 characters long.
                </p>
              </div>
              <input
                type="text"
                id="name"
                v-model="form.name"
                placeholder="Enter your name"
                required
              />
            </label>
          </div>

          <div>
            <label for="email">
              <div class="name-and-error-container">
                <p>Email</p>
                <p v-if="!isEmailValid && form.email" class="error">Invalid email format.</p>
              </div>
              <input
                type="email"
                id="email"
                v-model="form.email"
                placeholder="Enter your email"
                required
              />
            </label>
          </div>

          <div>
            <label for="message">
              <div class="name-and-error-container">
                <p>Message</p>
                <p v-if="!isMessageValid && form.message" class="error">
                  Message must be at least 10 characters long.
                </p>
              </div>
              <textarea
                id="message"
                v-model="form.message"
                placeholder="Enter your message"
                required
              ></textarea>
            </label>
          </div>

          <button type="submit" :disabled="isLoading || !isFormValid">Send Message</button>
        </form>
      </div>
    </div>
    <FooterApp />
  </div>
</template>

<script lang="ts">
import axios from 'axios';
import { defineComponent, ref, computed } from 'vue';
import { useToast } from 'vue-toastification';
import FooterApp from '@/components/FooterApp.vue';

interface Form {
  name: string;
  email: string;
  message: string;
}

type Status = 'idle' | 'success' | 'error' | 'loading';

export default defineComponent({
  name: 'ContactForm',
  components: {
    FooterApp,
  },
  setup() {
    const form = ref<Form>({
      name: '',
      email: '',
      message: '',
    });

    const status = ref<Status>('idle');
    const isLoading = ref(false);
    const toast = useToast();

    const isNameValid = computed(() => form.value.name.replace(/\s+/g, '').length >= 5);
    const isEmailValid = computed(() => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.value.email));
    const isMessageValid = computed(() => form.value.message.replace(/\s+/g, '').length >= 10);

    const isFormValid = computed(
      () => isNameValid.value && isEmailValid.value && isMessageValid.value,
    );

    const handleSubmit = async () => {
      if (!isFormValid.value) {
        toast.error('Please fill in all fields correctly.');
        return;
      }

      isLoading.value = true;
      status.value = 'loading';

      try {
        const response = await axios.post('https://api.emailjs.com/api/v1.0/email/send', {
          service_id: process.env.VUE_APP_EMAILJS_SERVICE_ID,
          template_id: process.env.VUE_APP_EMAILJS_TEMPLATE_ID,
          user_id: process.env.VUE_APP_EMAILJS_USER_ID,
          template_params: {
            from_name: form.value.name,
            message: form.value.message,
            email: form.value.email,
          },
        });

        if (response.status === 200) {
          toast.success('Message sent successfully!');
          status.value = 'success';
          form.value = { name: '', email: '', message: '' };
        } else {
          toast.error('Something went wrong. Please try again.');
          status.value = 'error';
        }
      } catch (error) {
        console.error('Error sending email:', error);
        toast.error('Failed to send message. Please try again later.');
        status.value = 'error';
      } finally {
        isLoading.value = false;
      }
    };

    return {
      form,
      status,
      handleSubmit,
      isLoading,
      isNameValid,
      isEmailValid,
      isMessageValid,
      isFormValid,
    };
  },
});
</script>

<style scoped>
.contact-and-footer-container {
  display: flex;
  flex-direction: column;
  justify-content: justify-between;
  height: 100vh;
  user-select: none;
}

.contact-container {
  position: relative;
  width: 100%;
  height: 85vh;
  font-family: 'Raleway', sans-serif;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: rgb(255, 245, 254);
  background: linear-gradient(180deg, rgb(246, 206, 218), rgb(174, 193, 227));
  overflow: hidden;
}

.sphere-pastel {
  position: absolute;
  top: 15%;
  left: 10%;
  width: 60px;
  z-index: 0;
}

.contact-form {
  position: absolute;
  width: 340px;
  margin-top: 12%;
  background: white;
  padding: 25px 16px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  z-index: 1;
}

h2 {
  font-weight: 700;
  color: rgb(130, 127, 127);
}

.name-and-error-container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
  margin-bottom: 5px;
}

p {
  color: rgb(130, 127, 127);
  font-size: 0.9rem;
  font-weight: 600;
}

input,
textarea {
  width: 100%;
  padding: 10px;
  border: 1px solid rgb(174, 193, 227);
  border-radius: 5px;
}

input:focus,
textarea:focus {
  outline: none;
  border-color: rgb(87, 144, 252);
  box-shadow: 0 0 5px rgba(87, 144, 252, 0.5);
}

button {
  margin-top: 20px;
  padding: 12px 32px;
  border: none;
  background: rgb(214, 177, 228);
  color: white;
  font-size: 16px;
  border-radius: 10px;
  cursor: pointer;
}

button:hover {
  background: rgb(246, 206, 218);
}

button:disabled {
  background-color: #ccc;
  cursor: not-allowed;
}

.error {
  color: red;
  font-size: 0.7rem;
  font-weight: 500;
}

label {
  display: flex;
  flex-direction: column;
}

@media screen and (min-width: 768px) {
  .contact-form {
    margin-top: 7%;
    width: 500px;
    padding: 35px 20px;
  }

  h2 {
    font-size: 2rem;
  }

  .name-and-error-container {
    margin-top: 20px;
    margin-bottom: 10px;
  }

  p {
    font-size: 1.2rem;
  }

  button {
    padding: 14px 34px;
  }

  .error {
    font-size: 0.8rem;
    font-weight: 500;
  }
}
</style>
