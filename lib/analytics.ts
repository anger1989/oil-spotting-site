// Утилиты для отправки событий в Google Analytics

export const GA_ID = process.env.NEXT_PUBLIC_GA_ID

// Отслеживание событий
export const trackEvent = (
  action: string,
  category: string,
  label?: string,
  value?: number
) => {
  if (typeof window !== 'undefined' && window.gtag && GA_ID) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    })
  }
}

// Отслеживание кликов по внешним ссылкам
export const trackOutboundLink = (url: string, label?: string) => {
  trackEvent('click', 'outbound', label || url)
  // Небольшая задержка для отправки события перед переходом
  setTimeout(() => {
    window.location.href = url
  }, 100)
}

// Отслеживание прослушивания музыки
export const trackMusicPlay = (platform: string, trackName?: string) => {
  trackEvent('play_music', 'music', `${platform}${trackName ? ` - ${trackName}` : ''}`)
}

// Отслеживание просмотра текстов песен
export const trackLyricsView = (songName: string) => {
  trackEvent('view_lyrics', 'content', songName)
}

// Отслеживание контактов
export const trackContact = (method: 'email' | 'telegram') => {
  trackEvent('contact', 'engagement', method)
}

// Отслеживание времени на странице
export const trackTimeOnPage = (page: string, seconds: number) => {
  trackEvent('time_on_page', 'engagement', page, seconds)
}

// Отслеживание скролла
export const trackScroll = (percentage: number, page: string) => {
  if (percentage === 25 || percentage === 50 || percentage === 75 || percentage === 100) {
    trackEvent('scroll', 'engagement', `${page} - ${percentage}%`)
  }
}

// Отслеживание поиска (если будет добавлен поиск)
export const trackSearch = (query: string, resultsCount?: number) => {
  trackEvent('search', 'engagement', query, resultsCount)
}
