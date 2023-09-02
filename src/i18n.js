import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    debug: false,
    fallbackLng: 'uk',
    // interpolation: {
    //   escapeValue: false, // not needed for react as it escapes by default
    // },
    resources: {
      en: {
        translation: {
          Home: 'Home',
          Logout: 'Logout',
          Admin: 'Admin',
          Login: 'Login',
          Register: 'Register',
          Cart: 'Cart',
          Hello: 'Hello',
          Currency: 'UAH',
          Add_to_Cart: 'Add to Cart',
          Comments: 'Comments',
          Add_comment: 'Add comment',
          Leave_comment: 'Leave comment',
          Goods_in_cart: 'Your goods in cart',
          Order_is: 'Your order is',
          Make_order: 'Make order',
          Cart_empty: 'Your cart is empty',
          Name_enter: 'Enter your name',
          Phone_enter: 'Enter your phone',
          Email_enter: 'Enter your email',
          Order: 'Order',
          Please_Login: 'Please Login',
          Auth_password: 'Please enter your password',
          Less_than_16: 'must be less than 16 characters',
          Available_latin_based:
            'available latin-based alphabet, numeric character and _ . + -',
          Atleast_5: 'must be at least 5 characters',
          Email_length: 'email length must be less than 63 characters',
          Atleast_7: 'must be at least 7 characters',
          Password_length: 'password length must be less than 12 characters',
          Only_latinic: 'only latinic letters. whitespaces are forbidden',
          Please_Register: 'Please Register',
          John_Doe: 'John Doe',
          Name_required: 'Name is a required field',
          Email_required: 'Email is a required field',
          Phone_required: 'Phone is a required field',
          Password_required: 'Password is a required field',
          Less_30: 'must be less than 30 characters',
          Title_required: 'Title is a required field',
          Text_required: 'Text is required',
          Photo_required: 'Photo is required',
          Price_required: 'Price is a required field',
          Enter_Titile: 'Enter Titile',
          Enter_Text: 'Enter Text',
          Enter_description: 'Enter description',
          Enter_Price: 'Enter Price',
          Submit: 'Submit',
          Edit: 'Edit',
          Upload_file: 'Upload a file',
          Upload: 'Upload',
          Reset: 'Reset',
          Reply: 'Reply',
        },
      },
      uk: {
        translation: {
          Home: 'Додому',
          Logout: 'Вийти',
          Admin: 'Адмін',
          Login: 'Увійти',
          Register: 'Реєстрація',
          Cart: 'Кошик',
          Hello: 'Привіт',
          Currency: 'грн',
          Add_to_Cart: 'Додати в кошик',
          Comments: 'Відгуки',
          Add_comment: 'Додати відгук',
          Leave_comment: 'Залишити відгук',
          Goods_in_cart: 'Ваші товари у кошику',
          Order_is: 'Ваше замовлення',
          Make_order: 'Замовити',
          Cart_empty: 'Ваш кошик порожній',
          Name_enter: `Введіть Ваше ім'я`,
          Phone_enter: 'Введіть Ваш телефон',
          Email_enter: 'Введіть Ваш email',
          Order: 'Замовити',
          Please_Login: 'Будь ласка, увійдіть',
          Auth_password: 'Будь ласка, введіть пароль',
          Less_than_16: 'має бути не більше 16 символів',
          Available_latin_based: 'дозволено лише латиницю, цифри та _ . + -',
          Atleast_5: 'має бути хоча б 5 символів',
          Email_length: 'довжина email має бути менше 63 символів',
          Atleast_7: 'має бути хоча б 7 символів',
          Password_length: 'довжина пароля має бути не більше 12 символів',
          Only_latinic: 'Дозволено лише латиницю. пробіли не допускаються',
          Please_Register: 'Будь ласка, зареєструйтесь',
          John_Doe: 'Тарас Григорович',
          Name_required: `Ім'я обов'язкове поле`,
          Email_required: `Email обов'язкове поле`,
          Phone_required: `Телефон обов'язкове поле`,
          Password_required: `Пароль обов'язкове поле`,
          Less_30: 'має бути менше 30 символів',
          Title_required: `Заголовок обов'язкове поле`,
          Text_required: `Текст обов'язковий`,
          Photo_required: `Фото обов'язкове`,
          Price_required: `Ціна обов'язкове поле`,
          Enter_Titile: 'Введіть заголовок',
          Enter_Text: 'Введіть короткий опис',
          Enter_description: 'Введіть опис',
          Enter_Price: 'Введіть ціну',
          Submit: 'Ввести',
          Edit: 'Редагувати',
          Upload_file: 'Завантажити файл',
          Upload: 'Добре',
          Reset: 'Відміна',
          Reply: 'Відповісти',
        },
      },
    },
  });

export default i18n;
