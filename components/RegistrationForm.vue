<template>
  <form @submit.prevent="submitForm">
    <div
      class="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12"
    >
      <div class="relative py-3 sm:max-w-xl sm:mx-auto">
        <div
          class="absolute inset-0 bg-gradient-to-r from-blue-300 to-blue-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"
        ></div>
        <div
          class="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20"
        >
          <div class="max-w-md mx-auto">
            <div>
              <h1 class="text-2xl font-semibold">Регистрация</h1>
            </div>
            <div class="divide-y divide-gray-200 min-w-[416px]">
              <div
                class="py-8 text-base leading-6 space-y-6 text-gray-700 sm:text-lg sm:leading-7"
              >
                <div class="relative">
                  <input
                    id="name"
                    v-model="form.name"
                    name="name"
                    type="text"
                    class="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                    placeholder="Имя Фамилия"
                    @blur="validateName"
                    @focus="resetValidation('name')"
                  />
                  <span
                    v-if="errors.name"
                    class="absolute left-0 -bottom-4 text-red-500 text-xs"
                  >
                    Введите только два слова кириллицей
                  </span>
                  <label
                    for="name"
                    class="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                    >Имя Фамилия</label
                  >
                </div>
                <div class="relative">
                  <input
                    id="phone"
                    v-model="form.phone"
                    name="phone"
                    type="text"
                    class="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                    placeholder="Номер телефона"
                    @blur="validatePhone"
                    @focus="resetValidation('phone')"
                  />
                  <span
                    v-if="errors.phone"
                    class="absolute left-0 -bottom-4 text-red-500 text-xs"
                  >
                    Номер должен начинаться с +7 и иметь 11 цифр
                  </span>
                  <label
                    for="phone"
                    class="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                    >Номер телефона</label
                  >
                </div>
                <div class="relative">
                  <input
                    id="email"
                    v-model="form.email"
                    name="email"
                    type="text"
                    class="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                    placeholder="Email"
                  />
                  <label
                    for="email"
                    class="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                    >Email</label
                  >
                </div>
                <div class="relative">
                  <input
                    id="password"
                    v-model="form.password"
                    name="password"
                    type="password"
                    class="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                    placeholder="Пароль"
                  />
                  <label
                    for="password"
                    class="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                    >Пароль</label
                  >
                </div>
                <div class="relative">
                  <button
                    class="bg-blue-500 text-white rounded-md px-2 py-1"
                    type="submit"
                  >
                    Отправить
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </form>
</template>

<script>
export default {
  data() {
    return {
      form: {
        name: '',
        phone: '',
        email: '',
        password: '',
      },
      errors: {
        name: false,
        phone: false,
        email: false,
        password: false,
      },
    }
  },
  methods: {
    validateName() {
      const cyrillicWords = this.form.name.match(/[\u0400-\u04FF]+/g)
      this.errors.name = !(cyrillicWords && cyrillicWords.length === 2)
    },
    validatePhone() {
      const phone = this.form.phone.replace(/\s/g, '')
      const phonePattern = /^\+7\d{10}$/
      this.errors.phone = !phonePattern.test(phone)
    },
    resetValidation(field) {
      this.errors[field] = false
    },
    submitForm() {
      console.log(this.form)
    },
  },
}
</script>
