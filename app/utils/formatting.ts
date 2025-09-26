

export const formatDate = (date: Date, length: "short" | "long" = "short") => {
  const { localeProperties: locale}  = useI18n();
  
  let localeCode = 'en-EN';
  switch(locale.value.code){
    case 'es':
      localeCode = 'es-CL';
      break;
    default:
    case 'en':
      localeCode = 'en-EN';
      break;

  }
  return new Intl.DateTimeFormat(localeCode, { dateStyle: length }).format(date);
};
