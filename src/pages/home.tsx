import { useParams } from 'react-router-dom';
import reactIcon from '../assets/react.svg';
import clsx from 'clsx';
import { HeaderLink } from '../components/header-link';

export const Home = () => {
  const { theme = 'theme1' } = useParams();

  return (
    <div
      className={clsx(
        'group flex min-h-screen',
        theme,
        theme === 'theme1' && 'flex-col'
      )}
    >
      <header className="bg-gray-600 px-4 py-2 flex gap-4 group-[.theme1]:items-center group-[.theme2]:basis-40 shrink-0">
        <div className="flex gap-4 group-[.theme2]:flex-col group-[.theme2]:w-full">
          <HeaderLink to="/home" className="header-link">
            No theme
          </HeaderLink>
          <HeaderLink to="/home/theme1" className="header-link">
            Theme 1
          </HeaderLink>
          <HeaderLink to="/home/theme2" className="header-link">
            Theme 2
          </HeaderLink>
        </div>
      </header>
      <main className="p-4">
        <div className="w-full p-4 bg-gray-300 rounded-xl">
          <img src={reactIcon} className="w-32 h-32" alt="react logo" />
          <h1>Some title</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eu
            leo luctus, congue elit non, sagittis massa. Aliquam convallis
            vulputate justo vitae finibus. Nulla molestie dictum purus vel
            blandit. Suspendisse id sapien ligula. Praesent ultricies viverra
            odio a lobortis. Donec posuere lacus vitae ex bibendum placerat.
            Cras consequat egestas sapien. Etiam vehicula nisi ut magna varius
            egestas.
          </p>
        </div>
      </main>
    </div>
  );
};
