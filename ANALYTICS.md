# Настройка Google Analytics и продуктовых метрик

## Шаг 1: Получение Google Analytics ID

1. Перейдите на [Google Analytics](https://analytics.google.com/)
2. Создайте новый аккаунт или выберите существующий
3. Создайте новое свойство (Property) для вашего сайта
4. Выберите платформу "Web"
5. Введите URL сайта и название
6. После создания свойства, перейдите в **Admin → Data Streams → Web**
7. Скопируйте **Measurement ID** (формат: `G-XXXXXXXXXX`)

## Шаг 2: Настройка переменных окружения

1. Создайте файл `.env.local` в корне проекта:
```bash
# Создайте файл .env.local в корне проекта
```

2. Добавьте ваш Google Analytics ID (ваш ID: `G-47S7M2240C`):
```
NEXT_PUBLIC_GA_ID=G-47S7M2240C
```

3. Перезапустите dev сервер:
```bash
npm run dev
```

**Важно:** Файл `.env.local` не должен попадать в git (уже добавлен в .gitignore)

## Шаг 3: Проверка работы

1. Откройте сайт в браузере
2. Откройте DevTools (F12) → Console
3. Должны увидеть загрузку gtag скрипта
4. В Google Analytics → Realtime → Events должны появляться события

## Отслеживаемые события

### Автоматически отслеживаются:
- **Просмотры страниц** - автоматически при навигации
- **Время на странице** - можно добавить через хук

### Продуктовые метрики:

#### 1. Музыкальные платформы
- `play_music` - клики по Spotify, Telegram, YouTube Music
- Категория: `music`
- Метка: название платформы + название трека (если есть)

#### 2. Тексты песен
- `view_lyrics` - открытие текста песни
- Категория: `content`
- Метка: название песни

#### 3. Контакты
- `contact` - клики по email или Telegram
- Категория: `engagement`
- Метка: `email` или `telegram`

#### 4. Внешние ссылки
- `click` - клики по внешним ссылкам
- Категория: `outbound`

## Использование в коде

### Базовое событие:
```typescript
import { trackEvent } from '@/lib/analytics'

trackEvent('action_name', 'category', 'label', value)
```

### Готовые функции:
```typescript
import { 
  trackMusicPlay, 
  trackLyricsView, 
  trackContact 
} from '@/lib/analytics'

// Отслеживание прослушивания
trackMusicPlay('spotify', 'Song Name')

// Отслеживание просмотра текста
trackLyricsView('Song Name')

// Отслеживание контакта
trackContact('email')
```

## Просмотр метрик в Google Analytics

1. **Realtime** - текущие события в реальном времени
2. **Events** - все события за период
3. **Engagement** - вовлеченность пользователей
4. **Acquisition** - источники трафика

## Дополнительные метрики (опционально)

Можно добавить отслеживание:
- Скролла страницы (через `trackScroll`)
- Времени на странице (через `trackTimeOnPage`)
- Поиска (через `trackSearch`)

Пример использования в компоненте:
```typescript
import { useEffect } from 'react'
import { trackTimeOnPage } from '@/lib/analytics'

useEffect(() => {
  const startTime = Date.now()
  return () => {
    const timeSpent = Math.floor((Date.now() - startTime) / 1000)
    trackTimeOnPage('lyrics', timeSpent)
  }
}, [])
```

## Полезные ссылки

- [Google Analytics 4 Documentation](https://developers.google.com/analytics/devguides/collection/ga4)
- [GA4 Event Tracking](https://developers.google.com/analytics/devguides/collection/ga4/events)
- [Next.js Analytics](https://nextjs.org/docs/app/building-your-application/optimizing/analytics)
