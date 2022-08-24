import "@fontsource/space-mono/400.css";
import "@fontsource/space-mono/700.css";
import { useState } from "react";
import iconMoon from "../src/assets/icon-moon.svg";
import iconSun from "../src/assets/icon-sun.svg";
import { IconCompany } from "./components/icon/IconCompany";
import { IconLocation } from "./components/icon/IconLocation";
import { IconTwitter } from "./components/icon/IconTwitter";
import { IconWebsite } from "./components/icon/IconWebsite";
import { IconWrapper } from "./components/icon/IconWrapper";

const DARK_MODE_CLASS = "dark";

function App() {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const handleThemeChange = () => {
    const classList = document.documentElement.classList;

    classList.contains(DARK_MODE_CLASS)
      ? classList.remove(DARK_MODE_CLASS)
      : classList.add(DARK_MODE_CLASS);

    setIsDarkTheme(classList.contains(DARK_MODE_CLASS));
  };

  return (
    <main className="font-mono min-h-full px-6 py-8 bg-light-F6F8FF dark:bg-dark-141D2F">
      <article className="grid grid-cols-2 gap-4">
        <p className="text-[1.625rem] leading-9 font-bold text-light-222731 dark:text-white">
          devfinder
        </p>
        <button
          type="button"
          onClick={handleThemeChange}
          className="py-2.5 text-xs text-light-4B6A9B dark:text-white uppercase flex justify-center items-center gap-4 w-fit self-center justify-self-end"
        >
          {isDarkTheme ? "Light" : "Dark"}
          <img
            src={isDarkTheme ? iconSun : iconMoon}
            alt=""
            width={20}
            height={20}
          />
        </button>
        <form className="col-span-2 mt-2.5">
          <div className="bg-light-FEFEFE dark:bg-dark-1E2A47 rounded-2xl w-full flex p-1.5 gap-1 shadow-default">
            <label htmlFor="search-user" className="sr-only">
              Search GitHub username
            </label>
            <input
              className="bg-light-FEFEFE dark:bg-dark-1E2A47 placeholder:text-light-4B6A9B dark:placeholder:text-white w-full bg-icon-search bg-no-repeat bg-left-center pl-11 text-xs leading-6"
              id="search-user"
              type="text"
              placeholder="Search GitHub username…"
            />
            <button
              type="submit"
              className="bg-light-0079FF text-white rounded-xl px-4 py-3"
            >
              Search
            </button>
          </div>
        </form>
        <section className="col-span-2 w-full bg-light-FEFEFE dark:bg-dark-1E2A47 rounded-2xl px-8 pt-6 pb-12 shadow-default">
          <img
            className="rounded-full w-[4.375rem] h-[4.375rem] float-left mr-5"
            src="https://avatars.githubusercontent.com/u/5559337?v=4"
            alt=""
          />
          <h1 className="font-bold leading-6 text-light-2B3442 dark:text-white">
            The Octacat
          </h1>
          <b className="text-xs font-normal text-light-0079FF leading-5">
            @octacat
          </b>
          <p className="text-xs font-normal text-light-697C9A dark:text-white mt-1.5">
            Joined <time dateTime="2011-01-25">25 Jan 2011</time>
          </p>
          <p className="mt-8 mb-6 text-xs font-normal leading-6 text-light-4B6A9B dark:text-white">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec
            odio. Quisque volutpat mattis eros.
          </p>
          <dl className="rounded-xl bg-light-F6F8FF dark:bg-dark-141D2F grid grid-cols-3 grid-rows-2 place-items-center px-5 py-3.5">
            <dt className="text-xxs font-normal leading-4 text-light-4B6A9B dark:text-white row-start-1">
              Repos
            </dt>
            <dd className="font-bold leading-6 text-light-2B3442 dark:text-white row-start-2">
              8
            </dd>
            <dt className="text-xxs font-normal leading-4 text-light-4B6A9B dark:text-white row-start-1">
              Followers
            </dt>
            <dd className="font-bold leading-6 text-light-2B3442 dark:text-white row-start-2">
              5133
            </dd>
            <dt className="text-xxs font-normal leading-4 text-light-4B6A9B dark:text-white row-start-1">
              Following
            </dt>
            <dd className="font-bold leading-6 text-light-2B3442 dark:text-white row-start-2">
              9
            </dd>
          </dl>
          <dl className="grid grid-cols-footer items-center gap-x-3 gap-y-4 mt-6 auto-cols-min">
            <dt>
              <IconWrapper icon={IconLocation} isDarkTheme={isDarkTheme} />
              <span className="sr-only">Location</span>
            </dt>
            <dd className="font-normal text-xs text-light-4B6A9B dark:text-white">
              San Francisco
            </dd>
            <dt>
              <IconWrapper icon={IconWebsite} isDarkTheme={isDarkTheme} />
              <span className="sr-only">Website</span>
            </dt>
            <dd className="font-normal text-xs text-light-4B6A9B dark:text-white">
              https://github.blog
            </dd>
            <dt>
              <IconWrapper icon={IconTwitter} isDarkTheme={isDarkTheme} />
              <span className="sr-only">Twitter</span>
            </dt>
            <dd className="font-normal text-xs text-light-4B6A9B dark:text-white">
              Twitter
            </dd>
            <dt>
              <IconWrapper icon={IconCompany} isDarkTheme={isDarkTheme} />
              <span className="sr-only">Company</span>
            </dt>
            <dd className="font-normal text-xs text-light-4B6A9B dark:text-white">
              AE
            </dd>
          </dl>
        </section>
      </article>
    </main>
  );
}

export default App;
