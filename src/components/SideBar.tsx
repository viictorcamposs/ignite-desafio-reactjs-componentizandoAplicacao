import { Button } from './Button';

import '../styles/sidebar.scss';
import { GenreResponseProps } from './Content';

interface SideBarProps {
  genres: GenreResponseProps[],
  selectedGenreId: number;
  setSelectedGenreId: Function;
}

export function SideBar(props: SideBarProps) {
  function handleClickButton(id: number) {
    props.setSelectedGenreId(id);
  }

  return (
    <nav className="sidebar">
      <span>Watch<p>Me</p></span>

      <div className="buttons-container">
        {props.genres.map(genre => (
          <Button
            key={String(genre.id)}
            title={genre.title}
            iconName={genre.name}
            onClick={() => handleClickButton(genre.id)}
            selected={props.selectedGenreId === genre.id}
          />
        ))}
      </div>

    </nav>
  );
}