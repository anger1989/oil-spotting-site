import { readdir, readFile } from 'fs/promises'
import { join } from 'path'
import LyricsList from '@/components/LyricsList'
import Navigation from '@/components/Navigation'

async function getLyrics() {
  const lyricsDir = join(process.cwd(), 'content', 'lyrics')
  
  try {
    const files = await readdir(lyricsDir)
    const txtFiles = files.filter(file => file.endsWith('.txt'))
    
    const lyrics = await Promise.all(
      txtFiles.map(async (file) => {
        const filePath = join(lyricsDir, file)
        const content = await readFile(filePath, 'utf-8')
        const name = file.replace('.txt', '').replace(/-/g, ' ')
        
        // Парсим ссылку на Spotify (формат: SPOTIFY: https://... в начале файла)
        let spotifyUrl: string | null = null
        let lyricsContent = content.trim()
        
        // Ищем ссылку Spotify в начале файла (может быть с пробелами или без)
        const spotifyMatch = content.match(/^SPOTIFY:\s*(https?:\/\/[^\s\n]+)/im)
        if (spotifyMatch) {
          spotifyUrl = spotifyMatch[1].trim()
          // Удаляем строку со ссылкой из контента (включая перенос строки после неё)
          lyricsContent = content.replace(/^SPOTIFY:\s*https?:\/\/[^\s\n]+\s*\n?/im, '').trim()
        }
        
        return {
          id: file.replace('.txt', ''),
          name: name.split(' ').map(word => 
            word.charAt(0).toUpperCase() + word.slice(1)
          ).join(' '),
          content: lyricsContent,
          spotifyUrl: spotifyUrl,
        }
      })
    )
    
    return lyrics.sort((a, b) => a.name.localeCompare(b.name))
  } catch (error) {
    console.error('Error reading lyrics:', error)
    return []
  }
}

export default async function LyricsPage() {
  const lyrics = await getLyrics()

  return (
    <main className="min-h-screen cosmic-bg">
      <div className="relative z-10">
        <Navigation />
        <div className="pt-24 pb-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white">
                Lyrics
              </h1>
              <p className="text-white/60 text-lg">
                Words from the cosmic void
              </p>
            </div>
            <LyricsList lyrics={lyrics} />
          </div>
        </div>
      </div>
    </main>
  )
}
