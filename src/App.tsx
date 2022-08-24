import "@fontsource/space-mono/400.css";
import "@fontsource/space-mono/700.css";
import iconCompany from "../src/assets/icon-company.svg";
import iconLocation from "../src/assets/icon-location.svg";
import moonIcon from "../src/assets/icon-moon.svg";
import iconTwitter from "../src/assets/icon-twitter.svg";
import iconWebsite from "../src/assets/icon-website.svg";
import { Dd } from "./components/Dd";
import { Dt } from "./components/Dt";

const DARK_MODE_CLASS = "dark";

function App() {
  const handleThemeChange = () => {
    const classList = document.documentElement.classList;
    classList.contains(DARK_MODE_CLASS)
      ? classList.remove(DARK_MODE_CLASS)
      : classList.add(DARK_MODE_CLASS);
  };

  return (
    <main className="dark font-mono min-h-full px-6 py-8 bg-light-F6F8FF dark:bg-dark-141D2F transition">
      <article className="grid grid-cols-2 gap-4">
        <p className="text-[1.625rem] leading-9 font-bold">devfinder</p>
        <button
          type="button"
          onClick={handleThemeChange}
          className="py-2.5 text-xs text-light-4B6A9B uppercase flex justify-center items-center gap-4 w-fit self-center justify-self-end"
        >
          Dark
          <img src={moonIcon} alt="" width={20} height={20} />
        </button>
        <form className="col-span-2 mt-2.5">
          <div className="bg-light-FEFEFE rounded-2xl w-full flex p-1.5 gap-1 shadow-default">
            <label htmlFor="search-user" className="sr-only">
              Search GitHub username
            </label>
            <input
              className="w-full bg-icon-search bg-no-repeat bg-left-center pl-11 text-xs leading-6"
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
        <section className="col-span-2 w-full bg-light-FEFEFE rounded-2xl px-8 py-6 shadow-default">
          <img
            className="rounded-full w-[4.375rem] h-[4.375rem] float-left mr-5"
            src="https://avatars.githubusercontent.com/u/5559337?v=4"
            alt=""
          />
          <h1 className="font-bold leading-6 text-light-2B3442">The Octacat</h1>
          <b className="text-xs font-normal text-light-0079FF leading-5">
            @octacat
          </b>
          <p className="text-xs font-normal text-light-697C9A mt-1.5">
            Joined <time dateTime="2011-01-25">25 Jan 2011</time>
          </p>
          <p className="mt-8 mb-6 text-xs font-normal leading-6 text-light-4B6A9B">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec
            odio. Quisque volutpat mattis eros.
          </p>
          <dl className="rounded-xl bg-light-F6F8FF grid grid-cols-3 grid-rows-2 place-items-center px-5 py-3.5">
            <Dt>Repos</Dt>
            <Dd>8</Dd>
            <Dt>Followers</Dt>
            <Dd>5133</Dd>
            <Dt>Following</Dt>
            <Dd>9</Dd>
          </dl>
          <dl className="grid grid-cols-footer items-center gap-x-3 gap-y-4 mt-6 auto-cols-min">
            <dt>
              <img src={iconLocation} alt="" width={20} height={20} />
              <span className="sr-only">Location</span>
            </dt>
            <dd className="font-normal text-xs text-light-4B6A9B">
              San Francisco
            </dd>
            <dt>
              <img src={iconWebsite} alt="" width={20} height={20} />
              <span className="sr-only">Website</span>
            </dt>
            <dd className="font-normal text-xs text-light-4B6A9B">
              https://github.blog
            </dd>
            <dt>
              <img src={iconTwitter} alt="" width={20} height={20} />
              <span className="sr-only">Twitter</span>
            </dt>
            <dd className="font-normal text-xs text-light-4B6A9B">Twitter</dd>
            <dt>
              <img src={iconCompany} alt="" width={20} height={20} />
              <span className="sr-only">Company</span>
            </dt>
            <dd className="font-normal text-xs text-light-4B6A9B">AE</dd>
          </dl>
        </section>
      </article>
    </main>
  );
}

export default App;
