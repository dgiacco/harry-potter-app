import { CharacterGrid } from "@/components/characters/CharacterGrid"
import { SingleCharacter } from "@/interfaces"

const getCharacters = async():Promise<SingleCharacter[]> => {
  const data = await fetch('https://potterhead-api.vercel.app/api/characters')
  .then(response => response.json())
  
  return data
}

export default async function CharactersPage() {

  const characters = await getCharacters()

  return (
    <div className="flex flex-col justify-center p-4">
      <h1 className="text-4xl md:text-6xl font-bold mb-8 text-center">
        Characters
      </h1>
      <p className="text-lg mt-8 text-center">
        Explore the diverse characters within the wizarding world of Harry Potter.
      </p>
      <CharacterGrid characters={characters}/>
    </div>
  )
}
