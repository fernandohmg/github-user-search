import "@fontsource/space-mono/400.css";
import "@fontsource/space-mono/700.css";
import axios from "axios";
import { useState } from "react";
import { IconCompany } from "./components/icons/IconCompany";
import { IconLocation } from "./components/icons/IconLocation";
import { IconMoon } from "./components/icons/IconMoon";
import { IconSun } from "./components/icons/IconSun";
import { IconTwitter } from "./components/icons/IconTwitter";
import { IconWebsite } from "./components/icons/IconWebsite";
import { IconWrapper } from "./components/icons/IconWrapper";
import { convertDate } from "./utils/convertDate";
import { User } from "./utils/user";

const getThemeInitialState = () => {
  if (
    localStorage.theme === "dark" ||
    (!("theme" in localStorage) &&
      window.matchMedia("(prefers-color-scheme: dark)").matches)
  ) {
    document.documentElement.classList.add("dark");
    return true;
  } else {
    document.documentElement.classList.remove("dark");
    return false;
  }
};

function App() {
  const [isDarkTheme, setIsDarkTheme] = useState(getThemeInitialState);
  const [username, setUsername] = useState("");
  const [user, setUser] = useState<User>();
  const [error, setError] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const handleThemeChange = () => {
    const classList = document.documentElement.classList;
    isDarkTheme ? classList.remove("dark") : classList.add("dark");
    localStorage.setItem("theme", isDarkTheme ? "light" : "dark");
    setIsDarkTheme(!isDarkTheme);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (username) {
      setIsLoading(true);
      axios
        .get<User>(`https://api.github.com/users/${username.toLowerCase()}`)
        .then((response) => {
          setUser(response.data);
          setError(false);
        })
        .catch(() => {
          setError(true);
          setUser(undefined);
        })
        .finally(() => setIsLoading(false));
    }
  };

  return (
    <main className="font-mono min-h-full px-6 py-8 md:pt-[8.75rem] xl:pt-36 bg-light-F6F8FF dark:bg-dark-141D2F flex justify-center items-start">
      <article className="grid grid-cols-2 gap-4 md:gap-6 w-[40.5rem] xl:w-[45.625rem]">
        <p className="text-[1.625rem] leading-9 font-bold text-light-222731 dark:text-white">
          devfinder
        </p>
        <button
          type="button"
          onClick={handleThemeChange}
          className={`py-2.5 text-xs font-bold text-light-4B6A9B dark:text-white uppercase flex justify-center items-center gap-4 w-fit self-center justify-self-end  ${
            isDarkTheme
              ? "hover-hover:hover:text-dark-90A4D4"
              : "hover-hover:hover:text-light-222731"
          }`}
        >
          {isDarkTheme ? "Light" : "Dark"}
          {isDarkTheme ? (
            <IconSun fill="currentColor" />
          ) : (
            <IconMoon fill="currentColor" />
          )}
        </button>
        <form className="col-span-2 mt-2.5 md:mt-0" onSubmit={handleSubmit}>
          <div className="bg-light-FEFEFE dark:bg-dark-1E2A47 rounded-2xl w-full flex p-1.5 gap-1 shadow-default">
            <label htmlFor="search-user" className="sr-only">
              Search GitHub username
            </label>
            <input
              className="bg-light-FEFEFE dark:bg-dark-1E2A47 text-light-222731 dark:text-white placeholder:text-light-4B6A9B dark:placeholder:text-white w-full bg-icon-search bg-no-repeat bg-left-center pl-11 text-xs leading-6 lowercase"
              id="search-user"
              type="text"
              placeholder="username"
              onChange={(e) => setUsername(e.target.value.trim())}
            />
            <button
              type="submit"
              disabled={isLoading || !username}
              className={`bg-light-0079FF text-white rounded-xl px-4 py-3 disabled:bg-60ABFF enabled:hover-hover:hover:bg-60ABFF transition ${
                isLoading ? "cursor-wait" : "cursor-pointer"
              } ${!username ? "cursor-not-allowed" : "cursor-pointer"}`}
            >
              Search
            </button>
          </div>
        </form>
        {error && (
          <strong className="text-F74646 col-span-2 justify-self-center">
            No results
          </strong>
        )}
        {user && (
          <section className="col-span-2 w-full bg-light-FEFEFE dark:bg-dark-1E2A47 rounded-2xl px-8 pt-6 pb-12 shadow-default md:p-10 xl:p-12 xl:grid xl:grid-cols-desktop-main-grid xl:gap-x-9">
            <img
              className="rounded-full w-[4.375rem] h-[4.375rem] md:w-28 md:h-28 float-left mr-5 md:mr-10 xl:m-0 row-span-6"
              src={user.avatar_url}
              alt=""
            />
            <h1 className="font-bold leading-6 text-light-2B3442 dark:text-white md:text-2xl md:leading-10">
              {user.name}
            </h1>
            <b className="text-xs font-normal text-light-0079FF leading-5 md:text-base md:leading-6">
              {`@${user.login}`}
            </b>
            <p className="text-xs font-normal text-light-697C9A dark:text-white mt-1.5 mb-8 md:text-base md:leading-6">
              {`Joined `}
              <time dateTime={user.created_at}>
                {convertDate(user.created_at)}
              </time>
            </p>
            {user.bio && (
              <p className="text-xs font-normal leading-6 text-light-4B6A9B dark:text-white md:text-base">
                {user.bio}
              </p>
            )}
            <dl className="rounded-xl mt-6 md:mt-8 bg-light-F6F8FF dark:bg-dark-141D2F grid grid-cols-3 grid-rows-2 place-items-center px-5 py-3.5 md:px-8 md:py-4 md:justify-items-start">
              <dt className="text-xxs md:text-xs md:leading-5 font-normal leading-4 text-light-4B6A9B dark:text-white row-start-1">
                Repos
              </dt>
              <dd className="font-bold md:text-xl md:leading-8 leading-6 text-light-2B3442 dark:text-white row-start-2">
                {user.public_repos}
              </dd>
              <dt className="text-xxs md:text-xs md:leading-5 font-normal leading-4 text-light-4B6A9B dark:text-white row-start-1">
                Followers
              </dt>
              <dd className="font-bold md:text-xl md:leading-8 leading-6 text-light-2B3442 dark:text-white row-start-2">
                {user.followers}
              </dd>
              <dt className="text-xxs md:text-xs md:leading-5 font-normal leading-4 text-light-4B6A9B dark:text-white row-start-1">
                Following
              </dt>
              <dd className="font-bold md:text-xl md:leading-8 leading-6 text-light-2B3442 dark:text-white row-start-2">
                {user.following}
              </dd>
            </dl>
            <dl className="grid grid-cols-footer md:grid-cols-tablet-footer items-center gap-x-3 gap-y-4 mt-6 md:mt-8 auto-cols-min">
              <dt>
                <IconWrapper
                  icon={IconLocation}
                  isDarkTheme={isDarkTheme}
                  disable={!user.location}
                />
                <span className="sr-only">Location</span>
              </dt>
              <dd
                className={`font-normal text-xs md:text-base text-light-4B6A9B dark:text-white break-all ${
                  user.location ? "text-light-4B6A9B" : "text-A4B3CC"
                }`}
              >
                {user.location ? user.location : "Not Available"}
              </dd>
              <dt className="md:row-start-2">
                <IconWrapper
                  icon={IconWebsite}
                  isDarkTheme={isDarkTheme}
                  disable={!user.blog}
                />
                <span className="sr-only">Website</span>
              </dt>
              <dd
                className={`font-normal text-xs md:text-base text-light-4B6A9B dark:text-white md:row-start-2 break-all ${
                  user.blog ? "text-light-4B6A9B" : "text-A4B3CC"
                }`}
              >
                {user.blog ? (
                  <a
                    className="hover-hover:hover:underline"
                    href={user.blog}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {user.blog}
                  </a>
                ) : (
                  "Not Available"
                )}
              </dd>
              <dt>
                <IconWrapper
                  icon={IconTwitter}
                  isDarkTheme={isDarkTheme}
                  disable={!user.twitter_username}
                />
                <span className="sr-only">Twitter</span>
              </dt>
              <dd
                className={`font-normal text-xs md:text-base text-light-4B6A9B dark:text-white break-all ${
                  user.twitter_username ? "text-light-4B6A9B" : "text-A4B3CC"
                }`}
              >
                {user.twitter_username ? (
                  <a
                    className="hover-hover:hover:underline"
                    href={`https://twitter.com/${user.twitter_username}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {`@${user.twitter_username}`}
                  </a>
                ) : (
                  "Not Available"
                )}
              </dd>
              <dt>
                <IconWrapper
                  icon={IconCompany}
                  isDarkTheme={isDarkTheme}
                  disable={!user.company}
                />
                <span className="sr-only">Company</span>
              </dt>
              <dd
                className={`font-normal text-xs md:text-base text-light-4B6A9B dark:text-white break-all${
                  user.company ? "text-light-4B6A9B" : "text-A4B3CC"
                }`}
              >
                {user.company ? user.company : "Not Available"}
              </dd>
            </dl>
          </section>
        )}
      </article>
    </main>
  );
}

export default App;
