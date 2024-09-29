// 樣式模組 (css module)
import S from './style.module.css'
// 函式庫 (library)
import { useForm } from 'react-hook-form'
// 組件 (component)
import FormField from '../../components/FormField'

// 首頁
function FormTest() {
  const { control, handleSubmit } = useForm()

  const onSubmit = (data) => {
    console.log('Form Submitted Successfully!', data)
  }
  return (
    <div className={S.container}>
      <form className={S.form} onSubmit={handleSubmit(onSubmit)} noValidate>
        <FormField
          name="name"
          control={control}
          rules={{
            minLength: { value: 3, message: 'Name must be at least 3 characters' }
          }}
        />
        <FormField
          className={S.email}
          name="email"
          control={control}
          type="email"
          rules={{
            pattern: { value: /^\S+@\S+\.\S+$/, message: 'Invalid email format' }
          }}
        />
        <FormField
          className={S.phone}
          name="phone"
          control={control}
          type="tel"
          rules={{
            pattern: { value: /^[0-9]{10}$/, message: 'Phone number must be 10 digits' }
          }}
        />
        <FormField
          name="message"
          control={control}
          isTextarea={true}
          placeholder="Write your question"
          rules={{
            maxLength: { value: 250, message: 'Message cannot exceed 250 characters' }
          }}
        />
        <FormField name="agree" control={control} type="checkbox" />
        <button>Submit</button>
      </form>
    </div>
  )
}

export default FormTest
