// ✅ /lib/sendEmail.js

import emailjs from '@emailjs/browser';

export const sendEmail = async (formRef) => {
  try {
    const result = await emailjs.sendForm(
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
      formRef.current,
      process.env.NEXT_PUBLIC_EMAILJS_USER_ID
    );

    return { success: true, message: 'Message sent successfully.', result };
  } catch (error) {
    return { success: false, message: 'Something went wrong.', error };
  }
};