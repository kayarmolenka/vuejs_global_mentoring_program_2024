<script setup lang="ts">
import { useForm } from 'vee-validate'
import { object, string, number } from 'yup'
import { watch } from 'vue'

function watchField(field: any) {
  watch(field, (newVal: any) => {
    if (newVal === '') {
      field.value = null
    }
  })
}

const numberOnlyRegex = /^\d+$/
const mobilePhoneRegex =
  /^(?:(?:\+\s*(?:4\s*){2}[1|2]|0\s*[1|2])\s*(?:\d\s*){8,9}|(?:\+\s*(?:4\s*){2}7|0\s*7)\s*(?:\d\s*){9})$/ // GB number like: 07111111111

const userNameRegex = /^(?:[a-zA-Z][a-zA-Z\s\\.\-']{1,29})$/ // at least 2 characters, and can only include letters, apostrophes, hyphens and full stops

enum GENDER_ENUM {
  MR = 'Mr',
  MRS = 'Mrs',
  MISS = 'Miss',
  MS = 'Ms'
}
enum EMPLOYMENT_STATUSES_ENUM {
  FULL_TIME = 'Full time',
  PART_TIME = 'Part time',
  UNEMPLOYED = 'Unemployed',
  RETIRED = 'Retired'
}

const employmentStatuses = [
  EMPLOYMENT_STATUSES_ENUM.FULL_TIME,
  EMPLOYMENT_STATUSES_ENUM.PART_TIME,
  EMPLOYMENT_STATUSES_ENUM.UNEMPLOYED,
  EMPLOYMENT_STATUSES_ENUM.RETIRED
]

interface IForm {
  firstName: string
  lastName: string
  gender: GENDER_ENUM
  birthDate: number | null
  mobilePhone: string | null
  numberOfDependants: string | null
  childCareCosts: string
  employmentStatus: EMPLOYMENT_STATUSES_ENUM
  companyName: string
  personalIncome: string | null
}

const schema = object({
  firstName: string()
    .required('First name is required')
    .matches(
      userNameRegex,
      'First name can only include letters, apostrophes, hyphens and full stops and must be at least 2 characters long'
    ),
  lastName: string()
    .required('Last name is required')
    .matches(
      userNameRegex,
      'Last name can only include letters, apostrophes, hyphens and full stops and must be at least 2 characters long'
    ),
  gender: string().required(),
  birthDate: number()
    .required('Birth date is required')
    .min(18, 'You must be at least 18 years old')
    .max(100, 'You must be less than 100 years old'),
  mobilePhone: string()
    .required('Mobile Phone is required')
    .matches(mobilePhoneRegex, 'Mobile Phone must be like: 07111111111'),
  numberOfDependants: string()
    .nullable()
    .matches(numberOnlyRegex, 'Personal income must be a number'),
  childCareCosts: string().test(
    'conditional-required',
    'Child care costs are required when there are dependants',
    function (value) {
      const { numberOfDependants } = this.parent
      if (parseInt(numberOfDependants, 10) > 0) {
        if (!value) {
          return this.createError({
            message: 'Child care costs are required when there are dependants'
          })
        }
        if (parseInt(value, 10) > 1_000_000) {
          return this.createError({ message: 'Child care costs must be under 1,000,000' })
        }
      }
      return true
    }
  ),
  employmentStatus: string().required(),
  companyName: string().test('conditional-required', 'Company name is required', function (value) {
    const { employmentStatus } = this.parent
    if (
      employmentStatus === EMPLOYMENT_STATUSES_ENUM.FULL_TIME ||
      employmentStatus === EMPLOYMENT_STATUSES_ENUM.PART_TIME
    ) {
      return !!value
    }
    return true
  }),
  personalIncome: string()
    .required('Personal Income is required')
    .matches(numberOnlyRegex, 'Personal income must be a number')
    .test('min', 'Personal income must be over 1000', (value) => parseInt(value, 10) >= 1000)
    .test('max', 'Personal income must be under 1000000', (value) => parseInt(value, 10) <= 1000000)
})

const genders = [GENDER_ENUM.MR, GENDER_ENUM.MRS, GENDER_ENUM.MISS, GENDER_ENUM.MS]

const { values, errors, defineField, validate } = useForm<IForm>({
  validationSchema: schema,
  initialValues: {
    firstName: '',
    lastName: '',
    gender: genders[0],
    childCareCosts: '',
    employmentStatus: employmentStatuses[0],
    companyName: ''
  }
})

const [firstName, firstNameAttrs] = defineField('firstName')
const [lastName, lastNameAttrs] = defineField('lastName')
const [gender, genderAttrs] = defineField('gender')
const [birthDate, birthDateAttrs] = defineField('birthDate')
const [mobilePhone, mobilePhoneAttrs] = defineField('mobilePhone')
const [numberOfDependants, numberOfDependantsAttrs] = defineField('numberOfDependants')
const [employmentStatus, employmentStatusAttrs] = defineField('employmentStatus')
const [companyName, companyNameAttrs] = defineField('companyName')
const [personalIncome, personalIncomeAttrs] = defineField('personalIncome')
const [childCareCosts, childCareCostsAttrs] = defineField('childCareCosts')

const apply = async () => {
  await validate()

  if (!Object.keys(errors.value).length) {
    window.alert('Form submitted successfully!')
    console.log('values', values)
  } else {
    console.log('errors', errors.value)
  }
}

watchField(birthDate)
watchField(mobilePhone)
watchField(numberOfDependants)
watchField(personalIncome)
</script>

<template>
  <div class="wrapper">
    <form class="form" @submit.prevent="apply">
      <div class="form__field-wrapper">
        <span class="form__field-label">First name</span>
        <input
          v-model="firstName"
          v-bind="firstNameAttrs"
          class="form__field"
          name="firstName"
          type="text"
        />
        <div class="form__field-error" v-if="errors.firstName">{{ errors.firstName }}</div>
      </div>

      <div class="form__field-wrapper">
        <span class="form__field-label">Last name</span>
        <input
          v-model="lastName"
          v-bind="lastNameAttrs"
          class="form__field"
          name="lastName"
          type="text"
        />
        <div class="form__field-error" v-if="errors.lastName">{{ errors.lastName }}</div>
      </div>

      <div class="form__field-wrapper">
        <span class="form__field-label">Gender</span>
        <select v-model="gender" v-bind="genderAttrs" class="form__field" name="gender" type="text">
          <option v-for="gender in genders" :value="gender" :key="gender">{{ gender }}</option>
        </select>
        <div class="form__field-error" v-if="errors.gender">{{ errors.gender }}</div>
      </div>

      <div class="form__field-wrapper">
        <span class="form__field-label">Birth date</span>
        <input
          v-model="birthDate"
          v-bind="birthDateAttrs"
          class="form__field"
          name="birthDate"
          type="number"
        />
        <div class="form__field-error" v-if="errors.birthDate">{{ errors.birthDate }}</div>
      </div>

      <div class="form__field-wrapper">
        <span class="form__field-label">Mobile phone</span>
        <input
          v-model="mobilePhone"
          v-bind="mobilePhoneAttrs"
          class="form__field"
          name="mobilePhone"
          type="text"
        />
        <div class="form__field-error" v-if="errors.mobilePhone">{{ errors.mobilePhone }}</div>
      </div>

      <div class="form__field-wrapper">
        <span class="form__field-label">Number of dependants</span>
        <input
          v-model="numberOfDependants"
          v-bind="numberOfDependantsAttrs"
          class="form__field"
          name="numberOfDependants"
          type="text"
        />
        <div class="form__field-error" v-if="errors.numberOfDependants">
          {{ errors.numberOfDependants }}
        </div>
      </div>

      <div class="form__field-wrapper" v-if="Number(numberOfDependants) > 0">
        <span class="form__field-label">Child care cost</span>
        <input
          v-model="childCareCosts"
          v-bind="childCareCostsAttrs"
          class="form__field"
          name="childCareCosts"
          type="text"
        />
        <div class="form__field-error" v-if="errors.childCareCosts">
          {{ errors.childCareCosts }}
        </div>
      </div>

      <div class="form__field-wrapper">
        <span class="form__field-label">Employment status</span>
        <select
          v-model="employmentStatus"
          v-bind="employmentStatusAttrs"
          class="form__field"
          name="employmentStatus"
          type="text"
        >
          <option
            v-for="employmentStatus in employmentStatuses"
            :value="employmentStatus"
            :key="employmentStatus"
          >
            {{ employmentStatus }}
          </option>
        </select>
        <div class="form__field-error" v-if="errors.employmentStatus">
          {{ errors.employmentStatus }}
        </div>
      </div>

      <div
        class="form__field-wrapper"
        v-if="
          employmentStatus === EMPLOYMENT_STATUSES_ENUM.FULL_TIME ||
          employmentStatus === EMPLOYMENT_STATUSES_ENUM.PART_TIME
        "
      >
        <span class="form__field-label">Company name</span>
        <input
          v-model="companyName"
          v-bind="companyNameAttrs"
          class="form__field"
          name="companyName"
          type="text"
        />
        <div class="form__field-error" v-if="errors.companyName">
          {{ errors.companyName }}
        </div>
      </div>

      <div class="form__field-wrapper">
        <span class="form__field-label">Personal income</span>
        <input
          v-model="personalIncome"
          v-bind="personalIncomeAttrs"
          class="form__field"
          name="personalIncome"
          type="text"
        />
        <div class="form__field-error" v-if="errors.personalIncome">
          {{ errors.personalIncome }}
        </div>
      </div>

      <button class="form__button" type="submit">Apply</button>
    </form>
  </div>
</template>

<style scoped lang="scss">
.form {
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: flex-start;
  max-width: 300px;
  padding: 16px;
  background: #f3f3f3;
  border: 1px solid #d7d7d7;
  border-radius: 2px;

  &__field-wrapper {
    display: flex;
    flex-direction: column;
    gap: 8px;
    align-items: flex-start;
  }

  &__field-error {
    font-size: 12px;
    line-height: 14px;
    color: #d00101;
  }

  &__field {
    padding: 5px;
    color: #4a516a;
    border-radius: 4px;
  }

  &__button {
    align-self: center;
    padding: 8px 12px;
    color: #ffffff;
    background: #03bf03;
    border-radius: 2px;
  }
}

.wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
