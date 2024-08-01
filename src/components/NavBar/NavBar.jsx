export function NavBar() {
  return (
    <>
      <div className="absolute flex z-10 h-20 w-screen items-center justify-center gap-5 px-2 sm:gap-10">
        <div>
          <h2 className="font-TacOne text-3xl font-bold tracking-widest sm:text-5xl">
            WEATHERIT
          </h2>
        </div>
        <div>
          <ul className="sm:text-md flex items-center justify-evenly gap-5 text-sm font-semibold">
            <li className="duration-300 hover:text-secondary">
              <a href="https://rapidapi.com/wirefreethought/api/geodb-cities">
                Geo API
              </a>
            </li>
            <li className="duration-300 hover:text-secondary">
              <a href="https://openweathermap.org/">Weather API</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
