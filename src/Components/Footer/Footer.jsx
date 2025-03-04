import logo from "../../assets/logo-BfNap0Pe.png";

export default function Footer() {
  return (
    <footer className="bg-slate-100 rounded-lg shadow-sm dark:bg-gray-900 w-full">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="flex flex-wrap justify-between items-center">
          <div className="flex items-center gap-3">
            <img className="w-[150px]" src={logo} alt="Logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap text-gray-800 dark:text-white">
              Recipe
            </span>
          </div>

          <ul className="flex flex-wrap items-center gap-6 mt-4 sm:mt-0">
            <li>
              <a
                href="/"
                className="text-xl text-blue-600 hover:text-blue-800 transition-colors duration-300"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="/about"
                className="text-xl text-blue-600 hover:text-blue-800 transition-colors duration-300"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="/contact"
                className="text-xl text-blue-600 hover:text-blue-800 transition-colors duration-300"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>

        <hr className="my-6 border-gray-300 sm:mx-auto dark:border-gray-700 lg:my-8" />

        <div className="text-center">
          <span className="block text-sm text-gray-500 dark:text-gray-400">
            © 2023 <a href="https://yourwebsite.com" className="hover:underline">Your Website</a>. All Rights Reserved.
          </span>
        </div>
      </div>
    </footer>
  );
}
