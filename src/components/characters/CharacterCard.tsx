import { SingleCharacter } from '@/interfaces';
import Image from 'next/image';

interface Props {
  character: SingleCharacter;
}

const CharacterCard = ({ character }: Props) => {
  return (
    <div className="max-w-xs mx-auto bg-white shadow-md rounded-lg overflow-hidden">
      <div className="relative w-full h-96">
        <Image
          src={character.image}
          alt="Character image"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="p-4">
        <h1 className="text-gray-900 font-bold text-xl mb-2">{character.name}</h1>
        <p className="text-gray-600 text-base">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed viverra arcu a turpis cursus, ut luctus neque fermentum.</p>
        <div className="mt-4">
          <a href="#" className="text-indigo-500 hover:text-indigo-600 font-semibold text-sm">Read More</a>
        </div>
      </div>
    </div>
  );
}

export default CharacterCard;
