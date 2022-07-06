import { Trans, useTranslation } from 'react-i18next'

const lngs = {
  en: { nativeName: 'English' },
  bn: { nativeName: 'Bengali' }
}

export default function I18Next() {
  const { t, i18n } = useTranslation()
  return (
    <>
      {Object.keys(lngs).map(lng => (
        <button
          key={lng}
          onClick={() => i18n.changeLanguage(lng)}
          disabled={i18n.resolvedLanguage === lng}
        >
          {lngs[lng].nativeName}
        </button>
      ))}
      <h1 style={{ textAlign: 'center' }}>
        <Trans i18nKey='welcome'>Welcome to react with i18next</Trans>
      </h1>
    </>
  )
}
