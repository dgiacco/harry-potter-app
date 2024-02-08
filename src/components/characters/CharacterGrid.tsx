import { SingleCharacter } from "@/interfaces"
import CharacterCard from "./CharacterCard"

interface Props {
  characters: SingleCharacter[]
}

export const CharacterGrid = ({characters}: Props) => {
  return (
    <div className='flex flex-wrap gap-10 items-center justify-center'>

        {characters.map(character => {
          return (
            <CharacterCard character={character} key={character.id}/>
          )
        })}

      </div>
  )
}
