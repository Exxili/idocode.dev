export default function Header() {
  return (
    <div className="bg-gray-900 text-white w-full h-6 flex items-center px-4">
      <div className="flex">
        <svg
          className="h-5 w-5 fill-current text-white"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* This is a very simplified Apple logo for demonstration purposes only. */}
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14h2v2h-2v-2zm2.07-7.75l-.9.92C12.45 9.9 12 10.5 12 11v2h2v-.58c-.06-.1-.11-.21-.16-.31l-.5-.79C13.27 11.1 13 10.62 13 10c0-.55.45-1 1-1 .32 0 .62.16.82.41l.39.59c.11.16.26.31.44.45l.56.37c.19.13.42.28.7.45.32.19.67.44 1.03.75.36.31.71.67 1.08 1.08l.81.81C19.54 16.28 20 17.51 20 19c0 1.1-.9 2-2 2h-8c-1.1 0-2-.9-2-2 0-1.48.46-2.71 1.17-3.66l.81-.82c.37-.36.72-.72 1.08-1.08.35-.31.7-.56 1.02-.75.28-.17.51-.32.7-.45l.56-.37c.18-.14.33-.29.44-.45l.39-.59c.21-.26.52-.42.84-.42.32 0 .61.16.82.42z" />
        </svg>
      </div>
      <div className="flex-grow text-center">
        <p>Application Name</p>
      </div>
      <div className="flex">
        <p className="mr-4">Wi-Fi</p>
        <p className="mr-4">Battery</p>
        <p>12:34 PM</p>
      </div>
    </div>
  );
}
