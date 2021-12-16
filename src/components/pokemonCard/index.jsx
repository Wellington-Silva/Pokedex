import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Types } from '../Types';
import { PkmContext } from '../../context/pkmContext';

import './styles.css';

export const PokemonCard = ({ pokemonList }) => {

    const { setPokemonDetails } = useContext(PkmContext);

    return(
        <ul className="pokemonCard">
            {pokemonList !== undefined && pokemonList.map(pokemon => (
                <Link 
                    to="/pokemon/details" 
                    key={pokemon.id} 
                    onClick={() => setPokemonDetails(pokemon)} 
                >
                    <li>
                        <div className="image-container">
                            <img 
                                src={pokemon.sprites.front_default} 
                                alt={pokemon.name} 
                            />
                        </div>

                        <div className="content">
                            <p>#{pokemon.id.toString().padStart(3,0)}</p>
                            <h2>
                                {`${pokemon.name}`
                                .replace(pokemon.name[0], `${pokemon.name[0]}`
                                .toLocaleUpperCase())}
                            </h2>
                            
                            <Types pokemonTypes={pokemon.types}/>
                        </div>
                    </li>
                </Link>
            ))}
        </ul>
    );
}